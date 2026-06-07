BubblePop v39 — atlaspositie override fix

Gefixt:
- Verhoudingenhaven had nog een oude CSS-regel met left/top !important.
- Daardoor werkte style="--x:...; --y:..." niet voor die ene pin.
- v39 forceert alle atlaspins om via --x en --y gepositioneerd te worden.
- Verhoudingenhaven gebruikt nu ook dezelfde positie-logica als alle andere werelden.
- Nieuwe localStorage-key V39 voorkomt verwarring met oude opgeslagen posities.

Test:
- open index.html?atlasDev=1
- Verhoudingenhaven moet nu versleepbaar zijn.
- In DevTools moet style="--x:22; --y:12;" nu zichtbaar effect hebben.

Geen audio/mp3-bestanden opgenomen.
