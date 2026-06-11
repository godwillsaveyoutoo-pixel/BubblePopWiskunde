// v87 safe world locking: idempotent and observer-free to avoid load-time lockups.
(function(){
  const OPEN_TOPICS = new Set(['fractions','ratios']);
  let scheduled = false;

  function lockUnfinishedWorlds(){
    scheduled = false;
    document.querySelectorAll('.mapPin').forEach(btn => {
      const topic = btn.dataset.topic || '';
      const world = btn.dataset.world || '';
      const key = topic || world;
      const open = OPEN_TOPICS.has(topic) || world === 'breukenzee' || world === 'verhoudingenhaven';
      const locked = !open;

      if(btn.classList.contains('locked') !== locked) btn.classList.toggle('locked', locked);
      if(btn.disabled !== locked) btn.disabled = locked;
      const aria = open ? 'false' : 'true';
      if(btn.getAttribute('aria-disabled') !== aria) btn.setAttribute('aria-disabled', aria);

      if(!open){
        btn.title = 'Voorlopig geblokkeerd';
        const baseLabel = btn.dataset.baseAriaLabel || btn.getAttribute('aria-label') || key || 'Wereld';
        btn.dataset.baseAriaLabel = baseLabel.replace(/ — voorlopig geblokkeerd$/,'');
        const lockedLabel = btn.dataset.baseAriaLabel + ' — voorlopig geblokkeerd';
        if(btn.getAttribute('aria-label') !== lockedLabel) btn.setAttribute('aria-label', lockedLabel);
      }else if(btn.dataset.baseAriaLabel && btn.getAttribute('aria-label') !== btn.dataset.baseAriaLabel){
        btn.setAttribute('aria-label', btn.dataset.baseAriaLabel);
      }
    });
  }

  function scheduleLock(){
    if(scheduled) return;
    scheduled = true;
    setTimeout(lockUnfinishedWorlds, 0);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scheduleLock, {once:true});
  else scheduleLock();
  setTimeout(lockUnfinishedWorlds, 250);
  setTimeout(lockUnfinishedWorlds, 1000);
})();
