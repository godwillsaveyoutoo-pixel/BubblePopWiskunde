BubblePop v34 — atlas drag hotfix

Gefixt:
- Verhoudingenhaven-hotspot kon in dev mode niet goed versleept worden.
- De oude topic/ratio-clickhandler kon het slepen onderbreken.
- Atlas dev-drag krijgt nu absolute voorrang via capture + stopImmediatePropagation.
- Oude click/start-flow wordt genegeerd zolang een hotspot gesleept wordt.

Gebruik:
- index.html?atlasDev=1
- of index.html?debug=1&dev=1
- sleep hotspots; Shift slepen werkt ook.
