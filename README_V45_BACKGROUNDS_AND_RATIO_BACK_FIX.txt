BubblePop v45 — gameplay backgrounds + ratio back fix

Based on v44:
- New in-game PNG backgrounds are kept and replace the old gameplay backgrounds.
- No audio/mp3 files added.

Extra fix:
- Verhoudingenhaven 'Terug' button now stops the ratio timer, hides the ratio game screen,
  and opens the new ratios roadmap via window.openGameRoadmap('ratios').
- openGameRoadmap is explicitly exposed on window so the ratio module can call it reliably.
- backToRatioRoad now also routes to the new roadmap when available.
- Ratio footer buttons are forced clickable above the playfield.
