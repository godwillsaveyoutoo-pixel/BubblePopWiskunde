// BubblePopWiskunde ratio-integrated.js; extracted from index.html.
// // Extracted script block 2; original line 16354; attrs: id="ratio-integrated-js"

(() => {
const COLORS = ['blue','green','teal'];
const COLOR_LABELS = {blue:'Blauw', green:'Groen', teal:'Turquoise'};
const COLOR_SHORT = {blue:'B', green:'G', teal:'T'};

const LEVELS = [
  {
    title:'Level 1', mechanic:'Basisvangst', hint:'Gewone bubbles verdwijnen · ↔ wisselt kleur',
    rounds:[
      {ratio:[1,1], min:1, note:'Haal één teveel weg.', bubbles:[B('n'),B('n'),G('n')]},
      {ratio:[1,1], min:1, note:'Wissel één vis van kleur.', bubbles:[B('n'),B('s')]},
      {ratio:[2,3], min:1, note:'Eén slimme wissel maakt 2 : 3.', bubbles:[B('n'),B('n'),B('s'),G('n'),G('n')]},
      {ratio:[2,3], min:1, note:'De ↔ is hier een afleider.', bubbles:[B('n'),B('n'),B('n'),G('n'),G('n'),G('s')]},
      {ratio:[3,4], min:2, note:'Wissel én verwijder.', bubbles:[B('n'),B('n'),B('n'),B('n'),B('s'),G('n'),G('n'),G('n')]},
      {ratio:[4,5], min:2, note:'Zelfde truc, grotere vangst.', bubbles:[B('n'),B('n'),B('n'),B('n'),B('n'),B('s'),G('n'),G('n'),G('n'),G('n')]},
      {ratio:[5,4], min:2, note:'Nu in de andere richting.', bubbles:[B('n'),B('n'),B('n'),B('n'),G('n'),G('n'),G('n'),G('n'),G('n'),G('s')]},
      {ratio:[1,2], min:1, note:'Soms is gewoon verwijderen genoeg.', bubbles:[B('n'),B('n'),B('s'),G('n'),G('n'),G('n'),G('n')]},
      {ratio:[2,1], min:2, note:'Kies tussen wegdoen en wisselen.', bubbles:[B('n'),B('n'),G('n'),G('n'),G('s')]},
      {ratio:[1,2], min:3, note:'Eindproef: niet-obvious route.', bubbles:[G('s'),B('s'),G('n'),B('s'),G('s')]}
    ]
  },
  {
    title:'Level 2', mechanic:'Splitbubble', hint:'De dubbele rand splitst in twee gewone bubbles',
    rounds:[
      {ratio:[2,1], min:1, note:'Tik split: één wordt twee.', bubbles:[B('x'),G('n')]},
      {ratio:[1,2], min:1, note:'Split de juiste kleur.', bubbles:[B('n'),G('x')]},
      {ratio:[2,3], min:1, note:'Split maakt de verhouding af.', bubbles:[B('n'),B('n'),G('n'),G('x')]},
      {ratio:[2,3], min:1, note:'Split is hier een afleider.', bubbles:[B('n'),B('n'),B('n'),G('n'),G('n'),G('x')]},
      {ratio:[3,4], min:2, note:'Split én verwijder.', bubbles:[B('n'),B('n'),B('n'),B('n'),G('n'),G('n'),G('x')]},
      {ratio:[4,5], min:2, note:'Groter, maar nog helder.', bubbles:[B('n'),B('n'),B('n'),B('n'),B('n'),G('n'),G('n'),G('n'),G('x')]},
      {ratio:[3,2], min:1, note:'Split niet gebruiken.', bubbles:[B('n'),B('n'),B('x'),G('n'),G('n'),G('n')]},
      {ratio:[4,3], min:1, note:'Split is nu de sleutel.', bubbles:[B('n'),B('n'),B('x'),G('n'),G('n'),G('n')]},
      {ratio:[2,3], min:2, note:'Combineer ↔ met split.', bubbles:[B('n'),B('n'),B('s'),G('x')]},
      {ratio:[3,2], min:2, note:'De spiegelpuzzel.', bubbles:[G('n'),G('n'),G('s'),B('x')]}
    ]
  },
  {
    title:'Level 3', mechanic:'Slimme combinaties', hint:'Combineer verwijderen, ↔ en splitten',
    rounds:[
      {ratio:[2,3], min:2, note:'Warm op: ↔ + split.', bubbles:[B('n'),B('n'),B('s'),G('x')]},
      {ratio:[3,2], min:2, note:'Omgekeerd: split + ↔.', bubbles:[G('n'),G('n'),G('s'),B('x')]},
      {ratio:[4,5], min:2, note:'Split en wissel precies.', bubbles:[B('n'),B('n'),B('n'),B('n'),B('s'),G('n'),G('n'),G('x')]},
      {ratio:[5,4], min:2, note:'Zelfde structuur, andere kant.', bubbles:[G('n'),G('n'),G('n'),G('n'),G('s'),B('n'),B('n'),B('x')]},
      {ratio:[2,1], min:3, note:'Split is een valstrik én sleutel.', bubbles:[B('s'),G('x'),G('x'),B('x')]},
      {ratio:[1,2], min:3, note:'Spiegel van de vorige.', bubbles:[G('s'),B('x'),B('x'),G('x')]},
      {ratio:[3,4], min:3, note:'Drie acties: verwijder, wissel, split.', bubbles:[B('n'),B('n'),B('n'),B('n'),B('s'),G('n'),G('x')]},
      {ratio:[4,3], min:3, note:'Spiegelpuzzel met drie acties.', bubbles:[B('n'),G('n'),G('n'),G('n'),G('n'),G('s'),B('x')]},
      {ratio:[3,2], min:3, note:'Niet zomaar op alles speciaal klikken.', bubbles:[G('s'),B('s'),B('s'),B('n'),G('x'),G('x'),B('x')]},
      {ratio:[2,3], min:3, note:'Echte combinatieronde.', bubbles:[B('s'),G('s'),G('s'),G('n'),B('x'),B('x'),G('x')]}
    ]
  },
  {
    title:'Level 4', mechanic:'Minbubble', hint:'De rode aura verwijdert twee vissen van dezelfde kleur',
    rounds:[
      {ratio:[2,3], min:1, note:'Rode aura haalt twee blauwe weg.', bubbles:[B('m'),B('n'),B('n'),B('n'),G('n'),G('n'),G('n')]},
      {ratio:[3,2], min:1, note:'Rode aura haalt twee groene weg.', bubbles:[G('m'),G('n'),G('n'),G('n'),B('n'),B('n'),B('n')]},
      {ratio:[2,3], min:2, note:'Rode aura en daarna ↔.', bubbles:[B('m'),B('n'),B('n'),B('n'),B('s'),G('n'),G('n')]},
      {ratio:[3,4], min:2, note:'Rode aura combineren met split.', bubbles:[B('m'),B('n'),B('n'),B('n'),B('n'),G('n'),G('n'),G('x')]},
      {ratio:[2,3], min:1, note:'Rode aura is hier een afleider.', bubbles:[B('n'),B('n'),B('n'),G('n'),G('n'),G('m')]},
      {ratio:[2,3], min:2, note:'Veel specials, simpele slimme route.', bubbles:[B('s'),B('s'),G('x'),G('s'),B('m'),G('m')]},
      {ratio:[3,2], min:2, note:'Spiegelronde met afleiders.', bubbles:[G('s'),G('s'),B('x'),B('s'),G('m'),B('m')]},
      {ratio:[2,1], min:3, note:'Laat je niet lokken door rood.', bubbles:[G('n'),G('x'),B('m'),B('s'),B('m')]},
      {ratio:[1,2], min:3, note:'Split kan slimmer zijn dan rood.', bubbles:[B('x'),G('n'),G('s'),G('n'),G('m'),B('x'),B('x')]},
      {ratio:[5,3], min:3, note:'Level 4-eindproef.', bubbles:[G('x'),B('n'),B('s'),G('x'),G('x'),B('n'),G('x'),B('m'),B('n')]}
    ]
  },
  {
    title:'Level 5', mechanic:'Groeibubble', hint:'De groene/gouden gloed verdubbelt het aantal van die kleur, max 10',
    rounds:[
      {ratio:[2,3], min:1, note:'Laat blauw groeien.', bubbles:[B('g'),G('n'),G('n'),G('n')]},
      {ratio:[3,2], min:1, note:'Laat groen groeien.', bubbles:[B('n'),B('n'),B('n'),G('g')]},
      {ratio:[4,5], min:3, note:'Groei, maar corrigeer slim.', bubbles:[G('n'),G('n'),B('g'),G('g'),B('m'),G('s'),B('x'),B('n')]},
      {ratio:[5,3], min:2, note:'Grow + verwijder.', bubbles:[B('n'),B('x'),G('n'),G('m'),G('s'),B('g')]},
      {ratio:[3,5], min:2, note:'Spiegel: groen laten groeien.', bubbles:[G('s'),B('x'),G('n'),G('g'),B('n'),B('m')]},
      {ratio:[5,4], min:2, note:'Groei met afleiders.', bubbles:[G('s'),G('n'),B('g'),G('x'),B('m'),G('n'),B('n')]},
      {ratio:[5,3], min:3, note:'Eerst kleiner, dan groter.', bubbles:[G('m'),B('s'),B('g'),G('x'),B('g'),B('n'),G('n')]},
      {ratio:[5,3], min:3, note:'Grow + remove + swap.', bubbles:[G('s'),G('m'),G('g'),G('x'),B('n'),B('g'),B('n')]},
      {ratio:[4,5], min:3, note:'Slimme groeiroute.', bubbles:[B('n'),G('s'),B('x'),B('x'),G('g'),G('n'),G('n'),B('m')]},
      {ratio:[5,4], min:3, note:'Grote eindpuzzel.', bubbles:[B('g'),G('n'),B('s'),B('n'),G('m'),G('m'),G('x'),B('g')]}
    ]
  },
  {
    title:'Level 6', mechanic:'Drie kleuren: zelfde noemer', hint:'Lees als verhouding én als verticale breuk',
    rounds:[
      {formula:F('sameDen','blue','green','teal','green'), min:1, note:'Zelfde noemer: maak blauw en turquoise gelijk.', bubbles:[B('n'),B('n'),T('n'),G('n'),G('n')]},
      {formula:F('sameDen','green','blue','teal','blue'), min:1, note:'Nu moeten groen en turquoise gelijk worden.', bubbles:[G('n'),T('n'),T('n'),B('n'),B('n')]},
      {formula:F('sameDen','blue','teal','green','teal'), min:1, note:'De noemer blijft turquoise.', bubbles:[B('n'),B('n'),G('n'),T('n'),T('n')]},
      {formula:F('sameDen','blue','green','teal','green'), min:2, note:'Rode aura is krachtig, maar niet genoeg.', bubbles:[B('m'),B('n'),B('n'),B('n'),T('n'),G('n'),G('n')]},
      {formula:F('sameDen','green','blue','teal','blue'), min:1, note:'Soms is simpel verwijderen slimmer dan split.', bubbles:[G('n'),G('n'),T('x'),B('n'),B('n')]},
      {formula:F('sameDen','blue','teal','green','teal'), min:2, note:'Gerichte verkleuring helpt, maar vraagt correctie.', bubbles:[B('n'),B('n'),B('n'),G('n'),S('blue','green'),T('n'),T('n')]},
      {formula:F('sameDen','blue','green','teal','green'), min:2, note:'Te veel turquoise: rood + verwijderen.', bubbles:[B('n'),T('n'),T('n'),T('n'),T('m'),G('n'),G('n')]},
      {formula:F('sameDen','green','teal','blue','teal'), min:2, note:'Niet elke speciale bubble is de juiste.', bubbles:[G('n'),G('n'),G('n'),B('n'),S('green','blue'),T('n'),T('n')]},
      {formula:F('sameDen','blue','teal','green','teal'), min:2, note:'Veel blauw: gebruik de rode aura slim.', bubbles:[B('n'),B('n'),B('n'),B('n'),B('m'),G('n'),G('n'),T('n'),T('n')]},
      {formula:F('sameDen','blue','green','teal','green'), min:2, note:'Eindronde zelfde noemer.', bubbles:[B('m'),B('n'),B('n'),B('n'),T('n'),G('n'),G('n')]}
    ]
  },
  {
    title:'Level 7', mechanic:'Verhoudingstrap', hint:'Nu staat de middelste kleur in beide breuken',
    rounds:[
      {formula:F('chain','blue','green','green','teal'), min:1, note:'Maak 1/2 = 2/4.', bubbles:[B('n'),G('n'),G('n'),T('n'),T('n'),T('n')]},
      {formula:F('chain','teal','green','green','blue'), min:1, note:'Spiegel: turquoise/groen = groen/blauw.', bubbles:[T('n'),G('n'),G('n'),B('n'),B('n'),B('n')]},
      {formula:F('chain','blue','green','green','teal'), min:1, note:'Laat turquoise net groot genoeg worden.', bubbles:[B('n'),B('n'),G('n'),G('n'),G('n'),G('n'),T('n'),T('n'),T('n'),T('n'),T('n'),T('n'),T('n')]},
      {formula:F('chain','blue','green','green','teal'), min:1, note:'Eén turquoise te veel.', bubbles:[B('n'),B('n'),G('n'),G('n'),G('n'),G('n'),T('n'),T('n'),T('n'),T('n'),T('n'),T('n'),T('n'),T('n'),T('n')]},
      {formula:F('chain','blue','teal','teal','green'), min:1, note:'Andere trap: blauw/turquoise = turquoise/groen.', bubbles:[B('n'),B('n'),B('n'),T('n'),T('n'),G('n')]},
      {formula:F('chain','green','blue','blue','teal'), min:1, note:'Te veel turquoise, één weg.', bubbles:[G('n'),B('n'),B('n'),T('n'),T('n'),T('n'),T('n'),T('n')]},
      {formula:F('chain','blue','teal','teal','green'), min:1, note:'Split de juiste kleur.', bubbles:[B('n'),B('n'),B('n'),B('x'),T('n'),T('n'),G('n')]},
      {formula:F('chain','blue','green','green','teal'), min:1, note:'Rode aura als snelle correctie.', bubbles:[B('m'),B('n'),B('n'),G('n'),G('n'),T('n'),T('n'),T('n'),T('n')]},
      {formula:F('chain','teal','green','green','blue'), min:1, note:'Spiegel met rode aura.', bubbles:[T('m'),T('n'),T('n'),G('n'),G('n'),B('n'),B('n'),B('n'),B('n')]},
      {formula:F('chain','blue','green','green','teal'), min:2, note:'Eindronde: wissel en corrigeer.', bubbles:[B('n'),B('n'),S('blue','green'),G('n'),T('n'),T('n'),T('n'),T('n')]}
    ]
  },
  {
    title:'Level 8', mechanic:'Pittige breukroutes', hint:'Drie kleuren met groei, rood, split en gerichte wissels',
    rounds:[
      {formula:F('chain','blue','teal','teal','green'), min:2, note:'Eerst iets weg, dan laten groeien.', bubbles:[B('n'),T('n'),T('n'),G('n'),G('n'),G('g')]},
      {formula:F('sameDen','blue','green','teal','green'), min:2, note:'Rode aura + correctie.', bubbles:[B('n'),B('n'),T('n'),T('n'),T('n'),T('n'),T('m'),G('n'),G('n')]},
      {formula:F('chain','blue','teal','teal','green'), min:1, note:'Groeien kan exact goed zijn.', bubbles:[B('g'),B('n'),T('n'),T('n'),G('n')]},
      {formula:F('cross','green','teal','blue','green'), min:1, note:'Groei de juiste kleur.', bubbles:[B('g'),B('n'),G('n'),G('n'),T('n')]},
      {formula:F('chain','blue','teal','teal','green'), min:1, note:'Soms is de simpele route nog slimmer.', bubbles:[B('g'),B('n'),T('g'),G('n')]},
      {formula:F('sameDen','green','blue','teal','blue'), min:1, note:'Zelfde noemer, zware correctie.', bubbles:[G('m'),G('n'),G('n'),G('n'),T('n'),T('n'),B('n'),B('n')]},
      {formula:F('chain','blue','green','green','teal'), min:2, note:'Split blauw en turquoise.', bubbles:[B('x'),G('n'),G('n'),G('n'),G('n'),T('x'),T('n'),T('n'),T('n'),T('n'),T('n'),T('n')]},
      {formula:F('cross','blue','teal','green','blue'), min:3, note:'Pittig: wissel, verwijder, groei.', bubbles:[S('blue','teal'),B('n'),B('g'),B('n'),G('g'),T('n')]},
      {formula:F('cross','green','teal','blue','green'), min:1, note:'Eén juiste groei.', bubbles:[B('g'),B('n'),G('n'),G('n'),T('n')]},
      {formula:F('cross','blue','teal','green','blue'), min:3, note:'Finale: meerdere specials, één slimme route.', bubbles:[S('blue','teal'),B('n'),B('g'),B('n'),G('g'),T('n'),B('m'),T('x')]}
    ]
  }
];
function B(t){ return {color:'blue', shell:t}; }
function G(t){ return {color:'green', shell:t}; }
function T(t){ return {color:'teal', shell:t}; }
function S(c,to){ return {color:c, shell:'s', to}; }
function F(kind,a,b,c,d){ return {kind, left:[a,b], right:[c,d]}; }

  const ratioRoot = document.getElementById('ratioGame');
  const ratioTimerText = document.getElementById('ratioTimerText');
  let ratioRoundStartTime = 0;
  let ratioTimerInterval = null;
  const ratioRoadmap = document.getElementById('ratioRoadmap');
  const ratioPlay = document.getElementById('ratioPlay');
  const $r = (s) => ratioRoot ? ratioRoot.querySelector(s) : null;
  const sea = () => $r('#ratioSea');
  let ratioLevelIndex = 0;
  let ratioRoundIndex = 0;
  let ratioBubbles = [];
  let ratioActions = 0;
  let ratioCompleted = false;
  let ratioToastTimer = null;
  let ratioIdSeq = 0;

  const RATIO_UI_TEXT = {
    nl:{
      back:'Terug', skip:'Opnieuw', reset:'Opnieuw', next:'Volgende', levelDone:'Level klaar!', round:'Ronde', level:'Niveau',
      roadNames:['Aanmeersteiger','Tweelingdok','Wisselwerf','Rode Boeien','Groeihaven','Breukbrug','Kettingkade','Havenmeester']
    },
    en:{
      back:'Back', skip:'Restart', reset:'Restart', next:'Next', levelDone:'Level complete!', round:'Round', level:'Level',
      roadNames:['Dock Start','Twin Dock','Swap Wharf','Red Buoys','Growth Harbor','Fraction Bridge','Chain Quay','Harbor Master']
    },
    fr:{
      back:'Retour', skip:'Recommencer', reset:'Recommencer', next:'Suivant', levelDone:'Niveau terminé !', round:'Manche', level:'Niveau',
      roadNames:['Quai de départ','Double quai','Chantier d’échange','Bouées rouges','Port de croissance','Pont des fractions','Quai des chaînes','Maître du port']
    },
    tl:{
      back:'Balik', skip:'Ulitin', reset:'Ulitin', next:'Sunod', levelDone:'Tapos ang level!', round:'Round', level:'Level',
      roadNames:['Simulang Pantalan','Twin Dock','Swap Wharf','Pulang Buoy','Growth Harbor','Tulay ng Fraction','Chain Quay','Harbor Master']
    }
  };
  Object.assign(RATIO_UI_TEXT.nl, {
    perfect:'Perfect!', notShortest:'Goed, maar niet de kortste route.', shortestRoute:'Kortste route',
    pathReset:'Ratio-pad gereset.', pathCopied:'Ratio-pad gekopieerd.', pathConsole:'Ratio-pad staat in console.'
  });
  Object.assign(RATIO_UI_TEXT.en, {
    perfect:'Perfect!', notShortest:'Good, but not the shortest route.', shortestRoute:'Shortest route',
    pathReset:'Ratio path reset.', pathCopied:'Ratio path copied.', pathConsole:'Ratio path is in the console.'
  });
  Object.assign(RATIO_UI_TEXT.fr, {
    perfect:'Parfait !', notShortest:'Bien, mais ce n’est pas le chemin le plus court.', shortestRoute:'Chemin le plus court',
    pathReset:'Parcours des proportions réinitialisé.', pathCopied:'Parcours des proportions copié.', pathConsole:'Le parcours des proportions est dans la console.'
  });
  Object.assign(RATIO_UI_TEXT.tl, {
    back:'Bumalik', skip:'Ulitin', reset:'Ulitin', next:'Susunod', levelDone:'Tapos na ang level!', round:'Round', level:'Level',
    perfect:'Perpekto!', notShortest:'Tama, pero hindi ito ang pinakamaikling ruta.', shortestRoute:'Pinakamaikling ruta',
    pathReset:'Na-reset ang ratio path.', pathCopied:'Nakopya ang ratio path.', pathConsole:'Nasa console ang ratio path.',
    roadNames:['Simulang pantalan','Kambal na pantalan','Palitang pantalan','Pulang boya','Daungan ng paglago','Tulay ng praksyon','Kadena quay','Harbor master']
  });

  function ratioLang(){
    const lang = (document.documentElement.getAttribute('lang') || localStorage.getItem('bubblePopLang') || 'nl').toLowerCase();
    return RATIO_UI_TEXT[lang] ? lang : 'nl';
  }
  function ratioT(key){
    const lang = ratioLang();
    return (RATIO_UI_TEXT[lang] && RATIO_UI_TEXT[lang][key]) || RATIO_UI_TEXT.nl[key] || key;
  }
  function ratioRoadName(index){
    const pack = RATIO_UI_TEXT[ratioLang()] || RATIO_UI_TEXT.nl;
    return (pack.roadNames && pack.roadNames[index]) || roadNames[index] || "";
  }
  function updateRatioFooterLabels(){
    const back = $r('#ratioBackBtn');
    const skip = $r('#ratioSkipBtn');
    if(back) back.textContent = ratioT('back');
    if(skip) skip.textContent = ratioT('reset');
  }
  function formatRatioTime(ms){
    const total = Math.max(0, Math.floor(ms / 1000));
    const m = Math.floor(total / 60);
    const sec = String(total % 60).padStart(2, '0');
    return `${m}:${sec}`;
  }
  function updateRatioTimer(){ if(ratioTimerText) ratioTimerText.textContent = ratioRoundStartTime ? formatRatioTime(Date.now() - ratioRoundStartTime) : '0:00'; }
  function startRatioTimer(){ clearInterval(ratioTimerInterval); ratioRoundStartTime = Date.now(); updateRatioTimer(); ratioTimerInterval = setInterval(updateRatioTimer, 250); }
  function stopRatioTimer(){ clearInterval(ratioTimerInterval); ratioTimerInterval = null; ratioRoundStartTime = 0; updateRatioTimer(); }
  const roadNames = ['Aanmeersteiger','Tweelingdok','Wisselwerf','Rode Boeien','Groeihaven','Breukbrug','Kettingkade','Havenmeester'];
  const roadPosDefault = [
    [26.9,81.6],[44.3,71.9],[61.5,64.2],[25.2,51.2],[56.1,38.4],[20.2,22],[43.1,19.1],[72.6,23.5]
  ];
  const RATIO_PATH_EDIT_MODE = document.documentElement.classList.contains('pathEditMode') || document.documentElement.classList.contains('devMode');
  let roadPos = loadRatioRoadCoords();
  let ratioSelectedRoadIndex = null;
  let ratioRoadDragJustMoved = false;

  function clampRatioPathPercent(v){ return Math.max(3, Math.min(97, Math.round(Number(v) * 10) / 10)); }
  function loadRatioRoadCoords(){
    // Definitieve leerlingweergave gebruikt altijd roadPosDefault.
    // Alleen in dev-/padbewerkingsmodus mogen tijdelijke localStorage-posities overrulen.
    if(!RATIO_PATH_EDIT_MODE) return roadPosDefault.map(p => [...p]);
    try{
      const saved = JSON.parse(localStorage.getItem('bubblePopRatioRoadCoords') || 'null');
      if(Array.isArray(saved) && saved.length === roadPosDefault.length){
        return saved.map((p,i) => [
          clampRatioPathPercent(Array.isArray(p) ? p[0] : p.x),
          clampRatioPathPercent(Array.isArray(p) ? p[1] : p.y)
        ]);
      }
    }catch(e){}
    return roadPosDefault.map(p => [...p]);
  }
  function saveRatioRoadCoords(){
    try{ localStorage.setItem('bubblePopRatioRoadCoords', JSON.stringify(exportRatioRoadCoords())); }catch(e){}
  }
  function exportRatioRoadCoords(){
    return roadPos.map((p,i) => ({
      id:`ratio-${i+1}`,
      key:roadNames[i] || `Level ${i+1}`,
      x:Math.round(p[0]*10)/10,
      y:Math.round(p[1]*10)/10,
      icon:String(i+1)
    }));
  }
  function resetRatioRoadCoords(){
    roadPos = roadPosDefault.map(p => [...p]);
    try{ localStorage.removeItem('bubblePopRatioRoadCoords'); }catch(e){}
    updateRatioRoadGeometry();
    updateRatioRoadState();
    showRatioToast(ratioT('pathReset'));
  }
  function ratioRoadCoordsCode(){
    const pairs = roadPos.map(p => `[${Math.round(p[0]*10)/10},${Math.round(p[1]*10)/10}]`);
    return [
      '// Verhoudingenhaven — finale roadmap-posities',
      '// Plak dit in de code bij: const roadPosDefault = [...]',
      'const roadPosDefault = [',
      '  ' + pairs.join(', '),
      '];',
      '',
      '// Volledige export met namen/levels:',
      JSON.stringify(exportRatioRoadCoords(), null, 2)
    ].join('\n');
  }
  function copyRatioRoadCoords(){
    const text = ratioRoadCoordsCode();
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(() => showRatioToast(ratioT('pathCopied'))).catch(() => { console.log(text); showRatioToast(ratioT('pathConsole')); });
    }else{
      console.log(text);
      showRatioToast(ratioT('pathConsole'));
    }
  }
  function updateRatioRoadGeometry(){
    const pts = roadPos.map(p => `${p[0]},${p[1]}`).join(' ');
    const glow = $r('#ratioRoadGlow');
    const line = $r('#ratioRoadLine');
    if(glow) glow.setAttribute('points', pts);
    if(line) line.setAttribute('points', pts);
    $r('#ratioRoadNodes')?.querySelectorAll('.ratioRoadNode').forEach((node,i) => {
      if(!roadPos[i]) return;
      node.style.setProperty('--x', roadPos[i][0]);
      node.style.setProperty('--y', roadPos[i][1]);
    });
  }
  function toggleRatioPathEditor(active){
    if(!RATIO_PATH_EDIT_MODE) return;
    const ratioPanel = document.getElementById('ratioEditorPanel');
    const sharedPanel = document.getElementById('pathEditorPanel');
    if(ratioPanel){
      ratioPanel.classList.toggle('hidden', !active);
    }
    // Het gewone pad-editorpaneel blijft beschikbaar als fallback, maar de ratio-route
    // krijgt nu een eigen, duidelijke kopieerknop op de route zelf.
    if(sharedPanel){
      sharedPanel.classList.toggle('hidden', !active || !!ratioPanel);
      const title = sharedPanel.querySelector('strong');
      const help = sharedPanel.querySelector('small');
      if(active){
        if(title) title.textContent = 'Ratio-pad';
        if(help) help.textContent = 'Sleep haltes.';
      }
    }
  }
  function startRatioRoadDrag(evt, index, btn){
    if(!RATIO_PATH_EDIT_MODE) return;
    evt.preventDefault();
    evt.stopPropagation();
    ratioSelectedRoadIndex = index;
    updateRatioRoadState();
    const rect = ratioRoadmap ? ratioRoadmap.getBoundingClientRect() : null;
    if(!rect) return;
    let moved = false;
    btn.classList.add('dragging');
    try{ btn.setPointerCapture(evt.pointerId); }catch(e){}
    const move = (e) => {
      moved = true;
      ratioRoadDragJustMoved = true;
      roadPos[index] = [
        clampRatioPathPercent(((e.clientX - rect.left) / rect.width) * 100),
        clampRatioPathPercent(((e.clientY - rect.top) / rect.height) * 100)
      ];
      updateRatioRoadGeometry();
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      btn.classList.remove('dragging');
      if(moved) saveRatioRoadCoords();
      setTimeout(() => { ratioRoadDragJustMoved = false; }, 90);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  }
  function handleRatioRoadNodeClick(i, evt){
    if(evt){ evt.preventDefault(); evt.stopPropagation(); }
    if(ratioRoadDragJustMoved){ ratioRoadDragJustMoved = false; return; }
    if(ratioSelectedRoadIndex === i){
      startRatioLevel(i);
      return;
    }
    ratioSelectedRoadIndex = i;
    updateRatioRoadState();
  }

  function buildRatioRoad(){
    const wrap = $r('#ratioRoadNodes');
    if(!wrap || wrap.dataset.ready) return;
    wrap.dataset.ready = '1';
    LEVELS.forEach((L,i) => {
      const b = document.createElement('button');
      b.type = 'button';
      b.className = 'pathNode ratioRoadNode' + (i===0 ? ' current' : '');
      b.style.setProperty('--x', roadPos[i][0]);
      b.style.setProperty('--y', roadPos[i][1]);
      b.textContent = i + 1;
      b.dataset.name = roadNames[i] || L.title;
      b.setAttribute('aria-label', `${roadNames[i] || L.title}, level ${i+1}. Klik nogmaals om te starten.`);
      if(RATIO_PATH_EDIT_MODE) b.addEventListener('pointerdown', (evt) => startRatioRoadDrag(evt, i, b));
      b.addEventListener('click', (evt) => handleRatioRoadNodeClick(i, evt));
      wrap.appendChild(b);
    });
    updateRatioRoadGeometry();
  }

  function updateRatioRoadState(){
    $r('#ratioRoadNodes')?.querySelectorAll('.ratioRoadNode').forEach((n,i) => {
      n.classList.toggle('done', i < ratioLevelIndex);
      n.classList.toggle('current', i === ratioLevelIndex);
      n.classList.toggle('selected', i === ratioSelectedRoadIndex);
      n.setAttribute('aria-pressed', i === ratioSelectedRoadIndex ? 'true' : 'false');
    });
  }

  function openRatioGame(){
    // v29: de oude ratioRoadmap is vervangen door de centrale roadmapmodule.
    // Deze functie blijft bestaan als fallback/startpunt, maar opent voortaan de nieuwe route.
    if(typeof window.openGameRoadmap === 'function'){
      window.openGameRoadmap('ratios');
      return;
    }
    buildRatioRoad();
    const phoneEl = document.getElementById('phone');
    phoneEl?.classList.add('ratioOpen');
    phoneEl?.classList.remove('briefingOpen');
    closeAudioPanel();
    const ratioLang = $r('#ratioLangSelMini');
    const mainLang = document.getElementById('langSelMini');
    if(ratioLang && mainLang) ratioLang.value = mainLang.value;
    ratioRoot.classList.remove('hidden');
    ratioRoadmap.classList.remove('hidden');
    ratioPlay.classList.add('hidden');
    updateRatioRoadGeometry();
    updateRatioRoadState();
    toggleRatioPathEditor(true);
  }
  function closeRatioGame(){
    ratioRoot.classList.add('hidden');
    document.getElementById('phone')?.classList.remove('ratioOpen');
    closeAudioPanel();
    toggleRatioPathEditor(false);
    stopRatioTimer();
    clearRatioStage();
  }
  function startRatioLevel(i){
    ratioLevelIndex = Math.max(0, Math.min(LEVELS.length-1, i));
    ratioRoundIndex = 0;
    ratioRoadmap.classList.add('hidden');
    ratioPlay.classList.remove('hidden');
    toggleRatioPathEditor(false);
    loadRatioRound(ratioLevelIndex, ratioRoundIndex);
  }
  function returnFromRatioPlayToRoadmap(){ // v46: fixed ratio Terug button, no ratioScreen reference
    stopRatioTimer();
    clearRatioStage();

    if(ratioPlay) ratioPlay.classList.add('hidden');
    if(ratioRoadmap) ratioRoadmap.classList.add('hidden');
    if(ratioRoot) {
      ratioRoot.classList.add('hidden');
      ratioRoot.setAttribute('aria-hidden','true');
    }

    const phoneEl = document.getElementById('phone');
    if(phoneEl){
      phoneEl.classList.remove('ratioOpen','briefingOpen','leaderboardOpen');
      phoneEl.classList.add('roadmapOpen');
    }

    if(typeof window.openGameRoadmap === 'function'){
      window.openGameRoadmap('ratios');
      return;
    }

    if(ratioRoot) {
      ratioRoot.classList.remove('hidden');
      ratioRoot.setAttribute('aria-hidden','false');
    }
    if(ratioRoadmap) ratioRoadmap.classList.remove('hidden');
    updateRatioRoadGeometry();
    updateRatioRoadState();
    toggleRatioPathEditor(true);
  }

  function backToRatioRoad(){
    returnFromRatioPlayToRoadmap();
  }

  function buildRatioPips(){
    // v27.37: de rondevoortgang wordt bewust niet meer getoond in Verhoudingenhaven.
  }

  function mini(color){ return `<span class="ratioColorMini ${color}" title="${COLOR_LABELS[color]}"></span>`; }
  function frac(num, den){ return `<span class="frac"><span>${mini(num)}</span><span class="bar"></span><span>${mini(den)}</span></span>`; }
  function numberFrac(a, b){ return `<span class="frac ratioNumberFrac"><span>${a}</span><span class="bar"></span><span>${b}</span></span>`; }

  function renderRatioGoal(R){
    const card = $r('#ratioCard');
    if(!card) return;
    if(R.ratio){
      card.innerHTML = `<div class="fracLine">${frac('blue','green')}<span class="eq">=</span>${numberFrac(R.ratio[0], R.ratio[1])}</div>`;
    } else {
      const [a,b] = R.formula.left, [c,d] = R.formula.right;
      card.innerHTML = `<div class="fracLine">${frac(a,b)}<span class="eq">=</span>${frac(c,d)}</div>`;
    }
  }

  function updateRatioHudProgress(){
    const R = LEVELS[ratioLevelIndex]?.rounds?.[ratioRoundIndex];
    const L = LEVELS[ratioLevelIndex];
    const hudScore = $r('#ratioHudScoreText');
    const hudLeft = $r('#ratioHudLeftText');
    if(hudScore && R) hudScore.textContent = `${ratioActions}/${R.min}`;
    if(hudLeft && L) hudLeft.textContent = `${ratioRoundIndex+1}/${L.rounds.length}`;
  }

  function updateRatioHeader(){
    const L = LEVELS[ratioLevelIndex];
    const R = L.rounds[ratioRoundIndex];
    const levelName = ratioRoadName(ratioLevelIndex) || L.title;
    $r('#ratioLevelName').textContent = levelName;
    $r('#ratioRoundName').textContent = `${ratioT('round')} ${ratioRoundIndex+1}/${L.rounds.length}`;
    const hudLevel = $r('#ratioHudLevelText');
    const hudScore = $r('#ratioHudScoreText');
    const hudLeft = $r('#ratioHudLeftText');
    if(hudLevel) hudLevel.textContent = `${ratioT('level')} ${ratioLevelIndex+1}`;
    if(hudScore) hudScore.textContent = `${ratioActions}/${R.min}`;
    if(hudLeft) hudLeft.textContent = `${ratioRoundIndex+1}/${L.rounds.length}`;
    const ratioLevelBadge = $r('#ratioLevelBadge');
    if(ratioLevelBadge) ratioLevelBadge.textContent = `L${ratioLevelIndex+1}`;
    const ratioHint = $r('#ratioHintText');
    if(ratioHint) ratioHint.textContent = ratioT('shortestRoute');
    renderRatioGoal(R);
  }

  function clearRatioStage(){
    const s = sea();
    if(s){
      s.classList.remove('roundWon');
      s.querySelectorAll('.ratioFishBubble').forEach(el => el.remove());
    }
    ratioBubbles = [];
    ratioCompleted = false;
    const skip = $r('#ratioSkipBtn'); if(skip){ skip.hidden = false; skip.textContent = ratioT('reset'); }
  }

  function loadRatioRound(li, ri){
    clearTimeout(ratioToastTimer);
    ratioCompleted = false;
    ratioActions = 0;
    ratioIdSeq = 0;
    ratioBubbles = [];
    const s = sea();
    if(s) s.querySelectorAll('.ratioFishBubble').forEach(el => el.remove());
    const skip = $r('#ratioSkipBtn'); if(skip){ skip.hidden = false; skip.textContent = ratioT('reset'); }
    buildRatioPips();
    updateRatioFooterLabels();
    updateRatioHeader();
    startRatioTimer();
    const R = LEVELS[li].rounds[ri];
    R.bubbles.forEach((def, idx) => createRatioBubble(def.color, def.shell, idx, null, null, def.to));
    distributeRatioBubbles();
    setTimeout(() => checkRatioState(true), 260);
  }

  function createRatioBubble(color, shell, idx, x=null, y=null, to=null){
    const el = document.createElement('button');
    el.type = 'button';
    const shellName = shell === 's' ? 'swap' : shell === 'x' ? 'split' : shell === 'm' ? 'minus2' : shell === 'g' ? 'grow' : 'normal';
    el.className = `ratioFishBubble ${color} ${shellName}`;
    if(to) el.dataset.to = to;
    const b = {id: ++ratioIdSeq, color, shell, to, el, x:x ?? 50, y:y ?? 50};
    el.addEventListener('click', () => handleRatioBubble(b));
    sea().appendChild(el);
    ratioBubbles.push(b);
    return b;
  }

  function updateRatioBubble(b){
    const shellName = b.shell === 's' ? 'swap' : b.shell === 'x' ? 'split' : b.shell === 'm' ? 'minus2' : b.shell === 'g' ? 'grow' : 'normal';
    b.el.className = `ratioFishBubble ${b.color} ${shellName}`;
    if(b.to) b.el.dataset.to = b.to; else delete b.el.dataset.to;
    b.el.style.setProperty('--x', b.x + '%');
    b.el.style.setProperty('--y', b.y + '%');
  }

  function handleRatioBubble(b){
    if(ratioCompleted || !ratioBubbles.includes(b)) return;
    ratioActions++;
    updateRatioHudProgress();
    if(b.shell === 'n'){
      removeRatioBubble(b);
    } else if(b.shell === 's'){
      b.color = b.to || (b.color === 'blue' ? 'green' : 'blue');
      b.shell = 'n'; b.to = null;
      updateRatioBubble(b);
    } else if(b.shell === 'x'){
      b.shell = 'n';
      updateRatioBubble(b);
      const pos = findRatioFreePosition(b.x, b.y, b.id + 17);
      const nb = createRatioBubble(b.color, 'n', ratioBubbles.length, pos.x, pos.y);
      refreshRatioBubbleVisuals();
    } else if(b.shell === 'm'){
      const same = ratioBubbles.filter(x => x.color === b.color);
      removeRatioBubble(b);
      const other = same.find(x => x !== b && ratioBubbles.includes(x));
      if(other) removeRatioBubble(other);
    } else if(b.shell === 'g'){
      b.shell = 'n';
      updateRatioBubble(b);
      const current = ratioBubbles.filter(x => x.color === b.color).length;
      const add = Math.max(0, Math.min(current, 10 - current));
      for(let i=0;i<add;i++){
        const pos = findRatioFreePosition(b.x, b.y, b.id + 31 + i * 13);
        createRatioBubble(b.color, 'n', ratioBubbles.length, pos.x, pos.y);
      }
      refreshRatioBubbleVisuals();
    }
    checkRatioState(false);
  }

  function removeRatioBubble(b){
    if(!ratioBubbles.includes(b)) return;
    ratioBubbles = ratioBubbles.filter(x => x !== b);
    b.el.classList.add('popped');
    setTimeout(() => b.el.remove(), 280);
  }

  function counts(){
    return ratioBubbles.reduce((acc,b) => { acc[b.color] = (acc[b.color] || 0) + 1; return acc; }, {blue:0,green:0,teal:0});
  }

  function solved(R){
    const c = counts();
    if(R.ratio) return c.green > 0 && c.blue * R.ratio[1] === c.green * R.ratio[0];
    const [a,b] = R.formula.left, [x,y] = R.formula.right;
    return c[b] > 0 && c[y] > 0 && c[a] * c[y] === c[x] * c[b];
  }

  function checkRatioState(silent){
    const R = LEVELS[ratioLevelIndex].rounds[ratioRoundIndex];
    if(!solved(R)) return;
    if(ratioActions === R.min || silent){
      if(silent) return;
      completeRatioRound(ratioT('perfect'));
    } else if(ratioActions > R.min){
      showRatioToast(ratioT('notShortest'));
      setTimeout(() => loadRatioRound(ratioLevelIndex, ratioRoundIndex), 900);
    }
  }

  function completeRatioRound(text){
    ratioCompleted = true;
    showRatioToast(text);
    const s = sea();
    s?.classList.add('roundWon');
    ratioBubbles.forEach((b,i) => {
      setTimeout(() => {
        if(b.el && b.el.isConnected) b.el.classList.add('rewardGold');
      }, i * 42);
    });
    const skip = $r('#ratioSkipBtn');
    if(skip){
      skip.hidden = false;
      skip.textContent = ratioT('reset');
    }
  }

  function restartRatioRound(){
    showRatioToast(ratioT('reset'));
    loadRatioRound(ratioLevelIndex, ratioRoundIndex);
  }

  function ratioSkipOrNextRound(){
    restartRatioRound();
  }

  function nextRatioRound(){
    const L = LEVELS[ratioLevelIndex];
    if(ratioRoundIndex < L.rounds.length - 1){
      ratioRoundIndex++;
      loadRatioRound(ratioLevelIndex, ratioRoundIndex);
    } else {
      stopRatioTimer();
      showRatioToast(ratioT('levelDone'));
      ratioRoadmap.querySelectorAll('.ratioRoadNode')[ratioLevelIndex]?.classList.add('done');
      if(ratioLevelIndex < LEVELS.length - 1) ratioLevelIndex++;
      setTimeout(() => {
        if(typeof window.openGameRoadmap === 'function') window.openGameRoadmap('ratios');
        else backToRatioRoad();
      }, 900);
    }
  }

  function showRatioToast(text){
    const t = $r('#ratioToast');
    if(!t) return;
    clearTimeout(ratioToastTimer);
    t.textContent = text;
    t.classList.add('show');
    ratioToastTimer = setTimeout(() => t.classList.remove('show'), 1200);
  }

  function ratioBubbleSize(){
    return ratioBubbles.length > 14 ? 56 : ratioBubbles.length > 10 ? 62 : 70;
  }

  function applyRatioBubbleVisuals(b, i){
    b.el.style.setProperty('--s', ratioBubbleSize() + 'px');
    const seed = b.id*19 + i*17;
    b.el.style.setProperty('--dur', `${9 + (seed%5)}s`);
    b.el.style.setProperty('--delay', `${-((seed%7)*.38)}s`);
    b.el.style.setProperty('--dx1', `${Math.round((rnd(seed+11)-.5)*14)}px`);
    b.el.style.setProperty('--dy1', `${Math.round((rnd(seed+13)-.5)*10)}px`);
    b.el.style.setProperty('--dx2', `${Math.round((rnd(seed+17)-.5)*14)}px`);
    b.el.style.setProperty('--dy2', `${Math.round((rnd(seed+19)-.5)*10)}px`);
    b.el.style.setProperty('--dx3', `${Math.round((rnd(seed+23)-.5)*14)}px`);
    b.el.style.setProperty('--dy3', `${Math.round((rnd(seed+29)-.5)*10)}px`);
    updateRatioBubble(b);
  }

  function refreshRatioBubbleVisuals(){
    ratioBubbles.forEach((b,i) => applyRatioBubbleVisuals(b,i));
  }

  function distributeRatioBubbles(){
    const pts = poissonLikePositions(ratioBubbles.length, ratioLevelIndex*103 + ratioRoundIndex*59 + ratioBubbles.length);
    ratioBubbles.forEach((b,i) => {
      b.x = pts[i].x; b.y = pts[i].y;
      applyRatioBubbleVisuals(b,i);
    });
  }

  function findRatioFreePosition(originX, originY, seed){
    const minD = ratioBubbles.length > 14 ? 10 : ratioBubbles.length > 10 ? 12 : 14;
    const radii = [8, 12, 16, 20, 24, 28, 32];
    for(const r of radii){
      for(let step=0; step<12; step++){
        const angle = ((step * 137.5 + seed * 19) % 360) * Math.PI / 180;
        const x = clamp(originX + Math.cos(angle) * r, 8, 92);
        const y = clamp(originY + Math.sin(angle) * r * .78, 9, 88);
        if(ratioBubbles.every(p => Math.hypot(p.x - x, (p.y - y) * 1.16) > minD)) return {x,y};
      }
    }
    return {x:clamp(originX + (rnd(seed)-.5)*34, 8, 92), y:clamp(originY + (rnd(seed+5)-.5)*26, 9, 88)};
  }

  function poissonLikePositions(n, seed){
    const pts=[]; let attempts=0; const minD = n > 14 ? 13 : n > 10 ? 15 : 19;
    while(pts.length < n && attempts < 2500){
      attempts++;
      const x = 10 + rnd(seed += 41) * 80;
      const y = 11 + rnd(seed += 43) * 73;
      if(pts.every(p => Math.hypot(p.x-x, (p.y-y)*1.16) > minD)) pts.push({x,y});
    }
    while(pts.length < n){
      const i=pts.length, cols=n<7?3:n<13?4:5, rows=Math.ceil(n/cols);
      pts.push({x:12+((i%cols)+.5)*(76/cols), y:14+(Math.floor(i/cols)+.5)*(70/rows)});
    }
    return pts;
  }
  function rnd(seed){ const x=Math.sin(seed)*10000; return x-Math.floor(x); }
  function clamp(v,min,max){ return Math.max(min, Math.min(max, v)); }



  /* ---------------------------------------------------------
     Ratio dev-tools: levelgenerator + QA + clipboard export
     Werkt via ?debug=1&dev=1 en gebruikt hetzelfde devPanel.
     --------------------------------------------------------- */
  let lastRatioGeneratedCode = '';
  function ratioDevPanel(){ return document.getElementById('devPanelResult'); }
  function setRatioDevResult(text, state='ok'){
    const box = ratioDevPanel();
    if(!box) return;
    box.textContent = String(text || '');
    box.classList.remove('ok','warn','running');
    if(state) box.classList.add(state);
  }
  function selectedDevTopic(){ return document.getElementById('devTopicSelect')?.value || ''; }
  function selectedDevTier(){ return Math.max(1, Math.min(3, Number(document.getElementById('devTierSelect')?.value || 1))); }
  function isRatioDevSelected(){ return document.documentElement.classList.contains('devMode') && selectedDevTopic() === 'ratios'; }
  function captureRatioDev(evt, fn){
    if(!isRatioDevSelected()) return false;
    evt.preventDefault();
    evt.stopPropagation();
    if(evt.stopImmediatePropagation) evt.stopImmediatePropagation();
    fn();
    return true;
  }
  function ratioCloneState(state){ return state.map(b => ({color:b.color, shell:b.shell, to:b.to || null})); }
  function ratioStateKey(state){
    return state.map(b => `${b.color[0]}${b.shell}${b.to ? ':' + b.to[0] : ''}`).sort().join('|');
  }
  function ratioCountsForState(state){
    return state.reduce((acc,b) => { acc[b.color] = (acc[b.color] || 0) + 1; return acc; }, {blue:0, green:0, teal:0});
  }
  function ratioStateSolved(state, ratio){
    const c = ratioCountsForState(state);
    return c.blue > 0 && c.green > 0 && c.blue * ratio[1] === c.green * ratio[0];
  }
  function ratioNextStates(state){
    const out = [];
    for(let i=0;i<state.length;i++){
      const b = state[i];
      if(b.shell === 'n'){
        out.push(state.filter((_,idx) => idx !== i));
      }else if(b.shell === 's'){
        const ns = ratioCloneState(state);
        ns[i].color = b.to || (b.color === 'blue' ? 'green' : 'blue');
        ns[i].shell = 'n';
        ns[i].to = null;
        out.push(ns);
      }else if(b.shell === 'x'){
        const ns = ratioCloneState(state);
        ns[i].shell = 'n';
        ns.push({color:b.color, shell:'n', to:null});
        out.push(ns);
      }else if(b.shell === 'm'){
        const partner = state.findIndex((o,idx) => idx !== i && o.color === b.color);
        if(partner >= 0){
          const remove = new Set([i, partner]);
          out.push(state.filter((_,idx) => !remove.has(idx)));
        }
      }else if(b.shell === 'g'){
        const ns = ratioCloneState(state);
        ns[i].shell = 'n';
        const current = ns.filter(o => o.color === b.color).length;
        const add = Math.max(0, Math.min(current, 10 - current));
        for(let k=0;k<add;k++) ns.push({color:b.color, shell:'n', to:null});
        out.push(ns);
      }
    }
    return out.filter(st => st.length > 0 && st.length <= 16);
  }
  function ratioMinActions(round, maxDepth=5){
    const start = (round.bubbles || []).map(b => ({color:b.color, shell:b.shell, to:b.to || null}));
    if(ratioStateSolved(start, round.ratio)) return 0;
    let frontier = [start];
    const seen = new Set([ratioStateKey(start)]);
    for(let depth=1; depth<=maxDepth; depth++){
      const next = [];
      for(const state of frontier){
        for(const candidate of ratioNextStates(state)){
          const key = ratioStateKey(candidate);
          if(seen.has(key)) continue;
          seen.add(key);
          if(ratioStateSolved(candidate, round.ratio)) return depth;
          next.push(candidate);
        }
      }
      frontier = next.slice(0, 700);
    }
    return Infinity;
  }
  function ratioPick(arr){ return arr[Math.floor(Math.random() * arr.length)]; }
  function ratioStateNormalCount(state, color){ return state.filter(b => b.color === color && b.shell === 'n').length; }
  function ratioReverseRemove(state){
    state.push({color:ratioPick(['blue','green']), shell:'n', to:null});
    return true;
  }
  function ratioReverseSwap(state){
    const normals = state.map((b,i) => ({b,i})).filter(x => x.b.shell === 'n' && (x.b.color === 'blue' || x.b.color === 'green'));
    if(!normals.length) return false;
    const pick = ratioPick(normals);
    const target = pick.b.color;
    pick.b.color = target === 'blue' ? 'green' : 'blue';
    pick.b.shell = 's';
    pick.b.to = target;
    return true;
  }
  function ratioReverseSplit(state){
    const colors = ['blue','green'].filter(c => ratioStateNormalCount(state,c) >= 2);
    if(!colors.length) return false;
    const color = ratioPick(colors);
    let changed = false;
    for(let i=state.length-1;i>=0;i--){
      if(state[i].color === color && state[i].shell === 'n'){
        if(!changed){ state[i].shell = 'x'; changed = true; }
        else { state.splice(i,1); return true; }
      }
    }
    return false;
  }
  function ratioReverseMinus2(state){
    const color = ratioPick(['blue','green']);
    state.push({color, shell:'m', to:null}, {color, shell:'n', to:null});
    return true;
  }
  function ratioReverseGrow(state){
    const colors = ['blue','green'].filter(c => ratioStateNormalCount(state,c) >= 2 && ratioStateNormalCount(state,c) % 2 === 0);
    if(!colors.length) return false;
    const color = ratioPick(colors);
    const target = ratioStateNormalCount(state, color);
    const keep = target / 2;
    let kept = 0;
    for(let i=state.length-1;i>=0;i--){
      if(state[i].color !== color || state[i].shell !== 'n') continue;
      kept++;
      if(kept === 1) state[i].shell = 'g';
      if(kept > keep) state.splice(i,1);
    }
    return true;
  }
  function generateRatioCandidate(complexity=1, wantedMin=1){
    const ratios = complexity >= 3
      ? [[2,3],[3,2],[3,4],[4,3],[4,5],[5,4],[5,3],[3,5]]
      : [[1,1],[1,2],[2,1],[2,3],[3,2],[3,4],[4,3]];
    const ratio = ratioPick(ratios);
    const mult = ratioPick(complexity >= 3 ? [1,1,2] : [1,2]);
    const state = [];
    for(let i=0;i<ratio[0]*mult;i++) state.push({color:'blue', shell:'n', to:null});
    for(let i=0;i<ratio[1]*mult;i++) state.push({color:'green', shell:'n', to:null});
    const actionPools = [
      [ratioReverseRemove, ratioReverseSwap],
      [ratioReverseRemove, ratioReverseSwap, ratioReverseSplit, ratioReverseMinus2],
      [ratioReverseRemove, ratioReverseSwap, ratioReverseSplit, ratioReverseMinus2, ratioReverseGrow]
    ];
    const pool = actionPools[Math.max(0, Math.min(2, complexity-1))];
    let guards = 0;
    for(let step=0; step<wantedMin && guards < 20; guards++){
      const before = JSON.stringify(state);
      const ok = ratioPick(pool)(state);
      if(ok && JSON.stringify(state) !== before) step++;
    }
    return {ratio, min:wantedMin, note:`Gegenereerd · kortste route ${wantedMin} tik${wantedMin === 1 ? '' : 'ken'}.`, bubbles:state};
  }
  function generatePlayableRatioRound(complexity, wantedMin){
    for(let tries=0; tries<280; tries++){
      const round = generateRatioCandidate(complexity, wantedMin);
      if(ratioStateSolved(round.bubbles, round.ratio)) continue;
      const min = ratioMinActions(round, 5);
      if(min === wantedMin) return round;
    }
    const fallback = wantedMin <= 1
      ? {ratio:[2,3], min:1, note:'Fallback generator · één wissel.', bubbles:[B('n'),B('n'),B('s'),G('n'),G('n')]}
      : {ratio:[3,4], min:2, note:'Fallback generator · wissel en verwijder.', bubbles:[B('n'),B('n'),B('n'),B('n'),B('s'),G('n'),G('n'),G('n')]};
    return fallback;
  }
  function ratioBubbleCode(b){
    if(b.shell === 's' && b.to) return `S('${b.color}','${b.to}')`;
    const fn = b.color === 'blue' ? 'B' : b.color === 'green' ? 'G' : 'T';
    return `${fn}('${b.shell}')`;
  }
  function ratioRoundCode(round){
    return `{ratio:[${round.ratio[0]},${round.ratio[1]}], min:${round.min}, note:${JSON.stringify(round.note)}, bubbles:[${round.bubbles.map(ratioBubbleCode).join(',')}]}`;
  }
  function generateRatioLevelCode(){
    const complexity = selectedDevTier();
    const wanted = complexity === 1
      ? [1,1,1,1,1,2,2,2,2,2]
      : complexity === 2
        ? [1,1,2,2,2,2,3,3,3,2]
        : [2,2,2,3,3,3,3,3,4,3];
    const rounds = wanted.map(min => generatePlayableRatioRound(complexity, min));
    const title = complexity === 1 ? 'Nieuw level · basis' : complexity === 2 ? 'Nieuw level · combinaties' : 'Nieuw level · expert';
    const mechanic = complexity === 1 ? 'Verwijderen en wisselen' : complexity === 2 ? 'Wissel, split en rode boeien' : 'Volledige mix met groei';
    const hint = 'Gegenereerd in dev-modus · controleer en plak in LEVELS.';
    const code = `  {\n    title:${JSON.stringify(title)}, mechanic:${JSON.stringify(mechanic)}, hint:${JSON.stringify(hint)},\n    rounds:[\n      ${rounds.map(ratioRoundCode).join(',\n      ')}\n    ]\n  }`;
    const lines = [];
    lines.push('Ratio-level gegenereerd.');
    lines.push(`Niveau: ${complexity === 1 ? 'Brons' : complexity === 2 ? 'Zilver' : 'Goud'}`);
    lines.push('');
    rounds.forEach((r,i) => lines.push(`${i+1}. ${r.ratio[0]}:${r.ratio[1]} · min ${r.min} · ${r.bubbles.length} bubbles`));
    lines.push('');
    lines.push('Code staat hieronder en kan met “Kopieer ratio-code” naar het klembord.');
    lines.push(code);
    lastRatioGeneratedCode = code;
    return lines.join('\n');
  }
  function ratioLevelAnalysisText(){
    const lines = ['Ratio QA — bestaande levels'];
    let tested = 0, problems = 0;
    LEVELS.forEach((L,li) => {
      lines.push(`${li+1}. ${roadNames[li] || L.title}`);
      L.rounds.forEach((R,ri) => {
        if(!R.ratio) return;
        tested++;
        const min = ratioMinActions(R, 5);
        const ok = min === R.min;
        if(!ok) problems++;
        lines.push(`  ronde ${ri+1}: ${R.ratio[0]}:${R.ratio[1]} · opgegeven ${R.min} · solver ${min === Infinity ? 'geen ≤5' : min}${ok ? '' : '  ⚠'}`);
      });
    });
    lines.unshift(problems ? `Status: ${problems} aandachtspunt(en)` : 'Status: OK voor 2-kleur ratio-rondes');
    lines.unshift(`${tested} ratio-rondes getest met solver.`);
    return {text:lines.join('\n'), problems};
  }
  async function copyRatioGeneratedCode(){
    if(!lastRatioGeneratedCode) lastRatioGeneratedCode = generateRatioLevelCode().split('Code staat hieronder en kan met “Kopieer ratio-code” naar het klembord.\n').pop();
    try{
      await navigator.clipboard.writeText(lastRatioGeneratedCode);
      setRatioDevResult(lastRatioGeneratedCode + '\n\nRatio-code gekopieerd.', 'ok');
    }catch(e){
      console.log(lastRatioGeneratedCode);
      setRatioDevResult(lastRatioGeneratedCode + '\n\nKopiëren lukte niet; code staat in de console.', 'warn');
    }
  }
  function showRatioDevList(){
    const lines = ['Verhoudingenhaven — huidige levels'];
    LEVELS.forEach((L,li) => lines.push(`${li+1}. ${roadNames[li] || L.title}: ${L.rounds.length} rondes · ${L.mechanic}`));
    lines.push('', 'Gebruik “Genereer ratio-level” om een nieuw LEVELS-blok te maken.');
    setRatioDevResult(lines.join('\n'), 'ok');
  }
  function startRatioDevPreview(){
    openRatioGame();
    ratioSelectedRoadIndex = Math.max(0, Math.min(LEVELS.length - 1, (selectedDevTier() - 1) * 2));
    updateRatioRoadState();
    setRatioDevResult('Ratio-dev actief: selecteer een halte; klik dezelfde halte nogmaals om te starten. In dev-modus kun je haltes slepen.', 'ok');
  }

  $r('#ratioCloseBtn')?.addEventListener('click', closeRatioGame);
  $r('#ratioBackBtn')?.addEventListener('click', (evt) => {
    evt.preventDefault();
    evt.stopPropagation();
    returnFromRatioPlayToRoadmap();
  });
  $r('#ratioSkipBtn')?.addEventListener('click', ratioSkipOrNextRound);
  $r('#ratioRankBtn')?.addEventListener('click', () => document.getElementById('rankBtn')?.click());
  $r('#ratioAudioBtn')?.addEventListener('click', () => toggleAudioPanel('ratio'));
  $r('#ratioFsBtn')?.addEventListener('click', () => document.getElementById('fsBtn')?.click());
  $r('#ratioLangSelMini')?.addEventListener('change', e => {
    const mainLang = document.getElementById('langSelMini');
    if(mainLang){
      mainLang.value = e.target.value;
      mainLang.dispatchEvent(new Event('change', {bubbles:true}));
    }
    setTimeout(updateRatioFooterLabels, 30);
  });
  document.getElementById('devRatioGenerateBtn')?.addEventListener('click', (evt) => captureRatioDev(evt, () => setRatioDevResult(generateRatioLevelCode(), 'ok')), true);
  document.getElementById('devRatioCopyBtn')?.addEventListener('click', (evt) => captureRatioDev(evt, copyRatioGeneratedCode), true);
  document.getElementById('devRatioPathCopyBtn')?.addEventListener('click', (evt) => captureRatioDev(evt, () => { copyRatioRoadCoords(); setRatioDevResult(ratioRoadCoordsCode() + '\n\nRatio-pad gekopieerd.', 'ok'); }), true);
  document.getElementById('devRatioPathResetBtn')?.addEventListener('click', (evt) => captureRatioDev(evt, () => { resetRatioRoadCoords(); setRatioDevResult('Ratio-pad gereset. Sleep opnieuw of kopieer de standaardposities.', 'ok'); }), true);
  document.getElementById('ratioPathCopyBtn')?.addEventListener('click', (evt) => { evt.preventDefault(); evt.stopPropagation(); if(evt.stopImmediatePropagation) evt.stopImmediatePropagation(); copyRatioRoadCoords(); }, true);
  document.getElementById('ratioPathResetBtn')?.addEventListener('click', (evt) => { evt.preventDefault(); evt.stopPropagation(); if(evt.stopImmediatePropagation) evt.stopImmediatePropagation(); resetRatioRoadCoords(); }, true);
  document.getElementById('devStartBtn')?.addEventListener('click', (evt) => captureRatioDev(evt, startRatioDevPreview), true);
  document.getElementById('devNextBtn')?.addEventListener('click', (evt) => captureRatioDev(evt, () => setRatioDevResult(generateRatioLevelCode(), 'ok')), true);
  document.getElementById('devQuestionListBtn')?.addEventListener('click', (evt) => captureRatioDev(evt, showRatioDevList), true);
  document.getElementById('devMassTestBtn')?.addEventListener('click', (evt) => captureRatioDev(evt, () => {
    setRatioDevResult('Ratio QA loopt...', 'running');
    setTimeout(() => {
      const result = ratioLevelAnalysisText();
      setRatioDevResult(result.text, result.problems ? 'warn' : 'ok');
    }, 30);
  }), true);
  document.getElementById('devFullTestBtn')?.addEventListener('click', (evt) => captureRatioDev(evt, () => {
    const report = ratioLevelAnalysisText();
    const generated = generateRatioLevelCode();
    setRatioDevResult(report.text + '\n\n---\n\n' + generated, report.problems ? 'warn' : 'ok');
  }), true);
  document.getElementById('pathCopyBtn')?.addEventListener('click', (evt) => {
    if(ratioRoot && !ratioRoot.classList.contains('hidden') && ratioRoadmap && !ratioRoadmap.classList.contains('hidden') && RATIO_PATH_EDIT_MODE){
      evt.preventDefault(); evt.stopPropagation(); if(evt.stopImmediatePropagation) evt.stopImmediatePropagation(); copyRatioRoadCoords();
    }
  }, true);
  document.getElementById('pathResetBtn')?.addEventListener('click', (evt) => {
    if(ratioRoot && !ratioRoot.classList.contains('hidden') && ratioRoadmap && !ratioRoadmap.classList.contains('hidden') && RATIO_PATH_EDIT_MODE){
      evt.preventDefault(); evt.stopPropagation(); if(evt.stopImmediatePropagation) evt.stopImmediatePropagation(); resetRatioRoadCoords();
    }
  }, true);
  // Ratio world opens through the same topicBtn/mapPin flow as the other worlds.
  window.openRatioGame = openRatioGame;
  window.startRatioLevel = startRatioLevel;
})();
