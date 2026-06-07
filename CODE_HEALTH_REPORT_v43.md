# BubblePop v43 code-health audit

## Resultaat
De code is functioneel, maar niet volledig mooi geoptimaliseerd. Er is door de vele iteraties duidelijk historiek blijven hangen. In v43 heb ik de veiligste rommel opgeruimd zonder de gameplay-flow te herschrijven.

## Checks
- JavaScript syntaxcheck: OK
- Inline scripts: 4
- Duplicate HTML id's: 0
- Audio/mp3-bestanden: 0
- index.html grootte: 618.8 KB
- style blocks met id: 5
- .mapPin CSS rules na cleanup: 136
- oude mapPin-conflicten na cleanup: 0
- I18N: keys {'nl': 505, 'en': 505, 'fr': 505, 'tl': 505}, missing na normalizer {'en': 0, 'fr': 0, 'tl': 0}

## Opgeschoond in v43
- Oude atlas-patch style blocks samengevoegd in één finale `atlas-final-clean-v43`.
- Oude conflicterende `.mapPin`-regels verwijderd:
  - oude percentagebreedtes
  - oude absolute left/top-posities
  - oude Breukenzee-width override
  - oude Verhoudingenhaven-left/top override
- Atlaspins gebruiken nu consequent `--x` en `--y`.
- Atlaspins worden consequent rond geforceerd.
- I18N-normalizer toegevoegd zodat ontbrekende keys niet als ruwe sleutel in de UI verschijnen.

## Wat nog niet ideaal is
- `index.html` is nog te groot en bevat CSS, JS en content samen.
- De oude ratio-roadmap-code zit nog deels in het bestand als fallback.
- De nieuwe roadmapmodule staat wel extern, maar de hoofdgame zelf is nog monolithisch.
- Sommige FR/TG vertalingen zijn nog fallback/half Engels voor technische of dev-teksten.
- Er zijn nog veel oude CSS-regels rond `.mapPin`, maar de gevaarlijkste conflicten zijn verwijderd.

## Beste volgende refactorstap
Splits de game op in modules:
- `index.html`
- `css/base.css`
- `css/atlas.css`
- `css/game.css`
- `css/ratio.css`
- `js/i18n.js`
- `js/atlas.js`
- `js/roadmap-bridge.js`
- `js/game-core.js`
- `js/ratio-game.js`

Dat is de echte structurele optimalisatie.
