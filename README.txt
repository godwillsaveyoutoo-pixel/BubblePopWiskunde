BubblePop v23.2 — Account & Badge Polish

Wijzigingen:
- Number Bay / Getallenbaai gebruikt nu een mooier 🔢-badge in plaats van #.
- Equation Valley / Vergelijkingenvallei gebruikt nu een ⚖️-badge in plaats van een puzzelstuk.
- Start- en ranglijstpopups zijn iets transparanter en blijven afgerond op 10px.
- De startpopup vraagt geen naam meer per spel.
- De ranglijst toont geen naamveld of opslaan-knop meer wanneer je ze gewoon opent.
- Nieuwe lokale dummy-login op het startscherm:
  account: gast
  wachtwoord: gast
- Na login wordt de speler automatisch gekoppeld aan ranglijstresultaten.
- Perfecte sessies worden automatisch lokaal opgeslagen in de ranglijst.

Let op:
- Dit is nog geen echte online login/backend.
- De dummy-login is bewust lokaal gehouden zodat het spel nu al professioneel getest kan worden.


Version v23.3 — Map UI Polish
- Account label moved to the left side of the world map so it no longer overlaps language choices.
- Added leaderboard trophy button on the world map.
- Hidden the fullscreen button; fullscreen is now available with double-tap/double-click on the game window background.
- Number Bay badge changed to a cleaner crystal-style symbol.
- Equation Valley now uses a scale symbol.
- Start briefing popup made more transparent.
- Login event handling cleaned up so listeners are not duplicated when changing language.

---

v23.4 Final Map & UI Polish
- Definitieve wereldbadges: Getallenbaai = 🧮, Vormeneiland = 🔷, Vergelijkingenvallei = ⚖️.
- Wereldkaart rustiger gemaakt: subtielere selectie, kleinere naamlabels en minder storende locked werelden.
- Accountchip en ranglijstknop compacter geïntegreerd linksboven.
- Startpopup en ranglijst visueel gelijkgetrokken met minimalistische vensters van 10px afronding.
- Fullscreen blijft via dubbelklik/double tap op de achtergrond, niet op knoppen of popups.


---

v24 Progression Core
- Brons/Zilver/Goud-progression aangescherpt:
  Brons = 10 vragen, niveau 1–5.
  Zilver = 20 vragen, niveau 1–8.
  Goud = 30 vragen, niveau 1–9.
- Elke wereld toont op de kaart nu duidelijk de volgende uitdaging onder de wereldnaam.
- Beloningsbadges tonen naast het wereldicoon ook B/Z/G, zodat het verschil tussen brons, zilver en goud duidelijker is.
- Niet-perfecte sessies geven geen volgende tier vrij; dezelfde uitdaging blijft actief.
- Perfecte sessies slaan beste score/tijd per tier lokaal op.
- Ranglijst sorteert nu professioneler: Goud boven Zilver boven Brons, daarna score, daarna tijd.
- Ranglijst toont per resultaat ook het wereldicoon.
- Als alle eerste 6 werelden goud hebben, worden de volgende 6 werelden visueel vrijgezet als toekomstige werelden.


v24.1 — Tier Aura System
- B/Z/G removed from world badges.
- Selected world now shows a bronze/silver/gold aura based on the current tier challenge.
- Tier is shown more professionally with color chips on the map and in the session popup.

v25 — Question QA & Difficulty Tuning
- Added hidden debug mode: open index.html?debug=1.
- Debug mode shows topic, round, level, tier, question type and correct answers.
- Correct bubbles get a green outline in debug mode; wrong bubbles get a subtle dashed outline.
- Added a small round-data validation warning in debug mode if a generated round has no correct answer.
- Difficulty now follows the active tier more clearly:
  Bronze: calmer rounds, fewer correct targets.
  Silver: more variety and normal challenge.
  Gold: more bubbles and higher density at upper levels.

v25.1 — Maker QA + Auto Next
- After a question is fully answered correctly, the next question opens automatically.
- For rounds with multiple correct bubbles, auto-next happens only after all correct bubbles are found.
- Added maker panel with ?debug=1&dev=1:
  - choose world
  - choose Bronze/Silver/Gold
  - start test session
  - force next question
  - test 100 rounds per world
  - reset local progress/leaderboard


v25.2 — Playtest & Timing QA
- Auto-next timing changed from 0.76s to 1.10s for a calmer math rhythm.
- Maker QA panel now reports per-world results, correct-answer ranges and warnings.
- Added an extra Shape Island health check for generated shape tasks.
- Slightly clarified a few shape drawings and delayed the harder inclusive quadrilateral categories in Shape Island.


v25.3 — Full QA Report
- Added "Test alles" in maker mode: 6 worlds × Bronze/Silver/Gold × 100 generated rounds.
- QA report now groups results by world and tier.
- Report shows bubble range and correct-answer range per test group.
- Added "Kopieer rapport" for sharing/debugging the QA output.
- Selected-tier "Test 100" still works for a faster single-tier check.

v25.4 — Clear QA Report + Generator Guard
- QA report is now written in clearer language.
- The report explains what is tested.
- Rows now say what the problem means, e.g. “generator made 0 correct answers”.
- Added a generator guard: if a raw generated round has no correct answer or too few bubbles, the game repairs it where possible before showing it to the learner.
- Full QA report now distinguishes between raw generator output and the guarded/playable round.

v25.6 — Fraction Generator Fix
- Fixed QA report display so newlines render as real lines instead of visible \n text.
- Breukenzee/Fractions comparison pool is now richer.
- Greater/smaller fraction questions now avoid extreme targets without enough correct options.
- Raw fraction generator now fills remaining answer slots from a safe comparison pool before the external guard is needed.

v26 — Procentenhaven
- Procentenhaven is now playable as a new world.
- New topic: percentages, fractions, decimals, percent of a number, discounts, and percent change.
- Added translations for NL/EN/FR/TG.
- Added Percentage Harbor to the maker QA panel and full QA report.
- Added world badge 🏷️ and themed map/progress styling.

v27.0 — Curriculum Tags
- Each generated task now receives a curriculum domain and skill tag.
- Debug mode shows the curriculum tag for the current question.
- Maker QA report now summarizes curriculum coverage: domains and skills tested.
- Current tracked domains: getallenleer, verhoudingen/procenten, algebra/vergelijkingen, coördinaten, vlakke meetkunde.

v27.1 — Getallenleer+
- Getallenbaai expanded with divisibility, square numbers, absolute value, gcd and lcm.
- Added curriculum skills:
  - divisibility by 2,3,4,5,9,10
  - squares/powers
  - absolute value/opposite numbers
  - gcd/lcm
- Added translations for NL/EN/FR/TG.
- Maker QA and curriculum report now include these new skills.

v27.2 — Procentenhaven+
- Procentenhaven expanded with ratios, ratio tables, scale, reverse discount, and percentage-from-part/whole.
- Added curriculum skills:
  - ratio to percent
  - ratio tables
  - scale calculations
  - reverse discount/original price
  - percentage from part and whole
- Added translations for NL/EN/FR/TG.
- Maker QA and curriculum report now include the new skills.

v27.3 — Algebra+
- Vergelijkingenvallei expanded beyond solving equations.
- Added substitution, simplifying like terms, expanding brackets, pattern rules, formulas, and table-to-formula tasks.
- Added curriculum skills:
  - algebraic substitution
  - simplifying expressions
  - distributive property
  - pattern rules
  - formula use
  - table/formula connection
- Added translations for NL/EN/FR/TG.

v27.4 — Coördinaten+
- Coördinatenbaai expanded with quadrants, reflection in axes, translations, points on simple lines, midpoint, and table-to-point tasks.
- Added curriculum skills:
  - quadrants
  - reflection in x/y-axis
  - translation on a grid
  - points on simple lines
  - midpoint of line segments
  - table-to-point interpretation
- Added translations for NL/EN/FR/TG.

v27.5 — Vormeneiland+
- Vormeneiland expanded with angles, symmetry, parallel/perpendicular properties, transformations, congruence, similarity, and light perimeter/area preparation.
- Added shape text-choice tasks for reflection, rotation, translation, congruence, similarity, perimeter and area.
- Added curriculum skills:
  - angles
  - parallel/perpendicular
  - symmetry
  - reflection
  - rotation
  - translation
  - congruence
  - similarity
  - perimeter/area preparation
- Added translations for NL/EN/FR/TG.

v27.6 — Curriculum Coverage Matrix
- Maker QA report now includes a curriculum matrix.
- Each target domain shows expected skills, present skills, missing skills and estimated coverage percentage.
- Domains tracked:
  - Getallenleer
  - Verhoudingen/procenten
  - Vergelijkingen/algebra
  - Coördinaten
  - Vlakke meetkunde
- This is a generator coverage score, not a learner mastery score.

v27.7 — Curriculum Deck Balancer
- Normal sessions now build a balanced skill deck per world and tier.
- Each round tries to generate the planned curriculum skill for that slot.
- Debug mode shows the planned skill and the actual curriculum tag.
- Maker/dev sessions also use the deck balancer.
- Mixed mode keeps its separate topic deck.

v27.8 — Professional UX Polish
- Replaced fake password login with a cleaner local player-name flow.
- Players can start with any name or as guest; no fake password required.
- Login copy now explains that progress/leaderboard are local to the device/browser.
- Leaderboard copy is clearer about local-only scores.
- Popups are visually more consistent with 10px radius.
- Debug/dev panel is hidden more explicitly in normal student mode.
- Account chip now lets the player rename instead of immediately clearing the local profile.

v27.9 — Breukenzee Learning Path UI
- Added a visual learning path prototype for Breukenzee.
- Uses the Breukenzee artwork as a map layer with an SVG route and interactive stop nodes.
- Stops: harbor/start, recognize fractions, equivalent fractions, compare fractions, order fractions, mixed practice, mastery.
- Node states reflect existing Brons/Zilver/Goud topic progress.
- The session briefing for Breukenzee now shows the learning path and “Start leerstap”.
- Other topics keep the normal session briefing for now.

v27.9.1 — Background Learning Path
- Moved the Breukenzee learning path out of the popup map and onto the actual background during the briefing state.
- The phone background now switches to the Breukenzee map while the briefing is open.
- The route nodes are interactive directly on the background.
- The session card becomes a compact bottom card with only summary text and actions.

v27.9.2 — Popup-Free Learning Path UI
- Breukenzee briefing no longer uses the large bottom popup.
- The learning path lives directly on the background.
- Added compact top information bar and bottom action bar.
- Node clicks update the top/bottom info without opening a popup.
- Start leerstap and Terug are available in the bottom action bar.

v27.9.3 — Node-First Topic Flow
- Breukenzee now behaves like the world map:
  - first click on a path node selects it and shows info
  - second click on the same unlocked/completed/current node starts the learning step
- Locked nodes show info but do not start.
- The explicit Start button is hidden in Breukenzee's path screen; play starts from the node interaction.
- The selected node receives a clearer visual focus ring.

v27.9.4 — Pure Map Learning Path
- Removed visible top and bottom overlay bars during the Breukenzee learning path screen.
- The screen now shows only the background map, path route and nodes.
- Clicking a node selects it and shows a tiny attached label near the node.
- Clicking the same unlocked/current/completed node again starts the learning step.
- Locked nodes show a tiny "locked" label and do not start.

v27.9.5 — Island-aligned route
- Adjusted the Breukenzee route to overlap the islands more naturally.
- Repositioned the stop nodes so they sit on the intended islands.
- Added a subtle floating back button on the path screen.

v27.9.6 — Path Editor
- Open with: index.html?pathEdit=1
- In Breukenzee learning-path screen, drag the stop nodes manually.
- The route line automatically redraws through the moved nodes.
- Coordinates are saved in localStorage for preview.
- Use Kopieer to copy the current coordinates, or Reset to restore the built-in positions.
- Normal student mode remains unchanged.

v27.9.7 — Breukenzee Default Path
- The manually edited Breukenzee path coordinates are now set as the built-in default.
- These positions are used in normal mode without ?pathEdit=1.
- Path editor remains available for further manual adjustments.

v27.10 — Generic Topic Path Engine
- The Breukenzee learning-path engine is generalized for all active topics:
  - Breukenzee / fractions
  - Ongelijkhedenstorm / inequalities
  - Coördinatenbaai / coordinates
  - Getallenbaai / number theory
  - Vormeneiland / shapes
  - Vergelijkingenvallei / equations
  - Procentenhaven / percentages
- Each active topic now has its own learning path nodes, linked to existing curriculum skills.
- Path editor now works per active topic with ?pathEdit=1.
- Node coordinates are saved per topic in localStorage and can be copied/reset.
- QA report now logs approximate question-variant coverage per learning-path node.
- Some backgrounds are placeholders where dedicated topic-map artwork is not yet available.

v27.10.1 — Path Copy Fix
- Fixed the path editor copy button returning [].
- Copy now resolves the currently visible path topic robustly.
- If no active topic can be resolved, it falls back to Breukenzee; if still empty, it copies all topic paths.

v27.10.2 — Ineq + Coord Default Paths
- Manually adjusted path coordinates are now built-in defaults for:
  - Ongelijkhedenstorm
  - Coördinatenbaai
- Path editor remains available with ?pathEdit=1 for further tuning.

v27.11 — Procentenhaven + Leerpad QA
- Procentenhaven gebruikt nu de aangeleverde havenillustratie als achtergrond in het spel en in het leerpad.
- De leerpad-labels zijn korter gemaakt: leerling ziet nu vooral stapnaam + actie, niet meer lange technische repertoiretekst.
- Leerpadnodes en labels zijn groter/duidelijker gezet voor leerlinggebruik.
- Extra overlay-guards toegevoegd zodat leerpadlagen verdwijnen wanneer menu, login, ranglijst, resultaat, devsessie of gewone speelronde opent.
- Procentenhaven kreeg een eigen visueel pad over de haven met stappen voor procenten, korting, verhoudingen, schaal en meesterschap.
- Dev-mode kreeg twee nieuwe knoppen:
  - Lijst vragen: toont representatieve vraagtypes voor de gekozen wereld en tier.
  - Alle topics: toont representatieve vraagtypes voor alle actieve werelden.
- Bestaande maker-QA blijft beschikbaar via ?debug=1&dev=1 met Test 100, Test alles en Kopieer rapport.

Controle:
- JavaScript-syntax gecontroleerd met node --check.
- Browser-playtest blijft aanbevolen, vooral voor leerpad-overgangen en de nieuwe dev-knoppen.

v27.12 — Leerpad Overlay Fix + Korte Labels
- Het leerpad wordt niet meer automatisch zichtbaar bij het openen of verversen van het menu.
- Taalwissels/render-updates activeren het leerpad niet langer onbedoeld.
- De leerpad-overlay verschijnt alleen nog in de echte leerpad-/briefingmodus.
- Labels bij leerpadnodes zijn vereenvoudigd tot korte leerlingtaal, meestal één of twee woorden.
- Het label bij een geselecteerde node toont nu enkel de stapnaam, zonder extra technische tekst.
- Procentenhaven gebruikt de aparte aangeleverde leerpadachtergrond.

Controle:
- JavaScript-syntax opnieuw gecontroleerd met node --check op het geëxtraheerde script.
