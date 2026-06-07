BubblePop v40 — ronde atlaspins gefixt

Probleem:
- De Breukenzee-hotspot viel breed uit.
- Er stonden nog meerdere oude .mapPin-regels in de CSS.
- Daardoor kon een oude percentagebreedte/aspect-ratio regel winnen van de nieuwe orb-stijl.

Fix:
- Een late, zeer specifieke CSS-override forceert alle atlaspins als echte ronde bollen.
- width, height, min/max-width en min/max-height worden allemaal gelijk gezet.
- Breukenzee krijgt expliciet dezelfde ronde pin-regel als alle andere werelden.
- Oude iconen blijven verborgen.
- Posities blijven via --x en --y werken.
- Nieuwe localStorage-key V40.

Geen audio/mp3-bestanden opgenomen.
