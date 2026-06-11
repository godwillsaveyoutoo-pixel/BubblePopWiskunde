Bubbelbaai / BubblePopWiskunde v85 — code cleanup

Gebruik:
- Open index.html in een browser.
- Breukenzee en Verhoudingenhaven zijn actief.
- Andere werelden zijn voorlopig locked.

Opschoning v85:
- Oude debug/extractie-bestanden en tientallen oude README-patches verwijderd uit de root.
- Lege style-blocks verwijderd.
- Externe mp3-audio standaard uitgeschakeld zodat er geen 404-fouten verschijnen zonder audio-assets.
- WebAudio fallback-effecten blijven werken.
- JavaScript-syntax gecontroleerd.
- Asset-referenties gecontroleerd; ontbrekende audio-referenties worden niet meer geladen zolang EXTERNAL_AUDIO_ENABLED=false.

Geen mp3/audio-bestanden meegeleverd.
