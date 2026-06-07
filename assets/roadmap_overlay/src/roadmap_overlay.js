/* Roadmap Overlay System v3
   - image background + interactive node layer
   - dev mode with draggable nodes AND editable route waypoints

   Expected HTML:
   <div id="roadmapStage" class="rm-stage"></div>
   Then call: createRoadmapOverlay(document.getElementById('roadmapStage'), config)

   Config supports:
   {
     worldKey, title, assetRoot, bgUrl, selectedId,
     nodes: [{ id, index, label, x, y, state }],
     path: [
       { type:'node', nodeId:'n1' },
       { type:'waypoint', id:'wp-a', x:46.2, y:74.0 },
       { type:'node', nodeId:'n2' }
     ]
   }
*/
(function () {
  const DEFAULT_ASSET_ROOT = './assets';
  const SVG_NS = 'http://www.w3.org/2000/svg';

  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }
  function round1(v) { return Math.round(Number(v) * 10) / 10; }
  function uid(prefix) { return `${prefix}-${Math.random().toString(36).slice(2, 8)}`; }

  function assetForState(assetRoot, state) {
    const map = {
      locked: 'node_locked.png',
      open: 'node_open.png',
      selected: 'node_selected.png',
      done: 'node_done.png',
      master: 'node_master.png'
    };
    return `${assetRoot}/nodes/${map[state] || map.open}`;
  }

  function toStagePoint(stage, ev) {
    const rect = stage.getBoundingClientRect();
    return {
      x: round1(clamp(((ev.clientX - rect.left) / rect.width) * 100, 1, 99)),
      y: round1(clamp(((ev.clientY - rect.top) / rect.height) * 100, 1, 99))
    };
  }

  function normalizeNodes(nodes) {
    return (nodes || []).map((n, i) => ({ index: i + 1, state: 'open', ...n }));
  }

  function normalizePath(path, nodes) {
    if (Array.isArray(path) && path.length >= 2) {
      return path.map((p, i) => {
        if (p.type === 'node') return { type: 'node', nodeId: p.nodeId, id: p.id || `anchor-${p.nodeId || i}` };
        return { type: 'waypoint', id: p.id || uid('wp'), x: round1(p.x), y: round1(p.y) };
      });
    }
    return nodes.map(n => ({ type: 'node', nodeId: n.id, id: `anchor-${n.id}` }));
  }

  function exportPath(path) {
    return path.map(p => {
      if (p.type === 'node') return { type: 'node', nodeId: p.nodeId };
      return { type: 'waypoint', id: p.id, x: round1(p.x), y: round1(p.y) };
    });
  }

  function resolvePathPoint(item, nodes) {
    if (!item) return null;
    if (item.type === 'node') {
      const n = nodes.find(node => node.id === item.nodeId);
      return n ? { x: Number(n.x), y: Number(n.y), type: 'node', nodeId: n.id } : null;
    }
    return { x: Number(item.x), y: Number(item.y), type: 'waypoint', id: item.id };
  }

  function resolvedPath(path, nodes) {
    return path.map(item => resolvePathPoint(item, nodes)).filter(Boolean);
  }

  // Catmull-Rom to cubic Bezier. Smoothly passes through all points.
  function buildSmoothPathFromPoints(points) {
    if (!points || points.length === 0) return '';
    if (points.length === 1) return `M ${points[0].x} ${points[0].y}`;
    if (points.length === 2) return `M ${points[0].x} ${points[0].y} L ${points[1].x} ${points[1].y}`;

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i - 1] || points[i];
      const p1 = points[i];
      const p2 = points[i + 1];
      const p3 = points[i + 2] || p2;
      const cp1x = p1.x + (p2.x - p0.x) / 6;
      const cp1y = p1.y + (p2.y - p0.y) / 6;
      const cp2x = p2.x - (p3.x - p1.x) / 6;
      const cp2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C ${round1(cp1x)} ${round1(cp1y)}, ${round1(cp2x)} ${round1(cp2y)}, ${p2.x} ${p2.y}`;
    }
    return d;
  }

  function distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function distancePointToSegment(p, a, b) {
    const vx = b.x - a.x;
    const vy = b.y - a.y;
    const wx = p.x - a.x;
    const wy = p.y - a.y;
    const len2 = vx * vx + vy * vy;
    if (len2 === 0) return distance(p, a);
    const t = clamp((wx * vx + wy * vy) / len2, 0, 1);
    const proj = { x: a.x + t * vx, y: a.y + t * vy };
    return distance(p, proj);
  }

  function insertionIndexForPoint(path, nodes, p) {
    const pts = resolvedPath(path, nodes);
    if (pts.length < 2) return path.length;
    let bestIndex = 1;
    let bestDist = Infinity;
    for (let i = 0; i < pts.length - 1; i++) {
      const d = distancePointToSegment(p, pts[i], pts[i + 1]);
      if (d < bestDist) {
        bestDist = d;
        bestIndex = i + 1;
      }
    }
    return bestIndex;
  }

  function pathProgressPercent(path, nodes, selectedId) {
    const pts = resolvedPath(path, nodes);
    if (pts.length < 2) return 0;
    let total = 0;
    const lengths = [0];
    for (let i = 1; i < pts.length; i++) {
      total += distance(pts[i - 1], pts[i]);
      lengths[i] = total;
    }
    if (total <= 0) return 0;

    let selectedPathIndex = path.findIndex(item => item.type === 'node' && item.nodeId === selectedId);
    if (selectedPathIndex < 0) {
      const lastDone = [...nodes].reverse().find(n => n.state === 'done');
      selectedPathIndex = lastDone ? path.findIndex(item => item.type === 'node' && item.nodeId === lastDone.id) : 0;
    }
    selectedPathIndex = clamp(selectedPathIndex, 0, pts.length - 1);
    return clamp((lengths[selectedPathIndex] / total) * 100, 0, 100);
  }

  function createRoadmapOverlay(stage, config) {
    if (!stage) throw new Error('Roadmap stage element not found');

    const state = {
      worldKey: config.worldKey || 'world',
      title: config.title || '',
      assetRoot: config.assetRoot || DEFAULT_ASSET_ROOT,
      bgUrl: config.bgUrl || '',
      nodes: normalizeNodes(config.nodes || []),
      path: [],
      selectedId: config.selectedId || null,
      devMode: false,
      devPanelOpen: false,
      onStart: typeof config.onStart === 'function' ? config.onStart : null,
      onBack: typeof config.onBack === 'function' ? config.onBack : null,
    };
    state.path = normalizePath(config.path || config.pathPoints, state.nodes);

    if (!state.selectedId) {
      const firstOpen = state.nodes.find(n => n.state === 'selected' || n.state === 'open' || n.state === 'done');
      state.selectedId = firstOpen ? firstOpen.id : null;
    }

    function currentPathD() {
      return buildSmoothPathFromPoints(resolvedPath(state.path, state.nodes));
    }

    function render() {
      stage.classList.add('rm-stage');
      stage.innerHTML = '';

      if (state.bgUrl) {
        const img = document.createElement('img');
        img.className = 'rm-bg';
        img.src = state.bgUrl;
        img.alt = state.title || state.worldKey;
        stage.appendChild(img);
      }

      const svg = document.createElementNS(SVG_NS, 'svg');
      svg.classList.add('rm-path-svg');
      svg.setAttribute('viewBox', '0 0 100 100');
      svg.setAttribute('preserveAspectRatio', 'none');
      const d = currentPathD();
      ['base', 'progress', 'pulse'].forEach(kind => {
        const p = document.createElementNS(SVG_NS, 'path');
        p.setAttribute('d', d);
        p.setAttribute('pathLength', '100');
        p.classList.add(`rm-path-${kind}`);
        if (kind === 'progress') {
          const progress = pathProgressPercent(state.path, state.nodes, state.selectedId);
          p.style.strokeDasharray = `${progress} 100`;
        }
        svg.appendChild(p);
      });
      stage.appendChild(svg);

      const routeDevLayer = document.createElement('div');
      routeDevLayer.className = 'rm-route-dev-layer';
      stage.appendChild(routeDevLayer);

      const layer = document.createElement('div');
      layer.className = 'rm-nodes-layer';
      stage.appendChild(layer);

      state.nodes.forEach((node, idx) => {
        const selected = node.id === state.selectedId;
        const visualState = selected && node.state !== 'locked' ? 'selected' : (node.state || 'open');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `rm-node rm-node--${visualState}`;
        btn.style.setProperty('--x', node.x);
        btn.style.setProperty('--y', node.y);
        btn.dataset.nodeId = node.id;
        btn.dataset.index = idx;
        btn.setAttribute('aria-label', node.label || `Level ${idx + 1}`);
        btn.setAttribute('aria-disabled', node.state === 'locked' ? 'true' : 'false');

        const nodeImg = document.createElement('img');
        nodeImg.className = 'rm-node__img';
        nodeImg.src = assetForState(state.assetRoot, visualState);
        nodeImg.alt = '';
        btn.appendChild(nodeImg);

        const num = document.createElement('span');
        num.className = 'rm-node__num';
        num.textContent = node.index || idx + 1;
        btn.appendChild(num);

        if (selected && node.state !== 'locked') {
          const label = document.createElement('span');
          label.className = 'rm-node-label';
          label.textContent = node.label || `Level ${idx + 1}`;
          btn.appendChild(label);
        }

        btn.addEventListener('click', () => {
          if (state.devMode) return;
          if (node.state === 'locked') return;
          if (state.selectedId === node.id) {
            startNode(node);
          } else {
            state.selectedId = node.id;
            render();
          }
        });

        layer.appendChild(btn);
      });

      const topbar = document.createElement('div');
      topbar.className = 'rm-topbar';
      topbar.innerHTML = `
        <button class="rm-btn rm-back-btn" type="button" aria-label="Terug">←</button>
        <button class="rm-btn rm-dev-btn" type="button" aria-label="Dev mode">DEV</button>`;
      stage.appendChild(topbar);
      topbar.querySelector('.rm-back-btn').addEventListener('click', () => {
        if (state.onBack) state.onBack(state);
        else window.dispatchEvent(new CustomEvent('roadmap:back', { detail: { worldKey: state.worldKey } }));
      });
      topbar.querySelector('.rm-dev-btn').addEventListener('click', toggleDevMode);

      const devTools = document.createElement('div');
      devTools.className = 'rm-dev-tools';
      devTools.innerHTML = `
        <button class="rm-dev-tool" type="button" data-action="copy">Kopieer JSON</button>
        <button class="rm-dev-tool" type="button" data-action="togglePanel">Toon JSON</button>
        <button class="rm-dev-tool" type="button" data-action="add">Waypoint +</button>
        <button class="rm-dev-tool" type="button" data-action="reset">Pad reset</button>
        <span class="rm-dev-hint">Sleep nodes en routepunten. Dubbelklik = punt erbij. Alt/rechtsklik = verwijderen. Shift+J = JSON.</span>`;
      stage.appendChild(devTools);

      const panel = document.createElement('pre');
      panel.className = 'rm-dev-panel';
      stage.appendChild(panel);

      devTools.querySelector('[data-action="copy"]').addEventListener('click', copyDevJson);
      devTools.querySelector('[data-action="togglePanel"]').addEventListener('click', toggleDevPanel);
      devTools.querySelector('[data-action="add"]').addEventListener('click', addWaypointBetweenSelectedAndNext);
      devTools.querySelector('[data-action="reset"]').addEventListener('click', resetPathToNodes);

      if (state.devMode) enableDevMode();
    }

    function startNode(node) {
      const detail = { worldKey: state.worldKey, node };
      if (state.onStart) state.onStart(detail);
      window.dispatchEvent(new CustomEvent('roadmap:startNode', { detail }));
    }

    function toggleDevMode() {
      state.devMode = !state.devMode;
      if (!state.devMode) state.devPanelOpen = false;
      render();
    }

    function exportConfig() {
      return {
        worldKey: state.worldKey,
        title: state.title,
        selectedId: state.selectedId,
        nodes: state.nodes.map(n => ({
          id: n.id,
          index: n.index,
          label: n.label,
          x: round1(n.x),
          y: round1(n.y),
          state: n.state || 'open'
        })),
        path: exportPath(state.path)
      };
    }

    function refreshDevPanel() {
      const panel = stage.querySelector('.rm-dev-panel');
      if (!panel) return;
      panel.textContent = JSON.stringify(exportConfig(), null, 2);
      panel.classList.toggle('is-visible', state.devMode && state.devPanelOpen);

      const devBtn = stage.querySelector('.rm-dev-btn');
      if (devBtn) devBtn.classList.toggle('is-active', state.devMode);

      const tools = stage.querySelector('.rm-dev-tools');
      if (tools) tools.classList.toggle('is-visible', state.devMode);

      const toggleBtn = stage.querySelector('[data-action="togglePanel"]');
      if (toggleBtn) {
        toggleBtn.textContent = state.devPanelOpen ? 'Verberg JSON' : 'Toon JSON';
        toggleBtn.classList.toggle('is-active', state.devPanelOpen);
      }
    }

    function toggleDevPanel() {
      if (!state.devMode) return;
      state.devPanelOpen = !state.devPanelOpen;
      refreshDevPanel();
    }

    function refreshPathOnly(options = {}) {
      const { rerenderHandles = true } = options;
      const svg = stage.querySelector('.rm-path-svg');
      if (!svg) return;
      const d = currentPathD();
      svg.querySelectorAll('path').forEach(p => {
        p.setAttribute('d', d);
        if (p.classList.contains('rm-path-progress')) {
          const progress = pathProgressPercent(state.path, state.nodes, state.selectedId);
          p.style.strokeDasharray = `${progress} 100`;
        }
      });
      if (rerenderHandles) renderRouteDevHandles();
    }

    function renderRouteDevHandles() {
      const routeLayer = stage.querySelector('.rm-route-dev-layer');
      if (!routeLayer) return;
      routeLayer.innerHTML = '';
      if (!state.devMode) return;

      state.path.forEach((item, index) => {
        const pos = resolvePathPoint(item, state.nodes);
        if (!pos) return;
        const handle = document.createElement('button');
        handle.type = 'button';
        handle.className = item.type === 'node' ? 'rm-route-point rm-route-point--anchor' : 'rm-route-point rm-route-point--waypoint';
        handle.style.setProperty('--x', pos.x);
        handle.style.setProperty('--y', pos.y);
        handle.dataset.pathIndex = index;
        handle.title = item.type === 'node' ? `Anker: ${item.nodeId}` : 'Waypoint: sleep, Alt/rechtsklik verwijdert';

        if (item.type === 'waypoint') {
          enableWaypointDrag(handle, item, index);
        } else {
          handle.disabled = true;
        }
        routeLayer.appendChild(handle);
      });
    }

    function enableWaypointDrag(handle, item) {
      let dragging = false;
      let grabOffset = { x: 0, y: 0 };

      handle.addEventListener('contextmenu', ev => {
        ev.preventDefault();
        deleteWaypoint(item.id);
      });

      handle.addEventListener('click', ev => {
        if (ev.altKey) {
          ev.preventDefault();
          deleteWaypoint(item.id);
        }
      });

      handle.addEventListener('pointerdown', ev => {
        if (ev.button === 2 || ev.altKey) return;
        ev.preventDefault();
        ev.stopPropagation();

        const p = toStagePoint(stage, ev);
        grabOffset = {
          x: round1(p.x - Number(item.x)),
          y: round1(p.y - Number(item.y))
        };

        dragging = true;
        handle.classList.add('is-dragging');
        handle.setPointerCapture(ev.pointerId);
      });

      handle.addEventListener('pointermove', ev => {
        if (!dragging) return;
        ev.preventDefault();

        const p = toStagePoint(stage, ev);
        const x = round1(clamp(p.x - grabOffset.x, 1, 99));
        const y = round1(clamp(p.y - grabOffset.y, 1, 99));

        item.x = x;
        item.y = y;
        handle.style.setProperty('--x', x);
        handle.style.setProperty('--y', y);

        // During drag: only redraw the SVG path.
        // Do NOT recreate waypoint handles, otherwise pointer capture gets lost and the handle jumps.
        refreshPathOnly({ rerenderHandles: false });
        refreshDevPanel();
      });

      const endDrag = ev => {
        if (!dragging) return;
        dragging = false;
        handle.classList.remove('is-dragging');
        try { handle.releasePointerCapture(ev.pointerId); } catch (_) {}
        refreshPathOnly({ rerenderHandles: true });
        refreshDevPanel();
      };

      handle.addEventListener('pointerup', endDrag);
      handle.addEventListener('pointercancel', endDrag);
    }

    function deleteWaypoint(id) {
      const idx = state.path.findIndex(p => p.type === 'waypoint' && p.id === id);
      if (idx < 0) return;
      state.path.splice(idx, 1);
      refreshPathOnly();
      refreshDevPanel();
    }

    function addWaypointAt(point) {
      const insertAt = insertionIndexForPoint(state.path, state.nodes, point);
      state.path.splice(insertAt, 0, { type: 'waypoint', id: uid('wp'), x: point.x, y: point.y });
      refreshPathOnly();
      refreshDevPanel();
    }

    function addWaypointBetweenSelectedAndNext() {
      let selectedIdx = state.path.findIndex(p => p.type === 'node' && p.nodeId === state.selectedId);
      if (selectedIdx < 0) selectedIdx = 0;
      let nextIdx = -1;
      for (let i = selectedIdx + 1; i < state.path.length; i++) {
        if (state.path[i].type === 'node') { nextIdx = i; break; }
      }
      if (nextIdx < 0) nextIdx = Math.min(selectedIdx + 1, state.path.length - 1);
      const a = resolvePathPoint(state.path[selectedIdx], state.nodes) || { x: 50, y: 80 };
      const b = resolvePathPoint(state.path[nextIdx], state.nodes) || { x: 50, y: 20 };
      const p = { x: round1((a.x + b.x) / 2), y: round1((a.y + b.y) / 2) };
      const insertAt = Math.max(selectedIdx + 1, nextIdx);
      state.path.splice(insertAt, 0, { type: 'waypoint', id: uid('wp'), x: p.x, y: p.y });
      refreshPathOnly();
      refreshDevPanel();
    }

    function resetPathToNodes() {
      state.path = state.nodes.map(n => ({ type: 'node', nodeId: n.id, id: `anchor-${n.id}` }));
      refreshPathOnly();
      refreshDevPanel();
    }

    async function copyDevJson() {
      const txt = JSON.stringify(exportConfig(), null, 2);
      try {
        await navigator.clipboard.writeText(txt);
        const btn = stage.querySelector('[data-action="copy"]');
        if (btn) {
          const old = btn.textContent;
          btn.textContent = 'Gekopieerd ✓';
          setTimeout(() => { btn.textContent = old; }, 1200);
        }
      } catch (_) {
        state.devPanelOpen = true;
        refreshDevPanel();
      }
    }

    function enableNodeDrag() {
      stage.querySelectorAll('.rm-node').forEach(nodeEl => {
        nodeEl.classList.add('is-dev');
        let dragging = false;
        let grabOffset = { x: 0, y: 0 };

        nodeEl.addEventListener('pointerdown', ev => {
          ev.preventDefault();
          dragging = true;
          ev.stopPropagation();

          const index = Number(nodeEl.dataset.index);
          const node = state.nodes[index];
          const p = toStagePoint(stage, ev);
          grabOffset = {
            x: round1(p.x - Number(node.x)),
            y: round1(p.y - Number(node.y))
          };

          nodeEl.classList.add('is-dragging');
          nodeEl.setPointerCapture(ev.pointerId);
        });

        nodeEl.addEventListener('pointermove', ev => {
          if (!dragging) return;
          ev.preventDefault();

          const p = toStagePoint(stage, ev);
          const index = Number(nodeEl.dataset.index);
          const x = round1(clamp(p.x - grabOffset.x, 1, 99));
          const y = round1(clamp(p.y - grabOffset.y, 1, 99));

          state.nodes[index].x = x;
          state.nodes[index].y = y;
          nodeEl.style.setProperty('--x', x);
          nodeEl.style.setProperty('--y', y);

          refreshPathOnly({ rerenderHandles: false });
          refreshDevPanel();
        });

        const endDrag = ev => {
          if (!dragging) return;
          dragging = false;
          nodeEl.classList.remove('is-dragging');
          try { nodeEl.releasePointerCapture(ev.pointerId); } catch (_) {}
          refreshPathOnly({ rerenderHandles: true });
          refreshDevPanel();
        };

        nodeEl.addEventListener('pointerup', endDrag);
        nodeEl.addEventListener('pointercancel', endDrag);
      });
    }

    function enableDevMode() {
      enableNodeDrag();
      renderRouteDevHandles();
      refreshDevPanel();

      const svg = stage.querySelector('.rm-path-svg');
      if (svg) svg.classList.add('is-dev');

      stage.ondblclick = ev => {
        if (!state.devMode) return;
        if (ev.target.closest('.rm-node') || ev.target.closest('.rm-dev-tools') || ev.target.closest('.rm-dev-panel')) return;
        ev.preventDefault();
        addWaypointAt(toStagePoint(stage, ev));
      };
    }

    document.addEventListener('keydown', ev => {
      const key = ev.key.toLowerCase();
      if (ev.shiftKey && key === 'd') {
        state.devMode = !state.devMode;
        if (!state.devMode) state.devPanelOpen = false;
        render();
      }
      if (ev.shiftKey && key === 'j') {
        toggleDevPanel();
      }
    });

    if (new URLSearchParams(location.search).get('roadDev') === '1') {
      state.devMode = true;
    }

    render();

    return {
      render,
      getState: () => JSON.parse(JSON.stringify(state)),
      exportConfig,
      exportSlots: exportConfig,
      setNodes(nodes) { state.nodes = normalizeNodes(nodes); render(); },
      setPath(path) { state.path = normalizePath(path, state.nodes); render(); },
      select(id) { state.selectedId = id; render(); },
      setNodeState(id, nodeState) { const n = state.nodes.find(x => x.id === id); if (n) n.state = nodeState; render(); },
      toggleDevMode,
      toggleDevPanel,
      addWaypointAt,
      resetPathToNodes,
    };
  }

  window.createRoadmapOverlay = createRoadmapOverlay;
})();
