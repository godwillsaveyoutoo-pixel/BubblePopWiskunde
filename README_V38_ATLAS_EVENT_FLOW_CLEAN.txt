BubblePop v38 — atlas event-flow echt gestroomlijnd

Probleem:
- Verhoudingenhaven kon niet versleept worden omdat oude en nieuwe pointerhandlers door elkaar liepen.

Oplossing:
- Oude .topicBtn pointer-flow uit de atlas verwijderd.
- Oude per-pin atlas handlers uit setLanguage verwijderd.
- Eén centrale pointer-manager op #topicGrid behandelt nu alle hotspots.
- Alle hotspots, inclusief Verhoudingenhaven, gebruiken exact dezelfde drag-code.
- Nieuwe localStorage-key V38.

Gebruik:
index.html?atlasDev=1

Daarna kan je elke bol rechtstreeks slepen, ook Verhoudingenhaven.
Geen audio/mp3-bestanden opgenomen.
