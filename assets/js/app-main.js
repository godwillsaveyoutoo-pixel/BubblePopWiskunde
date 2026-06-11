// BubblePopWiskunde app-main.js; extracted from index.html.
// // Extracted script block 1; original line 6111; attrs: (no attributes)

(() => {
  const stage = document.getElementById("stage");
  const targetText = document.getElementById("targetText");
  const targetFrac = document.getElementById("targetFrac");
  const targetModelWrap = document.getElementById("targetModelWrap");
  const numberLineWrap = document.getElementById("numberLineWrap");
  const levelText = document.getElementById("levelText");
  const scoreText = document.getElementById("scoreText");
  const leftText = document.getElementById("leftText");
  const toast = document.getElementById("toast");
  const nextRoundBtn = document.getElementById("nextRoundBtn");
  const startOverlay = document.getElementById("startOverlay");
  const introSplash = document.getElementById("introSplash");
  const introEnterBtn = document.getElementById("introEnterBtn");
  const endOverlay = document.getElementById("endOverlay");
  const endText = document.getElementById("endText");
  const hintText = document.getElementById("hintText");
  const phone = document.getElementById("phone");
  const timerText = document.getElementById("timerText");
  const rankBtn = document.getElementById("rankBtn");
  const audioBtn = document.getElementById("audioBtn");
  const audioPanel = document.getElementById("audioPanel");
  const audioPanelTitle = document.getElementById("audioPanelTitle");
  const musicVolumeSlider = document.getElementById("musicVolume");
  const sfxVolumeSlider = document.getElementById("sfxVolume");
  const musicVolumeLabel = document.getElementById("musicVolumeLabel");
  const sfxVolumeLabel = document.getElementById("sfxVolumeLabel");
  const musicVolumeValue = document.getElementById("musicVolumeValue");
  const sfxVolumeValue = document.getElementById("sfxVolumeValue");
  const audioHint = document.getElementById("audioHint");
  const ratioAudioBtnMain = document.getElementById("ratioAudioBtn");
  const ratioLangSelMiniMain = document.getElementById("ratioLangSelMini");
  const mapRankBtn = document.getElementById("mapRankBtn");
  const profilePanel = document.getElementById("profilePanel");
  const playerNameInput = document.getElementById("playerNameInput");
  const savePlayerBtn = document.getElementById("savePlayerBtn");
  const guestPlayerBtn = document.getElementById("guestPlayerBtn");
  const leaderboardPanel = document.getElementById("leaderboardPanel");
  const leaderboardList = document.getElementById("leaderboardList");
  const closeRankBtn = document.getElementById("closeRankBtn");
  const resetRankBtn = document.getElementById("resetRankBtn");
  const leaderboardNameInput = document.getElementById("leaderboardNameInput");
  const saveRankNameBtn = document.getElementById("saveRankNameBtn");
  const sessionBriefPanel = document.getElementById("sessionBriefPanel");
  const sessionBriefBadge = document.getElementById("sessionBriefBadge");
  const sessionBriefTitle = document.getElementById("sessionBriefTitle");
  const sessionBriefText = document.getElementById("sessionBriefText");
  const sessionBriefQuestions = document.getElementById("sessionBriefQuestions");
  const sessionBriefDifficulty = document.getElementById("sessionBriefDifficulty");
  const sessionBriefReward = document.getElementById("sessionBriefReward");
  const topicLearningPath = document.getElementById("topicLearningPath");
  const topicPathNodes = document.getElementById("topicPathNodes");
  const topicPathProgressText = document.getElementById("topicPathProgressText");
  const topicPathNextText = document.getElementById("topicPathNextText");
  const briefingTopicPath = document.getElementById("briefingTopicPath");
  const briefingPathNodes = document.getElementById("briefingPathNodes");
  const briefingPathProgressText = document.getElementById("briefingPathProgressText");
  const briefingPathNextText = document.getElementById("briefingPathNextText");
  const pathTopBar = document.getElementById("pathTopBar");
  const pathBottomBar = document.getElementById("pathBottomBar");
  const pathTopTitle = document.getElementById("pathTopTitle");
  const pathTopSub = document.getElementById("pathTopSub");
  const pathBottomTitle = document.getElementById("pathBottomTitle");
  const pathBottomMeta = document.getElementById("pathBottomMeta");
  const pathStartBtn = document.getElementById("pathStartBtn");
  const pathBackBtn = document.getElementById("pathBackBtn");
  const pathMapBackBtn = document.getElementById("pathMapBackBtn");
  const pathEditorPanel = document.getElementById("pathEditorPanel");
  const pathCopyBtn = document.getElementById("pathCopyBtn");
  const pathResetBtn = document.getElementById("pathResetBtn");
  const sessionPlayerNameInput = document.getElementById("sessionPlayerNameInput");
  const sessionBriefStartBtn = document.getElementById("sessionBriefStartBtn");
  const sessionBriefMenuBtn = document.getElementById("sessionBriefMenuBtn");
  const endPathBtn = document.getElementById("endPathBtn");
  const endWorldBtn = document.getElementById("endWorldBtn");
  const sessionUserLine = document.getElementById("sessionUserLine");
  const loginPanel = document.getElementById("loginPanel");
  const loginUserInput = document.getElementById("loginUserInput");
  const loginPassInput = document.getElementById("loginPassInput");
  const loginSubmitBtn = document.getElementById("loginSubmitBtn");
  const loginGuestFillBtn = document.getElementById("loginGuestFillBtn");
  const loginError = document.getElementById("loginError");
  const accountChip = document.getElementById("accountChip");
  const accountNameText = document.getElementById("accountNameText");
  const leaderboardUserLine = document.getElementById("leaderboardUserLine");
  const debugPanel = document.getElementById("debugPanel");
  const devPanel = document.getElementById("devPanel");
  const devTopicSelect = document.getElementById("devTopicSelect");
  const devTierSelect = document.getElementById("devTierSelect");
  const devStartBtn = document.getElementById("devStartBtn");
  const devNextBtn = document.getElementById("devNextBtn");
  const devMassTestBtn = document.getElementById("devMassTestBtn");
  const devFullTestBtn = document.getElementById("devFullTestBtn");
  const devQuestionListBtn = document.getElementById("devQuestionListBtn");
  const devAllQuestionListBtn = document.getElementById("devAllQuestionListBtn");
  const devCopyReportBtn = document.getElementById("devCopyReportBtn");
  const devResetProgressBtn = document.getElementById("devResetProgressBtn");
  const devPanelResult = document.getElementById("devPanelResult");
  let lastDevReportText = "";
  const URL_FLAGS = new URLSearchParams(window.location.search);
  const HASH_FLAGS = new URLSearchParams(String(window.location.hash || "").replace(/^#\??/, ""));
  const flagOn = (name) => URL_FLAGS.get(name) === "1" || HASH_FLAGS.get(name) === "1";
  const DEBUG_MODE = flagOn("debug") || flagOn("dev");
  const DEV_MODE = flagOn("dev") || flagOn("developer");
  // v70 developer build: leerpad-nodes staan standaard open, zonder ?dev=1.
  // Zet tijdelijk uit met ?student=1 of ?lock=1. Permanente unlock kan ook met ?pathunlock=1 of #pathunlock=1.
  const DEVELOPER_UNLOCK_DISABLED = flagOn("student") || flagOn("lock") || flagOn("lockPaths");
  const DEVELOPER_UNLOCK_ALL = !DEVELOPER_UNLOCK_DISABLED || DEV_MODE || flagOn("unlock") || flagOn("unlockAll") || flagOn("pathunlock") || flagOn("devUnlock") || localStorage.getItem("bubblePopDeveloperUnlock") === "1";
  if(flagOn("unlock") || flagOn("unlockAll") || flagOn("pathunlock") || flagOn("devUnlock") || DEV_MODE){
    try{ localStorage.setItem("bubblePopDeveloperUnlock", "1"); }catch(e){}
  }
  const PATH_EDIT_MODE = DEV_MODE || flagOn("pathEdit") || flagOn("editPath");
  const AUTO_NEXT_DELAY_MS = 1100;
  if(DEBUG_MODE) document.documentElement.classList.add("debugMode");
  if(DEV_MODE) document.documentElement.classList.add("devMode");
  if(DEVELOPER_UNLOCK_ALL) document.documentElement.classList.add("developerUnlockAll");
  if(PATH_EDIT_MODE) document.documentElement.classList.add("pathEditMode");

  const langSel = document.getElementById("langSel");
  const langSelMini = document.getElementById("langSelMini");
  const ui = {
    title: document.getElementById("uiTitle"),
    intro: document.getElementById("uiIntro"),
    langLabel: document.getElementById("uiLangLabel"),
    startBtn: document.getElementById("startBtn"),
    restartBtn: document.getElementById("restartBtn"),
    menuBtn: document.getElementById("menuBtn"),
    fsBtn: document.getElementById("fsBtn"),
    skipBtn: document.getElementById("skipBtn"),
    doneTitle: document.getElementById("uiDoneTitle"),
    topicGrid: document.getElementById("topicGrid"),
    topicFractionsTitle: document.getElementById("topicFractionsTitle"),
    topicFractionsDesc: document.getElementById("topicFractionsDesc"),
    topicIneqTitle: document.getElementById("topicIneqTitle"),
    topicIneqDesc: document.getElementById("topicIneqDesc"),
    topicMixedTitle: document.getElementById("topicMixedTitle"),
    topicMixedDesc: document.getElementById("topicMixedDesc"),
    topicCoordTitle: document.getElementById("topicCoordTitle"),
    topicCoordDesc: document.getElementById("topicCoordDesc"),
    topicNumberTitle: document.getElementById("topicNumberTitle"),
    topicNumberDesc: document.getElementById("topicNumberDesc"),
    topicShapesTitle: document.getElementById("topicShapesTitle"),
    topicShapesDesc: document.getElementById("topicShapesDesc"),
    topicEqTitle: document.getElementById("topicEqTitle"),
    topicEqDesc: document.getElementById("topicEqDesc"),
    topicPercentTitle: document.getElementById("topicPercentTitle"),
    topicPercentDesc: document.getElementById("topicPercentDesc"),
    topicRatiosTitle: document.getElementById("topicRatiosTitle"),
    topicRatiosDesc: document.getElementById("topicRatiosDesc")
  };

  const gameRoadmapOverlay = document.getElementById("gameRoadmapOverlay");
  const gameRoadmapStage = document.getElementById("gameRoadmapStage");
  const ROADMAP_TOPIC_TO_KEY = {
    fractions:"fractions",
    inequalities:"inequalities",
    coordinates:"coordinates",
    numbertheory:"numbers",
    shapes:"shapes",
    equations:"equations",
    percentages:"percentages",
    ratios:"ratios"
  };
  const ROADMAP_KEY_TO_TOPIC = Object.fromEntries(Object.entries(ROADMAP_TOPIC_TO_KEY).map(([topic, key]) => [key, topic]));

  const atlasDrawer = document.getElementById("atlasDrawer");
  const atlasDrawerOrb = document.getElementById("atlasDrawerOrb");
  const atlasDrawerTitle = document.getElementById("atlasDrawerTitle");
  const atlasDrawerDesc = document.getElementById("atlasDrawerDesc");
  const atlasDrawerState = document.getElementById("atlasDrawerState");
  const atlasDrawerProgress = document.getElementById("atlasDrawerProgress");
  const atlasStartBtn = document.getElementById("atlasStartBtn");
  const atlasRankBtn = document.getElementById("atlasRankBtn");
  const atlasAudioBtn = document.getElementById("atlasAudioBtn");
  const atlasLangBtn = document.getElementById("atlasLangBtn");
  const atlasLangMenu = document.getElementById("atlasLangMenu");
  const atlasDevPanel = document.getElementById("atlasDevPanel");
  const atlasCopyBtn = document.getElementById("atlasCopyBtn");
  const atlasResetBtn = document.getElementById("atlasResetBtn");

  const ATLAS_WORLD_META = {
    fractions:{title:"Breukenzee", desc:"Maak breuken door bubbles samen te voegen.", icon:"🌊", color:"#57e4ff", open:true},
    inequalities:{title:"Ongelijkhedenstorm", desc:"Voorlopig geblokkeerd.", icon:"🔒", color:"#9aa6b4", open:false},
    coordinates:{title:"Coördinatenbaai", desc:"Voorlopig geblokkeerd.", icon:"🔒", color:"#9aa6b4", open:false},
    numbertheory:{title:"Getallenbaai", desc:"Voorlopig geblokkeerd.", icon:"🔒", color:"#9aa6b4", open:false},
    shapes:{title:"Vormeneiland", desc:"Voorlopig geblokkeerd.", icon:"🔒", color:"#9aa6b4", open:false},
    equations:{title:"Vergelijkingenvallei", desc:"Voorlopig geblokkeerd.", icon:"🔒", color:"#9aa6b4", open:false},
    percentages:{title:"Procentenhaven", desc:"Voorlopig geblokkeerd.", icon:"🔒", color:"#9aa6b4", open:false},
    ratios:{title:"Verhoudingenhaven", desc:"Verhoudingen bouwen met slimme bubbels.", icon:"⚗️", color:"#7ee6c6", open:true},
    grafiekgebergte:{title:"Grafiekgebergte", desc:"Binnenkort: grafieken lezen en tekenen.", icon:"📈", color:"#80b6ff", open:false},
    functiefjord:{title:"Functiefjord", desc:"Binnenkort: functies, tabellen en grafieken.", icon:"ƒ", color:"#61e4ff", open:false},
    statistiekbaai:{title:"Statistiekbaai", desc:"Binnenkort: gegevens, gemiddelde en grafieken.", icon:"📊", color:"#bf7dff", open:false},
    meetkundewoud:{title:"Meetkundewoud", desc:"Binnenkort: meetkunde en constructies.", icon:"📐", color:"#83e079", open:false},
    "tel-kanskaravaan":{title:"Kanskaravaan", desc:"Binnenkort: tellen, kans en experimenten.", icon:"🎲", color:"#ffbf5e", open:false}
  };


  const ATLAS_WORLD_I18N = {
    nl:{
      fractions:{title:"Breukenzee", desc:"Maak breuken door bubbles samen te voegen."},
      inequalities:{title:"Ongelijkhedenstorm", desc:"Getallenlijnen, groter/kleiner en ongelijkheden."},
      coordinates:{title:"Coördinatenbaai", desc:"Punten lezen, plaatsen en verschuiven."},
      numbertheory:{title:"Getallenbaai", desc:"Veelvouden, delers en priemgetallen."},
      shapes:{title:"Vormeneiland", desc:"Vlakke figuren, eigenschappen en symmetrie."},
      equations:{title:"Vergelijkingenvallei", desc:"Balans, onbekenden en stappenplannen."},
      percentages:{title:"Procentenhaven", desc:"Procenten, korting en omgekeerd rekenen."},
      ratios:{title:"Verhoudingenhaven", desc:"Verhoudingen bouwen met slimme bubbels."},
      grafiekgebergte:{title:"Grafiekgebergte", desc:"Binnenkort: grafieken lezen en tekenen."},
      functiefjord:{title:"Functiefjord", desc:"Binnenkort: functies, tabellen en grafieken."},
      statistiekbaai:{title:"Statistiekbaai", desc:"Binnenkort: gegevens, gemiddelde en grafieken."},
      meetkundewoud:{title:"Meetkundewoud", desc:"Binnenkort: meetkunde en constructies."},
      "tel-kanskaravaan":{title:"Kanskaravaan", desc:"Binnenkort: tellen, kans en experimenten."}
    },
    en:{
      fractions:{title:"Fractions Bay", desc:"Make fractions by merging bubbles."},
      inequalities:{title:"Inequality Storm", desc:"Number lines, greater/less than, and inequalities."},
      coordinates:{title:"Coordinates Bay", desc:"Read, place, and move points."},
      numbertheory:{title:"Number Bay", desc:"Multiples, divisors, and prime numbers."},
      shapes:{title:"Shape Island", desc:"Plane figures, properties, and symmetry."},
      equations:{title:"Equation Valley", desc:"Balance, unknowns, and solving steps."},
      percentages:{title:"Percent Harbor", desc:"Percentages, discounts, and reverse reasoning."},
      ratios:{title:"Ratio Harbor", desc:"Build ratios with smart bubbles."},
      grafiekgebergte:{title:"Graphs Mountain", desc:"Coming soon: read and draw graphs."},
      functiefjord:{title:"Function Fjord", desc:"Coming soon: functions, tables, and graphs."},
      statistiekbaai:{title:"Statistics Bay", desc:"Coming soon: data, averages, and charts."},
      meetkundewoud:{title:"Geometry Forest", desc:"Coming soon: geometry and constructions."},
      "tel-kanskaravaan":{title:"Probability Caravan", desc:"Coming soon: counting, chance, and experiments."}
    },
    fr:{
      fractions:{title:"Mer des fractions", desc:"Construis des fractions en fusionnant les bulles."},
      inequalities:{title:"Tempête d’inégalités", desc:"Droites graduées, comparaisons et inégalités."},
      coordinates:{title:"Baie des coordonnées", desc:"Lire, placer et déplacer des points."},
      numbertheory:{title:"Baie des nombres", desc:"Multiples, diviseurs et nombres premiers."},
      shapes:{title:"Île des formes", desc:"Figures planes, propriétés et symétrie."},
      equations:{title:"Vallée des équations", desc:"Balance, inconnues et étapes de résolution."},
      percentages:{title:"Port des pourcentages", desc:"Pourcentages, réductions et raisonnement inverse."},
      ratios:{title:"Port des proportions", desc:"Construire des proportions avec des bulles intelligentes."},
      grafiekgebergte:{title:"Montagne des graphiques", desc:"Bientôt : lire et tracer des graphiques."},
      functiefjord:{title:"Fjord des fonctions", desc:"Bientôt : fonctions, tableaux et graphiques."},
      statistiekbaai:{title:"Baie des statistiques", desc:"Bientôt : données, moyenne et diagrammes."},
      meetkundewoud:{title:"Forêt géométrique", desc:"Bientôt : géométrie et constructions."},
      "tel-kanskaravaan":{title:"Caravane des probabilités", desc:"Bientôt : dénombrement, hasard et expériences."}
    },
    tl:{
      fractions:{title:"Dagat ng Fractions", desc:"Gumawa ng fractions sa pagsanib ng bubbles."},
      inequalities:{title:"Bagyo ng Inequalities", desc:"Number lines, mas malaki/mas maliit, at inequalities."},
      coordinates:{title:"Look ng Coordinates", desc:"Basahin, ilagay, at ilipat ang mga point."},
      numbertheory:{title:"Look ng Numbers", desc:"Multiples, divisors, at prime numbers."},
      shapes:{title:"Pulo ng Shapes", desc:"Plane figures, properties, at symmetry."},
      equations:{title:"Lambak ng Equations", desc:"Balance, unknowns, at solving steps."},
      percentages:{title:"Daungan ng Percent", desc:"Percentages, discount, at reverse reasoning."},
      ratios:{title:"Daungan ng Ratios", desc:"Bumuo ng ratios gamit ang smart bubbles."},
      grafiekgebergte:{title:"Bundok ng Graphs", desc:"Malapit na: magbasa at gumawa ng graphs."},
      functiefjord:{title:"Fjord ng Functions", desc:"Malapit na: functions, tables, at graphs."},
      statistiekbaai:{title:"Look ng Statistics", desc:"Malapit na: data, average, at charts."},
      meetkundewoud:{title:"Gubat ng Geometry", desc:"Malapit na: geometry at constructions."},
      "tel-kanskaravaan":{title:"Karaban ng Probability", desc:"Malapit na: counting, chance, at experiments."}
    }
  };

  const ROADMAP_I18N = {
    nl:{
      ratios:{title:"Verhoudingenhaven", labels:["Start","Vergelijken","Schaal","Tabel","Mixen","Recepten","Evenredigheid","Meesterproef"]},
      fractions:{title:"Breukenzee", labels:["Start","Maak 1/2","Maak 3/4","Maak 5/8","Maak 7/8","Bubble meester"]},
      inequalities:{title:"Ongelijkhedenstorm", labels:["Start","Getallenlijn","> en <","≥ en ≤","Oplossen","Meesterproef"]},
      coordinates:{title:"Coördinatenbaai", labels:["Start","Punten lezen","Punten plaatsen","Kwadranten","Verplaatsen","Meesterproef"]},
      numbers:{title:"Getallenbaai", labels:["Start","Veelvouden","Delers","Priemgetallen","Negatieve getallen","Meesterproef"]},
      shapes:{title:"Vormeneiland", labels:["Start","Vlakke figuren","Eigenschappen","Symmetrie","Hoeken","Meesterproef"]},
      equations:{title:"Vergelijkingenvallei", labels:["Start","Balans","x zoeken","Stappenplan","Haakjes","Meesterproef"]},
      percentages:{title:"Procentenhaven", labels:["Start","Deel van geheel","Korting","Vermeerderen","Omgekeerd","Meesterproef"]},
      graphs:{title:"Grafiekgebergte", labels:["Start","Assen","Punten","Lijn lezen","Stijgen/dalen","Meesterproef"]},
      functions:{title:"Functiefjord", labels:["Start","Invoer-uitvoer","Tabel","Voorschrift","Grafiek","Meesterproef"]},
      statistics:{title:"Statistiekbaai", labels:["Start","Gegevens","Gemiddelde","Mediaan","Grafieken","Meesterproef"]},
      probability:{title:"Kanskaravaan", labels:["Start","Kanswoorden","Breuk als kans","Dobbelsteen","Combineren","Meesterproef"]}
    },
    en:{
      ratios:{title:"Ratio Harbor", labels:["Start","Compare","Scale","Table","Mix","Recipes","Proportionality","Master Trial"]},
      fractions:{title:"Fractions Bay", labels:["Start","Make 1/2","Make 3/4","Make 5/8","Make 7/8","Bubble master"]},
      inequalities:{title:"Inequality Storm", labels:["Start","Number line","> and <","≥ and ≤","Solve","Master Trial"]},
      coordinates:{title:"Coordinates Bay", labels:["Start","Read points","Place points","Quadrants","Move","Master Trial"]},
      numbers:{title:"Number Bay", labels:["Start","Multiples","Divisors","Prime numbers","Negative numbers","Master Trial"]},
      shapes:{title:"Shape Island", labels:["Start","Plane figures","Properties","Symmetry","Angles","Master Trial"]},
      equations:{title:"Equation Valley", labels:["Start","Balance","Find x","Step plan","Brackets","Master Trial"]},
      percentages:{title:"Percent Harbor", labels:["Start","Part of a whole","Discount","Increase","Reverse","Master Trial"]},
      graphs:{title:"Graphs Mountain", labels:["Start","Axes","Points","Read a line","Increase/decrease","Master Trial"]},
      functions:{title:"Function Fjord", labels:["Start","Input-output","Table","Rule","Graph","Master Trial"]},
      statistics:{title:"Statistics Bay", labels:["Start","Data","Mean","Median","Charts","Master Trial"]},
      probability:{title:"Probability Caravan", labels:["Start","Chance words","Fraction as chance","Dice","Combine","Master Trial"]}
    },
    fr:{
      ratios:{title:"Port des proportions", labels:["Départ","Comparer","Échelle","Tableau","Mélanger","Recettes","Proportionnalité","Épreuve finale"]},
      fractions:{title:"Mer des fractions", labels:["Départ","Fais 1/2","Fais 3/4","Fais 5/8","Fais 7/8","Maître des bulles"]},
      inequalities:{title:"Tempête d’inégalités", labels:["Départ","Droite graduée","> et <","≥ et ≤","Résoudre","Épreuve finale"]},
      coordinates:{title:"Baie des coordonnées", labels:["Départ","Lire des points","Placer des points","Quadrants","Déplacer","Épreuve finale"]},
      numbers:{title:"Baie des nombres", labels:["Départ","Multiples","Diviseurs","Nombres premiers","Nombres négatifs","Épreuve finale"]},
      shapes:{title:"Île des formes", labels:["Départ","Figures planes","Propriétés","Symétrie","Angles","Épreuve finale"]},
      equations:{title:"Vallée des équations", labels:["Départ","Balance","Trouver x","Étapes","Parenthèses","Épreuve finale"]},
      percentages:{title:"Port des pourcentages", labels:["Départ","Partie du tout","Réduction","Augmenter","Inverse","Épreuve finale"]},
      graphs:{title:"Montagne des graphiques", labels:["Départ","Axes","Points","Lire une droite","Monter/descendre","Épreuve finale"]},
      functions:{title:"Fjord des fonctions", labels:["Départ","Entrée-sortie","Tableau","Règle","Graphique","Épreuve finale"]},
      statistics:{title:"Baie des statistiques", labels:["Départ","Données","Moyenne","Médiane","Diagrammes","Épreuve finale"]},
      probability:{title:"Caravane des probabilités", labels:["Départ","Mots de hasard","Fraction comme chance","Dé","Combiner","Épreuve finale"]}
    },
    tl:{
      ratios:{title:"Daungan ng Ratios", labels:["Simula","Ihambing","Scale","Table","Paghaluin","Recipes","Proportionality","Master Trial"]},
      fractions:{title:"Dagat ng Fractions", labels:["Simula","Gumawa ng 1/2","Gumawa ng 3/4","Gumawa ng 5/8","Gumawa ng 7/8","Bubble master"]},
      inequalities:{title:"Bagyo ng Inequalities", labels:["Simula","Number line","> at <","≥ at ≤","Solve","Master Trial"]},
      coordinates:{title:"Look ng Coordinates", labels:["Simula","Basahin ang points","Ilagay ang points","Quadrants","Ilipat","Master Trial"]},
      numbers:{title:"Look ng Numbers", labels:["Simula","Multiples","Divisors","Prime numbers","Negative numbers","Master Trial"]},
      shapes:{title:"Pulo ng Shapes", labels:["Simula","Plane figures","Properties","Symmetry","Angles","Master Trial"]},
      equations:{title:"Lambak ng Equations", labels:["Simula","Balance","Hanapin ang x","Step plan","Brackets","Master Trial"]},
      percentages:{title:"Daungan ng Percent", labels:["Simula","Part ng whole","Discount","Increase","Reverse","Master Trial"]},
      graphs:{title:"Bundok ng Graphs", labels:["Simula","Axes","Points","Basahin ang line","Taas/baba","Master Trial"]},
      functions:{title:"Fjord ng Functions", labels:["Simula","Input-output","Table","Rule","Graph","Master Trial"]},
      statistics:{title:"Look ng Statistics", labels:["Simula","Data","Mean","Median","Charts","Master Trial"]},
      probability:{title:"Karaban ng Probability", labels:["Simula","Chance words","Fraction as chance","Dice","Combine","Master Trial"]}
    }
  };

  /* v58 — correcte wereldkaart- en roadmapvertalingen */
  Object.assign(ATLAS_WORLD_I18N.tl, {
    fractions:{title:"Dagat ng Praksyon", desc:"Gumawa ng praksyon sa pagsanib ng bubbles."},
    inequalities:{title:"Bagyo ng Di-pagkakapantay", desc:"Linya ng bilang, mas malaki/mas maliit, at mga di-pagkakapantay."},
    coordinates:{title:"Look ng Koordinado", desc:"Basahin, ilagay, at ilipat ang mga punto."},
    numbertheory:{title:"Look ng Bilang", desc:"Mga multiple, tagahati, at prime number."},
    shapes:{title:"Pulo ng Hugis", desc:"Mga hugis sa patag, katangian, at simetriya."},
    equations:{title:"Lambak ng Ekwasyon", desc:"Balanseng timbangan, unknowns, at mga hakbang sa paglutas."},
    percentages:{title:"Daungan ng Porsiyento", desc:"Porsiyento, diskwento, at baliktad na pag-iisip."},
    ratios:{title:"Daungan ng Ratio", desc:"Bumuo ng mga ratio gamit ang matatalinong bula."},
    grafiekgebergte:{title:"Bundok ng Graph", desc:"Malapit na: magbasa at gumawa ng graph."},
    functiefjord:{title:"Fjord ng Function", desc:"Malapit na: function, talahanayan, at graph."},
    statistiekbaai:{title:"Look ng Estadistika", desc:"Malapit na: datos, mean, at mga chart."},
    meetkundewoud:{title:"Gubat ng Heometriya", desc:"Malapit na: heometriya at constructions."},
    "tel-kanskaravaan":{title:"Karaban ng Probability", desc:"Malapit na: pagbibilang, chance, at experiments."}
  });
  Object.assign(ROADMAP_I18N.tl, {
    ratios:{title:"Daungan ng Ratio", labels:["Simula","Ihambing","Iskala","Talahanayan","Halo","Resipe","Proporsiyonalidad","Pangwakas na hamon"]},
    fractions:{title:"Dagat ng Praksyon", labels:["Simula","Gumawa ng 1/2","Gumawa ng 3/4","Gumawa ng 5/8","Gumawa ng 7/8","Bubble master"]},
    inequalities:{title:"Bagyo ng Di-pagkakapantay", labels:["Simula","Linya ng bilang","> at <","≥ at ≤","Lutasin","Pangwakas na hamon"]},
    coordinates:{title:"Look ng Koordinado", labels:["Simula","Basahin ang punto","Ilagay ang punto","Kuwadrante","Ilipat","Pangwakas na hamon"]},
    numbers:{title:"Look ng Bilang", labels:["Simula","Mga multiple","Mga tagahati","Prime numbers","Negatibong bilang","Pangwakas na hamon"]},
    shapes:{title:"Pulo ng Hugis", labels:["Simula","Hugis sa patag","Katangian","Simetriya","Anggulo","Pangwakas na hamon"]},
    equations:{title:"Lambak ng Ekwasyon", labels:["Simula","Balanseng timbangan","Hanapin ang x","Hakbang-hakbang","Panaklong","Pangwakas na hamon"]},
    percentages:{title:"Daungan ng Porsiyento", labels:["Simula","Bahagi ng kabuuan","Diskwento","Dagdagan","Baliktarin","Pangwakas na hamon"]},
    graphs:{title:"Bundok ng Graph", labels:["Simula","Mga axis","Mga punto","Basahin ang linya","Taas/baba","Pangwakas na hamon"]},
    functions:{title:"Fjord ng Function", labels:["Simula","Input-output","Talahanayan","Rule","Graph","Pangwakas na hamon"]},
    statistics:{title:"Look ng Estadistika", labels:["Simula","Datos","Mean","Median","Mga chart","Pangwakas na hamon"]},
    probability:{title:"Karaban ng Probability", labels:["Simula","Mga salitang pang-chance","Praksyon bilang chance","Dice","Pagsamahin","Pangwakas na hamon"]}
  });


  function langPackFor(dict){
    return dict[currentLang] || dict.nl || {};
  }

  function translatedAtlasMeta(key, base){
    const pack = langPackFor(ATLAS_WORLD_I18N);
    const trMeta = pack[key] || {};
    return {
      ...base,
      title: trMeta.title || base.title,
      desc: trMeta.desc || base.desc
    };
  }

  function translateRoadmapConfig(cfg){
    const key = cfg && cfg.worldKey;
    const pack = langPackFor(ROADMAP_I18N);
    const trCfg = key && pack[key] ? pack[key] : null;
    if(!trCfg) return cfg;
    cfg.title = trCfg.title || cfg.title;
    if(Array.isArray(cfg.nodes) && Array.isArray(trCfg.labels)){
      cfg.nodes.forEach((node, i) => {
        node.label = trCfg.labels[i] || node.label;
      });
    }
    return cfg;
  }



  const I18N = {
    nl: {
      htmlLang:"nl", title:"Wiskunde Bubble Pop", intro:"Kies een wereld. De engine blijft dezelfde: bubbels poppen, score halen, korte rondes op smartphone.", lang:"Taal", audioLabel:"Geluid", audioAdjust:"Geluid aanpassen", audioTitle:"Geluid", musicLabel:"Muziek", sfxLabel:"Effecten", audioNow:"Nu", audioHintMissing:"Muziek: plaats de gekozen mp3\'s exact met hun originele naam in assets/audio/",
      start:"Start", restart:"Opnieuw", menu:"Terug", skip:"Skip", next:"Volgende", done:"Klaar", score:"Score", rounds:"Rondes", played:"Je speelde topic:",
      fractionsTitle:"🫧 Breukenzee", fractionsDesc:"Breuken optellen door bubbles samen te voegen.",
      inequalitiesTitle:"⚡ Ongelijkhedenstorm", inequalitiesDesc:"Pop waarden die passen bij x > 3 of x ≤ −2.",
      mixedTitle:"🎲 Gemengd", mixedDesc:"Breuken, ongelijkheden, coördinaten, vormen en vergelijkingen door elkaar.",
      coordTitle:"🏝️ Coördinatenbaai", coordDesc:"Lees punten af op een assenstelsel.",
      numberTitle:"💠 Getallenbaai", numberDesc:"Delers, veelvouden en priemgetallen.", shapesTitle:"🔷 Vormeneiland", shapesDesc:"Vlakke figuren, driehoeken, vierhoeken en symmetrie.", eqTitle:"⚖️ Vergelijkingenvallei", eqDesc:"Vind waarden die een vergelijking waar maken.", topicAria:"Kies een wiskundewereld",
      targetIneq:"pop alle waarden waarvoor", targetEqual:"zoek alle bubbels gelijk aan", targetEqualVisual:"zoek alle bubbels gelijk aan deze breuk", targetGreater:"zoek alle bubbels groter dan", targetSmaller:"zoek alle bubbels kleiner dan",
      openDot:"open bolletje: grens telt niet mee", closedDot:"gevuld bolletje: grens telt mee", rightArrow:"naar rechts", leftArrow:"naar links", arrow:"pijl",
      levelFractions:"Breuken", levelIneq:"Ongelijk", levelCoord:"Coördinaten", levelNumbers:"Getallen", levelShapes:"Vormen", levelEq:"Vergelijk", levelMix:"Mix", topicFractions:"Breuken", topicIneq:"Ongelijkheden", topicCoord:"Coördinaten", topicNumbers:"Getallenbaai", topicShapes:"Vormeneiland", topicEq:"Vergelijkingenvallei", topicMixed:"Gemengd",
      targetCoordinate:"klik het punt met coördinaat", targetCoordX:"klik alle punten met x =", targetCoordY:"klik alle punten met y =", coordHint:"Klik alle punten die aan de opdracht voldoen. De punten zelf tonen geen oplossing.",
      targetDivisors:"pop alle delers van", targetMultiples:"pop alle veelvouden van", targetPrimes:"pop alle priemgetallen", numberHint:"Een deler gaat zonder rest in het getal. Een veelvoud vind je in de maaltafel.",
      targetShapes:"pop alle figuren die passen bij", shapeHint:"Kijk naar eigenschappen: zijden, hoeken, evenwijdigheid, diagonalen en spiegeling. Spiegelassen worden niet getekend.", targetEquation:"pop alle waarden waarvoor", equationHint:"Vervang x door de waarde in de bubbel. Klopt links en rechts? Dan mag je poppen. Breuken worden met een horizontale breukstreep getoond.",
      shape_triangles:"driehoeken",
      shape_quadrilaterals:"vierhoeken",
      shape_3sides:"figuren met 3 zijden",
      shape_4sides:"figuren met 4 zijden",
      shape_atLeastOneRightAngle:"figuren met minstens één rechte hoek",
      shape_equilateralTriangles:"gelijkzijdige driehoeken",
      shape_isoscelesTriangles:"gelijkbenige driehoeken",
      shape_scaleneTriangles:"ongelijkbenige driehoeken",
      shape_rightTriangles:"rechthoekige driehoeken",
      shape_acuteTriangles:"scherphoekige driehoeken",
      shape_obtuseTriangles:"stomphoekige driehoeken",
      shape_squares:"vierkanten",
      shape_rectangles:"rechthoeken",
      shape_rhombi:"ruiten",
      shape_parallelograms:"parallellogrammen",
      shape_trapezoids:"trapeziums",
      shape_kites:"vliegers",
      shape_atLeastOneParallelPair:"figuren met minstens één paar evenwijdige zijden",
      shape_twoParallelPairs:"figuren met twee paar evenwijdige zijden",
      shape_allSidesEqual:"figuren met alle zijden even lang",
      shape_noParallelSides:"figuren zonder evenwijdige zijden",
      shape_equalDiagonals:"vierhoeken met diagonalen die even lang zijn",
      shape_perpendicularDiagonals:"vierhoeken met loodrechte diagonalen",
      shape_bisectingDiagonals:"parallellogrammen: diagonalen snijden elkaar middendoor",
      shape_noSymmetryAxis:"figuren met geen spiegelas",
      shape_oneSymmetryAxis:"figuren met precies 1 spiegelas",
      shape_twoSymmetryAxes:"figuren met precies 2 spiegelassen",
      shape_moreThanTwoSymmetryAxes:"figuren met meer dan 2 spiegelassen",
      shape_regularPolygons:"regelmatige veelhoeken",
      shape_quadParallelAndRight:"vierhoeken met 2 paar evenwijdige zijden én een rechte hoek",
      shape_isoscelesRightTriangles:"driehoeken met 2 gelijke zijden én een rechte hoek",
      shape_quadFourSymmetryAxes:"vierhoeken met 4 spiegelassen",
      shape_quadNoRightAngles:"vierhoeken met geen rechte hoeken",
      shape_quadNoParallelSides:"figuren met 4 zijden maar geen evenwijdige zijden",
      shapeName_equilateralTriangle:"gelijkzijdige driehoek",
      shapeName_isoscelesTriangle:"gelijkbenige driehoek",
      shapeName_rightTriangle:"rechthoekige driehoek",
      shapeName_isoscelesRightTriangle:"gelijkbenige rechthoekige driehoek",
      shapeName_obtuseTriangle:"stomphoekige driehoek",
      shapeName_scaleneAcuteTriangle:"ongelijkbenige scherphoekige driehoek",
      shapeName_square:"vierkant",
      shapeName_rectangle:"rechthoek",
      shapeName_rhombus:"ruit",
      shapeName_parallelogram:"parallellogram",
      shapeName_trapezoid:"trapezium",
      shapeName_kite:"vlieger",
      shapeName_irregularQuadrilateral:"onregelmatige vierhoek",
      shapeName_pentagon:"vijfhoek",
      shapeName_hexagon:"zeshoek",
      shapeName_circle:"cirkel",
      ariaValue:"Waarde", ariaFraction:"Breukmodel", ariaCoordinate:"Punt", good:"Goed!", wrong:"Niet deze", fits:"past!", notFits:"past niet", fullscreenDenied:"Fullscreen niet toegestaan", fullscreen:"Volledig scherm"
    },
    en: {
      htmlLang:"en", title:"Math Bubble Pop", intro:"Choose a math world and start a short round.", lang:"Language", audioLabel:"Sound", audioAdjust:"Adjust sound", audioTitle:"Sound", musicLabel:"Music", sfxLabel:"Effects", audioNow:"Now", audioHintMissing:"Music/SFX: place files with the names from assets/audio/AUDIO_TODO.txt in assets/audio/.",
      start:"Start", restart:"Play again", menu:"Back", skip:"Skip", next:"Next", done:"Finished", score:"Score", rounds:"Rounds", played:"You played topic:",
      fractionsTitle:"🫧 Fraction Sea", fractionsDesc:"Add fractions by merging bubbles.",
      inequalitiesTitle:"⚡ Inequality Storm", inequalitiesDesc:"Pop values that fit x > 3 or x ≤ −2.",
      mixedTitle:"🎲 Mixed", mixedDesc:"Fractions, inequalities, coordinates, shapes, and equations mixed together.",
      coordTitle:"🏝️ Coordinate Bay", coordDesc:"Read points on a coordinate grid.",
      numberTitle:"💠 Number Bay", numberDesc:"Divisors, multiples, and prime numbers.", shapesTitle:"🔷 Shape Island", shapesDesc:"Plane figures, triangles, quadrilaterals, and symmetry.", eqTitle:"⚖️ Equation Valley", eqDesc:"Find values that make an equation true.", topicAria:"Choose a math world",
      targetIneq:"pop all values for which", targetEqual:"find all bubbles equal to", targetEqualVisual:"find all bubbles equal to this fraction", targetGreater:"find all bubbles greater than", targetSmaller:"find all bubbles smaller than",
      openDot:"open dot: boundary not included", closedDot:"filled dot: boundary included", rightArrow:"to the right", leftArrow:"to the left", arrow:"arrow",
      levelFractions:"Fractions", levelIneq:"Inequality", levelCoord:"Coordinates", levelNumbers:"Numbers", levelShapes:"Shapes", levelEq:"Equations", levelMix:"Mix", topicFractions:"Fractions", topicIneq:"Inequalities", topicCoord:"Coordinates", topicNumbers:"Number Bay", topicShapes:"Shape Island", topicEq:"Equation Valley", topicMixed:"Mixed",
      targetCoordinate:"click the point with coordinate", targetCoordX:"click all points with x =", targetCoordY:"click all points with y =", coordHint:"Click all points that match the instruction. The points do not show the answer.",
      targetDivisors:"pop all divisors of", targetMultiples:"pop all multiples of", targetPrimes:"pop all prime numbers", numberHint:"A divisor goes into the number without remainder. A multiple belongs to the times table.",
      targetShapes:"pop all figures that match", shapeHint:"Look at properties: sides, angles, parallel sides, diagonals, and symmetry. Symmetry axes are not drawn.", targetEquation:"pop all values for which", equationHint:"Substitute x with the value in the bubble. If left and right match, pop it. Fractions use a horizontal fraction bar.",
      shape_triangles:"triangles",
      shape_quadrilaterals:"quadrilaterals",
      shape_3sides:"figures with 3 sides",
      shape_4sides:"figures with 4 sides",
      shape_atLeastOneRightAngle:"figures with at least one right angle",
      shape_equilateralTriangles:"equilateral triangles",
      shape_isoscelesTriangles:"isosceles triangles",
      shape_scaleneTriangles:"scalene triangles",
      shape_rightTriangles:"right triangles",
      shape_acuteTriangles:"acute triangles",
      shape_obtuseTriangles:"obtuse triangles",
      shape_squares:"squares",
      shape_rectangles:"rectangles",
      shape_rhombi:"rhombi",
      shape_parallelograms:"parallelograms",
      shape_trapezoids:"trapezoids",
      shape_kites:"kites",
      shape_atLeastOneParallelPair:"figures with at least one pair of parallel sides",
      shape_twoParallelPairs:"figures with two pairs of parallel sides",
      shape_allSidesEqual:"figures with all sides equal",
      shape_noParallelSides:"figures without parallel sides",
      shape_equalDiagonals:"quadrilaterals with equal diagonals",
      shape_perpendicularDiagonals:"quadrilaterals with perpendicular diagonals",
      shape_bisectingDiagonals:"parallelogram family: diagonals bisect each other",
      shape_noSymmetryAxis:"figures with no line of symmetry",
      shape_oneSymmetryAxis:"figures with exactly 1 line of symmetry",
      shape_twoSymmetryAxes:"figures with exactly 2 lines of symmetry",
      shape_moreThanTwoSymmetryAxes:"figures with more than 2 lines of symmetry",
      shape_regularPolygons:"regular polygons",
      shape_quadParallelAndRight:"quadrilaterals with 2 pairs of parallel sides and a right angle",
      shape_isoscelesRightTriangles:"triangles with 2 equal sides and a right angle",
      shape_quadFourSymmetryAxes:"quadrilaterals with 4 lines of symmetry",
      shape_quadNoRightAngles:"quadrilaterals with no right angles",
      shape_quadNoParallelSides:"figures with 4 sides but no parallel sides",
      shapeName_equilateralTriangle:"equilateral triangle",
      shapeName_isoscelesTriangle:"isosceles triangle",
      shapeName_rightTriangle:"right triangle",
      shapeName_isoscelesRightTriangle:"isosceles right triangle",
      shapeName_obtuseTriangle:"obtuse triangle",
      shapeName_scaleneAcuteTriangle:"scalene acute triangle",
      shapeName_square:"square",
      shapeName_rectangle:"rectangle",
      shapeName_rhombus:"rhombus",
      shapeName_parallelogram:"parallelogram",
      shapeName_trapezoid:"trapezoid",
      shapeName_kite:"kite",
      shapeName_irregularQuadrilateral:"irregular quadrilateral",
      shapeName_pentagon:"pentagon",
      shapeName_hexagon:"hexagon",
      shapeName_circle:"circle",
      ariaValue:"Value", ariaFraction:"Fraction model", ariaCoordinate:"Point", good:"Good!", wrong:"Not this one", fits:"fits!", notFits:"does not fit", fullscreenDenied:"Fullscreen not allowed", fullscreen:"Fullscreen"
    },
    fr: {
      htmlLang:"fr", title:"Maths Bubble Pop", intro:"Choisis un monde. Le moteur reste le même : éclate les bulles, gagne des points et joue de courtes manches sur smartphone.", lang:"Langue", audioLabel:"Son", audioAdjust:"Régler le son", audioTitle:"Son", musicLabel:"Musique", sfxLabel:"Effets", audioNow:"Actuel", audioHintMissing:"Musique/SFX : place les fichiers avec les noms de assets/audio/AUDIO_TODO.txt dans assets/audio/.",
      start:"Démarrer", restart:"Rejouer", menu:"Retour", skip:"Passer", next:"Suivant", done:"Terminé", score:"Score", rounds:"Manches", played:"Tu as joué le thème :",
      fractionsTitle:"🫧 Mer des fractions", fractionsDesc:"Additionne des fractions en fusionnant des bulles.",
      inequalitiesTitle:"⚡ Tempête d’inégalités", inequalitiesDesc:"Éclate les valeurs qui conviennent à x > 3 ou x ≤ −2.",
      mixedTitle:"🎲 Mélange", mixedDesc:"Fractions, inégalités, coordonnées, formes et équations mélangées.",
      coordTitle:"🏝️ Baie des coordonnées", coordDesc:"Lis des points dans un repère.",
      numberTitle:"💠 Baie des nombres", numberDesc:"Diviseurs, multiples et nombres premiers.", shapesTitle:"🔷 Île des formes", shapesDesc:"Figures planes, triangles, quadrilatères et symétrie.", eqTitle:"⚖️ Vallée des équations", eqDesc:"Trouve les valeurs qui rendent une équation vraie.", topicAria:"Choisis un monde mathématique",
      targetIneq:"éclate toutes les valeurs pour lesquelles", targetEqual:"trouve toutes les bulles égales à", targetEqualVisual:"trouve toutes les bulles égales à cette fraction", targetGreater:"trouve toutes les bulles plus grandes que", targetSmaller:"trouve toutes les bulles plus petites que",
      openDot:"point ouvert : la limite n’est pas incluse", closedDot:"point rempli : la limite est incluse", rightArrow:"vers la droite", leftArrow:"vers la gauche", arrow:"flèche",
      levelFractions:"Fractions", levelIneq:"Inégalité", levelCoord:"Coordonnées", levelNumbers:"Nombres", levelShapes:"Formes", levelEq:"Équations", levelMix:"Mix", topicFractions:"Fractions", topicIneq:"Inégalités", topicCoord:"Coordonnées", topicNumbers:"Baie des nombres", topicShapes:"Île des formes", topicEq:"Vallée des équations", topicMixed:"Mélange",
      targetCoordinate:"clique le point de coordonnée", targetCoordX:"clique tous les points avec x =", targetCoordY:"clique tous les points avec y =", coordHint:"Clique tous les points qui correspondent à la consigne. Les points n’affichent pas la réponse.",
      targetDivisors:"éclate tous les diviseurs de", targetMultiples:"éclate tous les multiples de", targetPrimes:"éclate tous les nombres premiers", numberHint:"Un diviseur partage le nombre sans reste. Un multiple se trouve dans la table de multiplication.",
      targetShapes:"éclate toutes les figures qui correspondent à", shapeHint:"Observe les propriétés : côtés, angles, parallélisme, diagonales et symétrie. Les axes ne sont pas dessinés.", targetEquation:"éclate toutes les valeurs pour lesquelles", equationHint:"Remplace x par la valeur de la bulle. Si les deux côtés sont égaux, éclate-la. Les fractions utilisent une barre horizontale.",
      shape_triangles:"triangles",
      shape_quadrilaterals:"quadrilatères",
      shape_3sides:"figures avec 3 côtés",
      shape_4sides:"figures avec 4 côtés",
      shape_atLeastOneRightAngle:"figures avec au moins un angle droit",
      shape_equilateralTriangles:"triangles équilatéraux",
      shape_isoscelesTriangles:"triangles isocèles",
      shape_scaleneTriangles:"triangles scalènes",
      shape_rightTriangles:"triangles rectangles",
      shape_acuteTriangles:"triangles acutangles",
      shape_obtuseTriangles:"triangles obtusangles",
      shape_squares:"carrés",
      shape_rectangles:"rectangles",
      shape_rhombi:"losanges",
      shape_parallelograms:"parallélogrammes",
      shape_trapezoids:"trapèzes",
      shape_kites:"cerfs-volants",
      shape_atLeastOneParallelPair:"figures avec au moins une paire de côtés parallèles",
      shape_twoParallelPairs:"figures avec deux paires de côtés parallèles",
      shape_allSidesEqual:"figures dont tous les côtés sont de même longueur",
      shape_noParallelSides:"figures sans côtés parallèles",
      shape_equalDiagonals:"quadrilatères dont les diagonales sont de même longueur",
      shape_perpendicularDiagonals:"quadrilatères avec des diagonales perpendiculaires",
      shape_bisectingDiagonals:"quadrilatères dont les diagonales se coupent en leur milieu",
      shape_noSymmetryAxis:"figures sans axe de symétrie",
      shape_oneSymmetryAxis:"figures avec exactement 1 axe de symétrie",
      shape_twoSymmetryAxes:"figures avec exactement 2 axes de symétrie",
      shape_moreThanTwoSymmetryAxes:"figures avec plus de 2 axes de symétrie",
      shape_regularPolygons:"polygones réguliers",
      shape_quadParallelAndRight:"quadrilatères avec 2 paires de côtés parallèles et un angle droit",
      shape_isoscelesRightTriangles:"triangles avec 2 côtés égaux et un angle droit",
      shape_quadFourSymmetryAxes:"quadrilatères avec 4 axes de symétrie",
      shape_quadNoRightAngles:"quadrilatères sans angles droits",
      shape_quadNoParallelSides:"figures avec 4 côtés mais sans côtés parallèles",
      shapeName_equilateralTriangle:"triangle équilatéral",
      shapeName_isoscelesTriangle:"triangle isocèle",
      shapeName_rightTriangle:"triangle rectangle",
      shapeName_isoscelesRightTriangle:"triangle rectangle isocèle",
      shapeName_obtuseTriangle:"triangle obtusangle",
      shapeName_scaleneAcuteTriangle:"triangle scalène acutangle",
      shapeName_square:"carré",
      shapeName_rectangle:"rectangle",
      shapeName_rhombus:"losange",
      shapeName_parallelogram:"parallélogramme",
      shapeName_trapezoid:"trapèze",
      shapeName_kite:"cerf-volant",
      shapeName_irregularQuadrilateral:"quadrilatère irrégulier",
      shapeName_pentagon:"pentagone",
      shapeName_hexagon:"hexagone",
      shapeName_circle:"cercle",
      ariaValue:"Valeur", ariaFraction:"Modèle de fraction", ariaCoordinate:"Point", good:"Bien !", wrong:"Pas celle-ci", fits:"convient !", notFits:"ne convient pas", fullscreenDenied:"Plein écran non autorisé", fullscreen:"Plein écran"
    },
    tl: {
      htmlLang:"tl", title:"Math Bubble Pop", intro:"Pumili ng mundo. Pareho pa rin ang laro: pumutok ng bubbles, kumuha ng puntos, at maglaro ng maiikling round sa smartphone.", lang:"Wika", audioLabel:"Tunog", audioAdjust:"Ayusin ang tunog", audioTitle:"Tunog", musicLabel:"Musika", sfxLabel:"Mga epekto", audioNow:"Ngayon", audioHintMissing:"Musika/SFX: ilagay ang files gamit ang mga pangalan sa assets/audio/AUDIO_TODO.txt sa assets/audio/.",
      start:"Simulan", restart:"Ulitin", menu:"Balik", skip:"Laktawan", next:"Sunod", done:"Tapos", score:"Iskor", rounds:"Mga round", played:"Nilalaro mong paksa:",
      fractionsTitle:"🫧 Dagat ng Fractions", fractionsDesc:"Magdagdag ng fractions sa pagsanib ng bubbles.",
      inequalitiesTitle:"⚡ Bagyo ng Inequalities", inequalitiesDesc:"Pumutok ng mga value na tugma sa x > 3 o x ≤ −2.",
      mixedTitle:"🎲 Halo-halo", mixedDesc:"Magkahalong fractions, inequalities, coordinates, shapes, at equations.",
      coordTitle:"🏝️ Coordinate Bay", coordDesc:"Basahin ang mga point sa coordinate grid.",
      numberTitle:"💠 Number Bay", numberDesc:"Divisors, multiples, at prime numbers.", shapesTitle:"🔷 Shape Island", shapesDesc:"Plane figures, triangles, quadrilaterals, at symmetry.", eqTitle:"⚖️ Equation Valley", eqDesc:"Hanapin ang values na nagpapakatotoo sa equation.", topicAria:"Pumili ng mundo ng math",
      targetIneq:"pumutok ng lahat ng value kung saan", targetEqual:"hanapin ang lahat ng bubble na katumbas ng", targetEqualVisual:"hanapin ang lahat ng bubble na katumbas ng fraction na ito", targetGreater:"hanapin ang lahat ng bubble na mas malaki kaysa", targetSmaller:"hanapin ang lahat ng bubble na mas maliit kaysa",
      openDot:"bukas na tuldok: hindi kasama ang hangganan", closedDot:"punong tuldok: kasama ang hangganan", rightArrow:"pakanan", leftArrow:"pakaliwa", arrow:"arrow",
      levelFractions:"Fractions", levelIneq:"Inequality", levelCoord:"Coordinates", levelNumbers:"Numbers", levelShapes:"Shapes", levelEq:"Equations", levelMix:"Mix", topicFractions:"Fractions", topicIneq:"Inequalities", topicCoord:"Coordinates", topicNumbers:"Number Bay", topicShapes:"Shape Island", topicEq:"Equation Valley", topicMixed:"Halo-halo",
      targetCoordinate:"pindutin ang point na may coordinate", targetCoordX:"pindutin ang lahat ng point na may x =", targetCoordY:"pindutin ang lahat ng point na may y =", coordHint:"Pindutin ang lahat ng point na tugma sa instruction. Walang sagot na nakasulat sa mga point.",
      targetDivisors:"pumutok ng lahat ng divisor ng", targetMultiples:"pumutok ng lahat ng multiple ng", targetPrimes:"pumutok ng lahat ng prime number", numberHint:"Ang divisor ay kasya sa number nang walang tira. Ang multiple ay nasa multiplication table.",
      targetShapes:"pumutok ng lahat ng figure na tugma sa", shapeHint:"Tingnan ang properties: sides, angles, parallel sides, diagonals, at symmetry. Hindi iginuguhit ang symmetry axes.", targetEquation:"pumutok ng lahat ng value kung saan", equationHint:"Ipalit ang value ng bubble sa x. Kapag pareho ang kaliwa at kanan, i-pop ito. Ang fractions ay may horizontal fraction bar.",
      shape_triangles:"mga triangle",
      shape_quadrilaterals:"mga quadrilateral",
      shape_3sides:"figures na may 3 sides",
      shape_4sides:"figures na may 4 sides",
      shape_atLeastOneRightAngle:"figures na may kahit isang right angle",
      shape_equilateralTriangles:"equilateral triangles",
      shape_isoscelesTriangles:"isosceles triangles",
      shape_scaleneTriangles:"scalene triangles",
      shape_rightTriangles:"right triangles",
      shape_acuteTriangles:"acute triangles",
      shape_obtuseTriangles:"obtuse triangles",
      shape_squares:"squares",
      shape_rectangles:"rectangles",
      shape_rhombi:"rhombi",
      shape_parallelograms:"parallelograms",
      shape_trapezoids:"trapezoids",
      shape_kites:"kites",
      shape_atLeastOneParallelPair:"figures na may kahit isang pair ng parallel sides",
      shape_twoParallelPairs:"figures na may dalawang pair ng parallel sides",
      shape_allSidesEqual:"figures na lahat ng sides ay magkapareho ang haba",
      shape_noParallelSides:"figures na walang parallel sides",
      shape_equalDiagonals:"quadrilaterals na magkapareho ang haba ng diagonals",
      shape_perpendicularDiagonals:"quadrilaterals na perpendicular ang diagonals",
      shape_bisectingDiagonals:"quadrilaterals na naghahati sa gitna ang diagonals",
      shape_noSymmetryAxis:"figures na walang line of symmetry",
      shape_oneSymmetryAxis:"figures na may eksaktong 1 line of symmetry",
      shape_twoSymmetryAxes:"figures na may eksaktong 2 lines of symmetry",
      shape_moreThanTwoSymmetryAxes:"figures na may higit sa 2 lines of symmetry",
      shape_regularPolygons:"regular polygons",
      shape_quadParallelAndRight:"quadrilaterals na may 2 pairs ng parallel sides at isang right angle",
      shape_isoscelesRightTriangles:"triangles na may 2 equal sides at isang right angle",
      shape_quadFourSymmetryAxes:"quadrilaterals na may 4 lines of symmetry",
      shape_quadNoRightAngles:"quadrilaterals na walang right angles",
      shape_quadNoParallelSides:"figures na may 4 sides pero walang parallel sides",
      shapeName_equilateralTriangle:"equilateral triangle",
      shapeName_isoscelesTriangle:"isosceles triangle",
      shapeName_rightTriangle:"right triangle",
      shapeName_isoscelesRightTriangle:"isosceles right triangle",
      shapeName_obtuseTriangle:"obtuse triangle",
      shapeName_scaleneAcuteTriangle:"scalene acute triangle",
      shapeName_square:"square",
      shapeName_rectangle:"rectangle",
      shapeName_rhombus:"rhombus",
      shapeName_parallelogram:"parallelogram",
      shapeName_trapezoid:"trapezoid",
      shapeName_kite:"kite",
      shapeName_irregularQuadrilateral:"irregular quadrilateral",
      shapeName_pentagon:"pentagon",
      shapeName_hexagon:"hexagon",
      shapeName_circle:"circle",
      ariaValue:"Value", ariaFraction:"Fraction model", ariaCoordinate:"Point", good:"Tama!", wrong:"Hindi ito", fits:"tugma!", notFits:"hindi tugma", fullscreenDenied:"Hindi pinapayagan ang fullscreen", fullscreen:"Fullscreen"
    }
  };


  /* v25.5 — extra UI-teksten voor volledige taalpass */
  Object.assign(I18N.nl, {
    tierBronze:"Brons", tierSilver:"Zilver", tierGold:"Goud", tierCompleted:"Voltooid", tierGoldReplay:"Goud opnieuw",
    questionsWord:"vragen", levelWord:"Niveau", timeWord:"Tijd", rewardWord:"Beloning",
    nextChallenge:"Volgende:", goldAchieved:"Goud gehaald",
    playerLabel:"Speler", guestName:"Gast", giveNamePlaceholder:"Geef naam",
    startRound:"Start ronde", back:"Terug", close:"Sluiten", reset:"Reset",
    sessionPerfectBetter:"10 vragen. Speel perfect voor een betere beloning.",
    sessionGoldReplayText:"Goud gehaald. Speel opnieuw om je score of tijd te verbeteren.",
    sessionBronzeText:"Speel 10 vragen perfect om Brons te verdienen.",
    sessionSilverText:"Brons gehaald. Speel 20 vragen perfect voor Zilver.",
    sessionGoldText:"Zilver gehaald. Speel 30 vragen perfect voor Goud.",
    leaderboardTitle:"Ranglijst",
    leaderboardHelp:"Perfecte sessies komen hier. Je tijden worden lokaal in deze browser bewaard.",
    leaderboardEmpty:"Nog geen perfecte sessies.",
    loginTitle:"Math World",
    loginText:"Log in om je voortgang en ranglijst lokaal te bewaren.",
    loginAccountPlaceholder:"Account",
    loginPasswordPlaceholder:"Wachtwoord",
    loginButton:"Inloggen",
    loginGuestButton:"Gast",
    loginHint:"",
    loginInvalid:"Geef een naam in of speel als gast.",
    profileTitle:"Speler",
    profileText:"Kies een naam. Voorlopig wordt dit alleen in deze browser bewaard.",
    startTest:"Start test", newQuestion:"Nieuwe vraag", test100:"Test 100", testAll:"Test alles",
    copyReport:"Kopieer rapport", resetProgress:"Reset progressie",
    devReady:"Maker QA actief · auto-next 1,1s.",
    devTestStarted:"Test gestart", devNewQuestion:"Nieuwe vraag geladen.",
    devProgressReset:"Progressie en ranglijst gereset.",
    devTestRunning:"Test loopt…",
    devFullTestRunning:"Volledige test loopt… 6 werelden × 3 tiers × 100 rondes",
    devCopied:"Gekopieerd naar klembord.",
    devCopyFailed:"Kopiëren lukte niet automatisch. Rapport staat in de console.",
    qaTitle:"QA-rapport", qaGeneratedRounds:"gegenereerde rondes",
    qaStatusOk:"Status: alles OK. Elke geteste ronde had minstens één juist antwoord en het juiste aantal bubbels.",
    qaStatusWarn:"Status: {n} aandachtspunt(en). Het spel gebruikt nu wel een veiligheidsherstel waar mogelijk.",
    qaGuardRepaired:"Hersteld door guard: {n} ronde(s) waarbij de ruwe generator iets verdachts maakte.",
    qaWhatTested:"Wat wordt getest?",
    qaCheckBubbles:"• Maakt de generator genoeg antwoordbubbels?",
    qaCheckCorrect:"• Zit er minstens één juist antwoord tussen?",
    qaCheckDuplicates:"• Zijn antwoordlabels niet dubbel?",
    qaCheckShapes:"• Bij Vormeneiland: bestaat er minstens één passende vorm bij elk vraagtype?",
    qaTested:"Getest", qaBubbles:"bubbels", qaCorrectAfterGuard:"juist na guard",
    qaGuardFixed:"Guard herstelde", qaRounds:"ronde(s)", qaRawCorrectRange:"Ruwe juist-range was",
    qaProblem:"Probleem", qaExamples:"Concrete voorbeelden:",
    qaConclusionOk:"Conclusie: de generatorcontrole vond geen technische problemen.",
    qaOk:"✓ OK", qaReview:"⚠ nakijken",
    rawNoCorrect:"oorspronkelijke generator zonder juist antwoord",
    rawBubbleCount:"te weinig/te veel bubbels vóór herstel",
    safeNoCorrect:"nog steeds geen juist antwoord",
    safeBubbleCount:"fout aantal bubbels na herstel",
    duplicateLabels:"dubbele antwoordtekst",
    shapeHealthProblem:"vormvraag zonder passende vorm",
    generatedZeroCorrect:"generator maakte 0 juiste antwoorden",
    generatedWrongBubbleCount:"generator maakte {got}/{expected} bubbels",
    afterGuardWrongBubbleCount:"na herstel {got}/{expected} bubbels",
    afterGuardNoCorrect:"na herstel nog steeds geen juist antwoord",
    tooManyCorrect:"meer juiste antwoorden dan bubbels",
    shapeControl:"vormcontrole",
    shapeTaskNoMatch:"Shape task zonder match",
    copiedExtra:"extra in console",
    perfectImproved:"Perfect! {tier} verbeterd. Tijd toegevoegd aan de ranglijst.",
    perfectEarned:"Perfect! {tier} verdiend. Tijd toegevoegd aan de ranglijst.",
    notPerfectText:"Niet perfect: dezelfde uitdaging blijft actief tot je ze foutloos haalt.",
    nextSessionText:"Volgende sessie: {tier} · {questions} vragen · niveau 1–{level}.",
    worldGoldText:"Deze wereld is nu Goud. Verbeter nu je score of ga naar een andere wereld.",
    playedRewardLine:"{played} <b>{topic}</b>."
  });
  Object.assign(I18N.en, {
    tierBronze:"Bronze", tierSilver:"Silver", tierGold:"Gold", tierCompleted:"Completed", tierGoldReplay:"Gold replay",
    questionsWord:"questions", levelWord:"Level", timeWord:"Time", rewardWord:"Reward",
    nextChallenge:"Next:", goldAchieved:"Gold earned",
    playerLabel:"Player", guestName:"Guest", giveNamePlaceholder:"Enter name",
    startRound:"Start round", back:"Back", close:"Close", reset:"Reset",
    sessionPerfectBetter:"10 questions. Play perfectly for a better reward.",
    sessionGoldReplayText:"Gold earned. Play again to improve your score or time.",
    sessionBronzeText:"Play 10 questions perfectly to earn Bronze.",
    sessionSilverText:"Bronze earned. Play 20 questions perfectly for Silver.",
    sessionGoldText:"Silver earned. Play 30 questions perfectly for Gold.",
    leaderboardTitle:"Leaderboard",
    leaderboardHelp:"Perfect sessions appear here. Your times are saved only in this browser.",
    leaderboardEmpty:"No perfect sessions yet.",
    loginTitle:"Math World",
    loginText:"Log in to save your progress and leaderboard locally.",
    loginAccountPlaceholder:"Account",
    loginPasswordPlaceholder:"Password",
    loginButton:"Log in",
    loginGuestButton:"Guest",
    loginHint:"",
    loginInvalid:"Enter a name or play as guest.",
    profileTitle:"Player",
    profileText:"Choose a name. For now, it is saved only in this browser.",
    startTest:"Start test", newQuestion:"New question", test100:"Test 100", testAll:"Test all",
    copyReport:"Copy report", resetProgress:"Reset progress",
    devReady:"Maker QA active · auto-next 1.1s.",
    devTestStarted:"Test started", devNewQuestion:"New question loaded.",
    devProgressReset:"Progress and leaderboard reset.",
    devTestRunning:"Test running…",
    devFullTestRunning:"Full test running… 6 worlds × 3 tiers × 100 rounds",
    devCopied:"Copied to clipboard.",
    devCopyFailed:"Automatic copy failed. The report is in the console.",
    qaTitle:"QA report", qaGeneratedRounds:"generated rounds",
    qaStatusOk:"Status: all OK. Every tested round had at least one correct answer and the right number of bubbles.",
    qaStatusWarn:"Status: {n} attention point(s). The game now uses a safety guard where possible.",
    qaGuardRepaired:"Repaired by guard: {n} round(s) where the raw generator made something suspicious.",
    qaWhatTested:"What is tested?",
    qaCheckBubbles:"• Does the generator make enough answer bubbles?",
    qaCheckCorrect:"• Is there at least one correct answer?",
    qaCheckDuplicates:"• Are answer labels not duplicated?",
    qaCheckShapes:"• For Shape Island: does every question type have at least one matching shape?",
    qaTested:"Tested", qaBubbles:"bubbles", qaCorrectAfterGuard:"correct after guard",
    qaGuardFixed:"Guard repaired", qaRounds:"round(s)", qaRawCorrectRange:"Raw correct range was",
    qaProblem:"Problem", qaExamples:"Concrete examples:",
    qaConclusionOk:"Conclusion: the generator check found no technical problems.",
    qaOk:"✓ OK", qaReview:"⚠ review",
    rawNoCorrect:"raw generator without a correct answer",
    rawBubbleCount:"too few/too many bubbles before repair",
    safeNoCorrect:"still no correct answer after repair",
    safeBubbleCount:"wrong bubble count after repair",
    duplicateLabels:"duplicate answer text",
    shapeHealthProblem:"shape question without a matching shape",
    generatedZeroCorrect:"generator made 0 correct answers",
    generatedWrongBubbleCount:"generator made {got}/{expected} bubbles",
    afterGuardWrongBubbleCount:"after guard {got}/{expected} bubbles",
    afterGuardNoCorrect:"still no correct answer after guard",
    tooManyCorrect:"more correct answers than bubbles",
    shapeControl:"shape check",
    shapeTaskNoMatch:"Shape task without match",
    copiedExtra:"extra in console",
    perfectImproved:"Perfect! {tier} improved. Time added to the leaderboard.",
    perfectEarned:"Perfect! {tier} earned. Time added to the leaderboard.",
    notPerfectText:"Not perfect: the same challenge stays active until you clear it flawlessly.",
    nextSessionText:"Next session: {tier} · {questions} questions · level 1–{level}.",
    worldGoldText:"This world is now Gold. Improve your score or go to another world.",
    playedRewardLine:"{played} <b>{topic}</b>."
  });
  Object.assign(I18N.fr, {
    tierBronze:"Bronze", tierSilver:"Argent", tierGold:"Or", tierCompleted:"Terminé", tierGoldReplay:"Or à rejouer",
    questionsWord:"questions", levelWord:"Niveau", timeWord:"Temps", rewardWord:"Récompense",
    nextChallenge:"Suivant :", goldAchieved:"Or obtenu",
    playerLabel:"Joueur", guestName:"Invité", giveNamePlaceholder:"Entre ton nom",
    startRound:"Commencer", back:"Retour", close:"Fermer", reset:"Réinitialiser",
    sessionPerfectBetter:"10 questions. Réussis sans faute pour une meilleure récompense.",
    sessionGoldReplayText:"Or obtenu. Rejoue pour améliorer ton score ou ton temps.",
    sessionBronzeText:"Réussis 10 questions sans faute pour obtenir le Bronze.",
    sessionSilverText:"Bronze obtenu. Réussis 20 questions sans faute pour l’Argent.",
    sessionGoldText:"Argent obtenu. Réussis 30 questions sans faute pour l’Or.",
    leaderboardTitle:"Classement",
    leaderboardHelp:"Les sessions parfaites apparaissent ici. Tes temps sont enregistrés seulement dans ce navigateur.",
    leaderboardEmpty:"Aucune session parfaite pour l’instant.",
    loginTitle:"Math World",
    loginText:"Connecte-toi pour enregistrer localement ta progression et le classement.",
    loginAccountPlaceholder:"Compte",
    loginPasswordPlaceholder:"Mot de passe",
    loginButton:"Connexion",
    loginGuestButton:"Invité",
    loginHint:"",
    loginInvalid:"Entre un nom ou joue comme invité.",
    profileTitle:"Joueur",
    profileText:"Choisis un nom. Pour l’instant, il est enregistré seulement dans ce navigateur.",
    startTest:"Démarrer test", newQuestion:"Nouvelle question", test100:"Tester 100", testAll:"Tout tester",
    copyReport:"Copier rapport", resetProgress:"Réinitialiser progrès",
    devReady:"QA créateur actif · auto-next 1,1 s.",
    devTestStarted:"Test démarré", devNewQuestion:"Nouvelle question chargée.",
    devProgressReset:"Progression et classement réinitialisés.",
    devTestRunning:"Test en cours…",
    devFullTestRunning:"Test complet en cours… 6 mondes × 3 niveaux × 100 manches",
    devCopied:"Copié dans le presse-papiers.",
    devCopyFailed:"La copie automatique a échoué. Le rapport est dans la console.",
    qaTitle:"Rapport QA", qaGeneratedRounds:"manches générées",
    qaStatusOk:"Statut : tout est OK. Chaque manche testée avait au moins une bonne réponse et le bon nombre de bulles.",
    qaStatusWarn:"Statut : {n} point(s) à vérifier. Le jeu utilise maintenant une sécurité quand c’est possible.",
    qaGuardRepaired:"Réparé par la sécurité : {n} manche(s) où le générateur brut a produit quelque chose de suspect.",
    qaWhatTested:"Qu’est-ce qui est testé ?",
    qaCheckBubbles:"• Le générateur crée-t-il assez de bulles-réponses ?",
    qaCheckCorrect:"• Y a-t-il au moins une bonne réponse ?",
    qaCheckDuplicates:"• Les textes de réponse ne sont-ils pas en double ?",
    qaCheckShapes:"• Pour Shape Island : chaque type de question a-t-il au moins une forme correcte ?",
    qaTested:"Testé", qaBubbles:"bulles", qaCorrectAfterGuard:"correct après sécurité",
    qaGuardFixed:"Sécurité a réparé", qaRounds:"manche(s)", qaRawCorrectRange:"Plage brute de bonnes réponses",
    qaProblem:"Problème", qaExamples:"Exemples concrets :",
    qaConclusionOk:"Conclusion : le contrôle du générateur n’a trouvé aucun problème technique.",
    qaOk:"✓ OK", qaReview:"⚠ vérifier",
    rawNoCorrect:"générateur brut sans bonne réponse",
    rawBubbleCount:"trop peu/trop de bulles avant réparation",
    safeNoCorrect:"toujours aucune bonne réponse après réparation",
    safeBubbleCount:"nombre de bulles incorrect après réparation",
    duplicateLabels:"texte de réponse en double",
    shapeHealthProblem:"question de formes sans forme correspondante",
    generatedZeroCorrect:"le générateur a créé 0 bonne réponse",
    generatedWrongBubbleCount:"le générateur a créé {got}/{expected} bulles",
    afterGuardWrongBubbleCount:"après sécurité {got}/{expected} bulles",
    afterGuardNoCorrect:"toujours aucune bonne réponse après sécurité",
    tooManyCorrect:"plus de bonnes réponses que de bulles",
    shapeControl:"contrôle des formes",
    shapeTaskNoMatch:"Question de forme sans correspondance",
    copiedExtra:"en plus dans la console",
    perfectImproved:"Parfait ! {tier} amélioré. Temps ajouté au classement.",
    perfectEarned:"Parfait ! {tier} obtenu. Temps ajouté au classement.",
    notPerfectText:"Pas parfait : le même défi reste actif jusqu’à ce que tu le réussisses sans faute.",
    nextSessionText:"Session suivante : {tier} · {questions} questions · niveau 1–{level}.",
    worldGoldText:"Ce monde est maintenant Or. Améliore ton score ou choisis un autre monde.",
    playedRewardLine:"{played} <b>{topic}</b>."
  });
  Object.assign(I18N.tl, {
    tierBronze:"Bronze", tierSilver:"Silver", tierGold:"Gold", tierCompleted:"Tapos", tierGoldReplay:"Gold replay",
    questionsWord:"tanong", levelWord:"Level", timeWord:"Oras", rewardWord:"Gantimpala",
    nextChallenge:"Susunod:", goldAchieved:"Nakuha ang Gold",
    playerLabel:"Player", guestName:"Guest", giveNamePlaceholder:"Ilagay ang pangalan",
    startRound:"Simulan ang round", back:"Bumalik", close:"Isara", reset:"Reset",
    sessionPerfectBetter:"10 tanong. Sagutan nang perfect para sa mas magandang gantimpala.",
    sessionGoldReplayText:"Nakuha ang Gold. Maglaro ulit para pagandahin ang score o oras.",
    sessionBronzeText:"Sagutan nang perfect ang 10 tanong para makuha ang Bronze.",
    sessionSilverText:"Nakuha ang Bronze. Sagutan nang perfect ang 20 tanong para sa Silver.",
    sessionGoldText:"Nakuha ang Silver. Sagutan nang perfect ang 30 tanong para sa Gold.",
    leaderboardTitle:"Leaderboard",
    leaderboardHelp:"Perfect sessions ang lalabas dito. Naka-save lang ang oras sa browser na ito.",
    leaderboardEmpty:"Wala pang perfect session.",
    loginTitle:"Math World",
    loginText:"Mag-log in para ma-save ang progress at leaderboard sa browser na ito.",
    loginAccountPlaceholder:"Account",
    loginPasswordPlaceholder:"Password",
    loginButton:"Log in",
    loginGuestButton:"Guest",
    loginHint:"",
    loginInvalid:"Maglagay ng pangalan o maglaro bilang guest.",
    profileTitle:"Player",
    profileText:"Pumili ng pangalan. Sa ngayon, dito lang ito mase-save sa browser.",
    startTest:"Start test", newQuestion:"Bagong tanong", test100:"Test 100", testAll:"Test lahat",
    copyReport:"Kopyahin report", resetProgress:"Reset progress",
    devReady:"Maker QA active · auto-next 1.1s.",
    devTestStarted:"Nagsimula ang test", devNewQuestion:"Na-load ang bagong tanong.",
    devProgressReset:"Na-reset ang progress at leaderboard.",
    devTestRunning:"Tumatakbo ang test…",
    devFullTestRunning:"Full test running… 6 worlds × 3 tiers × 100 rounds",
    devCopied:"Nakopya sa clipboard.",
    devCopyFailed:"Hindi nakopya automatic. Nasa console ang report.",
    qaTitle:"QA report", qaGeneratedRounds:"generated rounds",
    qaStatusOk:"Status: OK lahat. Bawat test round ay may kahit isang tamang sagot at tamang bilang ng bubbles.",
    qaStatusWarn:"Status: {n} dapat tingnan. Gumagamit na ngayon ang game ng safety guard kung posible.",
    qaGuardRepaired:"Inayos ng guard: {n} round(s) na may kahina-hinalang raw generator output.",
    qaWhatTested:"Ano ang tine-test?",
    qaCheckBubbles:"• Gumagawa ba ang generator ng sapat na answer bubbles?",
    qaCheckCorrect:"• May kahit isang tamang sagot ba?",
    qaCheckDuplicates:"• Walang duplicate na answer labels?",
    qaCheckShapes:"• Sa Shape Island: may tumutugmang shape ba sa bawat question type?",
    qaTested:"Tested", qaBubbles:"bubbles", qaCorrectAfterGuard:"tama pagkatapos ng guard",
    qaGuardFixed:"Inayos ng guard", qaRounds:"round(s)", qaRawCorrectRange:"Raw correct range was",
    qaProblem:"Problema", qaExamples:"Concrete examples:",
    qaConclusionOk:"Conclusion: walang technical problem na nakita sa generator check.",
    qaOk:"✓ OK", qaReview:"⚠ tingnan",
    rawNoCorrect:"raw generator na walang tamang sagot",
    rawBubbleCount:"kulang/sobra ang bubbles bago ayusin",
    safeNoCorrect:"wala pa ring tamang sagot pagkatapos ayusin",
    safeBubbleCount:"maling bilang ng bubbles pagkatapos ayusin",
    duplicateLabels:"duplicate answer text",
    shapeHealthProblem:"shape question na walang matching shape",
    generatedZeroCorrect:"gumawa ang generator ng 0 tamang sagot",
    generatedWrongBubbleCount:"gumawa ang generator ng {got}/{expected} bubbles",
    afterGuardWrongBubbleCount:"pagkatapos ng guard {got}/{expected} bubbles",
    afterGuardNoCorrect:"wala pa ring tamang sagot pagkatapos ng guard",
    tooManyCorrect:"mas maraming tamang sagot kaysa bubbles",
    shapeControl:"shape check",
    shapeTaskNoMatch:"Shape task without match",
    copiedExtra:"extra in console",
    perfectImproved:"Perfect! Na-improve ang {tier}. Naidagdag ang oras sa leaderboard.",
    perfectEarned:"Perfect! Nakuha ang {tier}. Naidagdag ang oras sa leaderboard.",
    notPerfectText:"Hindi perfect: mananatili ang parehong challenge hanggang flawless mo itong matapos.",
    nextSessionText:"Next session: {tier} · {questions} tanong · level 1–{level}.",
    worldGoldText:"Gold na ang world na ito. Pagandahin ang score o pumunta sa ibang world.",
    playedRewardLine:"{played} <b>{topic}</b>."
  });


  /* v26 — Procentenhaven translations */
  Object.assign(I18N.nl, {
    percentTitle:"🏷️ Procentenhaven",
    percentDesc:"Percentages, breuken, kommagetallen, deel van een getal en korting.",
    topicPercent:"Procentenhaven",
    levelPercent:"Procenten",
    targetPercentEquivalent:"vind alle vormen die gelijk zijn aan",
    targetPercentOf:"bereken",
    targetDiscount:"prijs na korting",
    targetPercentChange:"nieuwe waarde na procentuele verandering",
    percentHint:"Gebruik 50% = 1/2, 25% = 1/4, 10% = delen door 10. Bij korting trek je het kortingbedrag af."
  });
  Object.assign(I18N.en, {
    percentTitle:"🏷️ Percentage Harbor",
    percentDesc:"Percentages, fractions, decimals, parts of a number and discounts.",
    topicPercent:"Percentage Harbor",
    levelPercent:"Percentages",
    targetPercentEquivalent:"find all forms equal to",
    targetPercentOf:"calculate",
    targetDiscount:"price after discount",
    targetPercentChange:"new value after percentage change",
    percentHint:"Use 50% = 1/2, 25% = 1/4, 10% = divide by 10. For a discount, subtract the discount amount."
  });
  Object.assign(I18N.fr, {
    percentTitle:"🏷️ Port des pourcentages",
    percentDesc:"Pourcentages, fractions, nombres décimaux, partie d’un nombre et réductions.",
    topicPercent:"Port des pourcentages",
    levelPercent:"Pourcentages",
    targetPercentEquivalent:"trouve toutes les formes égales à",
    targetPercentOf:"calcule",
    targetDiscount:"prix après réduction",
    targetPercentChange:"nouvelle valeur après variation en pourcentage",
    percentHint:"Utilise 50 % = 1/2, 25 % = 1/4, 10 % = diviser par 10. Pour une réduction, soustrais le montant réduit."
  });
  Object.assign(I18N.tl, {
    percentTitle:"🏷️ Percentage Harbor",
    percentDesc:"Percentages, fractions, decimals, bahagi ng number, at discounts.",
    topicPercent:"Percentage Harbor",
    levelPercent:"Percentages",
    targetPercentEquivalent:"hanapin ang lahat ng anyo na katumbas ng",
    targetPercentOf:"kalkulahin",
    targetDiscount:"presyo pagkatapos ng discount",
    targetPercentChange:"bagong value pagkatapos ng percent change",
    percentHint:"Gamitin ang 50% = 1/2, 25% = 1/4, 10% = hatiin sa 10. Sa discount, ibawas ang discount amount."
  });

  /* v27.35 — Verhoudingenhaven labels */
  Object.assign(I18N.nl, { topicRatios:"Verhoudingenhaven" });
  Object.assign(I18N.en, { topicRatios:"Ratio Harbor" });
  Object.assign(I18N.fr, { topicRatios:"Port des rapports" });
  Object.assign(I18N.tl, { topicRatios:"Ratio Harbor" });


  /* v27.0 — Curriculum tags */
  Object.assign(I18N.nl, {
    curriculumTitle:"Curriculumdekking",
    curriculumInDebug:"Eindterm-tag",
    curriculumDomainGetallen:"Getallenleer",
    curriculumDomainVerhoudingen:"Verhoudingen/procenten",
    curriculumDomainAlgebra:"Vergelijkingen/algebra",
    curriculumDomainCoordinaten:"Coördinaten",
    curriculumDomainMeetkunde:"Vlakke meetkunde",
    curriculumCoverageLine:"Curriculum: {domains} domeinen · {skills} vaardigheden",
    curriculumSkillsTitle:"Vaardigheden in deze test:",
    currFractionsEquivalent:"equivalente breuken herkennen",
    currFractionsCompare:"breuken ordenen en vergelijken",
    currIntegersOrder:"getallen ordenen en vergelijken",
    currNumberDivisors:"delers herkennen",
    currNumberMultiples:"veelvouden herkennen",
    currNumberPrimes:"priemgetallen herkennen",
    currPercentEquivalent:"procenten, breuken en kommagetallen koppelen",
    currPercentOf:"percentage van een getal berekenen",
    currPercentDiscount:"korting berekenen",
    currPercentChange:"procentuele verandering berekenen",
    currEquationSolve:"vergelijkingen oplossen",
    currCoordinatePoint:"punten in het vlak herkennen",
    currCoordinateLine:"punten met gelijke x- of y-coördinaat herkennen",
    currShapeClassify:"vlakke figuren classificeren",
    currShapeProperties:"meetkundige eigenschappen herkennen"
  });
  Object.assign(I18N.en, {
    curriculumTitle:"Curriculum coverage",
    curriculumInDebug:"Curriculum tag",
    curriculumDomainGetallen:"Number sense",
    curriculumDomainVerhoudingen:"Ratios/percentages",
    curriculumDomainAlgebra:"Equations/algebra",
    curriculumDomainCoordinaten:"Coordinates",
    curriculumDomainMeetkunde:"Plane geometry",
    curriculumCoverageLine:"Curriculum: {domains} domains · {skills} skills",
    curriculumSkillsTitle:"Skills in this test:",
    currFractionsEquivalent:"recognize equivalent fractions",
    currFractionsCompare:"order and compare fractions",
    currIntegersOrder:"order and compare numbers",
    currNumberDivisors:"recognize divisors",
    currNumberMultiples:"recognize multiples",
    currNumberPrimes:"recognize prime numbers",
    currPercentEquivalent:"connect percentages, fractions and decimals",
    currPercentOf:"calculate a percentage of a number",
    currPercentDiscount:"calculate discounts",
    currPercentChange:"calculate percentage change",
    currEquationSolve:"solve equations",
    currCoordinatePoint:"recognize points in the plane",
    currCoordinateLine:"recognize equal x- or y-coordinates",
    currShapeClassify:"classify plane figures",
    currShapeProperties:"recognize geometric properties"
  });
  Object.assign(I18N.fr, {
    curriculumTitle:"Couverture du programme",
    curriculumInDebug:"Tag du programme",
    curriculumDomainGetallen:"Nombres",
    curriculumDomainVerhoudingen:"Rapports/pourcentages",
    curriculumDomainAlgebra:"Équations/algèbre",
    curriculumDomainCoordinaten:"Coordonnées",
    curriculumDomainMeetkunde:"Géométrie plane",
    curriculumCoverageLine:"Programme : {domains} domaines · {skills} compétences",
    curriculumSkillsTitle:"Compétences dans ce test :",
    currFractionsEquivalent:"reconnaître des fractions équivalentes",
    currFractionsCompare:"ordonner et comparer des fractions",
    currIntegersOrder:"ordonner et comparer des nombres",
    currNumberDivisors:"reconnaître les diviseurs",
    currNumberMultiples:"reconnaître les multiples",
    currNumberPrimes:"reconnaître les nombres premiers",
    currPercentEquivalent:"lier pourcentages, fractions et décimaux",
    currPercentOf:"calculer un pourcentage d’un nombre",
    currPercentDiscount:"calculer une réduction",
    currPercentChange:"calculer une variation en pourcentage",
    currEquationSolve:"résoudre des équations",
    currCoordinatePoint:"reconnaître des points dans le plan",
    currCoordinateLine:"reconnaître une même coordonnée x ou y",
    currShapeClassify:"classer les figures planes",
    currShapeProperties:"reconnaître des propriétés géométriques"
  });
  Object.assign(I18N.tl, {
    curriculumTitle:"Curriculum coverage",
    curriculumInDebug:"Curriculum tag",
    curriculumDomainGetallen:"Number sense",
    curriculumDomainVerhoudingen:"Ratios/percentages",
    curriculumDomainAlgebra:"Equations/algebra",
    curriculumDomainCoordinaten:"Coordinates",
    curriculumDomainMeetkunde:"Plane geometry",
    curriculumCoverageLine:"Curriculum: {domains} domains · {skills} skills",
    curriculumSkillsTitle:"Skills in this test:",
    currFractionsEquivalent:"kilalanin ang equivalent fractions",
    currFractionsCompare:"ayusin at ikumpara ang fractions",
    currIntegersOrder:"ayusin at ikumpara ang numbers",
    currNumberDivisors:"kilalanin ang divisors",
    currNumberMultiples:"kilalanin ang multiples",
    currNumberPrimes:"kilalanin ang prime numbers",
    currPercentEquivalent:"ikonekta ang percentages, fractions at decimals",
    currPercentOf:"kalkulahin ang percent ng number",
    currPercentDiscount:"kalkulahin ang discount",
    currPercentChange:"kalkulahin ang percentage change",
    currEquationSolve:"lutasin ang equations",
    currCoordinatePoint:"kilalanin ang points sa plane",
    currCoordinateLine:"kilalanin ang parehong x o y-coordinate",
    currShapeClassify:"i-classify ang plane figures",
    currShapeProperties:"kilalanin ang geometric properties"
  });


  /* v27.1 — Getallenleer+ translations */
  Object.assign(I18N.nl, {
    targetDivisibleBy:"klik alle getallen deelbaar door",
    targetSquares:"klik alle kwadraatgetallen",
    targetAbs:"klik alle getallen met absolute waarde",
    targetGcd:"klik de ggd",
    targetLcm:"klik het kgv",
    numberHintPlus:"Let op deelbaarheid, kwadraten, absolute waarde, ggd en kgv.",
    currNumberDivisibility:"deelbaarheid door 2, 3, 4, 5, 9 en 10",
    currNumberSquares:"kwadraten en machten herkennen",
    currNumberAbsolute:"absolute waarde en tegengestelde getallen",
    currNumberGcdLcm:"ggd en kgv herkennen"
  });
  Object.assign(I18N.en, {
    targetDivisibleBy:"click all numbers divisible by",
    targetSquares:"click all square numbers",
    targetAbs:"click all numbers with absolute value",
    targetGcd:"click the gcd",
    targetLcm:"click the lcm",
    numberHintPlus:"Watch divisibility, squares, absolute value, gcd and lcm.",
    currNumberDivisibility:"divisibility by 2, 3, 4, 5, 9 and 10",
    currNumberSquares:"recognize squares and powers",
    currNumberAbsolute:"absolute value and opposite numbers",
    currNumberGcdLcm:"recognize gcd and lcm"
  });
  Object.assign(I18N.fr, {
    targetDivisibleBy:"clique tous les nombres divisibles par",
    targetSquares:"clique tous les carrés parfaits",
    targetAbs:"clique tous les nombres de valeur absolue",
    targetGcd:"clique le PGCD",
    targetLcm:"clique le PPCM",
    numberHintPlus:"Fais attention à la divisibilité, aux carrés, à la valeur absolue, au PGCD et au PPCM.",
    currNumberDivisibility:"divisibilité par 2, 3, 4, 5, 9 et 10",
    currNumberSquares:"reconnaître les carrés et puissances",
    currNumberAbsolute:"valeur absolue et nombres opposés",
    currNumberGcdLcm:"reconnaître PGCD et PPCM"
  });
  Object.assign(I18N.tl, {
    targetDivisibleBy:"i-click ang lahat ng divisible by",
    targetSquares:"i-click ang lahat ng square numbers",
    targetAbs:"i-click ang lahat ng numbers na may absolute value",
    targetGcd:"i-click ang gcd",
    targetLcm:"i-click ang lcm",
    numberHintPlus:"Tingnan ang divisibility, squares, absolute value, gcd at lcm.",
    currNumberDivisibility:"divisibility by 2, 3, 4, 5, 9 and 10",
    currNumberSquares:"kilalanin ang squares at powers",
    currNumberAbsolute:"absolute value at opposite numbers",
    currNumberGcdLcm:"kilalanin ang gcd at lcm"
  });


  /* v27.2 — Procentenhaven+ translations */
  Object.assign(I18N.nl, {
    targetRatio:"verhouding naar procent",
    targetRatioTable:"vul de verhoudingstabel aan",
    targetScale:"schaal",
    targetReverseDiscount:"prijs vóór korting",
    targetPercentFromPart:"bereken het percentage",
    ratioHintPlus:"Bij verhoudingen: deel/geheel × 100. Bij schaal 1:100 betekent 1 cm op kaart 100 cm echt.",
    currRatioBasic:"verhoudingen omzetten naar procenten",
    currRatioTable:"verhoudingstabellen aanvullen",
    currScale:"schaalrekenen",
    currReverseDiscount:"prijs vóór korting berekenen",
    currPercentFromPart:"percentage berekenen uit deel en geheel"
  });
  Object.assign(I18N.en, {
    targetRatio:"ratio to percent",
    targetRatioTable:"complete the ratio table",
    targetScale:"scale",
    targetReverseDiscount:"price before discount",
    targetPercentFromPart:"calculate the percentage",
    ratioHintPlus:"For ratios: part/whole × 100. With scale 1:100, 1 cm on the map means 100 cm in real life.",
    currRatioBasic:"convert ratios to percentages",
    currRatioTable:"complete ratio tables",
    currScale:"scale calculations",
    currReverseDiscount:"calculate price before discount",
    currPercentFromPart:"calculate percentage from part and whole"
  });
  Object.assign(I18N.fr, {
    targetRatio:"rapport en pourcentage",
    targetRatioTable:"complète le tableau de proportionnalité",
    targetScale:"échelle",
    targetReverseDiscount:"prix avant réduction",
    targetPercentFromPart:"calcule le pourcentage",
    ratioHintPlus:"Pour un rapport : partie/total × 100. À l’échelle 1:100, 1 cm sur la carte vaut 100 cm en réalité.",
    currRatioBasic:"convertir des rapports en pourcentages",
    currRatioTable:"compléter des tableaux de proportionnalité",
    currScale:"calculer avec une échelle",
    currReverseDiscount:"calculer le prix avant réduction",
    currPercentFromPart:"calculer un pourcentage à partir d’une partie et d’un total"
  });
  Object.assign(I18N.tl, {
    targetRatio:"ratio to percent",
    targetRatioTable:"kumpletuhin ang ratio table",
    targetScale:"scale",
    targetReverseDiscount:"presyo bago discount",
    targetPercentFromPart:"kalkulahin ang percentage",
    ratioHintPlus:"Sa ratios: part/whole × 100. Sa scale 1:100, 1 cm sa mapa ay 100 cm sa totoong sukat.",
    currRatioBasic:"i-convert ang ratios sa percentages",
    currRatioTable:"kumpletuhin ang ratio tables",
    currScale:"scale calculations",
    currReverseDiscount:"kalkulahin ang price before discount",
    currPercentFromPart:"kalkulahin ang percentage mula sa part at whole"
  });


  /* v27.3 — Algebra+ translations */
  Object.assign(I18N.nl, {
    targetAlgebra:"kies de juiste vorm of waarde",
    algebraHintPlus:"Vervang letters door hun waarde, tel gelijksoortige termen samen en werk haakjes uit.",
    currAlgebraSubstitution:"waarde van een lettervorm berekenen",
    currAlgebraSimplify:"gelijksoortige termen samennemen",
    currAlgebraDistribute:"haakjes uitwerken",
    currAlgebraPattern:"patroonregel herkennen",
    currAlgebraFormula:"formules gebruiken",
    currAlgebraTableFormula:"tabel en formule koppelen"
  });
  Object.assign(I18N.en, {
    targetAlgebra:"choose the correct form or value",
    algebraHintPlus:"Substitute values, combine like terms and expand brackets.",
    currAlgebraSubstitution:"calculate the value of an algebraic expression",
    currAlgebraSimplify:"combine like terms",
    currAlgebraDistribute:"expand brackets",
    currAlgebraPattern:"recognize a pattern rule",
    currAlgebraFormula:"use formulas",
    currAlgebraTableFormula:"connect table and formula"
  });
  Object.assign(I18N.fr, {
    targetAlgebra:"choisis la bonne forme ou valeur",
    algebraHintPlus:"Remplace les lettres par leur valeur, réduis les termes semblables et développe les parenthèses.",
    currAlgebraSubstitution:"calculer la valeur d’une expression littérale",
    currAlgebraSimplify:"réduire les termes semblables",
    currAlgebraDistribute:"développer des parenthèses",
    currAlgebraPattern:"reconnaître une règle de suite",
    currAlgebraFormula:"utiliser des formules",
    currAlgebraTableFormula:"lier tableau et formule"
  });
  Object.assign(I18N.tl, {
    targetAlgebra:"piliin ang tamang form o value",
    algebraHintPlus:"Palitan ang letters ng value, pagsamahin ang like terms, at i-expand ang brackets.",
    currAlgebraSubstitution:"kalkulahin ang value ng algebraic expression",
    currAlgebraSimplify:"pagsamahin ang like terms",
    currAlgebraDistribute:"i-expand ang brackets",
    currAlgebraPattern:"kilalanin ang pattern rule",
    currAlgebraFormula:"gumamit ng formulas",
    currAlgebraTableFormula:"ikonekta ang table at formula"
  });


  /* v27.4 — Coördinaten+ translations */
  Object.assign(I18N.nl, {
    targetCoordQuadrant:"klik alle punten in kwadrant",
    targetCoordReflection:"spiegel het punt",
    targetCoordTranslation:"verplaats het punt",
    targetCoordLine:"klik alle punten op de rechte",
    targetCoordMidpoint:"klik het midden",
    targetCoordTablePoint:"klik het punt uit de tabel",
    coordHintPlus:"Lees altijd eerst x, dan y. Let op tekens, kwadranten, spiegeling en verplaatsing.",
    currCoordinateQuadrants:"kwadranten herkennen",
    currCoordinateReflection:"spiegeling in x-as of y-as",
    currCoordinateTranslation:"verplaatsing op een rooster",
    currCoordinateLine:"punten op eenvoudige rechten herkennen",
    currCoordinateMidpoint:"middelpunt van lijnstukken bepalen",
    currCoordinateTablePoint:"tabel koppelen aan punt"
  });
  Object.assign(I18N.en, {
    targetCoordQuadrant:"click all points in quadrant",
    targetCoordReflection:"reflect the point",
    targetCoordTranslation:"translate the point",
    targetCoordLine:"click all points on the line",
    targetCoordMidpoint:"click the midpoint",
    targetCoordTablePoint:"click the point from the table",
    coordHintPlus:"Always read x first, then y. Watch signs, quadrants, reflection and translation.",
    currCoordinateQuadrants:"recognize quadrants",
    currCoordinateReflection:"reflection in the x-axis or y-axis",
    currCoordinateTranslation:"translation on a grid",
    currCoordinateLine:"recognize points on simple lines",
    currCoordinateMidpoint:"find the midpoint of line segments",
    currCoordinateTablePoint:"connect table to point"
  });
  Object.assign(I18N.fr, {
    targetCoordQuadrant:"clique tous les points dans le quadrant",
    targetCoordReflection:"symétrie du point",
    targetCoordTranslation:"déplace le point",
    targetCoordLine:"clique tous les points sur la droite",
    targetCoordMidpoint:"clique le milieu",
    targetCoordTablePoint:"clique le point du tableau",
    coordHintPlus:"Lis toujours x puis y. Attention aux signes, aux quadrants, aux symétries et aux translations.",
    currCoordinateQuadrants:"reconnaître les quadrants",
    currCoordinateReflection:"symétrie par rapport à l’axe x ou y",
    currCoordinateTranslation:"translation sur un quadrillage",
    currCoordinateLine:"reconnaître des points sur des droites simples",
    currCoordinateMidpoint:"déterminer le milieu d’un segment",
    currCoordinateTablePoint:"lier un tableau à un point"
  });
  Object.assign(I18N.tl, {
    targetCoordQuadrant:"i-click ang lahat ng points sa quadrant",
    targetCoordReflection:"i-reflect ang point",
    targetCoordTranslation:"i-translate ang point",
    targetCoordLine:"i-click ang lahat ng points sa line",
    targetCoordMidpoint:"i-click ang midpoint",
    targetCoordTablePoint:"i-click ang point mula sa table",
    coordHintPlus:"Basahin muna ang x, pagkatapos y. Tingnan ang signs, quadrants, reflection at translation.",
    currCoordinateQuadrants:"kilalanin ang quadrants",
    currCoordinateReflection:"reflection sa x-axis o y-axis",
    currCoordinateTranslation:"translation sa grid",
    currCoordinateLine:"kilalanin ang points sa simple lines",
    currCoordinateMidpoint:"hanapin ang midpoint ng line segments",
    currCoordinateTablePoint:"ikonekta ang table sa point"
  });


  /* v27.5 — Vormeneiland+ translations */
  Object.assign(I18N.nl, {
    targetShapeText:"kies het juiste meetkundebegrip",
    shapeHintPlus:"Kijk naar hoeken, evenwijdigheid, loodrechte lijnen, spiegeling, draaiing, verschuiving en grootte.",
    answerReflection:"spiegeling",
    answerRotation:"rotatie",
    answerTranslation:"verschuiving",
    answerEnlargement:"vergroting",
    answerCongruent:"congruent",
    answerSimilar:"gelijkvormig",
    answerPerimeter:"omtrek",
    answerArea:"oppervlakte",
    answerRightAngle:"rechte hoek",
    promptReflectVertical:"links-rechts omklappen rond een verticale spiegelas",
    promptReflectHorizontal:"boven-onder omklappen rond een horizontale spiegelas",
    promptRotate90:"een figuur 90° draaien",
    promptTranslate:"een figuur blijft even groot en schuift op",
    promptCongruent:"zelfde vorm én zelfde grootte",
    promptSimilar:"zelfde vorm, andere grootte",
    promptPerimeterRect:"rechthoek {a} × {b}: afstand rond de figuur",
    promptAreaRect:"rechthoek {a} × {b}: aantal vierkante vakjes",
    currShapeAngles:"hoeken herkennen",
    currShapeParallelPerpendicular:"evenwijdigheid en loodrechte lijnen herkennen",
    currShapeSymmetry:"symmetrieassen herkennen",
    currShapeReflection:"spiegeling herkennen",
    currShapeRotation:"rotatie herkennen",
    currShapeTranslation:"verschuiving herkennen",
    currShapeCongruence:"congruentie herkennen",
    currShapeSimilarity:"gelijkvormigheid herkennen",
    currShapePerimeterArea:"omtrek en oppervlakte voorbereiden"
  });
  Object.assign(I18N.en, {
    targetShapeText:"choose the correct geometry concept",
    shapeHintPlus:"Look at angles, parallel lines, perpendicular lines, reflection, rotation, translation and size.",
    answerReflection:"reflection",
    answerRotation:"rotation",
    answerTranslation:"translation",
    answerEnlargement:"enlargement",
    answerCongruent:"congruent",
    answerSimilar:"similar",
    answerPerimeter:"perimeter",
    answerArea:"area",
    answerRightAngle:"right angle",
    promptReflectVertical:"flip left-right across a vertical mirror line",
    promptReflectHorizontal:"flip top-bottom across a horizontal mirror line",
    promptRotate90:"turn a figure 90°",
    promptTranslate:"a figure stays the same size and slides",
    promptCongruent:"same shape and same size",
    promptSimilar:"same shape, different size",
    promptPerimeterRect:"rectangle {a} × {b}: distance around the figure",
    promptAreaRect:"rectangle {a} × {b}: number of square units",
    currShapeAngles:"recognize angles",
    currShapeParallelPerpendicular:"recognize parallel and perpendicular lines",
    currShapeSymmetry:"recognize lines of symmetry",
    currShapeReflection:"recognize reflection",
    currShapeRotation:"recognize rotation",
    currShapeTranslation:"recognize translation",
    currShapeCongruence:"recognize congruence",
    currShapeSimilarity:"recognize similarity",
    currShapePerimeterArea:"prepare perimeter and area"
  });
  Object.assign(I18N.fr, {
    targetShapeText:"choisis le bon concept de géométrie",
    shapeHintPlus:"Observe les angles, les parallèles, les perpendiculaires, la symétrie, la rotation, la translation et la taille.",
    answerReflection:"symétrie",
    answerRotation:"rotation",
    answerTranslation:"translation",
    answerEnlargement:"agrandissement",
    answerCongruent:"congruent",
    answerSimilar:"semblable",
    answerPerimeter:"périmètre",
    answerArea:"aire",
    answerRightAngle:"angle droit",
    promptReflectVertical:"retournement gauche-droite selon un axe vertical",
    promptReflectHorizontal:"retournement haut-bas selon un axe horizontal",
    promptRotate90:"tourner une figure de 90°",
    promptTranslate:"une figure garde la même taille et glisse",
    promptCongruent:"même forme et même taille",
    promptSimilar:"même forme, taille différente",
    promptPerimeterRect:"rectangle {a} × {b} : distance autour de la figure",
    promptAreaRect:"rectangle {a} × {b} : nombre de carrés",
    currShapeAngles:"reconnaître les angles",
    currShapeParallelPerpendicular:"reconnaître parallèles et perpendiculaires",
    currShapeSymmetry:"reconnaître les axes de symétrie",
    currShapeReflection:"reconnaître une symétrie",
    currShapeRotation:"reconnaître une rotation",
    currShapeTranslation:"reconnaître une translation",
    currShapeCongruence:"reconnaître la congruence",
    currShapeSimilarity:"reconnaître la similitude",
    currShapePerimeterArea:"préparer périmètre et aire"
  });
  Object.assign(I18N.tl, {
    targetShapeText:"piliin ang tamang geometry concept",
    shapeHintPlus:"Tingnan ang angles, parallel lines, perpendicular lines, reflection, rotation, translation at size.",
    answerReflection:"reflection",
    answerRotation:"rotation",
    answerTranslation:"translation",
    answerEnlargement:"enlargement",
    answerCongruent:"congruent",
    answerSimilar:"similar",
    answerPerimeter:"perimeter",
    answerArea:"area",
    answerRightAngle:"right angle",
    promptReflectVertical:"i-flip left-right sa vertical mirror line",
    promptReflectHorizontal:"i-flip top-bottom sa horizontal mirror line",
    promptRotate90:"i-rotate ang figure ng 90°",
    promptTranslate:"parehong laki ang figure at dumudulas",
    promptCongruent:"same shape at same size",
    promptSimilar:"same shape, ibang size",
    promptPerimeterRect:"rectangle {a} × {b}: distance sa paligid ng figure",
    promptAreaRect:"rectangle {a} × {b}: bilang ng square units",
    currShapeAngles:"kilalanin ang angles",
    currShapeParallelPerpendicular:"kilalanin ang parallel at perpendicular lines",
    currShapeSymmetry:"kilalanin ang lines of symmetry",
    currShapeReflection:"kilalanin ang reflection",
    currShapeRotation:"kilalanin ang rotation",
    currShapeTranslation:"kilalanin ang translation",
    currShapeCongruence:"kilalanin ang congruence",
    currShapeSimilarity:"kilalanin ang similarity",
    currShapePerimeterArea:"perimeter at area preparation"
  });


  /* v27.6 — Curriculum Coverage Matrix */
  Object.assign(I18N.nl, {
    curriculumMatrixTitle:"Curriculum-matrix",
    curriculumTargetSkills:"doelvaardigheden",
    curriculumPresent:"aanwezig",
    curriculumMissing:"ontbreekt",
    curriculumEstimatedCoverage:"geschatte dekking",
    curriculumAllPresent:"alle doelvaardigheden aanwezig",
    curriculumRunAllHint:"Deze score meet oefendekking in de generator, niet of een leerling de leerstof beheerst.",
    curriculumReady90:"richting 90%+",
    curriculumNeedsWork:"nog uitbreiden"
  });
  Object.assign(I18N.en, {
    curriculumMatrixTitle:"Curriculum matrix",
    curriculumTargetSkills:"target skills",
    curriculumPresent:"present",
    curriculumMissing:"missing",
    curriculumEstimatedCoverage:"estimated coverage",
    curriculumAllPresent:"all target skills present",
    curriculumRunAllHint:"This score measures generator practice coverage, not whether a learner masters the content.",
    curriculumReady90:"towards 90%+",
    curriculumNeedsWork:"needs expansion"
  });
  Object.assign(I18N.fr, {
    curriculumMatrixTitle:"Matrice du programme",
    curriculumTargetSkills:"compétences cibles",
    curriculumPresent:"présent",
    curriculumMissing:"manquant",
    curriculumEstimatedCoverage:"couverture estimée",
    curriculumAllPresent:"toutes les compétences cibles sont présentes",
    curriculumRunAllHint:"Ce score mesure la couverture d’exercices dans le générateur, pas la maîtrise de l’élève.",
    curriculumReady90:"vers 90%+",
    curriculumNeedsWork:"à développer"
  });
  Object.assign(I18N.tl, {
    curriculumMatrixTitle:"Curriculum matrix",
    curriculumTargetSkills:"target skills",
    curriculumPresent:"present",
    curriculumMissing:"missing",
    curriculumEstimatedCoverage:"estimated coverage",
    curriculumAllPresent:"all target skills present",
    curriculumRunAllHint:"Sinusukat nito ang practice coverage ng generator, hindi mastery ng learner.",
    curriculumReady90:"towards 90%+",
    curriculumNeedsWork:"needs expansion"
  });


  /* v27.7 — Curriculum Deck Balancer */
  Object.assign(I18N.nl, {
    deckBalancerTitle:"Curriculum-deck",
    deckBalancerActive:"vaardigheidsdeck actief",
    deckSkill:"geplande vaardigheid",
    deckQaLine:"Normale sessies gebruiken nu een gebalanceerde vaardigheidsdeck per wereld en tier."
  });
  Object.assign(I18N.en, {
    deckBalancerTitle:"Curriculum deck",
    deckBalancerActive:"skill deck active",
    deckSkill:"planned skill",
    deckQaLine:"Normal sessions now use a balanced skill deck per world and tier."
  });
  Object.assign(I18N.fr, {
    deckBalancerTitle:"Deck du programme",
    deckBalancerActive:"deck de compétences actif",
    deckSkill:"compétence prévue",
    deckQaLine:"Les sessions normales utilisent maintenant un deck équilibré par monde et niveau."
  });
  Object.assign(I18N.tl, {
    deckBalancerTitle:"Curriculum deck",
    deckBalancerActive:"skill deck active",
    deckSkill:"planned skill",
    deckQaLine:"Normal sessions now use a balanced skill deck per world and tier."
  });


  /* v27.8 — Professional UX polish text */
  Object.assign(I18N.nl, {
    loginTitle:"Speler",
    loginText:"Kies een naam voor je lokale voortgang en ranglijst op dit toestel.",
    loginAccountPlaceholder:"Naam",
    loginPasswordPlaceholder:"",
    loginButton:"Start",
    loginGuestButton:"Gast",
    loginHint:"",
    loginInvalid:"Geef een naam in of speel als gast.",
    leaderboardHelp:"Perfecte sessies komen hier. Scores worden alleen lokaal op dit toestel/in deze browser bewaard.",
    sessionBronzeText:"10 vragen. Speel foutloos om Brons te verdienen. Soms zijn meerdere bubbels juist.",
    sessionSilverText:"20 vragen. Speel foutloos voor Zilver. De vragen worden gevarieerder.",
    sessionGoldText:"30 vragen. Speel foutloos voor Goud. Je krijgt de volledige vaardigheidsmix.",
    sessionGoldReplayText:"Goud gehaald. Speel opnieuw om je tijd of score lokaal te verbeteren.",
    profileText:"Kies een naam voor dit toestel. Er is nog geen online account nodig."
  });
  Object.assign(I18N.en, {
    loginTitle:"Player",
    loginText:"Choose a name for your local progress and leaderboard on this device.",
    loginAccountPlaceholder:"Name",
    loginPasswordPlaceholder:"",
    loginButton:"Start",
    loginGuestButton:"Guest",
    loginHint:"",
    loginInvalid:"Enter a name or play as guest.",
    leaderboardHelp:"Perfect sessions appear here. Scores are saved only locally on this device/in this browser.",
    sessionBronzeText:"10 questions. Play perfectly to earn Bronze. Sometimes several bubbles are correct.",
    sessionSilverText:"20 questions. Play perfectly for Silver. The questions become more varied.",
    sessionGoldText:"30 questions. Play perfectly for Gold. You get the full skill mix.",
    sessionGoldReplayText:"Gold earned. Play again to improve your local time or score.",
    profileText:"Choose a name for this device. No online account is needed yet."
  });
  Object.assign(I18N.fr, {
    loginTitle:"Joueur",
    loginText:"Choisis un nom pour ta progression locale et le classement sur cet appareil.",
    loginAccountPlaceholder:"Nom",
    loginPasswordPlaceholder:"",
    loginButton:"Commencer",
    loginGuestButton:"Invité",
    loginHint:"",
    loginInvalid:"Entre un nom ou joue comme invité.",
    leaderboardHelp:"Les sessions parfaites apparaissent ici. Les scores sont enregistrés seulement localement sur cet appareil/dans ce navigateur.",
    sessionBronzeText:"10 questions. Réussis sans faute pour obtenir le Bronze. Parfois plusieurs bulles sont correctes.",
    sessionSilverText:"20 questions. Réussis sans faute pour l’Argent. Les questions deviennent plus variées.",
    sessionGoldText:"30 questions. Réussis sans faute pour l’Or. Tu reçois le mélange complet de compétences.",
    sessionGoldReplayText:"Or obtenu. Rejoue pour améliorer ton temps ou ton score local.",
    profileText:"Choisis un nom pour cet appareil. Aucun compte en ligne n’est nécessaire pour l’instant."
  });
  Object.assign(I18N.tl, {
    loginTitle:"Player",
    loginText:"Pumili ng pangalan para sa local progress at leaderboard sa device na ito.",
    loginAccountPlaceholder:"Name",
    loginPasswordPlaceholder:"",
    loginButton:"Start",
    loginGuestButton:"Guest",
    loginHint:"",
    loginInvalid:"Maglagay ng pangalan o maglaro bilang guest.",
    leaderboardHelp:"Perfect sessions ang lalabas dito. Scores ay naka-save lang locally sa device/browser na ito.",
    sessionBronzeText:"10 tanong. Sagutan nang perfect para makuha ang Bronze. Minsan maraming tamang bubbles.",
    sessionSilverText:"20 tanong. Sagutan nang perfect para sa Silver. Mas varied ang questions.",
    sessionGoldText:"30 tanong. Sagutan nang perfect para sa Gold. Makukuha ang full skill mix.",
    sessionGoldReplayText:"Nakuha ang Gold. Maglaro ulit para pagandahin ang local time o score.",
    profileText:"Pumili ng pangalan para sa device na ito. Wala pang kailangan na online account."
  });


  /* v27.9 — Topic Learning Path UI */
  Object.assign(I18N.nl, {
    learningPath:"Leerpad",
    learningPathProgress:"Leerpad: {done}/{total} stappen",
    learningPathNext:"Volgende stap: {step}",
    learningPathDone:"Breukenzee meesterschap bereikt",
    startLearningStep:"Start leerstap",
    freePractice:"Vrij oefenen",
    pathFractionsHub:"Start",
    pathFractionsRecognize:"Breuken zien",
    pathFractionsEquivalent:"Gelijk maken",
    pathFractionsCompare:"Vergelijken",
    pathFractionsOrder:"Ordenen",
    pathFractionsMixed:"Mix",
    pathFractionsMastery:"Finale",
    pathStateDone:"Voltooid",
    pathStateCurrent:"Nu bezig",
    pathStateLocked:"Nog vergrendeld",
    pathStateRetry:"Komt terug"
  });
  Object.assign(I18N.en, {
    learningPath:"Learning path",
    learningPathProgress:"Path: {done}/{total} steps",
    learningPathNext:"Next step: {step}",
    learningPathDone:"Fraction Sea mastery reached",
    startLearningStep:"Start step",
    freePractice:"Free practice",
    pathFractionsHub:"Start in the harbor",
    pathFractionsRecognize:"Recognize fractions",
    pathFractionsEquivalent:"Equivalent fractions",
    pathFractionsCompare:"Compare fractions",
    pathFractionsOrder:"Order fractions",
    pathFractionsMixed:"Mixed practice",
    pathFractionsMastery:"Mastery",
    pathStateDone:"Completed",
    pathStateCurrent:"Current",
    pathStateLocked:"Locked",
    pathStateRetry:"Comes back"
  });
  Object.assign(I18N.fr, {
    learningPath:"Parcours",
    learningPathProgress:"Parcours : {done}/{total} étapes",
    learningPathNext:"Prochaine étape : {step}",
    learningPathDone:"Maîtrise de la mer des fractions atteinte",
    startLearningStep:"Commencer l’étape",
    freePractice:"Entraînement libre",
    pathFractionsHub:"Départ au port",
    pathFractionsRecognize:"Reconnaître les fractions",
    pathFractionsEquivalent:"Fractions équivalentes",
    pathFractionsCompare:"Comparer les fractions",
    pathFractionsOrder:"Ordonner les fractions",
    pathFractionsMixed:"Exercices mélangés",
    pathFractionsMastery:"Maîtrise",
    pathStateDone:"Terminé",
    pathStateCurrent:"En cours",
    pathStateLocked:"Verrouillé",
    pathStateRetry:"Revient bientôt"
  });
  Object.assign(I18N.tl, {
    learningPath:"Learning path",
    learningPathProgress:"Path: {done}/{total} steps",
    learningPathNext:"Next step: {step}",
    learningPathDone:"Naabot ang Fraction Sea mastery",
    startLearningStep:"Start step",
    freePractice:"Free practice",
    pathFractionsHub:"Start sa harbor",
    pathFractionsRecognize:"Kilalanin ang fractions",
    pathFractionsEquivalent:"Equivalent fractions",
    pathFractionsCompare:"Compare fractions",
    pathFractionsOrder:"Ayusin ang fractions",
    pathFractionsMixed:"Mixed practice",
    pathFractionsMastery:"Mastery",
    pathStateDone:"Tapos",
    pathStateCurrent:"Current",
    pathStateLocked:"Locked",
    pathStateRetry:"Babalik"
  });


  /* v27.9.2 — Popup-free learning path text */
  Object.assign(I18N.nl, {
    pathCompactTop:"{topic} · {tier}",
    pathCompactSub:"Leerpad {done}/{total} · Volgende stap: {step}",
    pathCompactMeta:"{questions} · Speler: {player}"
  });
  Object.assign(I18N.en, {
    pathCompactTop:"{topic} · {tier}",
    pathCompactSub:"Path {done}/{total} · Next step: {step}",
    pathCompactMeta:"{questions} · Player: {player}"
  });
  Object.assign(I18N.fr, {
    pathCompactTop:"{topic} · {tier}",
    pathCompactSub:"Parcours {done}/{total} · Prochaine étape : {step}",
    pathCompactMeta:"{questions} · Joueur : {player}"
  });
  Object.assign(I18N.tl, {
    pathCompactTop:"{topic} · {tier}",
    pathCompactSub:"Path {done}/{total} · Next step: {step}",
    pathCompactMeta:"{questions} · Player: {player}"
  });


  /* v27.9.3 — Node-first topic flow */
  Object.assign(I18N.nl, {
    pathTapAgain:"Klik dezelfde stopplaats opnieuw om te spelen.",
    pathLockedInfo:"Nog vergrendeld. Voltooi eerst de vorige stap.",
    pathSelectedInfo:"Geselecteerd"
  });
  Object.assign(I18N.en, {
    pathTapAgain:"Click the same stop again to play.",
    pathLockedInfo:"Locked. Complete the previous step first.",
    pathSelectedInfo:"Selected"
  });
  Object.assign(I18N.fr, {
    pathTapAgain:"Clique encore sur la même étape pour jouer.",
    pathLockedInfo:"Encore verrouillé. Termine d’abord l’étape précédente.",
    pathSelectedInfo:"Sélectionné"
  });
  Object.assign(I18N.tl, {
    pathTapAgain:"Click the same stop again to play.",
    pathLockedInfo:"Locked. Complete the previous step first.",
    pathSelectedInfo:"Selected"
  });


  /* v27.9.4 — Pure map learning path */
  Object.assign(I18N.nl, {
    pathNodeTapAgain:"klik opnieuw om te spelen",
    pathNodeLocked:"Gesloten"
  });
  Object.assign(I18N.en, {
    pathNodeTapAgain:"click again to play",
    pathNodeLocked:"locked"
  });
  Object.assign(I18N.fr, {
    pathNodeTapAgain:"clique encore pour jouer",
    pathNodeLocked:"verrouillé"
  });
  Object.assign(I18N.tl, {
    pathNodeTapAgain:"click again to play",
    pathNodeLocked:"locked"
  });


  /* v27.11 — compact path + dev question list text */
  Object.assign(I18N.nl, {
    pathNodePlay:"Start",
    pathCompactSub:"{done}/{total} stappen · nu: {step}",
    pathCompactMeta:"{questions} · {action}",
    pathNodeQuestionCount:"vraagtypes",
    devQuestionList:"Lijst vragen",
    devAllQuestionList:"Alle topics",
    devQuestionListTitle:"Vragenlijst voor maker",
    devQuestionListHint:"Dit zijn representatieve gegenereerde vraagtypes met voorbeeldantwoorden.",
    devQuestionListNone:"Geen voorbeelden gevonden.",
    devQuestionListCorrect:"juist",
    devQuestionListMode:"type",
    devQuestionListSkill:"vaardigheid",
    devQuestionListLevel:"niveau"
  });
  Object.assign(I18N.en, {
    pathNodePlay:"tap again to play",
    pathCompactSub:"{done}/{total} steps · now: {step}",
    pathCompactMeta:"{questions} · {action}",
    pathNodeQuestionCount:"question types",
    devQuestionList:"Question list",
    devAllQuestionList:"All topics",
    devQuestionListTitle:"Question list for maker",
    devQuestionListHint:"Representative generated question types with sample answers.",
    devQuestionListNone:"No examples found.",
    devQuestionListCorrect:"correct",
    devQuestionListMode:"type",
    devQuestionListSkill:"skill",
    devQuestionListLevel:"level"
  });
  Object.assign(I18N.fr, {
    pathNodePlay:"touche encore pour jouer",
    pathCompactSub:"{done}/{total} étapes · maintenant : {step}",
    pathCompactMeta:"{questions} · {action}",
    pathNodeQuestionCount:"types de questions",
    devQuestionList:"Liste questions",
    devAllQuestionList:"Tous thèmes",
    devQuestionListTitle:"Liste de questions pour créateur",
    devQuestionListHint:"Types de questions générées représentatives avec réponses exemples.",
    devQuestionListNone:"Aucun exemple trouvé.",
    devQuestionListCorrect:"correct",
    devQuestionListMode:"type",
    devQuestionListSkill:"compétence",
    devQuestionListLevel:"niveau"
  });
  Object.assign(I18N.tl, {
    pathNodePlay:"tap again to play",
    pathCompactSub:"{done}/{total} steps · now: {step}",
    pathCompactMeta:"{questions} · {action}",
    pathNodeQuestionCount:"question types",
    devQuestionList:"Question list",
    devAllQuestionList:"All topics",
    devQuestionListTitle:"Question list for maker",
    devQuestionListHint:"Representative generated question types with sample answers.",
    devQuestionListNone:"No examples found.",
    devQuestionListCorrect:"correct",
    devQuestionListMode:"type",
    devQuestionListSkill:"skill",
    devQuestionListLevel:"level"
  });


  /* v27.9.5 — aligned route */
  Object.assign(I18N.nl, { pathMapBack:"Terug" });
  Object.assign(I18N.en, { pathMapBack:"Back" });
  Object.assign(I18N.fr, { pathMapBack:"Retour" });
  Object.assign(I18N.tl, { pathMapBack:"Back" });
  Object.assign(I18N.nl, { endBackToPath:"Terug naar leerpad", endWorldMap:"Wereldkaart" });
  Object.assign(I18N.en, { endBackToPath:"Back to path", endWorldMap:"World map" });
  Object.assign(I18N.fr, { endBackToPath:"Retour au parcours", endWorldMap:"Carte du monde" });
  Object.assign(I18N.tl, { endBackToPath:"Back to path", endWorldMap:"World map" });


  /* v27.9.6 — Path editor text */
  Object.assign(I18N.nl, {
    pathEditorTitle:"Pad-editor",
    pathEditorHelp:"Sleep de stopplaatsen.",
    pathEditorCopy:"Kopieer",
    pathEditorReset:"Reset",
    pathEditorCopied:"Coördinaten gekopieerd",
    pathEditorResetDone:"Padposities gereset",
    pathEditorOpenHint:"Edit-modus: sleep stopplaatsen, kopieer daarna de coördinaten."
  });
  Object.assign(I18N.en, {
    pathEditorTitle:"Path editor",
    pathEditorHelp:"Drag the stops.",
    pathEditorCopy:"Copy",
    pathEditorReset:"Reset",
    pathEditorCopied:"Coordinates copied",
    pathEditorResetDone:"Path positions reset",
    pathEditorOpenHint:"Edit mode: drag stops, then copy the coordinates."
  });
  Object.assign(I18N.fr, {
    pathEditorTitle:"Éditeur du chemin",
    pathEditorHelp:"Déplace les étapes.",
    pathEditorCopy:"Copier",
    pathEditorReset:"Reset",
    pathEditorCopied:"Coordonnées copiées",
    pathEditorResetDone:"Positions réinitialisées",
    pathEditorOpenHint:"Mode édition : déplace les étapes, puis copie les coordonnées."
  });
  Object.assign(I18N.tl, {
    pathEditorTitle:"Path editor",
    pathEditorHelp:"Drag the stops.",
    pathEditorCopy:"Copy",
    pathEditorReset:"Reset",
    pathEditorCopied:"Coordinates copied",
    pathEditorResetDone:"Path positions reset",
    pathEditorOpenHint:"Edit mode: drag stops, then copy the coordinates."
  });


  /* v27.10 — Generic topic paths */
  Object.assign(I18N.nl, {
    pathNumberHub:"Start",
    pathNumberMultiples:"Veelvouden",
    pathNumberDivisors:"Delers",
    pathNumberDivisibility:"Deelbaar?",
    pathNumberPrimes:"Priem",
    pathNumberPowers:"Kwadraten",
    pathNumberMastery:"Finale",

    pathPercentHub:"Start",
    pathPercentEquivalent:"% herkennen",
    pathPercentOf:"% van getal",
    pathPercentDiscount:"Korting",
    pathPercentRatio:"Verhouding",
    pathPercentScale:"Schaal",
    pathPercentMastery:"Finale",

    pathEquationHub:"Start",
    pathEquationSimple:"x zoeken",
    pathEquationMulDiv:"× en ÷",
    pathEquationTwoStep:"2 stappen",
    pathEquationSubstitute:"Invullen",
    pathEquationFormula:"Formules",
    pathEquationMastery:"Finale",

    pathCoordHub:"Start",
    pathCoordPoint:"Punten",
    pathCoordLines:"x/y-lijnen",
    pathCoordQuadrants:"Kwadranten",
    pathCoordTransform:"Verschuiven",
    pathCoordMidpoint:"Middelpunt",
    pathCoordMastery:"Finale",

    pathShapeHub:"Start",
    pathShapeClassify:"Herkennen",
    pathShapeAngles:"Hoeken",
    pathShapeProperties:"Kenmerken",
    pathShapeSymmetry:"Symmetrie",
    pathShapeTransform:"Bewegen",
    pathShapeMastery:"Finale",

    pathIneqHub:"Start",
    pathIneqNumberLine:"Getallenlijn",
    pathIneqGreater:"Groter dan",
    pathIneqLess:"Kleiner dan",
    pathIneqInclusive:"≤ en ≥",
    pathIneqMixed:"Mix",
    pathIneqMastery:"Finale",

    pathNodeQuestionCount:"vraagtypes",
    pathNodeCountTitle:"Leerpad-node dekking"
  });
  Object.assign(I18N.en, {
    pathNumberHub:"Start in Number Bay",
    pathNumberMultiples:"Multiples",
    pathNumberDivisors:"Divisors",
    pathNumberDivisibility:"Divisibility",
    pathNumberPrimes:"Prime numbers",
    pathNumberPowers:"Squares and absolute value",
    pathNumberMastery:"Mastery",

    pathPercentHub:"Start in Percent Harbor",
    pathPercentEquivalent:"% ↔ fraction ↔ decimal",
    pathPercentOf:"Percent of a number",
    pathPercentDiscount:"Discount",
    pathPercentRatio:"Ratios",
    pathPercentScale:"Scale and tables",
    pathPercentMastery:"Mastery",

    pathEquationHub:"Start in Equation Valley",
    pathEquationSimple:"Simple equations",
    pathEquationMulDiv:"Multiplication and division",
    pathEquationTwoStep:"Two-step equations",
    pathEquationSubstitute:"Substitution and simplifying",
    pathEquationFormula:"Brackets, formulas and patterns",
    pathEquationMastery:"Mastery",

    pathCoordHub:"Start in Coordinate Bay",
    pathCoordPoint:"Read points",
    pathCoordLines:"x- and y-lines",
    pathCoordQuadrants:"Quadrants",
    pathCoordTransform:"Reflection and translation",
    pathCoordMidpoint:"Midpoint and table",
    pathCoordMastery:"Mastery",

    pathShapeHub:"Start in Shape Island",
    pathShapeClassify:"Recognize shapes",
    pathShapeAngles:"Angles",
    pathShapeProperties:"Properties",
    pathShapeSymmetry:"Symmetry",
    pathShapeTransform:"Transformations and similarity",
    pathShapeMastery:"Mastery",

    pathIneqHub:"Start in Inequality Storm",
    pathIneqNumberLine:"Number line",
    pathIneqGreater:"Greater than",
    pathIneqLess:"Less than",
    pathIneqInclusive:"With equality",
    pathIneqMixed:"Negative and mixed",
    pathIneqMastery:"Mastery",

    pathNodeQuestionCount:"question types",
    pathNodeCountTitle:"Learning path node coverage"
  });
  Object.assign(I18N.fr, {
    pathNumberHub:"Départ à la baie des nombres",
    pathNumberMultiples:"Multiples",
    pathNumberDivisors:"Diviseurs",
    pathNumberDivisibility:"Divisibilité",
    pathNumberPrimes:"Nombres premiers",
    pathNumberPowers:"Carrés et valeur absolue",
    pathNumberMastery:"Maîtrise",

    pathPercentHub:"Départ au port des pourcentages",
    pathPercentEquivalent:"% ↔ fraction ↔ décimal",
    pathPercentOf:"Pourcentage d’un nombre",
    pathPercentDiscount:"Réduction",
    pathPercentRatio:"Rapports",
    pathPercentScale:"Échelle et tableaux",
    pathPercentMastery:"Maîtrise",

    pathEquationHub:"Départ dans la vallée des équations",
    pathEquationSimple:"Équations simples",
    pathEquationMulDiv:"Multiplier et diviser",
    pathEquationTwoStep:"Équations en deux étapes",
    pathEquationSubstitute:"Substitution et simplification",
    pathEquationFormula:"Parenthèses, formules et suites",
    pathEquationMastery:"Maîtrise",

    pathCoordHub:"Départ à la baie des coordonnées",
    pathCoordPoint:"Lire des points",
    pathCoordLines:"Lignes x et y",
    pathCoordQuadrants:"Quadrants",
    pathCoordTransform:"Symétrie et translation",
    pathCoordMidpoint:"Milieu et tableau",
    pathCoordMastery:"Maîtrise",

    pathShapeHub:"Départ sur l’île des formes",
    pathShapeClassify:"Reconnaître les figures",
    pathShapeAngles:"Angles",
    pathShapeProperties:"Propriétés",
    pathShapeSymmetry:"Symétrie",
    pathShapeTransform:"Transformations et similitude",
    pathShapeMastery:"Maîtrise",

    pathIneqHub:"Départ dans la tempête des inégalités",
    pathIneqNumberLine:"Droite graduée",
    pathIneqGreater:"Plus grand que",
    pathIneqLess:"Plus petit que",
    pathIneqInclusive:"Avec égalité",
    pathIneqMixed:"Négatif et mélangé",
    pathIneqMastery:"Maîtrise",

    pathNodeQuestionCount:"types de questions",
    pathNodeCountTitle:"Couverture des étapes"
  });
  Object.assign(I18N.tl, {
    pathNumberHub:"Start sa Number Bay",
    pathNumberMultiples:"Multiples",
    pathNumberDivisors:"Divisors",
    pathNumberDivisibility:"Divisibility",
    pathNumberPrimes:"Prime numbers",
    pathNumberPowers:"Squares and absolute value",
    pathNumberMastery:"Mastery",

    pathPercentHub:"Start sa Percent Harbor",
    pathPercentEquivalent:"% ↔ fraction ↔ decimal",
    pathPercentOf:"Percent of a number",
    pathPercentDiscount:"Discount",
    pathPercentRatio:"Ratios",
    pathPercentScale:"Scale and tables",
    pathPercentMastery:"Mastery",

    pathEquationHub:"Start sa Equation Valley",
    pathEquationSimple:"Simple equations",
    pathEquationMulDiv:"Multiplication and division",
    pathEquationTwoStep:"Two-step equations",
    pathEquationSubstitute:"Substitution and simplifying",
    pathEquationFormula:"Brackets, formulas and patterns",
    pathEquationMastery:"Mastery",

    pathCoordHub:"Start sa Coordinate Bay",
    pathCoordPoint:"Read points",
    pathCoordLines:"x- and y-lines",
    pathCoordQuadrants:"Quadrants",
    pathCoordTransform:"Reflection and translation",
    pathCoordMidpoint:"Midpoint and table",
    pathCoordMastery:"Mastery",

    pathShapeHub:"Start sa Shape Island",
    pathShapeClassify:"Recognize shapes",
    pathShapeAngles:"Angles",
    pathShapeProperties:"Properties",
    pathShapeSymmetry:"Symmetry",
    pathShapeTransform:"Transformations and similarity",
    pathShapeMastery:"Mastery",

    pathIneqHub:"Start sa Inequality Storm",
    pathIneqNumberLine:"Number line",
    pathIneqGreater:"Greater than",
    pathIneqLess:"Less than",
    pathIneqInclusive:"With equality",
    pathIneqMixed:"Negative and mixed",
    pathIneqMastery:"Mastery",

    pathNodeQuestionCount:"question types",
    pathNodeCountTitle:"Learning path node coverage"
  });



  /* v27.13 — Kortere leerlinglabels in alle leerpaden */
  Object.assign(I18N.nl, {
    pathFractionsRecognize:"Breuken zien",
    pathFractionsEquivalent:"Gelijk maken",
    pathFractionsCompare:"Vergelijken",
    pathFractionsOrder:"Ordenen",
    pathNumberMultiples:"Veelvouden",
    pathNumberDivisors:"Delers",
    pathNumberDivisibility:"Deelbaar?",
    pathNumberPrimes:"Priem",
    pathNumberPowers:"Kwadraten",
    pathPercentEquivalent:"% herkennen",
    pathPercentOf:"% van getal",
    pathPercentDiscount:"Korting",
    pathPercentRatio:"Verhouding",
    pathPercentScale:"Schaal",
    pathEquationSimple:"x zoeken",
    pathEquationMulDiv:"× en ÷",
    pathEquationTwoStep:"2 stappen",
    pathEquationSubstitute:"Invullen",
    pathEquationFormula:"Formules",
    pathCoordPoint:"Punten",
    pathCoordLines:"x/y-lijnen",
    pathCoordQuadrants:"Kwadranten",
    pathCoordTransform:"Verschuiven",
    pathCoordMidpoint:"Middelpunt",
    pathShapeClassify:"Herkennen",
    pathShapeAngles:"Hoeken",
    pathShapeProperties:"Kenmerken",
    pathShapeSymmetry:"Symmetrie",
    pathShapeTransform:"Bewegen",
    pathIneqNumberLine:"Getallenlijn",
    pathIneqGreater:"Groter dan",
    pathIneqLess:"Kleiner dan",
    pathIneqInclusive:"≤ en ≥",
    pathIneqMixed:"Mix"
  });
  Object.assign(I18N.en, {
    pathFractionsHub:"Start",
    pathFractionsRecognize:"See fractions",
    pathFractionsEquivalent:"Make equal",
    pathFractionsCompare:"Compare",
    pathFractionsOrder:"Order",
    pathFractionsMixed:"Mix",
    pathFractionsMastery:"Finale",
    pathNumberHub:"Start",
    pathNumberMultiples:"Multiples",
    pathNumberDivisors:"Divisors",
    pathNumberDivisibility:"Divisible?",
    pathNumberPrimes:"Prime",
    pathNumberPowers:"Squares",
    pathNumberMastery:"Finale",
    pathPercentHub:"Start",
    pathPercentEquivalent:"% basics",
    pathPercentOf:"% of number",
    pathPercentDiscount:"Discount",
    pathPercentRatio:"Ratio",
    pathPercentScale:"Scale",
    pathPercentMastery:"Finale",
    pathEquationHub:"Start",
    pathEquationSimple:"Find x",
    pathEquationMulDiv:"× and ÷",
    pathEquationTwoStep:"2 steps",
    pathEquationSubstitute:"Substitute",
    pathEquationFormula:"Formulas",
    pathEquationMastery:"Finale",
    pathCoordHub:"Start",
    pathCoordPoint:"Points",
    pathCoordLines:"x/y lines",
    pathCoordQuadrants:"Quadrants",
    pathCoordTransform:"Move",
    pathCoordMidpoint:"Midpoint",
    pathCoordMastery:"Finale",
    pathShapeHub:"Start",
    pathShapeClassify:"Recognize",
    pathShapeAngles:"Angles",
    pathShapeProperties:"Features",
    pathShapeSymmetry:"Symmetry",
    pathShapeTransform:"Move",
    pathShapeMastery:"Finale",
    pathIneqHub:"Start",
    pathIneqNumberLine:"Number line",
    pathIneqGreater:"Greater",
    pathIneqLess:"Less",
    pathIneqInclusive:"≤ and ≥",
    pathIneqMixed:"Mix",
    pathIneqMastery:"Finale"
  });
  Object.assign(I18N.fr, {
    pathFractionsHub:"Départ",
    pathFractionsRecognize:"Voir fractions",
    pathFractionsEquivalent:"Équivalent",
    pathFractionsCompare:"Comparer",
    pathFractionsOrder:"Ordonner",
    pathFractionsMixed:"Mix",
    pathFractionsMastery:"Finale",
    pathNumberHub:"Départ",
    pathNumberMultiples:"Multiples",
    pathNumberDivisors:"Diviseurs",
    pathNumberDivisibility:"Divisible ?",
    pathNumberPrimes:"Premier",
    pathNumberPowers:"Carrés",
    pathNumberMastery:"Finale",
    pathPercentHub:"Départ",
    pathPercentEquivalent:"% bases",
    pathPercentOf:"% d’un nombre",
    pathPercentDiscount:"Réduction",
    pathPercentRatio:"Rapport",
    pathPercentScale:"Échelle",
    pathPercentMastery:"Finale",
    pathEquationHub:"Départ",
    pathEquationSimple:"Chercher x",
    pathEquationMulDiv:"× et ÷",
    pathEquationTwoStep:"2 étapes",
    pathEquationSubstitute:"Remplacer",
    pathEquationFormula:"Formules",
    pathEquationMastery:"Finale",
    pathCoordHub:"Départ",
    pathCoordPoint:"Points",
    pathCoordLines:"Lignes x/y",
    pathCoordQuadrants:"Quadrants",
    pathCoordTransform:"Déplacer",
    pathCoordMidpoint:"Milieu",
    pathCoordMastery:"Finale",
    pathShapeHub:"Départ",
    pathShapeClassify:"Reconnaître",
    pathShapeAngles:"Angles",
    pathShapeProperties:"Traits",
    pathShapeSymmetry:"Symétrie",
    pathShapeTransform:"Bouger",
    pathShapeMastery:"Finale",
    pathIneqHub:"Départ",
    pathIneqNumberLine:"Droite",
    pathIneqGreater:"Plus grand",
    pathIneqLess:"Plus petit",
    pathIneqInclusive:"≤ et ≥",
    pathIneqMixed:"Mix",
    pathIneqMastery:"Finale"
  });
  Object.assign(I18N.tl, {
    pathFractionsHub:"Start",
    pathFractionsRecognize:"See fractions",
    pathFractionsEquivalent:"Make equal",
    pathFractionsCompare:"Compare",
    pathFractionsOrder:"Order",
    pathFractionsMixed:"Mix",
    pathFractionsMastery:"Finale",
    pathNumberHub:"Start",
    pathNumberMultiples:"Multiples",
    pathNumberDivisors:"Divisors",
    pathNumberDivisibility:"Divisible?",
    pathNumberPrimes:"Prime",
    pathNumberPowers:"Squares",
    pathNumberMastery:"Finale",
    pathPercentHub:"Start",
    pathPercentEquivalent:"% basics",
    pathPercentOf:"% of number",
    pathPercentDiscount:"Discount",
    pathPercentRatio:"Ratio",
    pathPercentScale:"Scale",
    pathPercentMastery:"Finale",
    pathEquationHub:"Start",
    pathEquationSimple:"Find x",
    pathEquationMulDiv:"× and ÷",
    pathEquationTwoStep:"2 steps",
    pathEquationSubstitute:"Substitute",
    pathEquationFormula:"Formulas",
    pathEquationMastery:"Finale",
    pathCoordHub:"Start",
    pathCoordPoint:"Points",
    pathCoordLines:"x/y lines",
    pathCoordQuadrants:"Quadrants",
    pathCoordTransform:"Move",
    pathCoordMidpoint:"Midpoint",
    pathCoordMastery:"Finale",
    pathShapeHub:"Start",
    pathShapeClassify:"Recognize",
    pathShapeAngles:"Angles",
    pathShapeProperties:"Features",
    pathShapeSymmetry:"Symmetry",
    pathShapeTransform:"Move",
    pathShapeMastery:"Finale",
    pathIneqHub:"Start",
    pathIneqNumberLine:"Number line",
    pathIneqGreater:"Greater",
    pathIneqLess:"Less",
    pathIneqInclusive:"≤ and ≥",
    pathIneqMixed:"Mix",
    pathIneqMastery:"Finale"
  });

  let currentLang = localStorage.getItem("bubblePopLang") || "nl";
  if(!I18N[currentLang]) currentLang = "nl";
  function tr(key){ return (I18N[currentLang] && I18N[currentLang][key]) || I18N.nl[key] || key; }
  function fmt(key, values={}){
    return tr(key).replace(/\{(\w+)\}/g, (_, name) => values[name] !== undefined ? values[name] : `{${name}}`);
  }
  function tierLabel(tierOrName){
    const n = typeof tierOrName === "number"
      ? tierOrName
      : (tierOrName === "Goud" ? 3 : tierOrName === "Zilver" ? 2 : tierOrName === "Brons" ? 1 : 0);
    if(n >= 3) return tr("tierGold");
    if(n === 2) return tr("tierSilver");
    if(n === 1) return tr("tierBronze");
    return tr("tierCompleted");
  }
  function questionCountText(n){
    return `${Number(n || 0)} ${tr("questionsWord")}`;
  }
  function levelRangeText(max){
    return `${tr("levelWord")} 1–${Number(max || 1)}`;
  }
  function playerDisplayName(){
    return playerName || tr("guestName");
  }

  function setLanguage(lang){
    if(!I18N[lang]) return;
    currentLang = lang;
    localStorage.setItem("bubblePopLang", currentLang);
    if(langSel) langSel.value = currentLang;
    if(langSelMini) langSelMini.value = currentLang;
    if(ratioLangSelMiniMain) ratioLangSelMiniMain.value = currentLang;
    document.querySelectorAll('select.langSelect, select#ratioLangSelMini').forEach(sel => {
      if(sel && sel.value !== currentLang) sel.value = currentLang;
    });
    if(atlasLangMenu) atlasLangMenu.querySelectorAll("button[data-lang]").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === currentLang);
    });
      document.querySelectorAll(".langQuickBtn").forEach(btn => {
      btn.classList.toggle("active", btn.dataset.lang === currentLang);
    });
    applyLanguage();
    updateAtlasDrawer(selectedTopic || "fractions");
    if(typeof updateRatioFooterLabels === "function") updateRatioFooterLabels();
    if(gameRoadmapOverlay && !gameRoadmapOverlay.classList.contains("hidden") && selectedTopic){
      openGameRoadmap(selectedTopic);
    }
  }

  function applyLanguage(){
    document.documentElement.lang = tr("htmlLang");
    document.title = tr("title");
    ui.title.textContent = tr("title");
    ui.intro.textContent = tr("intro");
    ui.langLabel.textContent = tr("lang");
    if(audioPanelTitle) audioPanelTitle.textContent = tr("audioTitle");
    if(musicVolumeLabel) musicVolumeLabel.textContent = tr("musicLabel");
    if(sfxVolumeLabel) sfxVolumeLabel.textContent = tr("sfxLabel");
    if(audioPanel) audioPanel.setAttribute("aria-label", tr("audioAdjust"));
    [audioBtn, atlasAudioBtn, ratioAudioBtnMain].forEach(btn => { if(btn) btn.setAttribute("aria-label", tr("audioLabel")); });
    updateAudioUI();
    ui.startBtn.textContent = tr("start");
    ui.restartBtn.textContent = tr("restart");
    if(endPathBtn) endPathBtn.textContent = tr("endBackToPath");
    if(endWorldBtn) endWorldBtn.textContent = tr("endWorldMap");
    ui.menuBtn.textContent = tr("menu");
    ui.fsBtn.setAttribute("aria-label", tr("fullscreen"));
    ui.skipBtn.textContent = tr("skip");
    if(nextRoundBtn) nextRoundBtn.setAttribute("aria-label", tr("next"));
    ui.doneTitle.textContent = tr("done");
    ui.topicGrid.setAttribute("aria-label", tr("topicAria"));
    ui.topicFractionsTitle.textContent = tr("fractionsTitle");
    ui.topicFractionsDesc.textContent = tr("fractionsDesc");
    ui.topicIneqTitle.textContent = tr("inequalitiesTitle");
    ui.topicIneqDesc.textContent = tr("inequalitiesDesc");
    if(ui.topicMixedTitle) ui.topicMixedTitle.textContent = tr("mixedTitle");
    if(ui.topicMixedDesc) ui.topicMixedDesc.textContent = tr("mixedDesc");
    ui.topicCoordTitle.textContent = tr("coordTitle");
    ui.topicCoordDesc.textContent = tr("coordDesc");
    ui.topicNumberTitle.textContent = tr("numberTitle");
    ui.topicNumberDesc.textContent = tr("numberDesc");
    if(ui.topicShapesTitle) ui.topicShapesTitle.textContent = tr("shapesTitle");
    if(ui.topicShapesDesc) ui.topicShapesDesc.textContent = tr("shapesDesc");
    if(ui.topicEqTitle) ui.topicEqTitle.textContent = tr("eqTitle");
    if(ui.topicEqDesc) ui.topicEqDesc.textContent = tr("eqDesc");
    if(ui.topicPercentTitle) ui.topicPercentTitle.textContent = tr("percentTitle");
    if(ui.topicPercentDesc) ui.topicPercentDesc.textContent = tr("percentDesc");
    if(devQuestionListBtn) devQuestionListBtn.textContent = tr("devQuestionList");
    if(devAllQuestionListBtn) devAllQuestionListBtn.textContent = tr("devAllQuestionList");
    if(rankBtn) rankBtn.setAttribute("aria-label", tr("leaderboardTitle"));
    if(mapRankBtn) mapRankBtn.setAttribute("aria-label", tr("leaderboardTitle"));
    if(sessionBriefStartBtn) sessionBriefStartBtn.textContent = activePathData(selectedTopic || currentPathTopic) ? tr("startLearningStep") : tr("startRound");
    if(sessionBriefMenuBtn) sessionBriefMenuBtn.textContent = tr("back");
    if(pathStartBtn) pathStartBtn.textContent = tr("startLearningStep");
    if(pathBackBtn) pathBackBtn.textContent = tr("back");
    if(pathMapBackBtn){
      pathMapBackBtn.textContent = "←";
      pathMapBackBtn.setAttribute("aria-label", tr("pathMapBack"));
      pathMapBackBtn.title = tr("pathMapBack");
    }
    if(pathEditorPanel){
      const h = pathEditorPanel.querySelector("strong");
      const s = pathEditorPanel.querySelector("small");
      if(h) h.textContent = tr("pathEditorTitle");
      if(s) s.textContent = tr("pathEditorHelp");
    }
    if(pathCopyBtn) pathCopyBtn.textContent = tr("pathEditorCopy");
    if(pathResetBtn) pathResetBtn.textContent = tr("pathEditorReset");
    renderTopicLearningPath(selectedTopic, phone && phone.classList.contains("briefingTopicPathMode"));
    if(sessionPlayerNameInput) sessionPlayerNameInput.placeholder = tr("giveNamePlaceholder");
    if(leaderboardPanel){
      const h = leaderboardPanel.querySelector("h2");
      const p = leaderboardPanel.querySelector("p");
      if(h) h.textContent = tr("leaderboardTitle");
      if(p) p.textContent = tr("leaderboardHelp");
    }
    if(closeRankBtn) closeRankBtn.textContent = tr("close");
    if(resetRankBtn) resetRankBtn.textContent = tr("reset");
    if(leaderboardNameInput) leaderboardNameInput.placeholder = tr("giveNamePlaceholder");
    if(profilePanel){
      const h = profilePanel.querySelector("h2");
      const p = profilePanel.querySelector("p");
      if(h) h.textContent = tr("profileTitle");
      if(p) p.textContent = tr("profileText");
    }
    if(playerNameInput) playerNameInput.placeholder = tr("giveNamePlaceholder");
    if(savePlayerBtn) savePlayerBtn.textContent = tr("start");
    if(guestPlayerBtn) guestPlayerBtn.textContent = tr("guestName");
    if(loginPanel){
      const h = loginPanel.querySelector("h2");
      const p = loginPanel.querySelector("p");
      const hint = loginPanel.querySelector(".loginHint");
      if(h) h.textContent = tr("loginTitle");
      if(p) p.textContent = tr("loginText");
      if(hint) hint.textContent = tr("loginHint");
    }
    if(loginUserInput) loginUserInput.placeholder = tr("loginAccountPlaceholder");
    if(loginPassInput) loginPassInput.placeholder = tr("loginPasswordPlaceholder");
    if(loginSubmitBtn) loginSubmitBtn.textContent = tr("loginButton");
    if(loginGuestFillBtn) loginGuestFillBtn.textContent = tr("loginGuestButton");
    if(devStartBtn) devStartBtn.textContent = tr("startTest");
    if(devNextBtn) devNextBtn.textContent = tr("newQuestion");
    if(devMassTestBtn) devMassTestBtn.textContent = tr("test100");
    if(devFullTestBtn) devFullTestBtn.textContent = tr("testAll");
    if(devCopyReportBtn) devCopyReportBtn.textContent = tr("copyReport");
    if(devResetProgressBtn) devResetProgressBtn.textContent = tr("resetProgress");
    if(devTierSelect){
      const tierOptions = {1:tr("tierBronze"), 2:tr("tierSilver"), 3:tr("tierGold")};
      Array.from(devTierSelect.options).forEach(opt => { opt.textContent = tierOptions[opt.value] || opt.textContent; });
    }
    if(devTopicSelect){
      Array.from(devTopicSelect.options).forEach(opt => { opt.textContent = topicName(opt.value); });
    }
    if(devPanelResult && !lastDevReportText) devPanelResult.textContent = tr("devReady");
    syncAccountUI();
    renderLeaderboard();
    if(task) renderTarget(task);
    if(task) updateHint(task);
    updateHUD();
    updateMapWorldLabels();
    if(!endOverlay.classList.contains("hidden")) updateEndText();
  }

  let lastTap = 0;
  let selectedTopic = "";
  function applyTopicTheme(){
    const topic = selectedTopic || "fractions";
    stage.dataset.topic = topic;
    phone.dataset.topic = topic;
  }
  let activeTimers = [];

  function setTimer(fn, delay){
    const id = window.setTimeout(() => {
      activeTimers = activeTimers.filter(timerId => timerId !== id);
      fn();
    }, delay);
    activeTimers.push(id);
    return id;
  }

  function clearTimers(){
    activeTimers.forEach(id => window.clearTimeout(id));
    activeTimers = [];
  }

  let score = 0;
  let level = 1;
  let round = 0;
  let bubbles = [];
  let correctRemaining = 0;
  let correctTotal = 0;
  let locked = false;
  let task = null;
  let maxRounds = 10;
  let sessionPlan = { questions:10, maxLevel:5, tierAttempt:1, tierName:"Brons" };
  const mixedTopics = ["fractions","inequalities","coordinates","numbertheory","shapes","equations"];
  const playableTopics = ["fractions","inequalities","coordinates","numbertheory","shapes","equations","percentages"];
  let mixedTopicDeck = [];
  let curriculumSkillDeck = [];
  let forcedSkillForRound = "";
  let recentTaskKeys = [];
  const recentTaskLimit = 6;

  const AUTH_KEY = "bubblePopAuthUser";
  function loadAuthUser(){
    try{ return JSON.parse(localStorage.getItem(AUTH_KEY) || "null"); }catch(e){ return null; }
  }
  let authUser = loadAuthUser();
  let playerName = (authUser && authUser.displayName) || "";
  let roundStartTime = 0;
  let elapsedMs = 0;
  let timerInterval = null;
  let perfectRun = true;



  // v69 — Developer unlock: open index.html?dev=1 or ?unlock=1 to make every learning-path node playable.
  // Disable again from the browser console with: localStorage.removeItem("bubblePopDeveloperUnlock")

  const families = [
    { key:"1/2", base:[1,2], variants:[[1,2],[2,4],[3,6],[4,8],[5,10],[6,12]] },
    { key:"1/3", base:[1,3], variants:[[1,3],[2,6],[3,9],[4,12]] },
    { key:"2/3", base:[2,3], variants:[[2,3],[4,6],[6,9],[8,12]] },
    { key:"1/4", base:[1,4], variants:[[1,4],[2,8],[3,12]] },
    { key:"3/4", base:[3,4], variants:[[3,4],[6,8],[9,12]] },
    { key:"1/5", base:[1,5], variants:[[1,5],[2,10]] },
    { key:"2/5", base:[2,5], variants:[[2,5],[4,10]] },
    { key:"3/5", base:[3,5], variants:[[3,5],[6,10]] },
    { key:"4/5", base:[4,5], variants:[[4,5],[8,10]] },
    { key:"1/6", base:[1,6], variants:[[1,6],[2,12]] },
    { key:"5/6", base:[5,6], variants:[[5,6],[10,12]] },
    { key:"3/8", base:[3,8], variants:[[3,8]] },
    { key:"5/8", base:[5,8], variants:[[5,8]] },
    { key:"7/8", base:[7,8], variants:[[7,8]] }
  ];

  const allBaseFractions = families.map(f => f.base);
  const colors = [
    ["rgba(125,237,241,.28)","rgba(34,184,199,.72)"],
    ["rgba(186,133,255,.22)","rgba(141,85,217,.62)"],
    ["rgba(255,221,105,.26)","rgba(245,198,66,.66)"],
    ["rgba(126,223,109,.22)","rgba(105,205,91,.62)"],
    ["rgba(255,126,178,.22)","rgba(234,111,162,.60)"],
    ["rgba(116,185,255,.22)","rgba(83,161,237,.60)"],
    ["rgba(255,186,104,.24)","rgba(244,166,74,.64)"],
  ];


  function formatTime(ms){
    const total = Math.max(0, Math.floor(ms / 1000));
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m}:${String(s).padStart(2,"0")}`;
  }

  function updateTimer(){
    if(!timerText) return;
    const now = roundStartTime ? Date.now() - roundStartTime : elapsedMs;
    timerText.textContent = formatTime(now);
  }

  function startTimer(){
    stopTimer();
    elapsedMs = 0;
    roundStartTime = Date.now();
    updateTimer();
    timerInterval = setInterval(updateTimer, 250);
  }

  function stopTimer(){
    if(timerInterval){
      clearInterval(timerInterval);
      timerInterval = null;
    }
    if(roundStartTime){
      elapsedMs = Date.now() - roundStartTime;
      roundStartTime = 0;
    }
    updateTimer();
  }


  function currentTierDifficulty(){
    const tier = Number(sessionPlan && sessionPlan.tierAttempt ? sessionPlan.tierAttempt : 1) || 1;
    if(tier >= 3) return "gold";
    if(tier === 2) return "silver";
    return "bronze";
  }

  function maxLevelForCurrentSession(){
    return Number(sessionPlan && sessionPlan.maxLevel ? sessionPlan.maxLevel : 9) || 9;
  }

  function debugTaskType(t){
    if(!t) return "";
    return t.mode || t.kind || t.questionType || t.shapeKey || t.topic || "";
  }

  function answerLabelForDebug(item){
    if(!item) return "";
    if(item.label !== undefined) return String(item.label);
    if(item.value !== undefined) return String(item.value);
    if(item.coord) return `(${item.coord[0]},${item.coord[1]})`;
    if(item.name) return String(item.name);
    if(item.shapeName) return String(item.shapeName);
    return "";
  }

  function updateDebugPanel(){
    if(!DEBUG_MODE || !debugPanel) return;
    const correctItems = Array.isArray(bubbles) ? bubbles.filter(it => it.correct) : [];
    const labels = correctItems.map(answerLabelForDebug).filter(Boolean).slice(0, 8).join(", ");
    debugPanel.innerHTML =
      `<strong>${escapeHTML(topicName(selectedTopic || "fractions"))}</strong> · ` +
      `ronde ${Math.max(1, Math.min(round || 1, maxRounds || 1))}/${maxRounds || "?"} · ` +
      `niveau ${level || 1}/${maxLevelForCurrentSession()} · ` +
      `tier ${escapeHTML(sessionPlan && sessionPlan.tierName ? sessionPlan.tierName : tierName(sessionPlan && sessionPlan.tierAttempt ? sessionPlan.tierAttempt : 1))}<br>` +
      `type: ${escapeHTML(debugTaskType(task)) || "?"} · juist: ${correctItems.length}` +
      `<br>${escapeHTML(tr("curriculumInDebug"))}: ${escapeHTML(curriculumDomainLabel(task && task.curriculumDomain))} · ${escapeHTML(curriculumSkillLabel(task && task.curriculumSkill))}` +
      (forcedSkillForRound ? `<br>${escapeHTML(tr("deckSkill"))}: ${escapeHTML(curriculumSkillLabel(forcedSkillForRound))}` : "") +
      (labels ? `<br>antwoorden: ${escapeHTML(labels)}` : "");
  }

  function markDebugAnswers(){
    if(!DEBUG_MODE) return;
    document.querySelectorAll(".bubble").forEach(b => {
      const isCorrect = b.dataset.correct === "1";
      b.classList.toggle("correctDebug", isCorrect);
      b.classList.toggle("wrongDebug", !isCorrect);
    });
    updateDebugPanel();
  }

  function getLeaderboard(){
    try{
      return JSON.parse(localStorage.getItem("bubblePopLeaderboard") || "[]");
    }catch(e){
      return [];
    }
  }

  function saveLeaderboard(rows){
    localStorage.setItem("bubblePopLeaderboard", JSON.stringify(rows.slice(0, 20)));
  }

  const WORLD_PROGRESS_KEY = "bubblePopWorldProgress";

  function getWorldProgress(){
    try{
      return JSON.parse(localStorage.getItem(WORLD_PROGRESS_KEY) || "{}");
    }catch(e){
      return {};
    }
  }

  function saveWorldProgress(progress){
    localStorage.setItem(WORLD_PROGRESS_KEY, JSON.stringify(progress));
  }

  function topicBadgeIcon(topic){
    if(topic === "fractions") return "🐚";
    if(topic === "inequalities") return "⚡";
    if(topic === "coordinates") return "🧭";
    if(topic === "numbertheory") return "🧮";
    if(topic === "shapes") return "🔷";
    if(topic === "equations") return "⚖️";
    if(topic === "percentages") return "🏷️";
    if(topic === "ratios") return "⚓";
    return "★";
  }

  function tierName(tier){
    if(tier >= 3) return "Goud";
    if(tier === 2) return "Zilver";
    if(tier === 1) return "Brons";
    return "Voltooid";
  }


  function getRewardTier(topic){
    const progress = getWorldProgress();
    const state = progress[topic] || {};
    return Math.max(0, Number(state.rewardTier || (state.perfect ? 1 : 0)) || 0);
  }

  function getNextSessionPlan(topic){
    const tier = getRewardTier(topic);
    if(tier >= 3){
      return { questions:30, maxLevel:9, tierAttempt:3, tierName:"Goud", mastered:true };
    }
    if(tier >= 2){
      return { questions:30, maxLevel:9, tierAttempt:3, tierName:"Goud", mastered:false };
    }
    if(tier >= 1){
      return { questions:20, maxLevel:8, tierAttempt:2, tierName:"Zilver", mastered:false };
    }
    return { questions:10, maxLevel:5, tierAttempt:1, tierName:"Brons", mastered:false };
  }



  const DEFAULT_PATH_NODES = [
    {x:45, y:82, icon:"⌂"},
    {x:82, y:51.1, icon:"1"},
    {x:35.2, y:52, icon:"2"},
    {x:55.6, y:40.1, icon:"3"},
    {x:28.1, y:35.4, icon:"4"},
    {x:76.7, y:27.3, icon:"5"},
    {x:53.7, y:17.2, icon:"★", mastery:true}
  ];

  const ALL_TOPIC_SKILLS = {
    fractions:["fractionsEquivalent","fractionsCompare"],
    numbertheory:["numberMultiples","numberDivisors","numberDivisibility","numberPrimes","numberSquares","numberAbsolute","numberGcdLcm"],
    percentages:["percentEquivalent","percentOf","percentDiscount","percentChange","ratioBasic","ratioTable","scale","reverseDiscount","percentFromPart"],
    equations:["equationSolve","algebraSubstitution","algebraSimplify","algebraDistribute","algebraPattern","algebraFormula","algebraTableFormula"],
    coordinates:["coordinatePoint","coordinateLine","coordinateQuadrants","coordinateReflection","coordinateTranslation","coordinateMidpoint","coordinateTablePoint"],
    shapes:["shapeClassify","shapeAngles","shapeProperties","shapeParallelPerpendicular","shapeSymmetry","shapeReflection","shapeRotation","shapeTranslation","shapeCongruence","shapeSimilarity","shapePerimeterArea"],
    inequalities:["integersOrder"]
  };

  const TOPIC_LEARNING_PATHS = {
    fractions:{
      background:"url('assets/bg-breukenzee-learningpath.png')",
      nodes:[
        {id:"hub", key:"pathFractionsHub", x:45, y:82, icon:"⌂", skills:[]},
        {id:"recognize", key:"pathFractionsRecognize", x:82, y:51.1, icon:"1", skills:["fractionsEquivalent"]},
        {id:"equivalent", key:"pathFractionsEquivalent", x:35.2, y:52, icon:"2", skills:["fractionsEquivalent"]},
        {id:"compare", key:"pathFractionsCompare", x:55.6, y:40.1, icon:"3", skills:["fractionsCompare"]},
        {id:"order", key:"pathFractionsOrder", x:28.1, y:35.4, icon:"4", skills:["fractionsCompare"]},
        {id:"mixed", key:"pathFractionsMixed", x:76.7, y:27.3, icon:"5", skills:["fractionsEquivalent","fractionsCompare"]},
        {id:"mastery", key:"pathFractionsMastery", x:53.7, y:17.2, icon:"★", mastery:true, skills:["fractionsEquivalent","fractionsCompare"]}
      ]
    },
    numbertheory:{
      background:"url('assets/game-bg/bg-getallenbaai.png')",
      nodes:[
        {id:"hub", key:"pathNumberHub", x:45, y:82, icon:"⌂", skills:[]},
        {id:"multiples", key:"pathNumberMultiples", x:30, y:64, icon:"1", skills:["numberMultiples"]},
        {id:"divisors", key:"pathNumberDivisors", x:65, y:66, icon:"2", skills:["numberDivisors"]},
        {id:"divisibility", key:"pathNumberDivisibility", x:48, y:52, icon:"3", skills:["numberDivisibility"]},
        {id:"primes", key:"pathNumberPrimes", x:73, y:41, icon:"4", skills:["numberPrimes"]},
        {id:"powers", key:"pathNumberPowers", x:34, y:33, icon:"5", skills:["numberSquares","numberAbsolute","numberGcdLcm"]},
        {id:"mastery", key:"pathNumberMastery", x:54, y:18, icon:"★", mastery:true, skills:ALL_TOPIC_SKILLS.numbertheory}
      ]
    },
    percentages:{
      background:"url('assets/bg-procentenhaven-learningpath.png')",
      nodes:[
        {id:"hub", key:"pathPercentHub", x:19.5, y:79.5, icon:"⌂", skills:[]},
        {id:"equivalent", key:"pathPercentEquivalent", x:33.5, y:66.5, icon:"1", skills:["percentEquivalent"]},
        {id:"of", key:"pathPercentOf", x:53.5, y:58.5, icon:"2", skills:["percentOf","percentFromPart"]},
        {id:"discount", key:"pathPercentDiscount", x:67.5, y:47.5, icon:"3", skills:["percentDiscount","percentChange"]},
        {id:"ratio", key:"pathPercentRatio", x:45.5, y:38.5, icon:"4", skills:["ratioBasic","ratioTable"]},
        {id:"scale", key:"pathPercentScale", x:74.5, y:31.5, icon:"5", skills:["scale","reverseDiscount"]},
        {id:"mastery", key:"pathPercentMastery", x:55.5, y:20.5, icon:"★", mastery:true, skills:ALL_TOPIC_SKILLS.percentages}
      ]
    },
    equations:{
      background:"url('assets/game-bg/bg-vergelijkingenvallei.png')",
      nodes:[
        {id:"hub", key:"pathEquationHub", x:44, y:82, icon:"⌂", skills:[]},
        {id:"simple", key:"pathEquationSimple", x:29, y:66, icon:"1", skills:["equationSolve"]},
        {id:"muldiv", key:"pathEquationMulDiv", x:66, y:65, icon:"2", skills:["equationSolve"]},
        {id:"twostep", key:"pathEquationTwoStep", x:50, y:52, icon:"3", skills:["equationSolve"]},
        {id:"substitute", key:"pathEquationSubstitute", x:75, y:40, icon:"4", skills:["algebraSubstitution","algebraSimplify"]},
        {id:"formula", key:"pathEquationFormula", x:34, y:32, icon:"5", skills:["algebraDistribute","algebraFormula","algebraPattern","algebraTableFormula"]},
        {id:"mastery", key:"pathEquationMastery", x:54, y:18, icon:"★", mastery:true, skills:ALL_TOPIC_SKILLS.equations}
      ]
    },
    coordinates:{
      background:"url('assets/game-bg/bg-coordinatenbaai.png')",
      nodes:[
        {id:"hub", key:"pathCoordHub", x:16.9, y:60.4, icon:"⌂", skills:[]},
        {id:"point", key:"pathCoordPoint", x:48.5, y:63, icon:"1", skills:["coordinatePoint"]},
        {id:"lines", key:"pathCoordLines", x:69.6, y:54.5, icon:"2", skills:["coordinateLine"]},
        {id:"quadrants", key:"pathCoordQuadrants", x:90.4, y:41.2, icon:"3", skills:["coordinateQuadrants"]},
        {id:"transform", key:"pathCoordTransform", x:77.8, y:28.2, icon:"4", skills:["coordinateReflection","coordinateTranslation"]},
        {id:"midpoint", key:"pathCoordMidpoint", x:46.1, y:25.7, icon:"5", skills:["coordinateMidpoint","coordinateTablePoint"]},
        {id:"mastery", key:"pathCoordMastery", x:10.9, y:31.7, icon:"★", skills:["coordinatePoint","coordinateLine","coordinateQuadrants","coordinateReflection","coordinateTranslation","coordinateMidpoint","coordinateTablePoint"], mastery:true}
      ]
    },
    shapes:{
      background:"url('assets/game-bg/bg-vormeneiland.png')",
      nodes:[
        {id:"hub", key:"pathShapeHub", x:44, y:82, icon:"⌂", skills:[]},
        {id:"classify", key:"pathShapeClassify", x:29, y:64, icon:"1", skills:["shapeClassify"]},
        {id:"angles", key:"pathShapeAngles", x:65, y:66, icon:"2", skills:["shapeAngles"]},
        {id:"properties", key:"pathShapeProperties", x:48, y:52, icon:"3", skills:["shapeProperties","shapeParallelPerpendicular"]},
        {id:"symmetry", key:"pathShapeSymmetry", x:75, y:41, icon:"4", skills:["shapeSymmetry"]},
        {id:"transform", key:"pathShapeTransform", x:34, y:32, icon:"5", skills:["shapeReflection","shapeRotation","shapeTranslation","shapeCongruence","shapeSimilarity","shapePerimeterArea"]},
        {id:"mastery", key:"pathShapeMastery", x:54, y:18, icon:"★", mastery:true, skills:ALL_TOPIC_SKILLS.shapes}
      ]
    },
    inequalities:{
      background:"url('assets/game-bg/bg-ongelijkhedenstorm.png')",
      nodes:[
        {id:"hub", key:"pathIneqHub", x:82.6, y:88, icon:"⌂", skills:[]},
        {id:"line", key:"pathIneqNumberLine", x:75.6, y:75.9, icon:"1", skills:["integersOrder"]},
        {id:"greater", key:"pathIneqGreater", x:50.6, y:65.7, icon:"2", skills:["integersOrder"]},
        {id:"less", key:"pathIneqLess", x:43.5, y:51.2, icon:"3", skills:["integersOrder"]},
        {id:"inclusive", key:"pathIneqInclusive", x:20, y:53.1, icon:"4", skills:["integersOrder"]},
        {id:"mixed", key:"pathIneqMixed", x:25.9, y:45.2, icon:"5", skills:["integersOrder"]},
        {id:"mastery", key:"pathIneqMastery", x:12.4, y:36.1, icon:"★", skills:["integersOrder"], mastery:true}
      ]
    }
  };

  let selectedLearningPathIndex = null;
  let currentPathTopic = "fractions";
  let pathDragJustMoved = false;

  function resolvePathTopic(topic=currentPathTopic){
    const candidates = [
      topic,
      currentPathTopic,
      selectedTopic,
      phone ? phone.dataset.topic : "",
      "fractions"
    ];
    return candidates.find(t => t && TOPIC_LEARNING_PATHS[t]) || "fractions";
  }

  function activePathData(topic=currentPathTopic){
    const resolved = resolvePathTopic(topic);
    return TOPIC_LEARNING_PATHS[resolved] || null;
  }

  function activePathNodes(topic=currentPathTopic){
    const resolved = resolvePathTopic(topic);
    const data = TOPIC_LEARNING_PATHS[resolved];
    return data ? data.nodes : [];
  }

  function activePathStorageKey(topic=currentPathTopic){
    const resolved = resolvePathTopic(topic);
    return `bubblePopTopicPathCoords:${resolved}`;
  }

  function clonePathNodes(nodes){
    return nodes.map(node => ({...node, skills:[...(node.skills || [])]}));
  }

  const TOPIC_LEARNING_PATH_DEFAULTS = {};
  Object.keys(TOPIC_LEARNING_PATHS).forEach(topic => {
    TOPIC_LEARNING_PATH_DEFAULTS[topic] = clonePathNodes(TOPIC_LEARNING_PATHS[topic].nodes);
  });

  function clampPathPercent(v){
    return Math.max(3, Math.min(97, Math.round(Number(v) * 10) / 10));
  }

  function exportTopicPathCoords(topic=currentPathTopic){
    const resolved = resolvePathTopic(topic);
    return activePathNodes(resolved).map(({id,key,x,y,icon,mastery,skills}) => ({
      id, key, x:Math.round(x*10)/10, y:Math.round(y*10)/10, icon, skills:[...(skills || [])], ...(mastery ? {mastery:true} : {})
    }));
  }

  function saveTopicPathCoords(topic=currentPathTopic){
    const resolved = resolvePathTopic(topic);
    try{
      localStorage.setItem(activePathStorageKey(resolved), JSON.stringify(exportTopicPathCoords(resolved)));
    }catch(e){}
  }

  function loadTopicPathCoords(topic){
    const data = TOPIC_LEARNING_PATHS[topic];
    if(!data) return;
    try{
      const saved = JSON.parse(localStorage.getItem(activePathStorageKey(topic)) || "null");
      if(!Array.isArray(saved)) return;
      saved.forEach(item => {
        const node = data.nodes.find(n => n.id === item.id);
        if(node && Number.isFinite(Number(item.x)) && Number.isFinite(Number(item.y))){
          node.x = clampPathPercent(item.x);
          node.y = clampPathPercent(item.y);
        }
      });
    }catch(e){}
  }

  Object.keys(TOPIC_LEARNING_PATHS).forEach(loadTopicPathCoords);

  function resetTopicPathCoords(topic=currentPathTopic){
    const resolved = resolvePathTopic(topic);
    const data = TOPIC_LEARNING_PATHS[resolved];
    const defaults = TOPIC_LEARNING_PATH_DEFAULTS[resolved];
    if(!data || !defaults) return;
    defaults.forEach(def => {
      const node = data.nodes.find(n => n.id === def.id);
      if(node){
        node.x = def.x;
        node.y = def.y;
      }
    });
    try{ localStorage.removeItem(activePathStorageKey(resolved)); }catch(e){}
    updateLearningPathSvg(resolved);
    renderTopicLearningPath(resolved, phone && phone.classList.contains("briefingTopicPathMode"));
    showToast(tr("pathEditorResetDone"), true);
  }

  function copyTopicPathCoords(topic=currentPathTopic){
    const resolved = resolvePathTopic(topic);
    const data = exportTopicPathCoords(resolved);
    const text = JSON.stringify(data, null, 2);
    if(!data.length){
      const all = {};
      Object.keys(TOPIC_LEARNING_PATHS).forEach(t => { all[t] = exportTopicPathCoords(t); });
      const fallbackText = JSON.stringify(all, null, 2);
      if(navigator.clipboard && navigator.clipboard.writeText){
        navigator.clipboard.writeText(fallbackText).then(() => showToast(tr("pathEditorCopied"), true)).catch(() => {
          console.log(fallbackText);
          showToast(tr("pathEditorCopied"), true);
        });
      }else{
        console.log(fallbackText);
        showToast(tr("pathEditorCopied"), true);
      }
      return;
    }
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(() => showToast(tr("pathEditorCopied"), true)).catch(() => {
        console.log(text);
        showToast(tr("pathEditorCopied"), true);
      });
    }else{
      console.log(text);
      showToast(tr("pathEditorCopied"), true);
    }
  }

  function pathDFromLearningNodes(topic=currentPathTopic){
    const pts = activePathNodes(topic).map(n => ({x:n.x, y:n.y}));
    if(!pts.length) return "";
    if(pts.length === 1) return `M${pts[0].x} ${pts[0].y}`;
    let d = `M${pts[0].x} ${pts[0].y}`;
    for(let i=0; i<pts.length-1; i++){
      const p0 = pts[Math.max(0, i-1)];
      const p1 = pts[i];
      const p2 = pts[i+1];
      const p3 = pts[Math.min(pts.length-1, i+2)];
      const c1x = p1.x + (p2.x - p0.x) / 6;
      const c1y = p1.y + (p2.y - p0.y) / 6;
      const c2x = p2.x - (p3.x - p1.x) / 6;
      const c2y = p2.y - (p3.y - p1.y) / 6;
      d += ` C${roundNice(c1x)} ${roundNice(c1y)}, ${roundNice(c2x)} ${roundNice(c2y)}, ${roundNice(p2.x)} ${roundNice(p2.y)}`;
    }
    return d;
  }

  function updateLearningPathSvg(topic=currentPathTopic){
    const d = pathDFromLearningNodes(topic);
    document.querySelectorAll(".topicPathGlow,.topicPathLine").forEach(path => {
      if(d) path.setAttribute("d", d);
    });
  }

  function learningPathCompletionCount(topic=currentPathTopic){
    const nodes = activePathNodes(topic);
    const maxNode = Math.max(1, nodes.length - 1);
    if(DEVELOPER_UNLOCK_ALL) return maxNode;
    const tier = getRewardTier(topic);
    if(tier >= 3) return maxNode;
    if(tier >= 2) return Math.min(maxNode, 4);
    if(tier >= 1) return Math.min(maxNode, 2);
    return 0;
  }

  function pathStateForIndex(index, completed, topic=currentPathTopic){
    const nodes = activePathNodes(topic);
    const maxNode = Math.max(1, nodes.length - 1);
    if(DEVELOPER_UNLOCK_ALL){
      if(index === 0) return "done";
      return "current";
    }
    if(index === 0) return "done";
    if(index <= completed) return "done";
    if(index === Math.min(maxNode, completed + 1)) return "current";
    return "locked";
  }

  function nodeQuestionVariantCount(topic, node, samplePerSkill=80){
    const skills = node && node.skills ? node.skills : [];
    if(!skills.length) return 0;
    const signatures = new Set();
    skills.forEach(skill => {
      const genLevel = Math.max(1, minLevelForSkill(skill));
      for(let i=0; i<samplePerSkill; i++){
        const task = createTaskForCurriculumSkill(topic, genLevel + (i % Math.max(1, 10-genLevel)), skill);
        signatures.add(taskSignature(task));
      }
    });
    return signatures.size;
  }

  function learningPathNodeCoverageRows(){
    const rows = [];
    Object.keys(TOPIC_LEARNING_PATHS).forEach(topic => {
      activePathNodes(topic).forEach((node, index) => {
        rows.push({
          topic,
          index,
          label:tr(node.key),
          skills:[...(node.skills || [])],
          count:nodeQuestionVariantCount(topic, node, 48)
        });
      });
    });
    return rows;
  }

  function formatLearningPathNodeCoverage(){
    const lines = [tr("pathNodeCountTitle")];
    const byTopic = {};
    learningPathNodeCoverageRows().forEach(row => {
      if(!byTopic[row.topic]) byTopic[row.topic] = [];
      byTopic[row.topic].push(row);
    });
    Object.keys(byTopic).forEach(topic => {
      lines.push(`  ${topicName(topic)}:`);
      byTopic[topic].forEach(row => {
        const skills = row.skills.length ? row.skills.map(curriculumSkillLabel).join(", ") : "hub";
        lines.push(`    ${row.index}. ${row.label}: ${row.count} ${tr("pathNodeQuestionCount")} · ${skills}`);
      });
    });
    return lines;
  }

  function setLearningPathMeta(index, state){
    const topic = currentPathTopic;
    const nodes = activePathNodes(topic);
    const completed = learningPathCompletionCount(topic);
    const total = Math.max(1, nodes.length - 1);
    const nextIndex = completed >= total ? total : Math.min(total, completed + 1);
    const step = nodes[index] || nodes[nextIndex] || nodes[0];
    const nextStep = nodes[nextIndex] || step;
    const progressText = DEVELOPER_UNLOCK_ALL
      ? `🔓 DEV · ${fmt("learningPathProgress", {done:total, total})}`
      : completed >= total
        ? tr("learningPathDone")
        : fmt("learningPathProgress", {done:completed, total});
    const stateKey = state === "done" ? "pathStateDone" : state === "current" ? "pathStateCurrent" : state === "retry" ? "pathStateRetry" : "pathStateLocked";
    const nextText = state === "locked"
      ? `${tr(step.key)} · ${tr("pathNodeLocked")}`
      : `${tr(step.key)} · ${tr("pathNodePlay")}`;
    if(topicPathProgressText) topicPathProgressText.textContent = progressText;
    if(topicPathNextText) topicPathNextText.textContent = nextText;
    if(briefingPathProgressText) briefingPathProgressText.textContent = progressText;
    if(briefingPathNextText) briefingPathNextText.textContent = nextText;

    if(pathTopTitle) pathTopTitle.textContent = fmt("pathCompactTop", {topic:topicName(topic), tier:tierLabel(sessionPlan && sessionPlan.tierAttempt ? sessionPlan.tierAttempt : 1)});
    if(pathTopSub) pathTopSub.textContent = fmt("pathCompactSub", {done:completed, total, step:tr(nextStep.key)});
    if(pathBottomTitle) pathBottomTitle.textContent = step ? tr(step.key) : "";
    if(pathBottomMeta){
      const action = state === "locked" ? tr("pathNodeLocked") : tr("pathNodePlay");
      pathBottomMeta.textContent = fmt("pathCompactMeta", {questions:questionCountText(maxRounds || 10), action});
    }
  }

  function setTopicPathBackground(active, topic=currentPathTopic){
    if(phone){
      phone.classList.toggle("briefingTopicPathMode", !!active);
      phone.classList.toggle("popupFreePath", !!active);
      const data = activePathData(topic);
      if(active && data){
        phone.style.setProperty("--topicPathBg", data.background);
      }else{
        phone.style.removeProperty("--topicPathBg");
      }
    }
    if(briefingTopicPath) briefingTopicPath.classList.toggle("hidden", !active);
    if(pathMapBackBtn) pathMapBackBtn.classList.toggle("hidden", !active);
    if(pathEditorPanel) pathEditorPanel.classList.toggle("hidden", !(active && PATH_EDIT_MODE));
    if(pathTopBar) pathTopBar.classList.toggle("hidden", !active);
    if(pathBottomBar) pathBottomBar.classList.toggle("hidden", !active);
  }

  function updatePathNodeSelection(){
    document.querySelectorAll(".pathNode[data-path-index]").forEach(btn => {
      btn.classList.toggle("selected", Number(btn.dataset.pathIndex) === selectedLearningPathIndex);
    });
  }

  function handleLearningPathNodeClick(index, state, evt){
    if(evt){
      evt.preventDefault();
      evt.stopPropagation();
    }
    if(pathDragJustMoved){
      pathDragJustMoved = false;
      return;
    }
    if(selectedLearningPathIndex === index && state !== "locked"){
      beginSessionFromBriefing();
      return;
    }
    selectedLearningPathIndex = index;
    setLearningPathMeta(index, state);
    updatePathNodeSelection();
  }

  function startPathNodeDrag(evt, index, btn, container){
    if(!PATH_EDIT_MODE || container !== briefingPathNodes) return;
    evt.preventDefault();
    evt.stopPropagation();
    selectedLearningPathIndex = index;
    setLearningPathMeta(index, pathStateForIndex(index, learningPathCompletionCount(currentPathTopic), currentPathTopic));
    updatePathNodeSelection();

    const rect = briefingTopicPath ? briefingTopicPath.getBoundingClientRect() : null;
    if(!rect) return;

    let moved = false;
    btn.classList.add("dragging");
    try{ btn.setPointerCapture(evt.pointerId); }catch(e){}

    const move = (e) => {
      moved = true;
      pathDragJustMoved = true;
      const node = activePathNodes(currentPathTopic)[index];
      if(!node) return;
      node.x = clampPathPercent(((e.clientX - rect.left) / rect.width) * 100);
      node.y = clampPathPercent(((e.clientY - rect.top) / rect.height) * 100);
      document.querySelectorAll(`.pathNode[data-path-index="${index}"]`).forEach(el => {
        el.style.setProperty("--x", node.x);
        el.style.setProperty("--y", node.y);
      });
      updateLearningPathSvg(currentPathTopic);
    };

    const up = () => {
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerup", up);
      btn.classList.remove("dragging");
      if(moved){
        saveTopicPathCoords(currentPathTopic);
        setLearningPathMeta(index, pathStateForIndex(index, learningPathCompletionCount(currentPathTopic), currentPathTopic));
      }
      setTimer(() => { pathDragJustMoved = false; }, 80);
    };

    document.addEventListener("pointermove", move);
    document.addEventListener("pointerup", up);
  }

  function renderPathNodesInto(container, metaSetter){
    if(!container) return;
    const nodes = activePathNodes(currentPathTopic);
    const completed = learningPathCompletionCount(currentPathTopic);
    container.innerHTML = "";
    nodes.forEach((node, index) => {
      const state = pathStateForIndex(index, completed, currentPathTopic);
      const btn = document.createElement("button");
      btn.type = "button";
      btn.dataset.pathIndex = String(index);
      btn.className = `pathNode ${state}${node.mastery ? " mastery" : ""}${index === selectedLearningPathIndex ? " selected" : ""}`;
      btn.style.setProperty("--x", node.x);
      btn.style.setProperty("--y", node.y);
      btn.textContent = state === "done" && !node.mastery ? "✓" : node.icon;
      const stateLabel = tr(state === "done" ? "pathStateDone" : state === "current" ? "pathStateCurrent" : "pathStateLocked");
      btn.dataset.stepTitle = tr(node.key);
      btn.dataset.stepAction = state === "locked" ? tr("pathNodeLocked") : tr("pathNodePlay");
      btn.setAttribute("aria-label", `${tr(node.key)} · ${stateLabel}`);
      btn.title = `${tr(node.key)} · ${stateLabel}`;
      if(PATH_EDIT_MODE && container === briefingPathNodes){
        btn.addEventListener("pointerdown", (evt) => startPathNodeDrag(evt, index, btn, container));
      }
      btn.addEventListener("click", (evt) => handleLearningPathNodeClick(index, state, evt));
      container.appendChild(btn);
    });
    updateLearningPathSvg(currentPathTopic);
  }

  function renderTopicLearningPath(topic, activatePath=false){
    const resolvedTopic = resolvePathTopic(topic);
    const data = activePathData(resolvedTopic);
    if(!data){
      selectedLearningPathIndex = null;
      if(topicLearningPath) topicLearningPath.classList.add("hidden");
      setTopicPathBackground(false, topic);
      if(sessionBriefStartBtn) sessionBriefStartBtn.textContent = tr("startRound");
      return;
    }

    currentPathTopic = resolvedTopic;
    if(!activatePath){
      if(topicLearningPath) topicLearningPath.classList.add("hidden");
      setTopicPathBackground(false, resolvedTopic);
      if(sessionBriefStartBtn) sessionBriefStartBtn.textContent = tr("startRound");
      return;
    }

    if(topicLearningPath) topicLearningPath.classList.remove("hidden");
    setTopicPathBackground(true, resolvedTopic);
    if(sessionBriefStartBtn) sessionBriefStartBtn.textContent = tr("startLearningStep");

    const completed = learningPathCompletionCount(resolvedTopic);
    const nodes = activePathNodes(resolvedTopic);
    const maxIndex = Math.max(0, nodes.length - 1);
    const defaultIndex = Math.min(maxIndex, completed + 1);
    if(selectedLearningPathIndex === null || selectedLearningPathIndex > maxIndex) selectedLearningPathIndex = defaultIndex;

    renderPathNodesInto(topicPathNodes, setLearningPathMeta);
    renderPathNodesInto(briefingPathNodes, setLearningPathMeta);

    const selectedState = pathStateForIndex(selectedLearningPathIndex, completed, resolvedTopic);
    setLearningPathMeta(selectedLearningPathIndex, selectedState);
    updatePathNodeSelection();
  }


  function sessionPlanForTier(tier){
    const n = Number(tier || 1) || 1;
    // v27.32: kortere rondes. Brons opent sneller de volgende stap;
    // Zilver/Goud blijven voor beheersing en expertstatus.
    if(n >= 3) return { questions:10, maxLevel:9, tierAttempt:3, tierName:"Goud", mastered:false };
    if(n === 2) return { questions:8, maxLevel:8, tierAttempt:2, tierName:"Zilver", mastered:false };
    return { questions:6, maxLevel:5, tierAttempt:1, tierName:"Brons", mastered:false };
  }

  function setDevResult(message, state=""){
    lastDevReportText = String(message || "");
    if(!devPanelResult) return;
    devPanelResult.textContent = lastDevReportText;
    devPanelResult.classList.remove("ok","warn","running");
    if(state) devPanelResult.classList.add(state);
  }


  function stripHTML(html){
    const div = document.createElement("div");
    div.innerHTML = String(html || "");
    return div.textContent || div.innerText || "";
  }

  function fractionPlain(frac){
    return Array.isArray(frac) ? `${frac[0]}/${frac[1]}` : "";
  }

  function devTaskPrompt(task){
    if(!task) return "";
    if(task.topic === "inequalities") return `${tr("targetIneq")} x ${task.operator} ${formatNumber(task.boundary)}`;
    if(task.topic === "coordinates"){
      if(task.mode === "coord-point") return `${tr("targetCoordinate")} (${formatNumber(task.x)}, ${formatNumber(task.y)})`;
      if(task.mode === "coord-x" || task.mode === "coord-y") return `${task.axis === "x" ? tr("targetCoordX") : tr("targetCoordY")} ${formatNumber(task.targetValue)}`;
      if(task.mode === "coord-quadrant") return `${tr("targetCoordQuadrant")} ${romanQuadrant(task.quadrant)}`;
      if(task.mode === "coord-line") return `${tr("targetCoordLine")} ${task.line}`;
      if(task.mode === "coord-reflect-x" || task.mode === "coord-reflect-y") return `${tr("targetCoordReflection")} (${formatNumber(task.x)}, ${formatNumber(task.y)}) · ${task.axis}-as`;
      if(task.mode === "coord-translate") return `${tr("targetCoordTranslation")} (${formatNumber(task.x)}, ${formatNumber(task.y)}) + (${formatNumber(task.dx)}, ${formatNumber(task.dy)})`;
      if(task.mode === "coord-midpoint") return `${tr("targetCoordMidpoint")} (${formatNumber(task.x1)}, ${formatNumber(task.y1)}) & (${formatNumber(task.x2)}, ${formatNumber(task.y2)})`;
      return `${tr("targetCoordTablePoint")} x=${formatNumber(task.x)} → y=${formatNumber(task.y)}`;
    }
    if(task.topic === "numbertheory"){
      if(task.mode === "multiples") return `${tr("targetMultiples")} ${formatNumber(task.base)}`;
      if(task.mode === "divisors") return `${tr("targetDivisors")} ${formatNumber(task.target)}`;
      if(task.mode === "divisibleBy") return `${tr("targetDivisibleBy")} ${formatNumber(task.divisor)}`;
      if(task.mode === "squares") return `${tr("targetSquares")} 1, 4, 9, 16, ...`;
      if(task.mode === "absolute") return `${tr("targetAbs")} |x| = ${formatNumber(task.absTarget)}`;
      if(task.mode === "gcd") return `${tr("targetGcd")} ggd(${formatNumber(task.a)}, ${formatNumber(task.b)})`;
      if(task.mode === "lcm") return `${tr("targetLcm")} kgv(${formatNumber(task.a)}, ${formatNumber(task.b)})`;
      return `${tr("targetPrimes")} 2, 3, 5, ...`;
    }
    if(task.topic === "percentages"){
      const label = task.mode === "percent-equivalent" ? tr("targetPercentEquivalent")
        : task.mode === "percent-discount" ? tr("targetDiscount")
        : task.mode === "percent-change" ? tr("targetPercentChange")
        : task.mode === "ratio-basic" ? tr("targetRatio")
        : task.mode === "ratio-table" ? tr("targetRatioTable")
        : task.mode === "scale" ? tr("targetScale")
        : task.mode === "reverse-discount" ? tr("targetReverseDiscount")
        : task.mode === "percent-from-part" ? tr("targetPercentFromPart")
        : tr("targetPercentOf");
      return `${label} ${task.prompt || ""}`.trim();
    }
    if(task.topic === "shapes"){
      return task.correctLabels ? `${tr("targetShapeText")} ${task.prompt || ""}` : `${tr("targetShapes")} ${tr(task.labelKey || task.label)}`;
    }
    if(task.topic === "equations") return `${task.correctLabels ? tr("targetAlgebra") : tr("targetEquation")} ${stripHTML(equationHTML(task))}`;
    if(task.mode === "equal-number") return `${tr("targetEqual")} ${fractionPlain(task.targetFraction)}`;
    if(task.mode === "equal-visual") return `${tr("targetEqualVisual")} ${fractionPlain(task.targetFraction)}`;
    if(task.mode === "greater") return `${tr("targetGreater")} ${fractionPlain(task.targetFraction)}`;
    return `${tr("targetSmaller")} ${fractionPlain(task.targetFraction)}`;
  }

  function devQuestionRowsForTopic(topic, tier, perSkill=5){
    const lines = [];
    const oldPlan = sessionPlan;
    const oldLevel = level;
    const oldTopic = selectedTopic;
    const oldForced = forcedSkillForRound;
    const oldDeck = curriculumSkillDeck.slice ? curriculumSkillDeck.slice() : [];
    const plan = sessionPlanForTier(tier);
    sessionPlan = plan;
    selectedTopic = topic;
    const skills = topicSkillPoolForTier(topic, tier);
    skills.forEach(skill => {
      lines.push(`  ${tr("devQuestionListSkill")}: ${curriculumSkillLabel(skill)}`);
      const seen = new Set();
      let shown = 0;
      const minSkillLevel = Math.max(1, minLevelForSkill(skill));
      for(let attempt=0; attempt<160 && shown<perSkill; attempt++){
        const sampleLevel = Math.max(1, Math.min(plan.maxLevel, minSkillLevel + (attempt % Math.max(1, plan.maxLevel - minSkillLevel + 1))));
        level = sampleLevel;
        let candidate = null;
        try{
          candidate = applyCurriculumTag(createTaskForCurriculumSkill(topic, sampleLevel, skill));
        }catch(e){
          continue;
        }
        const key = taskSignature(candidate);
        if(!candidate || seen.has(key)) continue;
        seen.add(key);
        const count = bubbleCountForLevel(sampleLevel);
        const want = correctWantedForTask(candidate, sampleLevel, count);
        let data = [];
        try{
          data = validateRoundData(buildBubbleData(candidate, count, want), candidate, count);
        }catch(e){
          data = fallbackCorrectItemsForTask(candidate, 0);
        }
        const correct = data.filter(item => item.correct).map(answerLabelForDebug).filter(Boolean);
        const correctText = correct.length ? correct.slice(0, 6).join(", ") : "?";
        lines.push(`    • ${tr("devQuestionListLevel")} ${sampleLevel} · ${tr("devQuestionListMode")}: ${debugTaskType(candidate)} · ${devTaskPrompt(candidate)} → ${tr("devQuestionListCorrect")}: ${correctText}`);
        shown++;
      }
      if(!shown) lines.push(`    • ${tr("devQuestionListNone")}`);
    });
    sessionPlan = oldPlan;
    level = oldLevel;
    selectedTopic = oldTopic;
    forcedSkillForRound = oldForced;
    curriculumSkillDeck = oldDeck;
    return lines;
  }

  function buildDevQuestionList(allTopics=false){
    const tier = devTierSelect ? Number(devTierSelect.value || 1) : 1;
    const topics = allTopics ? playableTopics : [devTopicSelect ? devTopicSelect.value : "fractions"];
    const lines = [
      `${tr("devQuestionListTitle")} · ${allTopics ? tr("devAllQuestionList") : topicName(topics[0])} · ${tierLabel(tier)}`,
      tr("devQuestionListHint"),
      ""
    ];
    topics.forEach(topic => {
      lines.push(`${topicName(topic)} · ${tierLabel(tier)}`);
      lines.push(...devQuestionRowsForTopic(topic, tier, allTopics ? 3 : 6));
      lines.push("");
    });
    return lines.join("\n");
  }

  function showDevQuestionList(allTopics=false){
    if(!DEV_MODE) return;
    setDevResult(buildDevQuestionList(allTopics), "ok");
  }

  function startDevSession(){
    if(!DEV_MODE) return;
    const topic = devTopicSelect ? devTopicSelect.value : "fractions";
    const tier = devTierSelect ? Number(devTierSelect.value || 1) : 1;
    selectedTopic = topic;
    sessionPlan = sessionPlanForTier(tier);
    maxRounds = Number(sessionPlan.questions || 10);
    if(authUser && authUser.displayName){
      playerName = authUser.displayName;
    }else{
      playerName = tr("guestName");
      saveAuthUser(tr("guestName"), "gast");
    }
    dismissIntro();
    startOverlay.classList.add("hidden");
    if(sessionBriefPanel) sessionBriefPanel.classList.add("hidden");
    setTopicPathBackground(false, currentPathTopic);
    if(phone) {
      phone.dataset.topic = selectedTopic;
      phone.classList.remove("briefingOpen","leaderboardOpen");
    }
    if(stage) stage.dataset.topic = selectedTopic;
    score = 0;
    round = 0;
    level = 1;
    correctRemaining = 0;
    correctTotal = 0;
    perfectRun = true;
    locked = false;
    clearTimers();
    clearBubbles();
    hideNextRoundButton();
    mixedTopicDeck = selectedTopic === "mixed" ? buildMixedTopicDeck() : [];
    curriculumSkillDeck = buildCurriculumSkillDeck(selectedTopic, maxRounds, sessionPlan.tierAttempt);
    forcedSkillForRound = "";
    startTimer();
    setDevResult(`${tr("devTestStarted")}: ${topicName(topic)} · ${tierLabel(sessionPlan.tierAttempt)} · ${tr("deckBalancerActive")}`);
    nextRound();
  }

  function devNextQuestion(){
    if(!DEV_MODE) return;
    if(startOverlay && !startOverlay.classList.contains("hidden")) startOverlay.classList.add("hidden");
    if(sessionBriefPanel) sessionBriefPanel.classList.add("hidden");
    setTopicPathBackground(false, currentPathTopic);
    if(phone) phone.classList.remove("briefingOpen","leaderboardOpen");
    locked = false;
    if(round >= maxRounds) round = 0;
    if(!curriculumSkillDeck.length) curriculumSkillDeck = buildCurriculumSkillDeck(selectedTopic, maxRounds, sessionPlan.tierAttempt);
    setDevResult(tr("devNewQuestion"));
    nextRound();
  }

  function resetDevProgress(){
    if(!DEV_MODE) return;
    localStorage.removeItem(WORLD_PROGRESS_KEY);
    localStorage.removeItem("bubblePopLeaderboard");
    applyWorldProgress();
    updateMapWorldLabels();
    renderLeaderboard();
    setDevResult(tr("devProgressReset"));
  }


  function shapeLibraryHealthReport(){
    const tasks = [];
    for(let lvl=1; lvl<=9; lvl++){
      for(let i=0; i<35; i++) tasks.push(applyCurriculumTag(createShapeTaskForLevel(lvl)));
    }
    const problems = [];
    tasks.forEach(taskCandidate => {
      if(taskCandidate.correctLabels) return;
      const matches = SHAPE_LIBRARY.filter(shape => shape.key !== "circle" && shapeMatchesTask(shape, taskCandidate));
      if(matches.length < 1){
        problems.push(`${tr("shapeTaskNoMatch")}: ${debugTaskType(taskCandidate)} ${taskCandidate.labelKey || taskCandidate.label || ""}`);
      }
    });
    return problems;
  }

  function topicLabelForDev(topic){
    return topicName(topic).replace(/^[^A-Za-zÀ-ÿ0-9]+\s*/, "");
  }


  function curriculumDomainLabel(domain){
    const map = {
      getallenleer:"curriculumDomainGetallen",
      verhoudingen:"curriculumDomainVerhoudingen",
      algebra:"curriculumDomainAlgebra",
      coordinaten:"curriculumDomainCoordinaten",
      meetkunde:"curriculumDomainMeetkunde"
    };
    return tr(map[domain] || "curriculumTitle");
  }

  function curriculumSkillLabel(skill){
    const map = {
      fractionsEquivalent:"currFractionsEquivalent",
      fractionsCompare:"currFractionsCompare",
      integersOrder:"currIntegersOrder",
      numberDivisors:"currNumberDivisors",
      numberMultiples:"currNumberMultiples",
      numberPrimes:"currNumberPrimes",
      numberDivisibility:"currNumberDivisibility",
      numberSquares:"currNumberSquares",
      numberAbsolute:"currNumberAbsolute",
      numberGcdLcm:"currNumberGcdLcm",
      percentEquivalent:"currPercentEquivalent",
      percentOf:"currPercentOf",
      percentDiscount:"currPercentDiscount",
      percentChange:"currPercentChange",
      ratioBasic:"currRatioBasic",
      ratioTable:"currRatioTable",
      scale:"currScale",
      reverseDiscount:"currReverseDiscount",
      percentFromPart:"currPercentFromPart",
      equationSolve:"currEquationSolve",
      algebraSubstitution:"currAlgebraSubstitution",
      algebraSimplify:"currAlgebraSimplify",
      algebraDistribute:"currAlgebraDistribute",
      algebraPattern:"currAlgebraPattern",
      algebraFormula:"currAlgebraFormula",
      algebraTableFormula:"currAlgebraTableFormula",
      coordinatePoint:"currCoordinatePoint",
      coordinateLine:"currCoordinateLine",
      coordinateQuadrants:"currCoordinateQuadrants",
      coordinateReflection:"currCoordinateReflection",
      coordinateTranslation:"currCoordinateTranslation",
      coordinateMidpoint:"currCoordinateMidpoint",
      coordinateTablePoint:"currCoordinateTablePoint",
      shapeClassify:"currShapeClassify",
      shapeProperties:"currShapeProperties",
      shapeAngles:"currShapeAngles",
      shapeParallelPerpendicular:"currShapeParallelPerpendicular",
      shapeSymmetry:"currShapeSymmetry",
      shapeReflection:"currShapeReflection",
      shapeRotation:"currShapeRotation",
      shapeTranslation:"currShapeTranslation",
      shapeCongruence:"currShapeCongruence",
      shapeSimilarity:"currShapeSimilarity",
      shapePerimeterArea:"currShapePerimeterArea"
    };
    return tr(map[skill] || skill);
  }


  const CURRICULUM_TARGET_MATRIX = {
    getallenleer:[
      "fractionsEquivalent","fractionsCompare","integersOrder","numberDivisors","numberMultiples","numberPrimes",
      "numberDivisibility","numberSquares","numberAbsolute","numberGcdLcm"
    ],
    verhoudingen:[
      "percentEquivalent","percentOf","percentDiscount","percentChange","ratioBasic","ratioTable","scale",
      "reverseDiscount","percentFromPart"
    ],
    algebra:[
      "equationSolve","algebraSubstitution","algebraSimplify","algebraDistribute","algebraPattern","algebraFormula",
      "algebraTableFormula"
    ],
    coordinaten:[
      "coordinatePoint","coordinateLine","coordinateQuadrants","coordinateReflection","coordinateTranslation",
      "coordinateMidpoint","coordinateTablePoint"
    ],
    meetkunde:[
      "shapeClassify","shapeProperties","shapeAngles","shapeParallelPerpendicular","shapeSymmetry","shapeReflection",
      "shapeRotation","shapeTranslation","shapeCongruence","shapeSimilarity","shapePerimeterArea"
    ]
  };

  function expectedDomainForSkill(skill){
    for(const [domain, skills] of Object.entries(CURRICULUM_TARGET_MATRIX)){
      if(skills.includes(skill)) return domain;
    }
    return "unknown";
  }

  function curriculumCoverageRows(result){
    const seenSkills = result && result.curriculumSummary && result.curriculumSummary.skills
      ? result.curriculumSummary.skills
      : {};
    return Object.entries(CURRICULUM_TARGET_MATRIX).map(([domain, targetSkills]) => {
      const present = targetSkills.filter(skill => Number(seenSkills[skill] || 0) > 0);
      const missing = targetSkills.filter(skill => Number(seenSkills[skill] || 0) <= 0);
      const pct = Math.round((present.length / targetSkills.length) * 100);
      return {domain, targetSkills, present, missing, pct};
    });
  }

  function formatCurriculumCoverageMatrix(result){
    const lines = [];
    const rows = curriculumCoverageRows(result);
    lines.push(tr("curriculumMatrixTitle"));
    rows.forEach(row => {
      const status = row.pct >= 90 ? tr("curriculumReady90") : tr("curriculumNeedsWork");
      lines.push(`${curriculumDomainLabel(row.domain)}: ${row.pct}% · ${row.present.length}/${row.targetSkills.length} ${tr("curriculumTargetSkills")} · ${status}`);
      lines.push(`  ${tr("curriculumPresent")}: ${row.present.map(curriculumSkillLabel).join(", ") || "—"}`);
      lines.push(`  ${tr("curriculumMissing")}: ${row.missing.length ? row.missing.map(curriculumSkillLabel).join(", ") : tr("curriculumAllPresent")}`);
    });
    const avg = Math.round(rows.reduce((sum, row) => sum + row.pct, 0) / Math.max(1, rows.length));
    lines.push(`${tr("curriculumEstimatedCoverage")}: ${avg}%`);
    lines.push(tr("curriculumRunAllHint"));
    return lines;
  }

  function curriculumTagForTask(t){
    if(!t) return {domain:"getallenleer", skill:"integersOrder"};
    if(t.topic === "fractions"){
      if(t.mode === "equal-number" || t.mode === "equal-visual"){
        return {domain:"getallenleer", skill:"fractionsEquivalent"};
      }
      return {domain:"getallenleer", skill:"fractionsCompare"};
    }
    if(t.topic === "inequalities"){
      return {domain:"getallenleer", skill:"integersOrder"};
    }
    if(t.topic === "numbertheory"){
      if(t.mode === "divisors") return {domain:"getallenleer", skill:"numberDivisors"};
      if(t.mode === "multiples") return {domain:"getallenleer", skill:"numberMultiples"};
      if(t.mode === "divisibleBy") return {domain:"getallenleer", skill:"numberDivisibility"};
      if(t.mode === "squares") return {domain:"getallenleer", skill:"numberSquares"};
      if(t.mode === "absolute") return {domain:"getallenleer", skill:"numberAbsolute"};
      if(t.mode === "gcd" || t.mode === "lcm") return {domain:"getallenleer", skill:"numberGcdLcm"};
      return {domain:"getallenleer", skill:"numberPrimes"};
    }
    if(t.topic === "percentages"){
      if(t.mode === "percent-equivalent") return {domain:"verhoudingen", skill:"percentEquivalent"};
      if(t.mode === "percent-of") return {domain:"verhoudingen", skill:"percentOf"};
      if(t.mode === "percent-discount") return {domain:"verhoudingen", skill:"percentDiscount"};
      if(t.mode === "ratio-basic") return {domain:"verhoudingen", skill:"ratioBasic"};
      if(t.mode === "ratio-table") return {domain:"verhoudingen", skill:"ratioTable"};
      if(t.mode === "scale") return {domain:"verhoudingen", skill:"scale"};
      if(t.mode === "reverse-discount") return {domain:"verhoudingen", skill:"reverseDiscount"};
      if(t.mode === "percent-from-part") return {domain:"verhoudingen", skill:"percentFromPart"};
      return {domain:"verhoudingen", skill:"percentChange"};
    }
    if(t.topic === "equations"){
      if(t.mode === "alg-substitution") return {domain:"algebra", skill:"algebraSubstitution"};
      if(t.mode === "alg-simplify") return {domain:"algebra", skill:"algebraSimplify"};
      if(t.mode === "alg-distribute") return {domain:"algebra", skill:"algebraDistribute"};
      if(t.mode === "alg-pattern") return {domain:"algebra", skill:"algebraPattern"};
      if(t.mode === "alg-formula") return {domain:"algebra", skill:"algebraFormula"};
      if(t.mode === "alg-table-formula") return {domain:"algebra", skill:"algebraTableFormula"};
      return {domain:"algebra", skill:"equationSolve"};
    }
    if(t.topic === "coordinates"){
      if(t.mode === "coord-point") return {domain:"coordinaten", skill:"coordinatePoint"};
      if(t.mode === "coord-quadrant") return {domain:"coordinaten", skill:"coordinateQuadrants"};
      if(t.mode === "coord-reflect-x" || t.mode === "coord-reflect-y") return {domain:"coordinaten", skill:"coordinateReflection"};
      if(t.mode === "coord-translate") return {domain:"coordinaten", skill:"coordinateTranslation"};
      if(t.mode === "coord-midpoint") return {domain:"coordinaten", skill:"coordinateMidpoint"};
      if(t.mode === "coord-table-point") return {domain:"coordinaten", skill:"coordinateTablePoint"};
      return {domain:"coordinaten", skill:"coordinateLine"};
    }
    if(t.topic === "shapes"){
      if(t.mode === "triAngles" || t.mode === "right") return {domain:"meetkunde", skill:"shapeAngles"};
      if(t.mode === "sym" || t.mode === "regular") return {domain:"meetkunde", skill:"shapeSymmetry"};
      if(t.mode === "shape-reflection") return {domain:"meetkunde", skill:"shapeReflection"};
      if(t.mode === "shape-rotation") return {domain:"meetkunde", skill:"shapeRotation"};
      if(t.mode === "shape-translation") return {domain:"meetkunde", skill:"shapeTranslation"};
      if(t.mode === "shape-congruence") return {domain:"meetkunde", skill:"shapeCongruence"};
      if(t.mode === "shape-similarity") return {domain:"meetkunde", skill:"shapeSimilarity"};
      if(t.mode === "shape-perimeter" || t.mode === "shape-area") return {domain:"meetkunde", skill:"shapePerimeterArea"};
      if(t.mode === "prop" && (t.prop === "parallelPairs" || t.prop === "diagonalsPerp" || t.custom === "atLeastOneParallelPair")) return {domain:"meetkunde", skill:"shapeParallelPerpendicular"};
      if(t.mode === "kind" || t.mode === "sides" || t.mode === "triSides" || t.mode === "quad"){
        return {domain:"meetkunde", skill:"shapeClassify"};
      }
      return {domain:"meetkunde", skill:"shapeProperties"};
    }
    return {domain:"getallenleer", skill:"integersOrder"};
  }

  function applyCurriculumTag(taskCandidate){
    const tag = curriculumTagForTask(taskCandidate);
    taskCandidate.curriculumDomain = tag.domain;
    taskCandidate.curriculumSkill = tag.skill;
    return taskCandidate;
  }

  function runGeneratorQA(topics, tiers, roundsPerCombo=100){
    const oldTopic = selectedTopic;
    const oldPlan = sessionPlan;
    const oldRound = round;
    const oldLevel = level;
    const allErrors = [];
    const matrix = [];
    const curriculumSummary = {domains:{}, skills:{}};
    let tested = 0;
    let repaired = 0;

    for(const tier of tiers){
      const plan = sessionPlanForTier(tier);
      sessionPlan = plan;
      for(const topic of topics){
        selectedTopic = topic;
        const stats = {
          topic, tier, tierName:plan.tierName, tested:0, errors:[],
          minCorrect:999, maxCorrect:0, minBubbles:999, maxBubbles:0,
          rawMinCorrect:999, rawMaxCorrect:0, repaired:0, problemCounts:{}, typeCounts:{},
          curriculumDomains:{}, curriculumSkills:{}
        };

        for(let i = 0; i < roundsPerCombo; i++){
          const lvl = 1 + (i % plan.maxLevel);
          level = lvl;
          const taskCandidate = applyCurriculumTag(createTaskForTopic(topic, lvl));
          const type = debugTaskType(taskCandidate) || "unknown";
          stats.typeCounts[type] = (stats.typeCounts[type] || 0) + 1;
          const domainKey = taskCandidate.curriculumDomain || "unknown";
          const skillKey = taskCandidate.curriculumSkill || "unknown";
          stats.curriculumDomains[domainKey] = (stats.curriculumDomains[domainKey] || 0) + 1;
          stats.curriculumSkills[skillKey] = (stats.curriculumSkills[skillKey] || 0) + 1;
          curriculumSummary.domains[domainKey] = (curriculumSummary.domains[domainKey] || 0) + 1;
          curriculumSummary.skills[skillKey] = (curriculumSummary.skills[skillKey] || 0) + 1;
          const count = bubbleCountForLevel(lvl);
          const wanted = correctWantedForTask(taskCandidate, lvl, count);
          const rawData = buildBubbleData(taskCandidate, count, wanted);
          const rawCorrect = rawData.filter(item => item.correct).length;
          const data = ensurePlayableRoundData(rawData, taskCandidate, count);
          const correct = data.filter(item => item.correct).length;
          tested++;
          stats.tested++;

          stats.rawMinCorrect = Math.min(stats.rawMinCorrect, rawCorrect);
          stats.rawMaxCorrect = Math.max(stats.rawMaxCorrect, rawCorrect);
          stats.minCorrect = Math.min(stats.minCorrect, correct);
          stats.maxCorrect = Math.max(stats.maxCorrect, correct);
          stats.minBubbles = Math.min(stats.minBubbles, data.length);
          stats.maxBubbles = Math.max(stats.maxBubbles, data.length);

          const localErrors = [];
          const addProblem = (key, label) => {
            stats.problemCounts[key] = (stats.problemCounts[key] || 0) + 1;
            localErrors.push(label);
          };

          if(rawCorrect < 1) addProblem("rawNoCorrect", tr("generatedZeroCorrect"));
          if(rawData.length !== count) addProblem("rawBubbleCount", fmt("generatedWrongBubbleCount", {got:rawData.length, expected:count}));
          if(data.length !== count) addProblem("safeBubbleCount", fmt("afterGuardWrongBubbleCount", {got:data.length, expected:count}));
          if(correct < 1) addProblem("safeNoCorrect", tr("afterGuardNoCorrect"));
          if(correct > count) addProblem("tooManyCorrect", tr("tooManyCorrect"));

          const labels = data.map(answerLabelForDebug).filter(Boolean);
          if(new Set(labels).size !== labels.length) addProblem("duplicateLabels", tr("duplicateLabels"));

          if(rawCorrect < 1 || rawData.length !== count){
            stats.repaired++;
            repaired++;
          }

          if(localErrors.length){
            const errorLine = `${topicLabelForDev(topic)} · ${tierLabel(plan.tierAttempt)} · ${tr("levelWord").toLowerCase()} ${lvl} · ${type}: ${localErrors.join(", ")}`;
            stats.errors.push(errorLine);
            allErrors.push(errorLine);
          }
        }

        if(topic === "shapes"){
          const shapeProblems = shapeLibraryHealthReport();
          shapeProblems.forEach(problem => {
            const line = `${topicLabelForDev(topic)} · ${tierLabel(plan.tierAttempt)} · ${tr("shapeControl")}: ${problem}`;
            stats.errors.push(line);
            allErrors.push(line);
            stats.problemCounts.shapeHealth = (stats.problemCounts.shapeHealth || 0) + 1;
          });
        }
        matrix.push(stats);
      }
    }

    selectedTopic = oldTopic;
    sessionPlan = oldPlan;
    round = oldRound;
    level = oldLevel;
    return {tested, repaired, matrix, errors:allErrors, curriculumSummary, roundsPerCombo, generatedAt:new Date()};
  }

  function humanProblemSummary(row){
    const parts = [];
    if(row.problemCounts.rawNoCorrect) parts.push(`${row.problemCounts.rawNoCorrect}× ${tr("rawNoCorrect")}`);
    if(row.problemCounts.rawBubbleCount) parts.push(`${row.problemCounts.rawBubbleCount}× ${tr("rawBubbleCount")}`);
    if(row.problemCounts.safeNoCorrect) parts.push(`${row.problemCounts.safeNoCorrect}× ${tr("safeNoCorrect")}`);
    if(row.problemCounts.safeBubbleCount) parts.push(`${row.problemCounts.safeBubbleCount}× ${tr("safeBubbleCount")}`);
    if(row.problemCounts.duplicateLabels) parts.push(`${row.problemCounts.duplicateLabels}× ${tr("duplicateLabels")}`);
    if(row.problemCounts.shapeHealth) parts.push(`${row.problemCounts.shapeHealth}× ${tr("shapeHealthProblem")}`);
    return parts;
  }

  function formatQAReport(result, compact=false){
    const lines = [];
    lines.push(`${tr("qaTitle")} — ${result.tested} ${tr("qaGeneratedRounds")}`);
    lines.push(result.errors.length
      ? fmt("qaStatusWarn", {n:result.errors.length})
      : tr("qaStatusOk"));
    if(result.repaired){
      lines.push(fmt("qaGuardRepaired", {n:result.repaired}));
    }
    lines.push("");
    const domainCount = Object.keys(result.curriculumSummary && result.curriculumSummary.domains ? result.curriculumSummary.domains : {}).length;
    const skillCount = Object.keys(result.curriculumSummary && result.curriculumSummary.skills ? result.curriculumSummary.skills : {}).length;
    lines.push(fmt("curriculumCoverageLine", {domains:domainCount, skills:skillCount}));
    if(skillCount){
      lines.push(tr("curriculumSkillsTitle"));
      const skillLines = Object.entries(result.curriculumSummary.skills)
        .sort((a,b) => b[1] - a[1])
        .map(([skill,count]) => `  • ${curriculumSkillLabel(skill)}: ${count}`);
      lines.push(...skillLines.slice(0, 18));
    }
    lines.push("");
    lines.push(...formatCurriculumCoverageMatrix(result));
    lines.push(tr("deckQaLine"));
    lines.push("");
    lines.push(...formatLearningPathNodeCoverage());
    lines.push("");
    lines.push(tr("qaWhatTested"));
    lines.push(tr("qaCheckBubbles"));
    lines.push(tr("qaCheckCorrect"));
    lines.push(tr("qaCheckDuplicates"));
    lines.push(tr("qaCheckShapes"));
    lines.push("");

    const byTopic = {};
    result.matrix.forEach(row => {
      if(!byTopic[row.topic]) byTopic[row.topic] = [];
      byTopic[row.topic].push(row);
    });

    Object.keys(byTopic).forEach(topic => {
      lines.push(topicLabelForDev(topic));
      byTopic[topic].forEach(row => {
        const correctRange = row.minCorrect === 999 ? "?" : `${row.minCorrect}-${row.maxCorrect}`;
        const rawCorrectRange = row.rawMinCorrect === 999 ? "?" : `${row.rawMinCorrect}-${row.rawMaxCorrect}`;
        const bubbleRange = row.minBubbles === 999 ? "?" : `${row.minBubbles}-${row.maxBubbles}`;
        const problems = humanProblemSummary(row);
        const status = problems.length ? tr("qaReview") : tr("qaOk");
        lines.push(`  ${row.tierName}: ${status}`);
        lines.push(`    ${tr("qaTested")}: ${row.tested} ${tr("qaRounds")} · ${tr("qaBubbles")}: ${bubbleRange} · ${tr("qaCorrectAfterGuard")}: ${correctRange}`);
        const rowSkills = Object.keys(row.curriculumSkills || {}).map(skill => curriculumSkillLabel(skill)).join(", ");
        if(rowSkills) lines.push(`    ${tr("curriculumInDebug")}: ${rowSkills}`);
        if(row.repaired) lines.push(`    ${tr("qaGuardFixed")}: ${row.repaired} ${tr("qaRounds")}. ${tr("qaRawCorrectRange")} ${rawCorrectRange}.`);
        if(problems.length) lines.push(`    ${tr("qaProblem")}: ${problems.join("; ")}.`);
      });
      lines.push("");
    });

    if(result.errors.length){
      lines.push(tr("qaExamples"));
      result.errors.slice(0, compact ? 8 : 40).forEach((err, i) => lines.push(`  ${i+1}. ${err}`));
      if(result.errors.length > (compact ? 8 : 40)) lines.push(`  … ${result.errors.length - (compact ? 8 : 40)} ${tr("copiedExtra")}`);
    }else{
      lines.push(tr("qaConclusionOk"));
    }
    return lines.join("\n");
  }

  function runDevMassTest(){
    if(!DEV_MODE) return;
    setDevResult(tr("devTestRunning"), "running");
    const topics = ["fractions","inequalities","coordinates","numbertheory","shapes","equations","percentages"];
    const tier = devTierSelect ? Number(devTierSelect.value || 1) : 1;
    const result = runGeneratorQA(topics, [tier], 100);
    if(result.errors.length) console.warn("BubblePop Maker QA errors", result.errors);
    setDevResult(formatQAReport(result, true), result.errors.length ? "warn" : "ok");
  }

  function runDevFullTest(){
    if(!DEV_MODE) return;
    setDevResult(tr("devFullTestRunning"), "running");
    window.setTimeout(() => {
      const topics = ["fractions","inequalities","coordinates","numbertheory","shapes","equations","percentages"];
      const result = runGeneratorQA(topics, [1,2,3], 100);
      if(result.errors.length) console.warn("BubblePop Full QA errors", result.errors);
      setDevResult(formatQAReport(result, false), result.errors.length ? "warn" : "ok");
    }, 40);
  }

  async function copyDevReport(){
    if(!DEV_MODE) return;
    const report = lastDevReportText || (devPanelResult ? devPanelResult.textContent : "");
    if(!report) return;
    try{
      await navigator.clipboard.writeText(report);
      setDevResult(report + "\n\n" + tr("devCopied"), devPanelResult && devPanelResult.classList.contains("warn") ? "warn" : "ok");
    }catch(e){
      console.log(report);
      setDevResult(report + "\n\n" + tr("devCopyFailed"), "warn");
    }
  }

  function markWorldProgress(){
    if(!selectedTopic || selectedTopic === "mixed") return;
    const progress = getWorldProgress();
    const previous = progress[selectedTopic] || {};
    const previousTier = Number(previous.rewardTier || (previous.perfect ? 1 : 0)) || 0;
    const attemptTier = Number(sessionPlan.tierAttempt || 1) || 1;
    const newTier = perfectRun ? Math.max(previousTier, attemptTier) : previousTier;
    const bestByTier = previous.bestByTier || {};
    if(perfectRun){
      const key = String(attemptTier);
      const oldTier = bestByTier[key] || {};
      bestByTier[key] = {
        score: Math.max(oldTier.score || 0, score || 0),
        timeMs: oldTier.timeMs ? Math.min(oldTier.timeMs, elapsedMs || oldTier.timeMs) : (elapsedMs || 0),
        questions:maxRounds,
        updatedAt:new Date().toISOString()
      };
    }
    progress[selectedTopic] = {
      ...previous,
      completed: true,
      perfect: Boolean(newTier > 0 || previous.perfect || perfectRun),
      rewardTier: newTier,
      bestByTier,
      bestScore: Math.max(previous.bestScore || 0, score || 0),
      bestTimeMs: previous.bestTimeMs
        ? Math.min(previous.bestTimeMs, elapsedMs || previous.bestTimeMs)
        : (elapsedMs || 0),
      bestQuestions: Math.max(previous.bestQuestions || 0, maxRounds || 0),
      updatedAt: new Date().toISOString()
    };
    saveWorldProgress(progress);
    applyWorldProgress();
  }

  function allFirstSixGold(progress){
    return playableTopics.every(topic => (progress[topic] && Number(progress[topic].rewardTier || 0) >= 3));
  }

  function applyWorldProgress(){
    const progress = getWorldProgress();
    const unlockNext = allFirstSixGold(progress);

    document.querySelectorAll(".mapPin[data-topic]").forEach(btn => {
      const state = progress[btn.dataset.topic] || {};
      const rewardTier = Number(state.rewardTier || (state.perfect ? 1 : 0)) || 0;
      btn.classList.toggle("completed", Boolean(state.completed));
      btn.classList.toggle("perfectDone", Boolean(rewardTier > 0));
      btn.classList.toggle("rewardTier1", rewardTier === 1);
      btn.classList.toggle("rewardTier2", rewardTier === 2);
      btn.classList.toggle("rewardTier3", rewardTier >= 3);
      btn.dataset.rewardTier = String(rewardTier);

      let badge = btn.querySelector(".progressBadge");
      if(state.completed){
        if(!badge){
          badge = document.createElement("span");
          badge.setAttribute("aria-hidden", "true");
          btn.appendChild(badge);
        }
        badge.className = "progressBadge " + (rewardTier > 0 ? ("badge-perfect badge-tier-" + Math.min(3, rewardTier)) : "badge-completed");
        badge.textContent = rewardTier > 0 ? topicBadgeIcon(btn.dataset.topic) : "✓";
        badge.title = rewardTier > 0 ? `${tierName(rewardTier)} gehaald` : "Voltooid";
      }else if(badge){
        badge.remove();
      }
    });

    document.querySelectorAll(".mapPin:not([data-topic])").forEach(btn => {
      if(unlockNext){
        btn.disabled = false;
        btn.classList.remove("locked");
        btn.classList.add("unlockedNext");
        btn.setAttribute("aria-label", (btn.getAttribute("aria-label") || "Nieuwe wereld").replace(", komt later", ""));
        if(!btn.querySelector(".progressBadge")){
          const badge = document.createElement("span");
          badge.className = "progressBadge badge-completed";
          badge.setAttribute("aria-hidden", "true");
          badge.textContent = "✨";
          btn.appendChild(badge);
        }
      }
    });
  }

  function maybeAddLeaderboardEntry(){
    if(!perfectRun || correctTotal <= 0) return;
    const name = (playerName || tr("guestName")).trim() || tr("guestName");
    const rows = getLeaderboard();
    rows.push({
      name,
      topic:selectedTopic,
      topicName:topicName(selectedTopic),
      score,
      timeMs:elapsedMs,
      questions:maxRounds,
      tierAttempt:sessionPlan.tierAttempt || 1,
      tierName:sessionPlan.tierName || tierName(sessionPlan.tierAttempt || 1),
      perfect:true,
      date:new Date().toISOString()
    });
    rows.sort((a,b) =>
      (Number(b.tierAttempt || 0) - Number(a.tierAttempt || 0)) ||
      (Number(b.questions || 0) - Number(a.questions || 0)) ||
      ((b.score || 0) - (a.score || 0)) ||
      ((a.timeMs || 999999999) - (b.timeMs || 999999999))
    );
    saveLeaderboard(rows);
  }

  function renderLeaderboard(){
    if(!leaderboardList) return;
    if(leaderboardUserLine) leaderboardUserLine.textContent = `${tr("playerLabel")}: ${playerDisplayName()}`;
    const rows = getLeaderboard();
    if(!rows.length){
      leaderboardList.innerHTML = `<div class="leaderboardEmpty">${escapeHTML(tr("leaderboardEmpty"))}</div>`;
      return;
    }
    leaderboardList.innerHTML = rows.slice(0, 12).map((r,i) => {
      const tier = Number(r.tierAttempt || 1) || 1;
      const icon = topicBadgeIcon(r.topic);
      return `
      <div class="leaderboardRow" data-tier="${tier}">
        <span>${i + 1}</span>
        <span>${escapeHTML(r.name || tr("guestName"))}<small>${icon} ${escapeHTML(r.topic ? topicName(r.topic) : (r.topicName || ""))}</small><span class="rankMeta">${escapeHTML(tierLabel(tier))} · ${questionCountText(r.questions || 0)} · ${tr("score").toLowerCase()} ${Number(r.score || 0)}</span></span>
        <span>${formatTime(r.timeMs || 0)}</span>
      </div>`;
    }).join("");
  }

  function escapeHTML(str){
    return String(str).replace(/[&<>"']/g, ch => ({
      "&":"&amp;",
      "<":"&lt;",
      ">":"&gt;",
      '"':"&quot;",
      "'":"&#039;"
    }[ch]));
  }

  function openLeaderboard(){
    renderLeaderboard();
    setTopicPathBackground(false, currentPathTopic);
    if(phone) phone.classList.add("leaderboardOpen");
    if(leaderboardPanel) leaderboardPanel.classList.remove("hidden");
  }

  function closeLeaderboard(){
    if(leaderboardPanel) leaderboardPanel.classList.add("hidden");
    if(phone) phone.classList.remove("leaderboardOpen");
  }

  function ensurePlayerThen(callback){
    if(playerName){
      callback();
      return;
    }
    if(profilePanel){
      profilePanel.classList.remove("hidden");
      if(playerNameInput) playerNameInput.focus();
      profilePanel.dataset.nextAction = callback === start ? "start" : "";
    }else{
      playerName = "Gast";
      callback();
    }
  }

  function syncAccountUI(){
    const loggedIn = Boolean(authUser && authUser.displayName);
    if(accountNameText) accountNameText.textContent = loggedIn ? authUser.displayName : tr("guestName");
    if(accountChip) accountChip.classList.toggle("hidden", !loggedIn);
    if(sessionUserLine) sessionUserLine.textContent = `${tr("playerLabel")}: ${playerDisplayName()}`;
    if(leaderboardUserLine) leaderboardUserLine.textContent = `${tr("playerLabel")}: ${playerDisplayName()}`;
  }

  function saveAuthUser(displayName, username="gast"){
    const safeName = (displayName || tr("guestName")).trim() || tr("guestName");
    authUser = { username, displayName:safeName, method:"local-guest", updatedAt:new Date().toISOString() };
    localStorage.setItem(AUTH_KEY, JSON.stringify(authUser));
    playerName = safeName;
    localStorage.setItem("bubblePopPlayerName", playerName);
    syncAccountUI();
  }

  function clearAuthUser(){
    authUser = null;
    playerName = "";
    localStorage.removeItem(AUTH_KEY);
    syncAccountUI();
  }

  function showLoginPanel(){
    setTopicPathBackground(false, currentPathTopic);
    if(startOverlay) startOverlay.classList.remove("hidden");
    const mapScreen = document.querySelector(".worldMapScreen");
    if(mapScreen) mapScreen.classList.add("loginOpen");
    if(loginPanel) loginPanel.classList.remove("hidden");
    if(loginError) loginError.textContent = "";
    if(loginUserInput && !loginUserInput.value) loginUserInput.value = playerName || "";
    if(loginPassInput) loginPassInput.value = "";
    setTimer(() => { if(loginUserInput) loginUserInput.focus(); }, 80);
  }

  function hideLoginPanel(){
    const mapScreen = document.querySelector(".worldMapScreen");
    if(mapScreen) mapScreen.classList.remove("loginOpen");
    if(loginPanel) loginPanel.classList.add("hidden");
  }

  function submitLogin(){
    const rawName = (loginUserInput ? loginUserInput.value : "").trim();
    const display = rawName || tr("guestName");
    const username = display.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9_-]/g, "") || "guest";
    saveAuthUser(display, username);
    hideLoginPanel();
    dismissIntro();
    if(sessionBriefPanel && !sessionBriefPanel.classList.contains("hidden")){
      start();
    }
    return true;
  }

  function savePlayerName(name){
    saveAuthUser((name || "").trim() || tr("guestName"), "local");
    if(profilePanel) profilePanel.classList.add("hidden");
  }

  function hideNextRoundButton(){
    if(nextRoundBtn) nextRoundBtn.classList.add("hidden");
  }

  function showNextRoundButton(){
    if(!nextRoundBtn) return;
    nextRoundBtn.textContent = round >= maxRounds ? "✓" : "➜";
    nextRoundBtn.setAttribute("aria-label", round >= maxRounds ? tr("done") : tr("next"));
    nextRoundBtn.classList.remove("hidden");
  }

  function goToNextRoundFromButton(){
    if(!locked) return;
    hideNextRoundButton();
    nextRound();
  }



  function topicSkillPoolForTier(topic, tierAttempt){
    const tier = Number(tierAttempt || 1) || 1;
    const skillSets = {
      fractions:{
        1:["fractionsEquivalent","fractionsCompare"],
        2:["fractionsEquivalent","fractionsCompare"],
        3:["fractionsEquivalent","fractionsCompare"]
      },
      inequalities:{
        1:["integersOrder"],
        2:["integersOrder"],
        3:["integersOrder"]
      },
      numbertheory:{
        1:["numberMultiples","numberDivisors","numberDivisibility","numberPrimes","numberSquares"],
        2:["numberMultiples","numberDivisors","numberDivisibility","numberPrimes","numberSquares","numberAbsolute"],
        3:["numberMultiples","numberDivisors","numberDivisibility","numberPrimes","numberSquares","numberAbsolute","numberGcdLcm"]
      },
      percentages:{
        1:["percentEquivalent","percentOf","ratioBasic","percentFromPart"],
        2:["percentEquivalent","percentOf","percentDiscount","ratioBasic","ratioTable","scale","percentFromPart"],
        3:["percentEquivalent","percentOf","percentDiscount","percentChange","ratioBasic","ratioTable","scale","reverseDiscount","percentFromPart"]
      },
      equations:{
        1:["equationSolve","algebraSubstitution","algebraSimplify","algebraFormula"],
        2:["equationSolve","algebraSubstitution","algebraSimplify","algebraDistribute","algebraPattern","algebraFormula","algebraTableFormula"],
        3:["equationSolve","algebraSubstitution","algebraSimplify","algebraDistribute","algebraPattern","algebraFormula","algebraTableFormula"]
      },
      coordinates:{
        1:["coordinatePoint","coordinateLine","coordinateQuadrants"],
        2:["coordinatePoint","coordinateLine","coordinateQuadrants","coordinateReflection","coordinateTranslation"],
        3:["coordinatePoint","coordinateLine","coordinateQuadrants","coordinateReflection","coordinateTranslation","coordinateMidpoint","coordinateTablePoint"]
      },
      shapes:{
        1:["shapeClassify","shapeAngles"],
        2:["shapeClassify","shapeAngles","shapeProperties","shapeParallelPerpendicular","shapeSymmetry"],
        3:["shapeClassify","shapeAngles","shapeProperties","shapeParallelPerpendicular","shapeSymmetry","shapeReflection","shapeRotation","shapeTranslation","shapeCongruence","shapeSimilarity","shapePerimeterArea"]
      }
    };
    const byTopic = skillSets[topic] || {};
    return byTopic[Math.min(3, Math.max(1, tier))] || [];
  }

  function buildCurriculumSkillDeck(topic, questions, tierAttempt){
    if(!topic || topic === "mixed") return [];
    const skills = topicSkillPoolForTier(topic, tierAttempt);
    if(!skills.length) return [];
    const deck = [];
    while(deck.length < questions){
      deck.push(...shuffle(skills));
    }
    let candidate = deck.slice(0, questions);
    if(skills.length <= 1) return candidate;
    let best = candidate;
    for(let attempt=0; attempt<120; attempt++){
      const c = deck.slice(0, questions).sort(() => Math.random() - .5);
      if(adjacentDuplicateCount(c) < adjacentDuplicateCount(best)) best = c;
      if(!hasAdjacentDuplicate(c)) return c;
    }
    return best;
  }

  function minLevelForSkill(skill){
    const map = {
      fractionsEquivalent:1, fractionsCompare:5,
      integersOrder:1,
      numberMultiples:1, numberDivisors:1, numberDivisibility:1, numberPrimes:3, numberSquares:3, numberAbsolute:6, numberGcdLcm:8,
      percentEquivalent:1, percentOf:3, ratioBasic:1, percentFromPart:3, percentDiscount:5, ratioTable:5, scale:5, percentChange:7, reverseDiscount:7,
      equationSolve:1, algebraSubstitution:2, algebraSimplify:2, algebraFormula:3, algebraPattern:4, algebraDistribute:5, algebraTableFormula:5,
      coordinatePoint:1, coordinateLine:1, coordinateQuadrants:3, coordinateReflection:5, coordinateTranslation:5, coordinateMidpoint:7, coordinateTablePoint:7,
      shapeClassify:1, shapeAngles:1, shapeProperties:6, shapeParallelPerpendicular:6, shapeSymmetry:6,
      shapeReflection:6, shapeRotation:6, shapeTranslation:6, shapeCongruence:7, shapeSimilarity:7, shapePerimeterArea:7
    };
    return map[skill] || 1;
  }

  function createTaskForCurriculumSkill(topic, level, skill){
    if(!skill) return null;
    const genLevel = Math.max(level || 1, minLevelForSkill(skill));
    for(let attempt=0; attempt<90; attempt++){
      const candidate = createTaskForTopicRaw(topic, genLevel);
      const tag = curriculumTagForTask(candidate);
      if(tag && tag.skill === skill) return candidate;
    }
    return createTaskForTopicRaw(topic, genLevel);
  }

  function start(){
    setTopicPathBackground(false, currentPathTopic);
    if(!selectedTopic) activateTopic("fractions", false);
    sessionPlan = sessionPlan || getNextSessionPlan(selectedTopic);
    maxRounds = Number(sessionPlan.questions || 10);
    if(sessionBriefPanel) sessionBriefPanel.classList.add("hidden");
    if(phone) phone.classList.remove("briefingOpen","leaderboardOpen");
    hideNextRoundButton();
    score = 0;
    level = 1;
    round = 0;
    mixedTopicDeck = selectedTopic === "mixed" ? buildMixedTopicDeck() : [];
    curriculumSkillDeck = buildCurriculumSkillDeck(selectedTopic, maxRounds, sessionPlan.tierAttempt);
    forcedSkillForRound = "";
    recentTaskKeys = [];
    perfectRun = true;
    startTimer();
    startOverlay.classList.add("hidden");
    endOverlay.classList.add("hidden");
    nextRound();
  }


  function bubbleCountForLevel(level){
    const tier = currentTierDifficulty();
    if(tier === "bronze"){
      return level < 4 ? 5 : 6;
    }
    if(tier === "silver"){
      return level < 3 ? 5 : level < 6 ? 6 : 7;
    }
    return level < 3 ? 6 : level < 7 ? 7 : 8;
  }

  function correctWantedForTask(task, level, count){
    const tier = currentTierDifficulty();
    const tierCap = tier === "gold" ? 4 : tier === "silver" ? 3 : 2;
    if(task.topic === "coordinates"){
      const wanted = isExactCoordinateTask(task) ? 1 : (level < 4 ? 2 : 3);
      return Math.min(wanted, tierCap, count);
    }
    if(task.topic === "inequalities" || task.topic === "numbertheory"){
      return Math.min(level < 4 ? 2 : 3, tierCap, count);
    }
    if(task.topic === "equations"){
      return Math.min(task.correctLabels ? task.correctLabels.length : (task.solutions ? task.solutions.length : 1), count);
    }
    if(task.topic === "shapes"){
      if(task.correctLabels) return Math.min(task.correctLabels.length || 1, count);
      return Math.min(level < 4 ? 2 : level < 7 ? 3 : 4, tierCap, count);
    }
    if(task.topic === "percentages"){
      return Math.min(task.mode === "percent-equivalent" ? (level < 5 ? 2 : 3) : 1, tierCap, count);
    }
    const wanted = task.mode && task.mode.startsWith("equal")
      ? (level < 3 ? 2 : level < 6 ? 3 : 4)
      : (level < 6 ? 2 : 3);
    return Math.min(wanted, tierCap, count);
  }

  function itemDebugKey(item){
    return answerLabelForDebug(item) || JSON.stringify(item || {});
  }

  function appendUniqueItem(target, item, maxCount){
    if(!item || target.length >= maxCount) return;
    const key = itemDebugKey(item);
    if(target.some(existing => itemDebugKey(existing) === key)) return;
    target.push(item);
  }

  function fallbackCorrectItemsForTask(task, idxStart=0){
    if(!task) return [];
    if(task.topic === "fractions"){
      const target = task.targetFraction || (task.family && task.family.base) || null;
      if(task.mode === "equal-number" || task.mode === "equal-visual"){
        const f = target || [1,2];
        return [makeItem(f[0], f[1], true, idxStart)];
      }
      if(task.mode === "fraction-read" || task.mode === "fraction-choose" || task.mode === "fraction-equivalent"){
        const f = target || [1,2];
        return [makeItem(f[0], f[1], true, idxStart)];
      }
      if(task.mode === "greater" || task.mode === "smaller"){
        const f0 = target || [1,2];
        const targetValue = value(f0);
        const isGreater = task.mode === "greater";
        return collectCandidatesForCompare(level)
          .filter(f => isGreater ? value(f) > targetValue : value(f) < targetValue)
          .slice(0, 4)
          .map((f,i) => makeItem(f[0], f[1], true, idxStart + i));
      }
      return [];
    }
    if(task.topic === "inequalities"){
      return collectValuesForInequality(task, level)
        .filter(v => satisfiesInequality(v, task.operator, task.boundary))
        .slice(0, 4)
        .map((v,i) => makeNumberItem(v, true, idxStart + i));
    }
    if(task.topic === "coordinates"){
      const vals = [];
      for(let x=task.min; x<=task.max; x++){
        for(let y=task.min; y<=task.max; y++){
          if(coordinateMatchesTask({x,y}, task)){
            vals.push(makeCoordinateItem(x, y, true, idxStart + vals.length, task.min, task.max));
          }
        }
      }
      return vals.slice(0, 4);
    }
    if(task.topic === "numbertheory"){
      return collectValuesForNumberTheory(task, level)
        .filter(v => satisfiesNumberTheory(v, task))
        .slice(0, 4)
        .map((v,i) => makeNumberItem(v, true, idxStart + i));
    }
    if(task.topic === "equations"){
      if(task.correctLabels){
        return (task.correctLabels || []).slice(0, 4).map((label,i) => makeTextItem(label, true, idxStart + i));
      }
      return uniqueNumbers(task.solutions || [])
        .slice(0, 4)
        .map((v,i) => makeNumberItem(v, true, idxStart + i));
    }
    if(task.topic === "percentages"){
      return (task.correctLabels || [])
        .slice(0, 4)
        .map((label,i) => makeTextItem(label, true, idxStart + i));
    }
    if(task.topic === "shapes"){
      if(task.correctLabels){
        return (task.correctLabels || []).slice(0, 4).map((label,i) => makeTextItem(label, true, idxStart + i));
      }
      return SHAPE_LIBRARY
        .filter(shape => shape.key !== "circle" && shapeMatchesTask(shape, task))
        .slice(0, 4)
        .map((shape,i) => makeShapeItem(shape, true, idxStart + i));
    }
    return [];
  }

  function fallbackWrongItemsForTask(task, idxStart=0){
    if(!task) return [];
    if(task.topic === "fractions"){
      const target = task.targetFraction || (task.family && task.family.base) || [1,2];
      return collectDistractorsForEqual(target, level)
        .slice(0, 12)
        .map((f,i) => makeItem(f[0], f[1], false, idxStart + i));
    }
    if(task.topic === "inequalities"){
      return collectValuesForInequality(task, level)
        .filter(v => !satisfiesInequality(v, task.operator, task.boundary))
        .slice(0, 12)
        .map((v,i) => makeNumberItem(v, false, idxStart + i));
    }
    if(task.topic === "coordinates"){
      const vals = [];
      for(let x=task.min; x<=task.max; x++){
        for(let y=task.min; y<=task.max; y++){
          const ok = coordinateMatchesTask({x,y}, task);
          if(!ok) vals.push(makeCoordinateItem(x, y, false, idxStart + vals.length, task.min, task.max));
        }
      }
      return shuffle(vals).slice(0, 12);
    }
    if(task.topic === "numbertheory"){
      return collectValuesForNumberTheory(task, level)
        .filter(v => !satisfiesNumberTheory(v, task))
        .slice(0, 12)
        .map((v,i) => makeNumberItem(v, false, idxStart + i));
    }
    if(task.topic === "equations"){
      if(task.correctLabels){
        return (task.distractorLabels || []).slice(0, 12).map((label,i) => makeTextItem(label, false, idxStart + i));
      }
      const solutions = uniqueNumbers(task.solutions || []);
      return collectValuesForEquation(task)
        .filter(v => !solutions.includes(v))
        .slice(0, 12)
        .map((v,i) => makeNumberItem(v, false, idxStart + i));
    }
    if(task.topic === "percentages"){
      return (task.distractorLabels || [])
        .slice(0, 12)
        .map((label,i) => makeTextItem(label, false, idxStart + i));
    }
    if(task.topic === "shapes"){
      if(task.correctLabels){
        return (task.distractorLabels || []).slice(0, 12).map((label,i) => makeTextItem(label, false, idxStart + i));
      }
      return shuffle(SHAPE_LIBRARY.filter(shape => shape.key !== "circle" && !shapeMatchesTask(shape, task)))
        .slice(0, 12)
        .map((shape,i) => makeShapeItem(shape, false, idxStart + i));
    }
    return [];
  }

  function ensurePlayableRoundData(data, task, count){
    const maxCount = Math.max(1, Number(count || 1));
    const cleaned = [];
    (Array.isArray(data) ? data : []).forEach(item => appendUniqueItem(cleaned, item, maxCount));

    if(cleaned.filter(item => item.correct).length < 1){
      fallbackCorrectItemsForTask(task, cleaned.length).forEach(item => appendUniqueItem(cleaned, item, maxCount));
    }

    fallbackWrongItemsForTask(task, cleaned.length).forEach(item => appendUniqueItem(cleaned, item, maxCount));
    fallbackCorrectItemsForTask(task, cleaned.length).forEach(item => appendUniqueItem(cleaned, item, maxCount));

    const correct = cleaned.filter(item => item.correct);
    const wrong = cleaned.filter(item => !item.correct);
    const keptCorrect = correct.slice(0, Math.min(correct.length, maxCount));
    const finalData = keptCorrect.concat(wrong.slice(0, Math.max(0, maxCount - keptCorrect.length)));

    return shuffle(finalData);
  }

  function validateRoundData(data, task, count){
    const safe = ensurePlayableRoundData(data, task, count || (Array.isArray(data) ? data.length : 1));
    const correct = safe.filter(item => item.correct);
    if(DEBUG_MODE && correct.length === 0){
      console.warn("BubblePop debug: ronde zonder correct antwoord na herstel", task, safe);
    }
    return safe;
  }

  function nextRound(){
    hideNextRoundButton();
    clearTimers();

    if(round >= maxRounds){
      end();
      return;
    }

    round++;
    const sessionMaxLevel = Math.max(1, Number(sessionPlan.maxLevel || 9));
    level = Math.max(1, Math.min(sessionMaxLevel, Math.ceil((round / Math.max(1, maxRounds)) * sessionMaxLevel)));
    updateWorldMusic();
    locked = false;
    clearBubbles();

    let count = bubbleCountForLevel(level);
    let correctWanted = 1;
    let data = [];
    for(let attempt = 0; attempt < 12; attempt++){
      task = createTaskForLevel(level);
      count = bubbleCountForLevel(level);
      correctWanted = correctWantedForTask(task, level, count);
      data = validateRoundData(buildBubbleData(task, count, correctWanted), task, count);
      if(data.length === count && data.some(item => item.correct)) break;
    }

    renderTarget(task);
    const positions = layoutPositions(data.length || count);

    data.forEach((item, i) => {
      const el = createBubble(item, positions[i], i);
      stage.appendChild(el);
      requestAnimationFrame(() => fitBubbleText(el, item));
      item.el = el;
      bubbles.push(item);
    });

    correctRemaining = data.filter(b => b.correct).length;
    correctTotal = correctRemaining;
    updateHUD();
    updateHint(task);
    markDebugAnswers();
  }

  function createTaskForLevel(level){
    const topic = selectedTopic === "mixed"
      ? (mixedTopicDeck[round - 1] || mixedTopics[(round - 1) % mixedTopics.length])
      : selectedTopic;

    forcedSkillForRound = selectedTopic === "mixed" ? "" : (curriculumSkillDeck[round - 1] || "");
    let candidate = null;
    let key = "";
    for(let attempt = 0; attempt < 10; attempt++){
      candidate = applyCurriculumTag(createTaskForTopic(topic, level, forcedSkillForRound));
      key = taskSignature(candidate);
      if(!recentTaskKeys.includes(key)) break;
    }
    rememberTaskKey(key);
    return candidate;
  }

  function createTaskForTopic(topic, level, forcedSkill=""){
    if(forcedSkill){
      return createTaskForCurriculumSkill(topic, level, forcedSkill);
    }
    return createTaskForTopicRaw(topic, level);
  }

  function createTaskForTopicRaw(topic, level){
    if(topic === "inequalities"){
      return createInequalityTaskForLevel(level);
    }
    if(topic === "coordinates"){
      return createCoordinateTaskForLevel(level);
    }
    if(topic === "numbertheory"){
      return createNumberTheoryTaskForLevel(level);
    }
    if(topic === "shapes"){
      return createShapeTaskForLevel(level);
    }
    if(topic === "equations"){
      return createEquationTaskForLevel(level);
    }
    if(topic === "percentages"){
      return createPercentageTaskForLevel(level);
    }
    return createFractionTaskForLevel(level);
  }

  function buildMixedTopicDeck(){
    const base = [];
    mixedTopics.forEach(topic => {
      base.push(topic, topic, topic);
    });

    let best = shuffle(base.slice());
    for(let attempt = 0; attempt < 250; attempt++){
      const candidate = shuffle(base.slice());
      if(!hasAdjacentDuplicate(candidate)){
        return candidate;
      }
      if(adjacentDuplicateCount(candidate) < adjacentDuplicateCount(best)){
        best = candidate;
      }
    }
    return best;
  }

  function hasAdjacentDuplicate(arr){
    for(let i = 1; i < arr.length; i++){
      if(arr[i] === arr[i - 1]) return true;
    }
    return false;
  }

  function adjacentDuplicateCount(arr){
    let count = 0;
    for(let i = 1; i < arr.length; i++){
      if(arr[i] === arr[i - 1]) count++;
    }
    return count;
  }

  function taskSignature(task){
    if(!task) return "none";
    const parts = [task.topic || "", task.mode || "", task.operator || "", task.labelKey || task.label || "", task.curriculumDomain || "", task.curriculumSkill || ""];
    ["boundary","axis","targetValue","x","y","x1","y1","x2","y2","dx","dy","targetX","targetY","quadrant","line","base","target","max","a","b","denom","result","divisor","absTarget","maxRoot","prompt"].forEach(key => {
      if(task[key] !== undefined) parts.push(`${key}:${task[key]}`);
    });
    if(task.targetFraction) parts.push(`frac:${task.targetFraction[0]}/${task.targetFraction[1]}`);
    if(task.solutions) parts.push(`sol:${task.solutions.join(",")}`);
    return parts.join("|");
  }

  function rememberTaskKey(key){
    if(!key) return;
    recentTaskKeys.push(key);
    while(recentTaskKeys.length > recentTaskLimit){
      recentTaskKeys.shift();
    }
  }

  function createFractionTaskForLevel(level){
    // level 1-2: equal numeric
    // level 3-4: equal numeric or equal visual
    // level 5+: equal numeric / equal visual / greater / smaller
    let modePool;
    if(level <= 2){
      modePool = ["equal-number"];
    }else if(level <= 4){
      modePool = ["equal-number", "equal-visual"];
    }else{
      modePool = ["equal-number", "equal-visual", "greater", "smaller"];
    }

    const mode = modePool[Math.floor(Math.random()*modePool.length)];

    if(mode === "equal-number" || mode === "equal-visual"){
      const famPool = level <= 2
        ? families.filter(f => ["1/2","1/3","2/3","1/4","3/4","2/5","3/5"].includes(f.key))
        : families;
      const family = famPool[Math.floor(Math.random()*famPool.length)];
      return { topic:"fractions", mode, family, targetFraction: family.base };
    }

    const candidates = collectCandidatesForCompare(level);
    const comparePool = allBaseFractions
      .filter(f => f[0] !== f[1])
      .filter(f => {
        const smaller = candidates.filter(c => value(c) < value(f)).length;
        const greater = candidates.filter(c => value(c) > value(f)).length;
        // Enough options for Bronze/Silver/Gold question density.
        return mode === "greater" ? greater >= 4 : smaller >= 4;
      });
    const safePool = comparePool.length ? comparePool : allBaseFractions.filter(f => f[0] !== f[1]);
    const targetFraction = safePool[Math.floor(Math.random()*safePool.length)];
    return { topic:"fractions", mode, targetFraction };
  }

  function createInequalityTaskForLevel(level){
    const operators = level <= 2 ? [">", "<"] : [">", "<", "≥", "≤"];
    const op = operators[Math.floor(Math.random()*operators.length)];
    let boundary;
    if(level <= 2){
      boundary = randomInt(1, 8);
    }else if(level <= 5){
      boundary = randomInt(-5, 8);
    }else{
      boundary = randomInt(-10, 10);
    }
    return { topic:"inequalities", mode:"ineq-values", operator:op, boundary };
  }


  function createCoordinateTaskForLevel(level){
    let min = 0, max = 4;
    if(level >= 3){ min = -4; max = 4; }
    if(level >= 7){ min = -6; max = 6; }

    const modePool = level <= 2
      ? ["coord-point", "coord-x", "coord-y"]
      : level <= 4
        ? ["coord-point", "coord-x", "coord-y", "coord-quadrant", "coord-line"]
        : level <= 6
          ? ["coord-point", "coord-x", "coord-y", "coord-quadrant", "coord-line", "coord-reflect-x", "coord-reflect-y", "coord-translate"]
          : ["coord-point", "coord-x", "coord-y", "coord-quadrant", "coord-line", "coord-reflect-x", "coord-reflect-y", "coord-translate", "coord-midpoint", "coord-table-point"];
    const mode = modePool[Math.floor(Math.random()*modePool.length)];

    if(mode === "coord-point"){
      return { topic:"coordinates", mode, x: randomInt(min, max), y: randomInt(min, max), min, max };
    }

    if(mode === "coord-x" || mode === "coord-y"){
      const axis = mode === "coord-x" ? "x" : "y";
      const targetValue = randomInt(min, max);
      return { topic:"coordinates", mode, axis, targetValue, min, max };
    }

    if(mode === "coord-quadrant"){
      const q = [1,2,3,4][Math.floor(Math.random()*4)];
      return { topic:"coordinates", mode, quadrant:q, min:Math.min(min,-4), max:Math.max(max,4) };
    }

    if(mode === "coord-line"){
      const linePool = ["y=x","y=-x","y=0","x=0"];
      const line = linePool[Math.floor(Math.random()*linePool.length)];
      return { topic:"coordinates", mode, line, min, max };
    }

    if(mode === "coord-reflect-x" || mode === "coord-reflect-y"){
      const axis = mode === "coord-reflect-x" ? "x" : "y";
      let x = randomInt(Math.max(min, -5), Math.min(max, 5));
      let y = randomInt(Math.max(min, -5), Math.min(max, 5));
      if(axis === "x" && y === 0) y = 2;
      if(axis === "y" && x === 0) x = 2;
      const targetX = axis === "y" ? -x : x;
      const targetY = axis === "x" ? -y : y;
      return { topic:"coordinates", mode, axis, x, y, targetX, targetY, min:Math.min(min,-6), max:Math.max(max,6) };
    }

    if(mode === "coord-translate"){
      const dx = randomInt(-3,3) || 2;
      const dy = randomInt(-3,3) || -1;
      const x = randomInt(Math.max(min, -4), Math.min(max, 4));
      const y = randomInt(Math.max(min, -4), Math.min(max, 4));
      const targetX = Math.max(Math.min(x + dx, max), min);
      const targetY = Math.max(Math.min(y + dy, max), min);
      return { topic:"coordinates", mode, x, y, dx:targetX-x, dy:targetY-y, targetX, targetY, min, max };
    }

    if(mode === "coord-midpoint"){
      const horizontal = Math.random() < .5;
      const targetX = randomInt(Math.max(min, -4), Math.min(max, 4));
      const targetY = randomInt(Math.max(min, -4), Math.min(max, 4));
      const d = randomInt(1, Math.max(2, Math.floor((max-min)/3)));
      const x1 = horizontal ? targetX - d : targetX;
      const y1 = horizontal ? targetY : targetY - d;
      const x2 = horizontal ? targetX + d : targetX;
      const y2 = horizontal ? targetY : targetY + d;
      return { topic:"coordinates", mode, x1, y1, x2, y2, targetX, targetY, min:Math.min(min,x1,y1,x2,y2), max:Math.max(max,x1,y1,x2,y2) };
    }

    const a = [1,2,-1][Math.floor(Math.random()*3)];
    const b = level <= 7 ? 0 : randomInt(-2,2);
    let x = randomInt(Math.max(min, -4), Math.min(max, 4));
    let y = a*x + b;
    if(y < min || y > max){
      x = randomInt(-2,2);
      y = a*x + b;
    }
    return { topic:"coordinates", mode:"coord-table-point", a, b, x, y, targetX:x, targetY:y, min, max };
  }


  const SHAPE_LIBRARY = [
    {key:"tri-equilateral", labelKey:"shapeName_equilateralTriangle", label:"gelijkzijdige driehoek", kind:"triangle", sides:3, triSides:"equilateral", triAngles:"acute", sym:3, right:false, acute:true, obtuse:false, regular:true, allSidesEqual:true, parallelPairs:0, points:"60,18 16,94 104,94"},
    {key:"tri-isosceles", labelKey:"shapeName_isoscelesTriangle", label:"gelijkbenige driehoek", kind:"triangle", sides:3, triSides:"isosceles", triAngles:"acute", sym:1, right:false, acute:true, obtuse:false, regular:false, allSidesEqual:false, parallelPairs:0, points:"60,12 24,100 96,100"},
    {key:"tri-right", labelKey:"shapeName_rightTriangle", label:"rechthoekige driehoek", kind:"triangle", sides:3, triSides:"scalene", triAngles:"right", sym:0, right:true, acute:false, obtuse:false, regular:false, allSidesEqual:false, parallelPairs:0, points:"20,98 20,30 108,98", rightMark:true},
    {key:"tri-isosceles-right", labelKey:"shapeName_isoscelesRightTriangle", label:"gelijkbenige rechthoekige driehoek", kind:"triangle", sides:3, triSides:"isosceles", triAngles:"right", sym:1, right:true, acute:false, obtuse:false, regular:false, allSidesEqual:false, parallelPairs:0, points:"24,96 24,24 96,96", rightMark:true},
    {key:"tri-obtuse", labelKey:"shapeName_obtuseTriangle", label:"stomphoekige driehoek", kind:"triangle", sides:3, triSides:"scalene", triAngles:"obtuse", sym:0, right:false, acute:false, obtuse:true, regular:false, allSidesEqual:false, parallelPairs:0, points:"12,98 112,98 32,62"},
    {key:"tri-scalene-acute", labelKey:"shapeName_scaleneAcuteTriangle", label:"ongelijkbenige scherphoekige driehoek", kind:"triangle", sides:3, triSides:"scalene", triAngles:"acute", sym:0, right:false, acute:true, obtuse:false, regular:false, allSidesEqual:false, parallelPairs:0, points:"12,102 108,92 64,16"},
    {key:"square", labelKey:"shapeName_square", label:"vierkant", kind:"quadrilateral", sides:4, quad:"square", sym:4, right:true, parallelPairs:2, allSidesEqual:true, diagonalsEqual:true, diagonalsPerp:true, diagonalsBisect:true, regular:true, points:"26,26 94,26 94,94 26,94"},
    {key:"rectangle", labelKey:"shapeName_rectangle", label:"rechthoek", kind:"quadrilateral", sides:4, quad:"rectangle", sym:2, right:true, parallelPairs:2, allSidesEqual:false, diagonalsEqual:true, diagonalsPerp:false, diagonalsBisect:true, regular:false, points:"16,36 104,36 104,84 16,84"},
    {key:"rhombus", labelKey:"shapeName_rhombus", label:"ruit", kind:"quadrilateral", sides:4, quad:"rhombus", sym:2, right:false, parallelPairs:2, allSidesEqual:true, diagonalsEqual:false, diagonalsPerp:true, diagonalsBisect:true, regular:false, points:"60,24 110,60 60,96 10,60"},
    {key:"parallelogram", labelKey:"shapeName_parallelogram", label:"parallellogram", kind:"quadrilateral", sides:4, quad:"parallelogram", sym:0, right:false, parallelPairs:2, allSidesEqual:false, diagonalsEqual:false, diagonalsPerp:false, diagonalsBisect:true, regular:false, points:"32,24 110,24 86,96 8,96"},
    {key:"trapezoid", labelKey:"shapeName_trapezoid", label:"trapezium", kind:"quadrilateral", sides:4, quad:"trapezoid", sym:1, right:false, parallelPairs:1, allSidesEqual:false, diagonalsEqual:true, diagonalsPerp:false, diagonalsBisect:false, regular:false, points:"34,28 86,28 108,96 12,96"},
    {key:"kite", labelKey:"shapeName_kite", label:"vlieger", kind:"quadrilateral", sides:4, quad:"kite", sym:1, right:false, parallelPairs:0, allSidesEqual:false, diagonalsEqual:false, diagonalsPerp:true, diagonalsBisect:false, regular:false, points:"60,10 108,32 60,114 12,32"},
    {key:"quad-irregular", labelKey:"shapeName_irregularQuadrilateral", label:"onregelmatige vierhoek", kind:"quadrilateral", sides:4, quad:"irregular", sym:0, right:false, parallelPairs:0, allSidesEqual:false, diagonalsEqual:false, diagonalsPerp:false, diagonalsBisect:false, regular:false, points:"14,42 98,24 90,106 30,82"},
    {key:"pentagon", labelKey:"shapeName_pentagon", label:"vijfhoek", kind:"polygon", sides:5, sym:5, regular:true, allSidesEqual:true, parallelPairs:0, points:"60,14 104,47 87,100 33,100 16,47"},
    {key:"hexagon", labelKey:"shapeName_hexagon", label:"zeshoek", kind:"polygon", sides:6, sym:6, regular:true, allSidesEqual:true, parallelPairs:3, points:"60,12 100,36 100,84 60,108 20,84 20,36"},
    {key:"circle", labelKey:"shapeName_circle", label:"cirkel", kind:"circle", sides:0, sym:999, regular:true, circle:true}
  ];

  function createShapeTaskForLevel(level){
    const easy = [
      {mode:"kind", labelKey:"shape_triangles", label:"driehoeken", prop:"kind", value:"triangle"},
      {mode:"kind", labelKey:"shape_quadrilaterals", label:"vierhoeken", prop:"kind", value:"quadrilateral"},
      {mode:"sides", labelKey:"shape_3sides", label:"figuren met 3 zijden", prop:"sides", value:3},
      {mode:"sides", labelKey:"shape_4sides", label:"figuren met 4 zijden", prop:"sides", value:4},
      {mode:"right", labelKey:"shape_atLeastOneRightAngle", label:"figuren met minstens één rechte hoek", prop:"right", value:true}
    ];
    const triangles = [
      {mode:"triSides", labelKey:"shape_equilateralTriangles", label:"gelijkzijdige driehoeken", prop:"triSides", value:"equilateral"},
      {mode:"triSides", labelKey:"shape_isoscelesTriangles", label:"gelijkbenige driehoeken", custom:"isoscelesInclusive"},
      {mode:"triSides", labelKey:"shape_scaleneTriangles", label:"ongelijkbenige driehoeken", prop:"triSides", value:"scalene"},
      {mode:"triAngles", labelKey:"shape_rightTriangles", label:"rechthoekige driehoeken", prop:"triAngles", value:"right"},
      {mode:"triAngles", labelKey:"shape_acuteTriangles", label:"scherphoekige driehoeken", prop:"triAngles", value:"acute"},
      {mode:"triAngles", labelKey:"shape_obtuseTriangles", label:"stomphoekige driehoeken", prop:"triAngles", value:"obtuse"}
    ];
    const quads = [
      {mode:"quad", labelKey:"shape_squares", label:"vierkanten", prop:"quad", value:"square"},
      {mode:"quad", labelKey:"shape_rectangles", label:"rechthoeken", custom:"rectanglesInclusive"},
      {mode:"quad", labelKey:"shape_rhombi", label:"ruiten", custom:"rhombiInclusive"},
      {mode:"quad", labelKey:"shape_parallelograms", label:"parallellogrammen", custom:"parallelogramsInclusive"},
      {mode:"quad", labelKey:"shape_trapezoids", label:"trapeziums", custom:"trapezoidsInclusive"}
    ];
    const properties = [
      {mode:"prop", labelKey:"shape_atLeastOneParallelPair", label:"figuren met minstens één paar evenwijdige zijden", custom:"atLeastOneParallelPair"},
      {mode:"prop", labelKey:"shape_twoParallelPairs", label:"figuren met twee paar evenwijdige zijden", prop:"parallelPairs", value:2},
      {mode:"prop", labelKey:"shape_allSidesEqual", label:"figuren met alle zijden even lang", prop:"allSidesEqual", value:true},
      {mode:"prop", labelKey:"shape_noParallelSides", label:"figuren zonder evenwijdige zijden", prop:"parallelPairs", value:0},
      {mode:"prop", labelKey:"shape_equalDiagonals", label:"vierhoeken met diagonalen die even lang zijn", prop:"diagonalsEqual", value:true},
      {mode:"prop", labelKey:"shape_perpendicularDiagonals", label:"vierhoeken met loodrechte diagonalen", prop:"diagonalsPerp", value:true},
      {mode:"prop", labelKey:"shape_bisectingDiagonals", label:"parallellogrammen: diagonalen snijden elkaar middendoor", prop:"diagonalsBisect", value:true}
    ];
    const symmetry = [
      {mode:"sym", labelKey:"shape_noSymmetryAxis", label:"figuren met geen spiegelas", custom:"sym0"},
      {mode:"sym", labelKey:"shape_oneSymmetryAxis", label:"figuren met precies 1 spiegelas", custom:"sym1"},
      {mode:"sym", labelKey:"shape_twoSymmetryAxes", label:"figuren met precies 2 spiegelassen", custom:"sym2"},
      {mode:"sym", labelKey:"shape_moreThanTwoSymmetryAxes", label:"figuren met meer dan 2 spiegelassen", custom:"symMore2"},
      {mode:"regular", labelKey:"shape_regularPolygons", label:"regelmatige veelhoeken", custom:"regularPolygon"}
    ];
    const combos = [
      {mode:"combo", labelKey:"shape_quadParallelAndRight", label:"vierhoeken met 2 paar evenwijdige zijden én een rechte hoek", custom:"parallelAndRight"},
      {mode:"combo", labelKey:"shape_isoscelesRightTriangles", label:"driehoeken met 2 gelijke zijden én een rechte hoek", custom:"isoscelesRightTriangle"},
      {mode:"combo", labelKey:"shape_quadFourSymmetryAxes", label:"vierhoeken met 4 spiegelassen", custom:"quadFourSym"},
      {mode:"combo", labelKey:"shape_quadNoRightAngles", label:"vierhoeken met geen rechte hoeken", custom:"quadNoRight"},
      {mode:"combo", labelKey:"shape_quadNoParallelSides", label:"figuren met 4 zijden maar geen evenwijdige zijden", custom:"quadNoParallel"}
    ];

    let pool = easy;
    if(level >= 2) pool = pool.concat(triangles);
    if(level >= 4) pool = pool.concat(quads.filter(q => ["shape_squares","shape_rectangles"].includes(q.labelKey)));
    if(level >= 5) pool = pool.concat(quads.filter(q => !["shape_squares","shape_rectangles"].includes(q.labelKey)));
    if(level >= 6) pool = pool.concat(symmetry, properties, createShapeTransformTask(level));
    if(level >= 7) pool = pool.concat(createShapeRelationTask(level), createShapePerimeterAreaTask(level));
    if(level >= 8) pool = pool.concat(combos, createShapeTransformTask(level), createShapeRelationTask(level));
    const task = pool[Math.floor(Math.random()*pool.length)];
    return {topic:"shapes", ...task};
  }

  function createShapeChoiceTask(mode, prompt, correctLabel, distractorLabels){
    return {
      mode,
      prompt,
      correctLabels:uniqueLabels([correctLabel]),
      distractorLabels:uniqueLabels(distractorLabels.filter(label => String(label) !== String(correctLabel)))
    };
  }

  function createShapeTransformTask(level){
    const options = [
      createShapeChoiceTask("shape-reflection", tr("promptReflectVertical"), tr("answerReflection"), [tr("answerRotation"), tr("answerTranslation"), tr("answerEnlargement")]),
      createShapeChoiceTask("shape-reflection", tr("promptReflectHorizontal"), tr("answerReflection"), [tr("answerRotation"), tr("answerTranslation"), tr("answerEnlargement")]),
      createShapeChoiceTask("shape-rotation", tr("promptRotate90"), tr("answerRotation"), [tr("answerReflection"), tr("answerTranslation"), tr("answerEnlargement")]),
      createShapeChoiceTask("shape-translation", tr("promptTranslate"), tr("answerTranslation"), [tr("answerReflection"), tr("answerRotation"), tr("answerEnlargement")])
    ];
    return options[Math.floor(Math.random()*options.length)];
  }

  function createShapeRelationTask(level){
    const options = [
      createShapeChoiceTask("shape-congruence", tr("promptCongruent"), tr("answerCongruent"), [tr("answerSimilar"), tr("answerReflection"), tr("answerEnlargement")]),
      createShapeChoiceTask("shape-similarity", tr("promptSimilar"), tr("answerSimilar"), [tr("answerCongruent"), tr("answerTranslation"), tr("answerRotation")])
    ];
    return options[Math.floor(Math.random()*options.length)];
  }

  function createShapePerimeterAreaTask(level){
    const a = randomInt(2, 9);
    const b = randomInt(2, 8);
    const perimeter = 2*a + 2*b;
    const area = a*b;
    const mode = Math.random() < .5 ? "shape-perimeter" : "shape-area";
    if(mode === "shape-perimeter"){
      return createShapeChoiceTask(mode, fmt("promptPerimeterRect", {a,b}), String(perimeter), [String(area), String(a+b), String(a*b*2), String(perimeter+2)]);
    }
    return createShapeChoiceTask(mode, fmt("promptAreaRect", {a,b}), String(area), [String(perimeter), String(a+b), String(area+a), String(area+b)]);
  }

  const PERCENT_EQUIV_LIBRARY = [
    {percent:10, frac:"1/10", decimal:"0,1"},
    {percent:20, frac:"1/5", decimal:"0,2"},
    {percent:25, frac:"1/4", decimal:"0,25"},
    {percent:30, frac:"3/10", decimal:"0,3"},
    {percent:40, frac:"2/5", decimal:"0,4"},
    {percent:50, frac:"1/2", decimal:"0,5"},
    {percent:60, frac:"3/5", decimal:"0,6"},
    {percent:75, frac:"3/4", decimal:"0,75"},
    {percent:80, frac:"4/5", decimal:"0,8"},
    {percent:100, frac:"1", decimal:"1"},
    {percent:12.5, frac:"1/8", decimal:"0,125"},
    {percent:33.333, frac:"1/3", decimal:"0,333..."},
    {percent:66.667, frac:"2/3", decimal:"0,666..."}
  ];

  function fmtPercent(p){
    if(Number.isInteger(p)) return `${p}%`;
    return `${String(p).replace(".", ",")}%`;
  }

  function euroLabel(v){
    return `€${String(v).replace(".", ",")}`;
  }

  function createPercentageTaskForLevel(level){
    let pool;
    if(level <= 2){
      pool = ["percent-equivalent", "ratio-basic"];
    }else if(level <= 4){
      pool = ["percent-equivalent", "percent-of", "ratio-basic", "percent-from-part"];
    }else if(level <= 6){
      pool = ["percent-equivalent", "percent-of", "percent-discount", "ratio-basic", "ratio-table", "scale"];
    }else{
      pool = ["percent-equivalent", "percent-of", "percent-discount", "percent-change", "ratio-basic", "ratio-table", "scale", "reverse-discount", "percent-from-part"];
    }
    const mode = pool[Math.floor(Math.random() * pool.length)];

    if(mode === "percent-equivalent"){
      const eqPool = level <= 4 ? PERCENT_EQUIV_LIBRARY.filter(x => [10,20,25,50,75,100].includes(x.percent)) : PERCENT_EQUIV_LIBRARY;
      const item = eqPool[Math.floor(Math.random() * eqPool.length)];
      const forms = [fmtPercent(item.percent), item.frac, item.decimal];
      const targetIndex = Math.floor(Math.random() * forms.length);
      const prompt = forms[targetIndex];
      const correctLabels = forms.filter((_, i) => i !== targetIndex);
      if(level >= 5) correctLabels.push(forms[targetIndex]);
      const distractorLabels = buildPercentEquivalentDistractors(item, forms);
      return {topic:"percentages", mode:"percent-equivalent", prompt, correctLabels:uniqueLabels(correctLabels), distractorLabels};
    }

    if(mode === "percent-of"){
      const percents = level <= 4 ? [10,20,25,50] : [5,10,12.5,15,20,25,30,40,50,75];
      const amounts = level <= 4 ? [40,50,60,80,100,120,150,200] : [24,36,48,60,72,80,90,120,150,180,200,240,300,400];
      const percent = percents[Math.floor(Math.random() * percents.length)];
      const amount = amounts[Math.floor(Math.random() * amounts.length)];
      const answer = roundNice(amount * percent / 100);
      const prompt = `${fmtPercent(percent)} × ${amount}`;
      return buildPercentNumericTask("percent-of", prompt, answer, false, level);
    }

    if(mode === "percent-discount"){
      const percents = level <= 6 ? [10,20,25,50] : [5,10,15,20,25,30,40,50];
      const prices = level <= 6 ? [20,40,60,80,100,120,160,200] : [35,50,75,80,90,120,150,180,240,300,400];
      const percent = percents[Math.floor(Math.random() * percents.length)];
      const price = prices[Math.floor(Math.random() * prices.length)];
      const answer = roundNice(price * (1 - percent / 100));
      const prompt = `${euroLabel(price)} − ${fmtPercent(percent)}`;
      return buildPercentNumericTask("percent-discount", prompt, answer, true, level);
    }

    if(mode === "ratio-basic"){
      const pairs = level <= 4 ? [[1,2],[1,4],[3,4],[2,5],[3,5]] : [[1,2],[1,3],[2,3],[1,4],[3,4],[2,5],[3,5],[4,5],[3,8],[5,8]];
      const pair = pairs[Math.floor(Math.random() * pairs.length)];
      const part = pair[0], whole = pair[1];
      const answer = roundNice(part / whole * 100);
      const prompt = `${part} : ${whole}`;
      return buildPercentNumericTask("ratio-basic", prompt, answer, false, level, true);
    }

    if(mode === "ratio-table"){
      const bases = level <= 6 ? [[2,6],[3,9],[4,10],[5,15],[6,18]] : [[2,5],[3,8],[4,7],[5,12],[6,15],[8,20]];
      const pair = bases[Math.floor(Math.random() * bases.length)];
      const left = pair[0], right = pair[1];
      const factor = level <= 6 ? randomInt(2,5) : randomInt(3,8);
      const answer = right * factor;
      const prompt = `${left} → ${right}, ${left * factor} → ?`;
      return buildPercentNumericTask("ratio-table", prompt, answer, false, level);
    }

    if(mode === "scale"){
      const scales = level <= 6 ? [50,100,200] : [50,100,200,500,1000];
      const scale = scales[Math.floor(Math.random() * scales.length)];
      const cm = level <= 6 ? randomInt(2,8) : randomInt(2,15);
      const realCm = cm * scale;
      const answerMeters = roundNice(realCm / 100);
      const prompt = `1:${scale} · ${cm} cm`;
      return buildPercentNumericTask("scale", prompt, answerMeters, false, level, false, "m");
    }

    if(mode === "reverse-discount"){
      const percents = [10,20,25,40,50];
      const originalPrices = [40,50,60,80,100,120,160,200,240,300];
      const percent = percents[Math.floor(Math.random() * percents.length)];
      const original = originalPrices[Math.floor(Math.random() * originalPrices.length)];
      const after = roundNice(original * (1 - percent / 100));
      const prompt = `${euroLabel(after)} na −${fmtPercent(percent)}`;
      return buildPercentNumericTask("reverse-discount", prompt, original, true, level);
    }

    if(mode === "percent-from-part"){
      const wholes = [40,50,60,80,100,120,150,200,240,300];
      const percents = level <= 5 ? [10,20,25,50,75] : [5,10,12.5,20,25,30,40,50,60,75];
      const whole = wholes[Math.floor(Math.random() * wholes.length)];
      const percent = percents[Math.floor(Math.random() * percents.length)];
      const part = roundNice(whole * percent / 100);
      const prompt = `${part} / ${whole}`;
      return buildPercentNumericTask("percent-from-part", prompt, percent, false, level, true);
    }

    const percents = [5,10,20,25,50];
    const bases = [40,60,80,100,120,160,200,240,300,400];
    const percent = percents[Math.floor(Math.random() * percents.length)];
    const base = bases[Math.floor(Math.random() * bases.length)];
    const up = Math.random() < .5;
    const answer = roundNice(base * (1 + (up ? percent : -percent) / 100));
    const prompt = `${up ? "+" : "−"}${fmtPercent(percent)} · ${base}`;
    return buildPercentNumericTask("percent-change", prompt, answer, false, level);
  }

  function buildPercentEquivalentDistractors(item, correctForms){
    const labels = [];
    PERCENT_EQUIV_LIBRARY.forEach(other => {
      if(other.percent === item.percent) return;
      labels.push(fmtPercent(other.percent), other.frac, other.decimal);
    });
    return uniqueLabels(shuffle(labels).filter(label => !correctForms.includes(label))).slice(0, 18);
  }

  function numberAnswerLabel(v, euro=false, percent=false, unit=""){
    const base = String(roundNice(v)).replace(".", ",");
    if(euro) return euroLabel(roundNice(v));
    if(percent) return `${base}%`;
    if(unit) return `${base} ${unit}`;
    return base;
  }

  function buildPercentNumericTask(mode, prompt, answer, euro, level, percentAnswer=false, unit=""){
    const answerLabel = numberAnswerLabel(answer, euro, percentAnswer, unit);
    const raw = [
      answer + 1, answer - 1, answer + 2, answer - 2,
      answer * 2, Math.max(0, answer / 2),
      answer + 5, Math.max(0, answer - 5),
      answer + 10, Math.max(0, answer - 10),
      answer * 1.25, answer * .75
    ].map(roundNice);
    const distractorLabels = uniqueLabels(raw
      .filter(v => Number.isFinite(v) && v !== answer)
      .map(v => numberAnswerLabel(v, euro, percentAnswer, unit)));
    return {topic:"percentages", mode, prompt, correctLabels:[answerLabel], distractorLabels};
  }

  function roundNice(v){
    const r = Math.round(v * 100) / 100;
    return Number.isInteger(r) ? r : r;
  }

  function uniqueLabels(labels){
    const seen = new Set();
    return labels.filter(label => {
      const key = String(label);
      if(seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function createEquationTaskForLevel(level){
    const pool = [];
    pool.push(createEquationAddSub(level));
    if(level >= 2) pool.push(createEquationMultiply(level), createAlgebraSubstitution(level), createAlgebraSimplify(level));
    if(level >= 3) pool.push(createEquationDivide(level), createAlgebraFormula(level));
    if(level >= 4) pool.push(createEquationTwoStep(level), createAlgebraPattern(level));
    if(level >= 5) pool.push(createAlgebraDistribute(level), createAlgebraTableFormula(level));
    if(level >= 6) pool.push(createEquationFractionTwoStep(level), createAlgebraSubstitution(level));
    if(level >= 7) pool.push(createEquationParentheses(level), createAlgebraDistribute(level));
    if(level >= 8) pool.push(createEquationSquare(level), createEquationAbsolute(level));
    return pool[Math.floor(Math.random()*pool.length)];
  }


  function createAlgebraChoiceTask(mode, prompt, correctLabel, distractorLabels){
    return {
      topic:"equations",
      mode,
      prompt,
      correctLabels:uniqueLabels([correctLabel]),
      distractorLabels:uniqueLabels(distractorLabels.filter(label => String(label) !== String(correctLabel)))
    };
  }

  function createAlgebraSubstitution(level){
    const x = level <= 5 ? randomInt(1, 9) : randomInt(-5, 9);
    const a = randomInt(2, 6);
    const b = randomInt(1, 10);
    const usePlus = Math.random() < .65;
    const answer = usePlus ? a * x + b : a * x - b;
    const expr = usePlus ? `${a}x + ${b}` : `${a}x − ${b}`;
    const prompt = `x = ${formatNumber(x)}, ${expr}`;
    return createAlgebraChoiceTask("alg-substitution", prompt, String(answer), [
      String(answer + a), String(answer - a), String(a + x + b), String(a * (x + b)), String(-answer)
    ]);
  }

  function createAlgebraSimplify(level){
    const a = randomInt(2, 7);
    const b = randomInt(2, 8);
    const c = level <= 5 ? 0 : randomInt(1, 6);
    const answer = c ? `${a + b}x + ${c}` : `${a + b}x`;
    const prompt = c ? `${a}x + ${b}x + ${c}` : `${a}x + ${b}x`;
    return createAlgebraChoiceTask("alg-simplify", prompt, answer, [
      `${a + b}`, `${a * b}x`, `${a + b + c}x`, `${a}x + ${b}`, `${a + b}x − ${c}`
    ]);
  }

  function createAlgebraDistribute(level){
    const a = randomInt(2, 6);
    const b = randomInt(1, 8);
    const variable = Math.random() < .5 ? "x" : "a";
    const signPlus = Math.random() < .75;
    const prompt = signPlus ? `${a}(${variable} + ${b})` : `${a}(${variable} − ${b})`;
    const answer = signPlus ? `${a}${variable} + ${a*b}` : `${a}${variable} − ${a*b}`;
    return createAlgebraChoiceTask("alg-distribute", prompt, answer, [
      `${a}${variable} + ${b}`, `${a + b}${variable}`, `${a*b}${variable}`, `${a}${variable} − ${a*b}`, `${a} + ${a*b}${variable}`
    ]);
  }

  function createAlgebraPattern(level){
    const step = randomInt(2, 9);
    const start = Math.random() < .55 ? step : randomInt(1, 6);
    const seq = [start, start + step, start + 2*step, start + 3*step];
    const answer = start === step ? `${step}n` : `${step}n + ${start - step}`;
    const prompt = `${seq.join(", ")}, ...`;
    const distractors = [
      `${step}n + ${start}`, `${start}n`, `${step + 1}n`, `n + ${step}`, `${step}n − ${Math.abs(start-step)}`
    ];
    return createAlgebraChoiceTask("alg-pattern", prompt, answer, distractors);
  }

  function createAlgebraFormula(level){
    const l = randomInt(3, 12);
    const b = randomInt(2, 9);
    const mode = Math.random() < .5 ? "perimeter" : "area";
    if(mode === "perimeter"){
      const answer = 2*l + 2*b;
      return createAlgebraChoiceTask("alg-formula", `P = 2l + 2b, l=${l}, b=${b}`, String(answer), [
        String(l + b), String(2*l + b), String(l*b), String(2*l*b), String(answer + 2)
      ]);
    }
    const answer = l*b;
    return createAlgebraChoiceTask("alg-formula", `A = l · b, l=${l}, b=${b}`, String(answer), [
      String(l + b), String(2*l + 2*b), String(l*b + l), String(l*b + b), String(answer * 2)
    ]);
  }

  function createAlgebraTableFormula(level){
    const a = randomInt(2, 6);
    const c = level <= 6 ? 0 : randomInt(1, 5);
    const ys = [1,2,3].map(x => a*x + c);
    const answer = c ? `y = ${a}x + ${c}` : `y = ${a}x`;
    const prompt = `x: 1,2,3 → y: ${ys.join(",")}`;
    return createAlgebraChoiceTask("alg-table-formula", prompt, answer, [
      `y = ${a + 1}x`, `y = x + ${a}`, `y = ${a}x − ${c || 1}`, `y = ${c || a}x + ${a}`, `y = ${a + c}x`
    ]);
  }

  function createEquationAddSub(level){
    const solution = level <= 3 ? randomInt(1, 12) : randomInt(-8, 12);
    const a = randomInt(2, 9);
    const usePlus = Math.random() < .5;
    const result = usePlus ? solution + a : solution - a;
    return {topic:"equations", mode:usePlus ? "eq-add" : "eq-sub", a, result, solutions:[solution]};
  }

  function createEquationMultiply(level){
    const solution = level <= 5 ? randomInt(1, 10) : randomInt(-8, 10);
    const a = randomInt(2, 8);
    return {topic:"equations", mode:"eq-mul", a, result:a * solution, solutions:[solution]};
  }

  function createEquationDivide(level){
    const denom = randomInt(2, 8);
    const result = level <= 5 ? randomInt(1, 9) : randomInt(-6, 9);
    return {topic:"equations", mode:"eq-div", denom, result, solutions:[denom * result]};
  }

  function createEquationTwoStep(level){
    const solution = level <= 5 ? randomInt(1, 10) : randomInt(-7, 9);
    const a = randomInt(2, 6);
    const b = randomInt(2, 10);
    const usePlus = Math.random() < .5;
    const result = usePlus ? a * solution + b : a * solution - b;
    return {topic:"equations", mode:usePlus ? "eq-ax-plus" : "eq-ax-minus", a, b, result, solutions:[solution]};
  }

  function createEquationFractionTwoStep(level){
    const denom = randomInt(2, 6);
    const result = level <= 7 ? randomInt(2, 8) : randomInt(-5, 8);
    const b = randomInt(1, 8);
    const usePlus = Math.random() < .5;
    const solution = usePlus ? denom * result - b : denom * result + b;
    return {topic:"equations", mode:usePlus ? "eq-frac-plus" : "eq-frac-minus", denom, b, result, solutions:[solution]};
  }

  function createEquationParentheses(level){
    const a = randomInt(2, 5);
    const b = randomInt(1, 6);
    const solution = level <= 8 ? randomInt(1, 9) : randomInt(-6, 9);
    const usePlus = Math.random() < .5;
    const inside = usePlus ? solution + b : solution - b;
    return {topic:"equations", mode:usePlus ? "eq-paren-plus" : "eq-paren-minus", a, b, result:a * inside, solutions:[solution]};
  }

  function createEquationSquare(level){
    const root = randomInt(2, 9);
    return {topic:"equations", mode:"eq-square", result:root*root, solutions:[-root, root]};
  }

  function createEquationAbsolute(level){
    const root = randomInt(2, 10);
    return {topic:"equations", mode:"eq-abs", result:root, solutions:[-root, root]};
  }


  function createNumberTheoryTaskForLevel(level){
    // v27.1 Getallenleer+:
    // delers, veelvouden, priemgetallen, deelbaarheid, kwadraten,
    // absolute waarde, ggd en kgv.
    let modePool;
    if(level <= 2){
      modePool = ["multiples", "divisors", "divisibleBy"];
    }else if(level <= 5){
      modePool = ["multiples", "divisors", "primes", "divisibleBy", "squares"];
    }else if(level <= 7){
      modePool = ["multiples", "divisors", "primes", "divisibleBy", "squares", "absolute"];
    }else{
      modePool = ["multiples", "divisors", "primes", "divisibleBy", "squares", "absolute", "gcd", "lcm"];
    }
    const mode = modePool[Math.floor(Math.random()*modePool.length)];

    if(mode === "multiples"){
      const basePool = level <= 2 ? [2,3,4,5,10] : level <= 5 ? [2,3,4,5,6,8,9,10] : [2,3,4,5,6,7,8,9,10,12];
      return { topic:"numbertheory", mode, base: basePool[Math.floor(Math.random()*basePool.length)] };
    }

    if(mode === "divisors"){
      const targetPool = level <= 2 ? [12,18,20,24,30,36] : level <= 5 ? [16,18,24,28,30,32,36,40,42,48] : [24,30,36,42,48,54,60,72,84,96];
      return { topic:"numbertheory", mode, target: targetPool[Math.floor(Math.random()*targetPool.length)] };
    }

    if(mode === "divisibleBy"){
      const divPool = level <= 3 ? [2,3,5,10] : level <= 6 ? [2,3,4,5,9,10] : [2,3,4,5,6,8,9,10,12];
      return { topic:"numbertheory", mode, divisor: divPool[Math.floor(Math.random()*divPool.length)] };
    }

    if(mode === "squares"){
      return { topic:"numbertheory", mode, maxRoot: level <= 5 ? 10 : 14 };
    }

    if(mode === "absolute"){
      const absPool = level <= 7 ? [2,3,4,5,6,7,8,9] : [2,3,4,5,6,7,8,9,10,12];
      return { topic:"numbertheory", mode, absTarget: absPool[Math.floor(Math.random()*absPool.length)] };
    }

    if(mode === "gcd" || mode === "lcm"){
      const pairs = level <= 8
        ? [[6,9],[8,12],[10,15],[12,18],[14,21],[16,24],[18,24],[20,30]]
        : [[12,18],[12,30],[15,25],[18,30],[21,28],[24,36],[30,45],[36,48]];
      const pair = pairs[Math.floor(Math.random()*pairs.length)];
      return { topic:"numbertheory", mode, a:pair[0], b:pair[1] };
    }

    const max = level <= 5 ? 40 : 80;
    return { topic:"numbertheory", mode:"primes", max };
  }

  function randomInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function buildBubbleData(task, count, correctWanted){
    if(task.topic === "inequalities"){
      return buildInequalityBubbleData(task, count, correctWanted);
    }
    if(task.topic === "coordinates"){
      return buildCoordinateBubbleData(task, count, correctWanted);
    }
    if(task.topic === "numbertheory"){
      return buildNumberTheoryBubbleData(task, count, correctWanted);
    }
    if(task.topic === "shapes"){
      return buildShapeBubbleData(task, count, correctWanted);
    }
    if(task.topic === "equations"){
      return buildEquationBubbleData(task, count, correctWanted);
    }
    if(task.topic === "percentages"){
      return buildPercentageBubbleData(task, count, correctWanted);
    }

    const data = [];
    const usedExact = new Set();

    if(task.mode === "equal-number" || task.mode === "equal-visual"){
      const correctVariants = distinctVariants(task.family.variants);
      const neededCorrect = Math.min(correctWanted, correctVariants.length);

      for(let i=0;i<neededCorrect;i++){
        const frac = correctVariants[i];
        data.push(makeItem(frac[0], frac[1], true, i));
        usedExact.add(frac[0] + "/" + frac[1]);
      }

      const distractors = collectDistractorsForEqual(task.targetFraction, level);
      let di = 0;
      while(data.length < count && di < distractors.length){
        const frac = distractors[di++];
        const key = frac[0] + "/" + frac[1];
        if(usedExact.has(key)) continue;
        usedExact.add(key);
        data.push(makeItem(frac[0], frac[1], false, data.length));
      }
    } else {
      const candidates = collectCandidatesForCompare(level);
      const isGreater = task.mode === "greater";
      const goods = shuffle(candidates.filter(f => isGreater ? value(f) > value(task.targetFraction) : value(f) < value(task.targetFraction)));
      const bads  = shuffle(candidates.filter(f => isGreater ? value(f) < value(task.targetFraction) : value(f) > value(task.targetFraction)));

      const goodsNeeded = Math.min(correctWanted, goods.length);
      for(let i=0;i<goodsNeeded;i++){
        const frac = goods[i];
        data.push(makeItem(frac[0], frac[1], true, i));
        usedExact.add(frac[0] + "/" + frac[1]);
      }

      let di = 0;
      while(data.length < count && di < bads.length){
        const frac = bads[di++];
        const key = frac[0] + "/" + frac[1];
        if(usedExact.has(key)) continue;
        usedExact.add(key);
        data.push(makeItem(frac[0], frac[1], false, data.length));
      }

      // v25.6 guard inside the raw fraction generator:
      // fill any remaining slots with extra candidates from either side.
      const extras = shuffle(candidates.filter(f => {
        const key = f[0] + "/" + f[1];
        return !usedExact.has(key) && !sameFraction(f[0], f[1], task.targetFraction[0], task.targetFraction[1]);
      }));
      let ei = 0;
      while(data.length < count && ei < extras.length){
        const frac = extras[ei++];
        const key = frac[0] + "/" + frac[1];
        if(usedExact.has(key)) continue;
        usedExact.add(key);
        const isCorrect = isGreater ? value(frac) > value(task.targetFraction) : value(frac) < value(task.targetFraction);
        data.push(makeItem(frac[0], frac[1], isCorrect, data.length));
      }
    }

    return shuffle(data);
  }

  function buildInequalityBubbleData(task, count, correctWanted){
    const candidates = collectValuesForInequality(task, level);
    const goods = shuffle(candidates.filter(v => satisfiesInequality(v, task.operator, task.boundary)));
    const bads = shuffle(candidates.filter(v => !satisfiesInequality(v, task.operator, task.boundary)));
    const data = [];
    const used = new Set();

    while(data.length < correctWanted && goods.length){
      const v = goods.shift();
      if(used.has(v)) continue;
      used.add(v);
      data.push(makeNumberItem(v, true, data.length));
    }

    while(data.length < count && bads.length){
      const v = bads.shift();
      if(used.has(v)) continue;
      used.add(v);
      data.push(makeNumberItem(v, false, data.length));
    }

    while(data.length < count && goods.length){
      const v = goods.shift();
      if(used.has(v)) continue;
      used.add(v);
      data.push(makeNumberItem(v, true, data.length));
    }

    return shuffle(data);
  }



  function coordinateMatchesTask(p, task){
    if(task.mode === "coord-point") return p.x === task.x && p.y === task.y;
    if(task.mode === "coord-x" || task.mode === "coord-y") return task.axis === "x" ? p.x === task.targetValue : p.y === task.targetValue;
    if(task.mode === "coord-quadrant"){
      if(task.quadrant === 1) return p.x > 0 && p.y > 0;
      if(task.quadrant === 2) return p.x < 0 && p.y > 0;
      if(task.quadrant === 3) return p.x < 0 && p.y < 0;
      if(task.quadrant === 4) return p.x > 0 && p.y < 0;
      return false;
    }
    if(task.mode === "coord-line"){
      if(task.line === "y=x") return p.y === p.x;
      if(task.line === "y=-x") return p.y === -p.x;
      if(task.line === "y=0") return p.y === 0;
      if(task.line === "x=0") return p.x === 0;
      return false;
    }
    if(task.mode === "coord-reflect-x" || task.mode === "coord-reflect-y" || task.mode === "coord-translate" || task.mode === "coord-midpoint" || task.mode === "coord-table-point"){
      return p.x === task.targetX && p.y === task.targetY;
    }
    return false;
  }

  function isExactCoordinateTask(task){
    return ["coord-point","coord-reflect-x","coord-reflect-y","coord-translate","coord-midpoint","coord-table-point"].includes(task.mode);
  }

  function buildCoordinateBubbleData(task, count, correctWanted){
    const data = [];
    const used = new Set();
    const key = (x,y) => `${x},${y}`;
    const goods = [];
    const bads = [];
    for(let x=task.min; x<=task.max; x++){
      for(let y=task.min; y<=task.max; y++){
        const p = {x,y};
        if(coordinateMatchesTask(p, task)) goods.push(p); else bads.push(p);
      }
    }

    if(isExactCoordinateTask(task)){
      const p = goods[0] || {x:task.targetX ?? task.x, y:task.targetY ?? task.y};
      used.add(key(p.x,p.y));
      data.push(makeCoordinateItem(p.x, p.y, true, data.length, task.min, task.max));
    }else{
      for(const p of shuffle(goods)){
        if(data.length >= correctWanted) break;
        if(used.has(key(p.x,p.y))) continue;
        used.add(key(p.x,p.y));
        data.push(makeCoordinateItem(p.x, p.y, true, data.length, task.min, task.max));
      }
    }

    for(const p of shuffle(bads)){
      if(data.length >= count) break;
      if(used.has(key(p.x,p.y))) continue;
      used.add(key(p.x,p.y));
      data.push(makeCoordinateItem(p.x, p.y, false, data.length, task.min, task.max));
    }
    return shuffle(data);
  }


  function buildNumberTheoryBubbleData(task, count, correctWanted){
    const candidates = collectValuesForNumberTheory(task, level);
    const goods = shuffle(candidates.filter(v => satisfiesNumberTheory(v, task)));
    const bads = shuffle(candidates.filter(v => !satisfiesNumberTheory(v, task)));
    const data = [];
    const used = new Set();

    while(data.length < correctWanted && goods.length){
      const v = goods.shift();
      if(used.has(v)) continue;
      used.add(v);
      data.push(makeNumberItem(v, true, data.length));
    }

    while(data.length < count && bads.length){
      const v = bads.shift();
      if(used.has(v)) continue;
      used.add(v);
      data.push(makeNumberItem(v, false, data.length));
    }

    while(data.length < count && goods.length){
      const v = goods.shift();
      if(used.has(v)) continue;
      used.add(v);
      data.push(makeNumberItem(v, true, data.length));
    }

    return shuffle(data);
  }



  function buildPercentageBubbleData(task, count, correctWanted){
    const data = [];
    const used = new Set();
    const add = (label, correct) => {
      const key = String(label);
      if(used.has(key) || data.length >= count) return;
      used.add(key);
      data.push(makeTextItem(label, correct, data.length));
    };

    shuffle(task.correctLabels || []).slice(0, Math.max(1, correctWanted)).forEach(label => add(label, true));
    shuffle(task.distractorLabels || []).forEach(label => add(label, false));

    if(!data.some(item => item.correct) && task.correctLabels && task.correctLabels.length){
      add(task.correctLabels[0], true);
    }
    let guard = 0;
    while(data.length < count && guard < 40){
      guard++;
      add(String(randomInt(1, 120)), false);
    }

    return shuffle(data);
  }

  function buildEquationBubbleData(task, count, correctWanted){
    if(task.correctLabels){
      const data = [];
      const used = new Set();
      const add = (label, correct) => {
        const key = String(label);
        if(used.has(key) || data.length >= count) return;
        used.add(key);
        data.push(makeTextItem(label, correct, data.length));
      };
      shuffle(task.correctLabels || []).slice(0, Math.max(1, correctWanted)).forEach(label => add(label, true));
      shuffle(task.distractorLabels || []).forEach(label => add(label, false));
      let guard = 0;
      while(data.length < count && guard < 40){
        guard++;
        add(String(randomInt(-12, 24)), false);
      }
      return shuffle(data);
    }

    const solutions = uniqueNumbers(task.solutions || []);
    const data = [];
    const used = new Set();
    solutions.forEach(v => {
      if(data.length < count && !used.has(v)){
        used.add(v);
        data.push(makeNumberItem(v, true, data.length));
      }
    });

    const candidates = collectValuesForEquation(task);
    const bads = shuffle(candidates.filter(v => !solutions.includes(v)));
    while(data.length < count && bads.length){
      const v = bads.shift();
      if(used.has(v)) continue;
      used.add(v);
      data.push(makeNumberItem(v, false, data.length));
    }

    // Fallback voor uitzonderlijke gevallen.
    let guard = 0;
    while(data.length < count && guard < 100){
      guard++;
      const v = randomInt(-12, 16);
      if(used.has(v) || solutions.includes(v)) continue;
      used.add(v);
      data.push(makeNumberItem(v, false, data.length));
    }
    return shuffle(data);
  }

  function collectValuesForEquation(task){
    const values = [];
    const solutions = task.solutions || [];
    solutions.forEach(s => {
      for(let d=-4; d<=4; d++) values.push(s+d);
      values.push(s*2, -s, s+5, s-5);
    });
    values.push(-12,-10,-8,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,8,10,12,15,18,20);
    return uniqueNumbers(values).filter(v => Number.isInteger(v) && v >= -30 && v <= 60);
  }

  function uniqueNumbers(values){
    const seen = new Set();
    return values.filter(v => Number.isInteger(v) && !seen.has(v) && seen.add(v));
  }


  function buildShapeBubbleData(task, count, correctWanted){
    if(task.correctLabels){
      const data = [];
      const used = new Set();
      const add = (label, correct) => {
        const key = String(label);
        if(used.has(key) || data.length >= count) return;
        used.add(key);
        data.push(makeTextItem(label, correct, data.length));
      };
      shuffle(task.correctLabels || []).slice(0, Math.max(1, correctWanted)).forEach(label => add(label, true));
      shuffle(task.distractorLabels || []).forEach(label => add(label, false));
      let guard = 0;
      while(data.length < count && guard < 40){
        guard++;
        add(String(randomInt(1, 60)), false);
      }
      return shuffle(data);
    }

    let candidateShapes = SHAPE_LIBRARY.filter(shape => shape.key !== "circle" && shape.key !== "kite");

    // v27.24: bij vragen over diagonalen tonen we alleen vierhoeken.
    // Anders lijkt bv. een regelmatige zeshoek inhoudelijk verdedigbaar door lange diagonalen,
    // terwijl deze leerstofvraag eigenlijk over de parallellogram-eigenschap bij vierhoeken gaat.
    if(["diagonalsEqual","diagonalsPerp","diagonalsBisect"].includes(task.prop)){
      candidateShapes = candidateShapes.filter(shape => shape.kind === "quadrilateral");
    }

    // Vermijd visueel verwarrende distractors bij ruit-vragen: een vlieger lijkt op klein scherm te snel op een ruit.
    if(task.custom === "rhombiInclusive" || task.labelKey === "shape_rhombi" || task.labelKey === "shape_allSidesEqual"){
      candidateShapes = candidateShapes.filter(shape => shape.key !== "kite");
    }
    const goods = shuffle(candidateShapes.filter(shape => shapeMatchesTask(shape, task)));
    const bads = shuffle(candidateShapes.filter(shape => !shapeMatchesTask(shape, task)));
    const data = [];
    const used = new Set();
    const want = Math.min(correctWanted, goods.length || 1);
    while(data.length < want && goods.length){
      const sh = goods.shift();
      if(used.has(sh.key)) continue;
      used.add(sh.key);
      data.push(makeShapeItem(sh, true, data.length));
    }
    while(data.length < count && bads.length){
      const sh = bads.shift();
      if(used.has(sh.key)) continue;
      used.add(sh.key);
      data.push(makeShapeItem(sh, false, data.length));
    }
    while(data.length < count && goods.length){
      const sh = goods.shift();
      if(used.has(sh.key)) continue;
      used.add(sh.key);
      data.push(makeShapeItem(sh, true, data.length));
    }
    return shuffle(data);
  }

  function shapeMatchesTask(shape, task){
    if(task.custom){
      if(task.custom === "isoscelesInclusive") return shape.kind === "triangle" && (shape.triSides === "isosceles" || shape.triSides === "equilateral");
      if(task.custom === "rectanglesInclusive") return shape.quad === "rectangle" || shape.quad === "square";
      if(task.custom === "rhombiInclusive") return shape.quad === "rhombus" || shape.quad === "square";
      if(task.custom === "parallelogramsInclusive") return ["parallelogram","rectangle","rhombus","square"].includes(shape.quad);
      if(task.custom === "trapezoidsInclusive") return shape.kind === "quadrilateral" && (shape.parallelPairs || 0) >= 1;
      if(task.custom === "atLeastOneParallelPair") return (shape.parallelPairs || 0) >= 1;
      if(task.custom === "sym0") return shape.sym === 0;
      if(task.custom === "sym1") return shape.sym === 1;
      if(task.custom === "sym2") return shape.sym === 2;
      if(task.custom === "symMore2") return shape.sym > 2;
      if(task.custom === "regularPolygon") return shape.regular && shape.kind !== "circle";
      if(task.custom === "parallelAndRight") return shape.kind === "quadrilateral" && shape.parallelPairs === 2 && shape.right;
      if(task.custom === "isoscelesRightTriangle") return shape.kind === "triangle" && (shape.triSides === "isosceles" || shape.triSides === "equilateral") && shape.triAngles === "right";
      if(task.custom === "quadFourSym") return shape.kind === "quadrilateral" && shape.sym === 4;
      if(task.custom === "quadNoRight") return shape.kind === "quadrilateral" && !shape.right;
      if(task.custom === "quadNoParallel") return shape.kind === "quadrilateral" && (shape.parallelPairs || 0) === 0;
    }
    return shape[task.prop] === task.value;
  }

  function makeShapeItem(shape, correct, idx){
    return { kind:"shape", shape, label:shape.label, labelKey:shape.labelKey, correct, color: colors[idx % colors.length] };
  }


  function gcd(a,b){
    a = Math.abs(a); b = Math.abs(b);
    while(b){ const t = b; b = a % b; a = t; }
    return a;
  }

  function lcm(a,b){
    return Math.abs(a*b) / gcd(a,b);
  }

  function isSquareNumber(v){
    if(v < 0) return false;
    const r = Math.sqrt(v);
    return Number.isInteger(r);
  }

  function collectValuesForNumberTheory(task, level){
    if(task.mode === "multiples"){
      const maxFactor = level <= 2 ? 10 : level <= 5 ? 12 : 15;
      const values = [];
      for(let k=1; k<=maxFactor; k++) values.push(task.base * k);
      for(let v=task.base + 1; v<=task.base * maxFactor + task.base; v += Math.max(2, task.base - 1)) values.push(v);
      values.push(task.base, task.base + 2, task.base * 2 + 1, task.base * 3 - 1);
      return uniquePositive(values).filter(v => v <= 150);
    }

    if(task.mode === "divisors"){
      const values = [];
      for(let v=1; v<=task.target; v++){
        if(task.target % v === 0) values.push(v);
      }
      for(let v=2; v<=Math.min(30, task.target + 8); v++) values.push(v);
      values.push(task.target - 1, task.target + 1, Math.floor(task.target / 2) + 1);
      return uniquePositive(values).filter(v => v <= Math.max(100, task.target + 10));
    }

    if(task.mode === "divisibleBy"){
      const values = [];
      for(let v=1; v<=Math.max(80, task.divisor * 15); v++) values.push(v);
      values.push(task.divisor, task.divisor * 2, task.divisor * 3, task.divisor + 1, task.divisor * 4 + 1);
      return uniquePositive(values).filter(v => v <= 150);
    }

    if(task.mode === "squares"){
      const maxRoot = task.maxRoot || 10;
      const values = [];
      for(let r=1; r<=maxRoot; r++) values.push(r*r);
      for(let v=2; v<=Math.min(180, maxRoot*maxRoot + 20); v += 3) values.push(v);
      values.push(2,3,5,6,7,8,10,12,15,20,30,50);
      return uniquePositive(values).filter(v => v <= 200);
    }

    if(task.mode === "absolute"){
      const a = task.absTarget || 5;
      const values = [-a, a, 0, -a-1, a+1, -a+1, a-1, -2*a, 2*a, -1, 1];
      for(let v=-12; v<=12; v++) values.push(v);
      const seen = new Set();
      return values.filter(v => Number.isInteger(v) && !seen.has(v) && seen.add(v));
    }

    if(task.mode === "gcd" || task.mode === "lcm"){
      const answer = task.mode === "gcd" ? gcd(task.a, task.b) : lcm(task.a, task.b);
      const values = [answer, task.a, task.b, gcd(task.a, task.b), lcm(task.a, task.b)];
      for(let d=-4; d<=4; d++) values.push(answer + d);
      values.push(answer * 2, Math.max(1, Math.floor(answer / 2)), task.a + task.b, Math.abs(task.a - task.b));
      return uniquePositive(values).filter(v => v <= 300);
    }

    const max = task.max || 50;
    const values = [];
    for(let v=2; v<=max; v++) values.push(v);
    return uniquePositive(values);
  }

  function satisfiesNumberTheory(v, task){
    if(task.mode === "multiples") return v % task.base === 0;
    if(task.mode === "divisors") return task.target % v === 0;
    if(task.mode === "primes") return isPrime(v);
    if(task.mode === "divisibleBy") return v % task.divisor === 0;
    if(task.mode === "squares") return isSquareNumber(v);
    if(task.mode === "absolute") return Math.abs(v) === task.absTarget;
    if(task.mode === "gcd") return v === gcd(task.a, task.b);
    if(task.mode === "lcm") return v === lcm(task.a, task.b);
    return false;
  }

  function uniquePositive(values){
    const seen = new Set();
    return values.filter(v => Number.isInteger(v) && v > 0 && !seen.has(v) && seen.add(v));
  }

  function isPrime(n){
    if(n < 2) return false;
    if(n === 2) return true;
    if(n % 2 === 0) return false;
    for(let d=3; d*d<=n; d+=2){
      if(n % d === 0) return false;
    }
    return true;
  }

  function collectValuesForInequality(task, level){
    const b = task.boundary;
    const spread = level <= 2 ? 5 : level <= 5 ? 7 : 10;
    const values = [];
    for(let v=b-spread; v<=b+spread; v++) values.push(v);
    // Voeg bewust de grens zelf toe: belangrijk bij ≥ en ≤.
    values.push(b, b-1, b+1, 0);
    const seen = new Set();
    return values.filter(v => {
      if(seen.has(v)) return false;
      seen.add(v);
      return true;
    });
  }

  function satisfiesInequality(v, op, b){
    if(op === ">") return v > b;
    if(op === "<") return v < b;
    if(op === "≥") return v >= b;
    if(op === "≤") return v <= b;
    return false;
  }


  function makeTextItem(label, correct, idx){
    return {
      kind:"number",
      value:label,
      label:String(label),
      correct,
      color: colors[idx % colors.length]
    };
  }

  function makeNumberItem(value, correct, idx){
    return {
      kind:"number",
      value,
      label:String(value).replace("-", "−"),
      correct,
      color: colors[idx % colors.length]
    };
  }


  function makeCoordinateItem(x, y, correct, idx, min, max){
    return {
      kind:"coordinate",
      x, y, min, max, correct,
      label:`(${formatNumber(x)}, ${formatNumber(y)})`,
      color: colors[idx % colors.length]
    };
  }

  function distinctVariants(variants){
    // Sort by denominator for clarity: simpler visuals first.
    return [...variants].sort((a,b) => a[1]-b[1]);
  }

  function collectDistractorsForEqual(targetFrac, level){
    const exactTarget = targetFrac[0] + "/" + targetFrac[1];
    const targetVal = value(targetFrac);

    let pool = families
      .flatMap(f => f.variants)
      .filter(v => !sameFraction(v[0], v[1], targetFrac[0], targetFrac[1]));

    // Early levels: keep distractors clearly different.
    if(level <= 2){
      pool = pool.filter(v => Math.abs(value(v) - targetVal) > 0.18);
    } else if(level <= 4){
      pool = pool.filter(v => Math.abs(value(v) - targetVal) > 0.10);
    }

    // Remove exact duplicates
    const seen = new Set();
    const uniq = [];
    for(const p of pool){
      const k = p[0] + "/" + p[1];
      if(k === exactTarget || seen.has(k)) continue;
      seen.add(k);
      uniq.push(p);
    }
    return shuffle(uniq);
  }

  function collectCandidatesForCompare(level){
    // v25.6: richer compare pool.
    // The old pool came only from the equivalence families. For extreme targets such as
    // "greater than 7/8" or "smaller than 1/8", that could leave 0 correct answers.
    const maxDen = level <= 5 ? 10 : 12;
    const pool = [];

    // Keep the familiar family variants.
    families.flatMap(f => f.variants).forEach(f => pool.push(f));

    // Add a dense set of proper fractions so both sides of each comparison exist.
    for(let d = 2; d <= maxDen; d++){
      for(let n = 1; n < d; n++){
        pool.push([n, d]);
      }
    }

    // Add 1 as a useful upper-side distractor/correct option for high targets.
    pool.push([1, 1]);

    const seen = new Set();
    const uniq = [];
    for(const p of pool){
      const k = p[0] + "/" + p[1];
      if(seen.has(k)) continue;
      seen.add(k);
      uniq.push(p);
    }
    return uniq;
  }

  function makeItem(n,d,correct,idx){
    return {
      n, d, correct,
      shape: pickShapeForDenominator(d, idx),
      color: colors[idx % colors.length]
    };
  }

  function pickShapeForDenominator(d, idx){
    const map = {
      2: ["pie","bar"],
      3: ["pie","bar","circles","grid"],
      4: ["pie","bar","grid","triangles"],
      5: ["bar","circles"],
      6: ["pie","bar","grid","circles","honeycomb"],
      8: ["pie","bar","grid","circles"],
      9: ["grid"],
      10:["bar","circles","grid"],
      12:["grid","bar"]
    };
    const choices = map[d] || ["bar","grid"];
    return choices[idx % choices.length];
  }


  function romanQuadrant(q){
    return q === 1 ? "I" : q === 2 ? "II" : q === 3 ? "III" : q === 4 ? "IV" : String(q);
  }

  function renderTarget(task){
    targetModelWrap.innerHTML = "";
    targetModelWrap.classList.add("hidden");
    numberLineWrap.innerHTML = "";
    numberLineWrap.classList.add("hidden");
    targetFrac.classList.remove("hidden");
    targetFrac.classList.remove("expression");

    if(task.topic === "inequalities"){
      targetText.textContent = tr("targetIneq");
      targetFrac.classList.add("expression");
      targetFrac.innerHTML = `x ${task.operator} ${formatNumber(task.boundary)}`;
      numberLineWrap.classList.remove("hidden");
      numberLineWrap.appendChild(renderInequalityNumberLine(task));
      return;
    }
    if(task.topic === "coordinates"){
      targetFrac.classList.add("expression");
      if(task.mode === "coord-point"){
        targetText.textContent = tr("targetCoordinate");
        targetFrac.innerHTML = `(${formatNumber(task.x)}, ${formatNumber(task.y)})`;
      }else if(task.mode === "coord-x" || task.mode === "coord-y"){
        targetText.textContent = task.axis === "x" ? tr("targetCoordX") : tr("targetCoordY");
        targetFrac.innerHTML = formatNumber(task.targetValue);
      }else if(task.mode === "coord-quadrant"){
        targetText.textContent = tr("targetCoordQuadrant");
        targetFrac.innerHTML = romanQuadrant(task.quadrant);
      }else if(task.mode === "coord-line"){
        targetText.textContent = tr("targetCoordLine");
        targetFrac.innerHTML = task.line;
      }else if(task.mode === "coord-reflect-x" || task.mode === "coord-reflect-y"){
        targetText.textContent = tr("targetCoordReflection");
        targetFrac.innerHTML = `(${formatNumber(task.x)}, ${formatNumber(task.y)}) · ${task.axis}-as`;
      }else if(task.mode === "coord-translate"){
        targetText.textContent = tr("targetCoordTranslation");
        targetFrac.innerHTML = `(${formatNumber(task.x)}, ${formatNumber(task.y)}) + (${formatNumber(task.dx)}, ${formatNumber(task.dy)})`;
      }else if(task.mode === "coord-midpoint"){
        targetText.textContent = tr("targetCoordMidpoint");
        targetFrac.innerHTML = `(${formatNumber(task.x1)}, ${formatNumber(task.y1)}) & (${formatNumber(task.x2)}, ${formatNumber(task.y2)})`;
      }else if(task.mode === "coord-table-point"){
        targetText.textContent = tr("targetCoordTablePoint");
        targetFrac.innerHTML = `x=${formatNumber(task.x)} → y=${formatNumber(task.y)}`;
      }
      return;
    }
    if(task.topic === "numbertheory"){
      targetFrac.classList.add("expression");
      if(task.mode === "multiples"){
        targetText.textContent = tr("targetMultiples");
        targetFrac.innerHTML = formatNumber(task.base);
      }else if(task.mode === "divisors"){
        targetText.textContent = tr("targetDivisors");
        targetFrac.innerHTML = formatNumber(task.target);
      }else if(task.mode === "divisibleBy"){
        targetText.textContent = tr("targetDivisibleBy");
        targetFrac.innerHTML = formatNumber(task.divisor);
      }else if(task.mode === "squares"){
        targetText.textContent = tr("targetSquares");
        targetFrac.innerHTML = "1, 4, 9, 16, ...";
      }else if(task.mode === "absolute"){
        targetText.textContent = tr("targetAbs");
        targetFrac.innerHTML = `|x| = ${formatNumber(task.absTarget)}`;
      }else if(task.mode === "gcd"){
        targetText.textContent = tr("targetGcd");
        targetFrac.innerHTML = `ggd(${formatNumber(task.a)}, ${formatNumber(task.b)})`;
      }else if(task.mode === "lcm"){
        targetText.textContent = tr("targetLcm");
        targetFrac.innerHTML = `kgv(${formatNumber(task.a)}, ${formatNumber(task.b)})`;
      }else{
        targetText.textContent = tr("targetPrimes");
        targetFrac.innerHTML = "2, 3, 5, ...";
      }
      return;
    }
    if(task.topic === "percentages"){
      targetFrac.classList.add("expression");
      if(task.mode === "percent-equivalent"){
        targetText.textContent = tr("targetPercentEquivalent");
      }else if(task.mode === "percent-discount"){
        targetText.textContent = tr("targetDiscount");
      }else if(task.mode === "percent-change"){
        targetText.textContent = tr("targetPercentChange");
      }else if(task.mode === "ratio-basic"){
        targetText.textContent = tr("targetRatio");
      }else if(task.mode === "ratio-table"){
        targetText.textContent = tr("targetRatioTable");
      }else if(task.mode === "scale"){
        targetText.textContent = tr("targetScale");
      }else if(task.mode === "reverse-discount"){
        targetText.textContent = tr("targetReverseDiscount");
      }else if(task.mode === "percent-from-part"){
        targetText.textContent = tr("targetPercentFromPart");
      }else{
        targetText.textContent = tr("targetPercentOf");
      }
      targetFrac.innerHTML = task.prompt;
      return;
    }
    if(task.topic === "shapes"){
      targetFrac.classList.add("expression");
      if(task.correctLabels){
        targetText.textContent = tr("targetShapeText");
        targetFrac.innerHTML = escapeHTML(task.prompt || "");
      }else{
        targetText.textContent = tr("targetShapes");
        targetFrac.innerHTML = tr(task.labelKey || task.label);
      }
      return;
    }
    if(task.topic === "equations"){
      targetText.textContent = task.correctLabels ? tr("targetAlgebra") : tr("targetEquation");
      targetFrac.classList.add("expression");
      targetFrac.innerHTML = equationHTML(task);
      return;
    }

    if(task.mode === "equal-number"){
      targetText.textContent = tr("targetEqual");
      targetFrac.innerHTML = fractionHTML(task.targetFraction[0], task.targetFraction[1]);
    } else if(task.mode === "equal-visual"){
      targetText.textContent = tr("targetEqualVisual");
      targetFrac.classList.add("hidden");
      targetModelWrap.classList.remove("hidden");
      targetModelWrap.appendChild(
        renderFigure({
          n: task.targetFraction[0],
          d: task.targetFraction[1],
          shape: pickShapeForDenominator(task.targetFraction[1], 0),
          color: colors[0]
        }, true)
      );
    } else if(task.mode === "greater"){
      targetText.textContent = tr("targetGreater");
      targetFrac.innerHTML = fractionHTML(task.targetFraction[0], task.targetFraction[1]);
    } else {
      targetText.textContent = tr("targetSmaller");
      targetFrac.innerHTML = fractionHTML(task.targetFraction[0], task.targetFraction[1]);
    }
  }

  function updateHint(task){
    if(task.topic === "inequalities"){
      const openClosed = (task.operator === ">" || task.operator === "<") ? tr("openDot") : tr("closedDot");
      const direction = (task.operator === ">" || task.operator === "≥") ? tr("rightArrow") : tr("leftArrow");
      hintText.textContent = `${openClosed}; ${tr("arrow")} ${direction}.`;
      return;
    }
    if(task.topic === "coordinates"){
      hintText.textContent = task.mode === "coord-point"
        ? tr("targetCoordinate") + " " + `(${formatNumber(task.x)}, ${formatNumber(task.y)})` + ". " + tr("coordHintPlus")
        : tr("coordHintPlus");
      return;
    }
    if(task.topic === "numbertheory"){
      hintText.textContent = tr("numberHintPlus");
      return;
    }
    if(task.topic === "shapes"){
      hintText.textContent = tr("shapeHintPlus");
      return;
    }
    if(task.topic === "equations"){
      hintText.textContent = task.correctLabels ? tr("algebraHintPlus") : tr("equationHint");
      return;
    }
    if(task.topic === "percentages"){
      hintText.textContent = tr("ratioHintPlus");
      return;
    }
    hintText.innerHTML = "";
  }

  function layoutPositions(count){
    const rect = stage.getBoundingClientRect();
    const w = rect.width;
    const h = rect.height;
    const size = Math.max(72, Math.min(92, Math.floor(Math.min(w * 0.215, h * 0.19))));
    const margin = Math.max(12, Math.floor(size * 0.16));
    const footerSafe = Math.max(58, Math.floor(size * 0.48));
    const safeW = Math.max(size, w - size - margin * 2);
    const safeH = Math.max(size, h - size - margin * 2 - footerSafe);

    const templates = {
      5: [[.19,.19],[.77,.19],[.49,.42],[.23,.69],[.73,.69]],
      6: [[.16,.17],[.80,.17],[.48,.38],[.81,.54],[.18,.64],[.50,.77]],
      7: [[.16,.16],[.80,.16],[.48,.35],[.82,.50],[.18,.60],[.50,.75],[.80,.74]],
      8: [[.15,.15],[.50,.13],[.82,.16],[.27,.35],[.72,.36],[.17,.62],[.50,.75],[.82,.61]]
    };
    const pos = templates[count] || templates[6];
    return pos.map(([px,py]) => ({
      x: Math.round(margin + px * safeW),
      y: Math.round(margin + py * safeH),
      size
    }));
  }

  function bubbleContentMetrics(item, baseSize){
    const kind = item.kind || "figure";
    const raw = String(item.label ?? item.value ?? "").trim();
    const compactLength = raw.replace(/\s+/g, "").length;
    const words = raw.split(/\s+/).filter(Boolean);
    const longestWord = words.reduce((m,w) => Math.max(m, w.length), 0);
    const hasLetters = /[A-Za-zÀ-ÖØ-öø-ÿĀ-ž]/.test(raw);
    const stageRect = stage && stage.getBoundingClientRect ? stage.getBoundingClientRect() : {width:360, height:420};
    const stageW = stageRect.width || 360;

    let diameter = baseSize;
    let font = Math.round(baseSize * 0.38);

    if(kind === "number"){
      const isFraction = /^-?\d+\/-?\d+$/.test(raw);
      if(hasLetters){
        // Text answers need width. Never break a word like "verschuiving" in two parts.
        const wordFactor = longestWord >= 13 ? 1.54 : longestWord >= 10 ? 1.42 : longestWord >= 8 ? 1.30 : longestWord >= 6 ? 1.16 : 1.04;
        const multiFactor = words.length >= 3 ? 1.42 : words.length === 2 ? 1.28 : 1.00;
        diameter = Math.round(baseSize * Math.max(wordFactor, multiFactor));
        font = Math.round(baseSize * (longestWord >= 13 ? 0.155 : longestWord >= 10 ? 0.178 : longestWord >= 8 ? 0.205 : longestWord >= 6 ? 0.24 : 0.30));
        if(words.length >= 2) font = Math.min(font, Math.round(baseSize * 0.22));
      }else if(isFraction){
        if(compactLength <= 3){
          diameter = Math.round(baseSize * 1.02);
          font = Math.round(baseSize * 0.30);
        }else if(compactLength <= 5){
          diameter = Math.round(baseSize * 1.12);
          font = Math.round(baseSize * 0.28);
        }else{
          diameter = Math.round(baseSize * 1.22);
          font = Math.round(baseSize * 0.24);
        }
      }else if(compactLength <= 2){
        diameter = baseSize;
        font = Math.round(baseSize * 0.39);
      }else if(compactLength <= 4){
        diameter = Math.round(baseSize * 1.08);
        font = Math.round(baseSize * 0.34);
      }else if(compactLength <= 7){
        diameter = Math.round(baseSize * 1.20);
        font = Math.round(baseSize * 0.28);
      }else{
        diameter = Math.round(Math.min(stageW * 0.34, baseSize * 1.38));
        font = Math.round(baseSize * 0.22);
      }
    }else if(kind === "coordinate" || kind === "shape"){
      diameter = Math.round(baseSize * 1.00);
      font = Math.round(baseSize * 0.32);
    }else{
      diameter = baseSize;
      font = Math.round(baseSize * 0.36);
    }

    const maxDiameter = Math.round(Math.min(stageW * 0.36, 146));
    diameter = Math.max(72, Math.min(diameter, maxDiameter));
    return {width: diameter, height: diameter, font};
  }

  function fitBubbleText(el, item){
    if(!el || !item || item.kind !== "number") return;
    const wrap = el.querySelector(".numberBubbleText");
    if(!wrap) return;
    const raw = String(item.label ?? item.value ?? "").trim();
    const words = raw.split(/\s+/).filter(Boolean);
    const longestWord = words.reduce((m,w) => Math.max(m, w.length), 0);
    const hasLetters = /[A-Za-zÀ-ÖØ-öø-ÿĀ-ž]/.test(raw);
    wrap.classList.toggle("longWord", hasLetters && words.length === 1 && longestWord >= 7);
    wrap.classList.toggle("multiWord", hasLetters && words.length >= 2);
    if(!hasLetters) return;

    const stageRect = stage && stage.getBoundingClientRect ? stage.getBoundingClientRect() : {width:360};
    const maxDiameter = Math.round(Math.min((stageRect.width || 360) * 0.38, 158));
    let w = el.offsetWidth || parseFloat(el.style.width) || 92;
    let h = el.offsetHeight || parseFloat(el.style.height) || w;
    let font = parseFloat(getComputedStyle(wrap).fontSize) || parseFloat(el.style.getPropertyValue("--bubbleFont")) || 18;
    const minFont = longestWord >= 12 ? 11 : 12;

    const fits = () => wrap.scrollWidth <= wrap.clientWidth + 1 && wrap.scrollHeight <= wrap.clientHeight + 1;
    for(let i=0; i<18 && !fits(); i++){
      if(font > minFont){
        font -= 1;
        wrap.style.fontSize = font + "px";
        el.style.setProperty("--bubbleFont", font + "px");
      }else if(w < maxDiameter){
        const oldW = w, oldH = h;
        w = Math.min(maxDiameter, w + 8);
        h = w;
        const left = parseFloat(el.style.left) || 0;
        const top = parseFloat(el.style.top) || 0;
        el.style.left = Math.round(left - (w - oldW) / 2) + "px";
        el.style.top = Math.round(top - (h - oldH) / 2) + "px";
        el.style.width = Math.round(w) + "px";
        el.style.height = Math.round(h) + "px";
      }else{
        break;
      }
    }
  }

  function createBubble(item, pos, index){
    const el = document.createElement("button");
    el.className = "bubble answerMapPin";
    el.type = "button";
    el.dataset.correct = item.correct ? "1" : "0";
    el.dataset.debugLabel = answerLabelForDebug(item);
    el.dataset.topic = item.topic || selectedTopic || currentPathTopic || "fractions";
    el.dataset.kind = item.kind || "figure";
    el.setAttribute("aria-label", item.kind === "number" ? `${tr("ariaValue")} ${item.value}` : item.kind === "coordinate" ? `${tr("ariaCoordinate")}` : item.kind === "shape" ? tr(item.labelKey || item.label) : `${tr("ariaFraction")} ${item.n}/${item.d}`);

    const metrics = bubbleContentMetrics(item, pos.size);
    const centerX = pos.x + pos.size / 2;
    const centerY = pos.y + pos.size / 2;
    el.style.left = Math.round(centerX - metrics.width / 2) + "px";
    el.style.top = Math.round(centerY - metrics.height / 2) + "px";
    el.style.width = metrics.width + "px";
    el.style.height = metrics.height + "px";
    el.style.setProperty("--bubbleFont", metrics.font + "px");
    el.style.setProperty("--tint", item.color[0]);
    el.style.setProperty("--ring", item.color[1]);
    el.style.animation = `float${index % 3} ${4.1 + (index%4)*.38}s ease-in-out infinite`;

    const orb = document.createElement("div");
    orb.className = "bubbleOrb";
    const wrap = document.createElement("div");
    wrap.className = item.kind === "number" ? "numberBubbleText" : item.kind === "coordinate" ? "coordBubbleWrap" : item.kind === "shape" ? "shapeBubbleWrap" : "modelWrap";
    if(item.kind === "number"){
      const fracMatch = String(item.label || "").trim().match(/^(\d+)\/(\d+)$/);
      if(fracMatch){
        wrap.classList.add("fractionBubbleText");
        wrap.innerHTML = fractionHTML(fracMatch[1], fracMatch[2]);
      }else{
        wrap.textContent = item.label;
      }
    }else if(item.kind === "coordinate"){
      wrap.appendChild(renderCoordinateGrid(item, false));
    }else if(item.kind === "shape"){
      wrap.appendChild(renderShape(item));
    }else{
      wrap.appendChild(renderFigure(item, false));
    }

    el.appendChild(orb);
    el.appendChild(wrap);
    item.onClick = () => handleBubble(item, el);
    el.addEventListener("click", item.onClick);
    return el;
  }

  function clearBubbles(){
    bubbles.forEach(item => {
      if(item.el && item.onClick){
        item.el.removeEventListener("click", item.onClick);
      }
    });
    [...stage.querySelectorAll(".bubble")].forEach(el => el.remove());
    bubbles = [];
  }

  function spawnBubblePopEffect(sourceEl, opts={}){
    try{
      if(!sourceEl || !document.body) return;
      const rect = sourceEl.getBoundingClientRect();
      const cx = rect.left + rect.width/2;
      const cy = rect.top + rect.height/2;
      const size = Math.max(42, Math.min(110, Math.max(rect.width, rect.height) * .82));
      const fx = document.createElement("div");
      fx.className = "bubblePopFx " + (opts.variant || "normal");
      fx.style.left = (cx - size/2) + "px";
      fx.style.top = (cy - size/2) + "px";
      fx.style.width = size + "px";
      fx.style.height = size + "px";
      const ring = document.createElement("div");
      ring.className = "bubblePopRing";
      fx.appendChild(ring);
      const count = opts.variant === "success" ? 9 : opts.variant === "mini" ? 5 : 7;
      for(let i=0;i<count;i++){
        const dot = document.createElement("span");
        dot.className = "bubblePopDot";
        const a = (Math.PI*2*i/count) + (Math.random()*0.45 - 0.225);
        const dist = size * (.26 + Math.random()*0.18);
        dot.style.setProperty("--dx", Math.cos(a)*dist + "px");
        dot.style.setProperty("--dy", Math.sin(a)*dist + "px");
        dot.style.animationDelay = (Math.random()*26) + "ms";
        fx.appendChild(dot);
      }
      document.body.appendChild(fx);
      sourceEl.classList && sourceEl.classList.add("bubblePopping");
      setTimeout(() => { try{ fx.remove(); sourceEl.classList && sourceEl.classList.remove("bubblePopping"); }catch(e){} }, 460);
    }catch(e){}
  }
  window.spawnBubblePopEffect = spawnBubblePopEffect;

  function handleBubble(item, el){
    if(locked || item.done) return;

    if(item.correct){
      item.done = true;
      el.classList.add("correct","found");
      correctRemaining--;
      spawnBubblePopEffect(el, {variant: correctRemaining <= 0 ? "success" : "normal"});
      score += 10 + level;
      if(correctRemaining <= 0) playSuccessSound(); else playPopSound();
      showToast(successMessage(item), true);
      updateHUD();

      setTimer(() => {
        el.style.opacity = "0";
      }, 220);

      if(correctRemaining <= 0){
        locked = true;
        setTimer(() => {
          if(round >= maxRounds){
            end();
          }else{
            nextRound();
          }
        }, AUTO_NEXT_DELAY_MS);
      }
    }else{
      perfectRun = false;
      el.classList.add("wrong");
      playWrongSound();
      score = Math.max(0, score - 3);
      showToast(errorMessage(item), false);
      setTimer(() => el.classList.remove("wrong"), 340);
      updateHUD();
    }
  }

  function updateHUD(){
    applyTopicTheme();
    const hudTopic = selectedTopic || "fractions";
    levelText.textContent = (hudTopic === "fractions" ? tr("levelFractions") : hudTopic === "inequalities" ? tr("levelIneq") : hudTopic === "coordinates" ? tr("levelCoord") : hudTopic === "numbertheory" ? tr("levelNumbers") : hudTopic === "shapes" ? tr("levelShapes") : hudTopic === "equations" ? tr("levelEq") : hudTopic === "percentages" ? tr("levelPercent") : tr("levelMix")) + " " + level;
    scoreText.textContent = String(score);
    leftText.textContent = (correctTotal - correctRemaining) + "/" + correctTotal;
  }

  function end(){
    setTopicPathBackground(false, currentPathTopic);
    hideNextRoundButton();
    clearTimers();
    stopTimer();
    maybeAddLeaderboardEntry();
    markWorldProgress();
    updateEndText();
    endOverlay.classList.remove("hidden");
  }

  function updateEndText(){
    const reward = tierLabel(sessionPlan && sessionPlan.tierAttempt ? sessionPlan.tierAttempt : 1);
    const nextPlan = selectedTopic && selectedTopic !== "mixed" ? getNextSessionPlan(selectedTopic) : null;
    const perfectText = perfectRun
      ? `<br>${escapeHTML(fmt(sessionPlan && sessionPlan.mastered ? "perfectImproved" : "perfectEarned", {tier:reward}))}`
      : `<br>${escapeHTML(tr("notPerfectText"))}`;
    const nextText = nextPlan && perfectRun && Number(nextPlan.questions || 0) > Number(maxRounds || 0)
      ? `<br>${fmt("nextSessionText", {tier:`<b>${escapeHTML(tierLabel(nextPlan.tierAttempt))}</b>`, questions:nextPlan.questions, level:nextPlan.maxLevel})}`
      : (nextPlan && Number(nextPlan.tierAttempt || 0) >= 3 && perfectRun ? `<br>${escapeHTML(tr("worldGoldText"))}` : "");
    endText.innerHTML = `${tr("playerLabel")}: <b>${escapeHTML(playerDisplayName())}</b><br>${tr("score")}: <b>${score}</b><br>${tr("timeWord")}: <b>${formatTime(elapsedMs)}</b><br>${tr("rounds")}: <b>${round}</b> / ${maxRounds}<br>${tr("rewardWord")}: <b>${escapeHTML(reward)}</b><br><br>${fmt("playedRewardLine", {played:escapeHTML(tr("played")), topic:escapeHTML(topicName(selectedTopic))})}${perfectText}${nextText}`;
  }

  function showToast(text, good){
    toast.textContent = text;
    toast.style.color = good ? "var(--green)" : "var(--red)";
    toast.classList.remove("show");
    void toast.offsetWidth;
    toast.classList.add("show");
  }

  function renderFigure(item, forTarget=false){
    switch(item.shape){
      case "pie": return renderPie(item.d,item.n,item.color[1], forTarget);
      case "bar": return renderBar(item.d,item.n,item.color[1], forTarget);
      case "grid": return renderGrid(item.d,item.n,item.color[1], forTarget);
      case "circles": return renderCircles(item.d,item.n,item.color[1], forTarget);
      case "triangles": return renderTriangles(item.d,item.n,item.color[1], forTarget);
      case "honeycomb": return renderHoneycomb(item.d,item.n,item.color[1], forTarget);
      default: return renderBar(item.d,item.n,item.color[1], forTarget);
    }
  }

  function createSVG(w,h){
    const svg = document.createElementNS("http://www.w3.org/2000/svg","svg");
    svg.setAttribute("viewBox",`0 0 ${w} ${h}`);
    svg.setAttribute("preserveAspectRatio","xMidYMid meet");
    return svg;
  }

  function stylePart(el, active, color){
    el.setAttribute("fill", active ? color : "rgba(255,253,248,.94)");
    el.setAttribute("stroke", "#1b2748");
    el.setAttribute("stroke-width","2.1");
  }

  function renderPie(total,filled,color,forTarget){
    const svg = createSVG(100,90);
    const cx=50, cy=45, r=forTarget ? 28 : 31;
    for(let i=0;i<total;i++){
      const p = document.createElementNS("http://www.w3.org/2000/svg","path");
      p.setAttribute("d",sector(cx,cy,r,-90+i*360/total,-90+(i+1)*360/total));
      stylePart(p, i<filled, color);
      svg.appendChild(p);
    }
    return svg;
  }

  function renderBar(total,filled,color,forTarget){
    const svg = createSVG(100,90);
    const x=10, y=38, w=80, h=22, part=w/total;
    for(let i=0;i<total;i++){
      const r = document.createElementNS("http://www.w3.org/2000/svg","rect");
      r.setAttribute("x",x+i*part);
      r.setAttribute("y",y);
      r.setAttribute("width",Math.max(6, part-1.5));
      r.setAttribute("height",h);
      r.setAttribute("rx","0");
      stylePart(r, i<filled, color);
      svg.appendChild(r);
    }
    return svg;
  }

  function renderGrid(total,filled,color,forTarget){
    const cols = total <= 4 ? 2 : total <= 6 ? 3 : total <= 9 ? Math.min(3,total) : 4;
    const rows = Math.ceil(total/cols);
    const cell= total >= 10 ? 14 : 18;
    const gap=2;
    const w=cols*cell+(cols-1)*gap;
    const h=rows*cell+(rows-1)*gap;
    const svg = createSVG(100,90);
    const ox=(100-w)/2, oy=(90-h)/2;
    let count=0;
    for(let r=0;r<rows;r++){
      for(let c=0;c<cols;c++){
        if(count>=total) break;
        const rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
        rect.setAttribute("x",ox+c*(cell+gap));
        rect.setAttribute("y",oy+r*(cell+gap));
        rect.setAttribute("width",cell);
        rect.setAttribute("height",cell);
        rect.setAttribute("rx","0");
        stylePart(rect, count<filled, color);
        svg.appendChild(rect);
        count++;
      }
    }
    return svg;
  }

  function renderCircles(total,filled,color,forTarget){
    const svg = createSVG(100,90);
    const cols = total <= 6 ? 3 : 4;
    const rows = Math.ceil(total/cols);
    const gap= total >= 10 ? 16 : 20;
    const radius = total >= 10 ? 5.8 : 7.4;
    const ox = 50 - ((cols-1)*gap)/2;
    const oy = 45 - ((rows-1)*gap)/2;
    for(let i=0;i<total;i++){
      const c = document.createElementNS("http://www.w3.org/2000/svg","circle");
      c.setAttribute("cx", ox + (i%cols)*gap);
      c.setAttribute("cy", oy + Math.floor(i/cols)*gap);
      c.setAttribute("r",radius);
      stylePart(c, i<filled, color);
      svg.appendChild(c);
    }
    return svg;
  }

  function renderTriangles(total,filled,color,forTarget){
    if(total <= 4){
      const svg = createSVG(100,90);
      const pts = [
        "50,17 22,72 50,72",
        "50,17 78,72 50,72",
        "22,72 50,72 36,45",
        "78,72 50,72 64,45"
      ];
      for(let i=0;i<Math.min(total,4);i++){
        const p = document.createElementNS("http://www.w3.org/2000/svg","polygon");
        p.setAttribute("points",pts[i]);
        stylePart(p, i<filled, color);
        svg.appendChild(p);
      }
      return svg;
    }
    return renderBar(total,filled,color,forTarget);
  }

  function renderHoneycomb(total,filled,color,forTarget){
    // Restrict to denominator 6 only; this keeps the visual unambiguous.
    const svg = createSVG(100,90);
    const pos = [[29,45],[43,33],[43,57],[57,45],[71,33],[71,57]];
    for(let i=0;i<6;i++){
      const [cx,cy]=pos[i];
      const poly = document.createElementNS("http://www.w3.org/2000/svg","polygon");
      poly.setAttribute("points",hexPoints(cx,cy,10));
      stylePart(poly, i<filled, color);
      svg.appendChild(poly);
    }
    return svg;
  }


  function renderInequalityNumberLine(task){
    const svg = createSVG(260,48);
    const min = task.boundary - 4;
    const max = task.boundary + 4;
    const y = 21;
    const left = 22;
    const right = 238;
    const step = (right-left)/(max-min);
    const x0 = left + (task.boundary-min)*step;
    const greater = task.operator === ">" || task.operator === "≥";
    const closed = task.operator === "≥" || task.operator === "≤";

    const base = document.createElementNS("http://www.w3.org/2000/svg","line");
    base.setAttribute("x1",left); base.setAttribute("x2",right); base.setAttribute("y1",y); base.setAttribute("y2",y);
    base.setAttribute("class","numberLineBase"); svg.appendChild(base);

    for(let v=min; v<=max; v++){
      const x = left + (v-min)*step;
      const tick = document.createElementNS("http://www.w3.org/2000/svg","line");
      tick.setAttribute("x1",x); tick.setAttribute("x2",x); tick.setAttribute("y1",y-5); tick.setAttribute("y2",y+5);
      tick.setAttribute("class","numberLineTick"); svg.appendChild(tick);
      if(v === task.boundary || v === min || v === max || v === 0){
        const txt = document.createElementNS("http://www.w3.org/2000/svg","text");
        txt.setAttribute("x",x); txt.setAttribute("y",42); txt.setAttribute("text-anchor","middle");
        txt.setAttribute("class","numberLineText"); txt.textContent = formatNumber(v);
        svg.appendChild(txt);
      }
    }

    const ray = document.createElementNS("http://www.w3.org/2000/svg","line");
    ray.setAttribute("x1",x0); ray.setAttribute("x2", greater ? right : left); ray.setAttribute("y1",y); ray.setAttribute("y2",y);
    ray.setAttribute("class","numberLineRay"); svg.appendChild(ray);

    const arrow = document.createElementNS("http://www.w3.org/2000/svg","path");
    if(greater){ arrow.setAttribute("d",`M ${right-9} ${y-7} L ${right} ${y} L ${right-9} ${y+7}`); }
    else { arrow.setAttribute("d",`M ${left+9} ${y-7} L ${left} ${y} L ${left+9} ${y+7}`); }
    arrow.setAttribute("fill","none"); arrow.setAttribute("stroke","#3d89ee"); arrow.setAttribute("stroke-width","4"); arrow.setAttribute("stroke-linecap","round"); arrow.setAttribute("stroke-linejoin","round");
    svg.appendChild(arrow);

    const dot = document.createElementNS("http://www.w3.org/2000/svg","circle");
    dot.setAttribute("cx",x0); dot.setAttribute("cy",y); dot.setAttribute("r",7.5);
    dot.setAttribute("class", closed ? "numberLineDot closed" : "numberLineDot");
    svg.appendChild(dot);

    return svg;
  }


  function renderCoordinateGrid(item, forTarget=false){
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 120 120");
    svg.setAttribute("class", forTarget ? "coordGrid targetCoordGrid" : "coordGrid");
    const min = item.min ?? -4;
    const max = item.max ?? 4;
    const left = 18, right = 108, top = 12, bottom = 102;
    const span = Math.max(1, max - min);
    const sx = v => left + ((v - min) / span) * (right - left);
    const sy = v => bottom - ((v - min) / span) * (bottom - top);

    function line(x1,y1,x2,y2,cls){
      const el=document.createElementNS("http://www.w3.org/2000/svg","line");
      el.setAttribute("x1",x1); el.setAttribute("y1",y1); el.setAttribute("x2",x2); el.setAttribute("y2",y2); el.setAttribute("class",cls); svg.appendChild(el);
    }
    function text(x,y,t,cls){
      const el=document.createElementNS("http://www.w3.org/2000/svg","text");
      el.setAttribute("x",x); el.setAttribute("y",y); el.setAttribute("class",cls); el.textContent=t; svg.appendChild(el);
    }
    for(let v=min; v<=max; v++){
      const x=sx(v), y=sy(v);
      line(x, top, x, bottom, "coordGridLine");
      line(left, y, right, y, "coordGridLine");
    }
    const zeroIn = min <= 0 && max >= 0;
    line(left, zeroIn ? sy(0) : bottom, right, zeroIn ? sy(0) : bottom, "coordAxis");
    line(zeroIn ? sx(0) : left, top, zeroIn ? sx(0) : left, bottom, "coordAxis");
    text(right+2, (zeroIn ? sy(0) : bottom)-3, "x", "coordAxisLabel");
    text((zeroIn ? sx(0) : left)+3, top+8, "y", "coordAxisLabel");
    // Geen coördinaatlabel in de ballon: leerlingen moeten het punt op het rooster aflezen.
    const axisY = zeroIn ? sy(0) : bottom;
    const axisX = zeroIn ? sx(0) : left;
    [min, 0, max].forEach(v => {
      if(v < min || v > max) return;
      text(sx(v), axisY + 13, formatNumber(v), "coordAxisLabel");
      text(axisX - 5, sy(v) + 3, formatNumber(v), "coordAxisLabel");
    });
    const px=sx(item.x), py=sy(item.y);
    const dot=document.createElementNS("http://www.w3.org/2000/svg","circle");
    dot.setAttribute("cx",px); dot.setAttribute("cy",py); dot.setAttribute("r", forTarget ? 5.5 : 6.5);
    dot.setAttribute("class","coordDot"); svg.appendChild(dot);
    return svg;
  }


  function renderShape(item){
    const shape = item.shape;
    const svg = createSVG(120,120);
    svg.setAttribute("class", "shapeSvg");
    if(shape.circle){
      const c = document.createElementNS("http://www.w3.org/2000/svg","circle");
      c.setAttribute("cx",60); c.setAttribute("cy",60); c.setAttribute("r",38);
      c.setAttribute("class","shapeFill"); svg.appendChild(c);
      return svg;
    }
    const poly = document.createElementNS("http://www.w3.org/2000/svg","polygon");
    poly.setAttribute("points", shape.points);
    poly.setAttribute("class","shapeFill");
    svg.appendChild(poly);
    if(shape.rightMark){ addRightAngleMark(svg, shape.key); }
    return svg;
  }

  function addSymLine(svg,x1,y1,x2,y2){
    const l=document.createElementNS("http://www.w3.org/2000/svg","line");
    l.setAttribute("x1",x1); l.setAttribute("y1",y1); l.setAttribute("x2",x2); l.setAttribute("y2",y2); l.setAttribute("class","shapeSymLine"); svg.appendChild(l);
  }

  function addRightAngleMark(svg, key){
    const p=document.createElementNS("http://www.w3.org/2000/svg","path");
    if(key === "tri-right") p.setAttribute("d","M 20 80 L 38 80 L 38 98");
    else if(key === "tri-isosceles-right") p.setAttribute("d","M 24 78 L 42 78 L 42 96");
    else p.setAttribute("d","M 26 74 L 42 74 L 42 94");
    p.setAttribute("class","shapeRightMark"); svg.appendChild(p);
  }

  function successMessage(item){
    if(item.kind === "shape" && task && task.topic === "shapes"){
      return tr("good");
    }
    if(item.kind === "shape" && task && task.topic === "shapes"){
      return tr("wrong");
    }
    if(item.kind === "number" && task && (task.topic === "inequalities" || task.topic === "numbertheory" || task.topic === "equations")){
      return `${item.label} ${tr("fits")}`;
    }
    return tr("good");
  }

  function errorMessage(item){
    if(item.kind === "number" && task && (task.topic === "inequalities" || task.topic === "numbertheory" || task.topic === "equations")){
      return `${item.label} ${tr("notFits")}`;
    }
    return tr("wrong");
  }

  function openMenu(){
    hideNextRoundButton();
    clearTimers();
    stopTimer();
    clearBubbles();
    locked = true;
    if(endOverlay) endOverlay.classList.add("hidden");
    if(!selectedTopic) activateTopic("fractions", false);
    showSessionBriefing({preservePathSelection:true});
  }

  function formatNumber(n){
    return String(n).replace("-", "−");
  }

  function topicName(topic){
    if(topic === "fractions") return tr("topicFractions");
    if(topic === "inequalities") return tr("topicIneq");
    if(topic === "coordinates") return tr("topicCoord");
    if(topic === "numbertheory") return tr("topicNumbers");
    if(topic === "shapes") return tr("topicShapes");
    if(topic === "equations") return tr("topicEq");
    if(topic === "percentages") return tr("topicPercent");
    if(topic === "ratios") return tr("topicRatios");
    return tr("topicMixed");
  }

  function updateMapWorldLabels(){
    document.querySelectorAll(".topicBtn.mapPin").forEach(btn => {
      let label = btn.querySelector(".mapWorldName");
      if(!label){
        label = document.createElement("span");
        label.className = "mapWorldName";
        label.setAttribute("aria-hidden", "true");
        btn.appendChild(label);
      }
      const topic = btn.dataset.topic || "fractions";
      const plan = getNextSessionPlan(topic);
      const tier = getRewardTier(topic);
      const status = tier >= 3
        ? `${tr("goldAchieved")} · ${questionCountText(plan.questions)}`
        : `${tr("nextChallenge")} ${tierLabel(plan.tierAttempt)} · ${questionCountText(plan.questions)}`;
      label.innerHTML = `<span class="mapWorldTitle">${escapeHTML(topicName(topic))}</span><span class="mapWorldNext" data-tier="${escapeHTML(plan.tierName)}">${escapeHTML(status)}</span>`;

      btn.classList.remove("activeTier1","activeTier2","activeTier3");
      if(selectedTopic && btn.dataset.topic === selectedTopic){
        const attemptTier = Number(plan.tierAttempt || 1) || 1;
        btn.classList.add(`activeTier${Math.min(3, attemptTier)}`);
      }
    });
  }

  function equationHTML(task){
    if(task && task.prompt) return escapeHTML(task.prompt);
    const a = task.a;
    const b = task.b;
    const r = formatNumber(task.result);
    if(task.mode === "eq-add") return `x + ${formatNumber(task.a)} = ${r}`;
    if(task.mode === "eq-sub") return `x − ${formatNumber(task.a)} = ${r}`;
    if(task.mode === "eq-mul") return `${formatNumber(a)}x = ${r}`;
    if(task.mode === "eq-div") return `${fractionHTML("x", task.denom)} = ${r}`;
    if(task.mode === "eq-ax-plus") return `${formatNumber(a)}x + ${formatNumber(b)} = ${r}`;
    if(task.mode === "eq-ax-minus") return `${formatNumber(a)}x − ${formatNumber(b)} = ${r}`;
    if(task.mode === "eq-frac-plus") return `${fractionHTML("x + " + formatNumber(b), task.denom)} = ${r}`;
    if(task.mode === "eq-frac-minus") return `${fractionHTML("x − " + formatNumber(b), task.denom)} = ${r}`;
    if(task.mode === "eq-paren-plus") return `${formatNumber(a)}(x + ${formatNumber(b)}) = ${r}`;
    if(task.mode === "eq-paren-minus") return `${formatNumber(a)}(x − ${formatNumber(b)}) = ${r}`;
    if(task.mode === "eq-square") return `x² = ${r}`;
    if(task.mode === "eq-abs") return `|x| = ${r}`;
    return "x = ?";
  }


  function fractionHTML(a,b){
    return `<span class="frac"><span class="frac-top">${a}</span><span class="frac-bar"></span><span class="frac-bottom">${b}</span></span>`;
  }

  function value(f){ return (Array.isArray(f) && Number.isFinite(f[0]) && Number.isFinite(f[1]) && f[1] !== 0) ? f[0]/f[1] : 0; }
  function sameFraction(a,b,c,d){ return a*d === b*c; }

  function sector(cx,cy,r,startAngle,endAngle){
    const start=polar(cx,cy,r,endAngle), end=polar(cx,cy,r,startAngle);
    const large=endAngle-startAngle<=180 ? "0" : "1";
    return ["M",cx,cy,"L",start.x,start.y,"A",r,r,0,large,0,end.x,end.y,"Z"].join(" ");
  }
  function polar(cx,cy,r,angle){
    const rad=(angle-90)*Math.PI/180;
    return {x:cx+r*Math.cos(rad), y:cy+r*Math.sin(rad)};
  }
  function hexPoints(cx,cy,r){
    const pts=[];
    for(let i=0;i<6;i++){
      const a=Math.PI/3*i+Math.PI/6;
      pts.push(`${cx+r*Math.cos(a)},${cy+r*Math.sin(a)}`);
    }
    return pts.join(" ");
  }

  function shuffle(arr){
    const copy=[...arr];
    for(let j=copy.length-1;j>0;j--){
      const k=Math.floor(Math.random()*(j+1));
      [copy[j],copy[k]]=[copy[k],copy[j]];
    }
    return copy;
  }

  const floatStyle = document.createElement("style");
  floatStyle.textContent = `
    @keyframes float0 { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(0,-8px,0)} }
    @keyframes float1 { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(6px,-6px,0)} }
    @keyframes float2 { 0%,100%{transform:translate3d(0,0,0)} 50%{transform:translate3d(-6px,-7px,0)} }
  `;
  document.head.appendChild(floatStyle);


  let audioCtx = null;
  const AUDIO_SETTINGS_KEY = "bubblePopAudioSettings";

  // v60 — vaste toekomstbestanden. Plaats later exact deze mp3-bestanden in assets/audio/.
  // De game werkt nu al zonder bestanden: ontbrekende SFX vallen terug op zachte WebAudio-tones.
  // v85: externe mp3-bestanden zijn standaard uitgeschakeld.
  // Daardoor geeft de game geen 404-consolefouten wanneer er geen audio-assets zijn meegeleverd.
  // Zet dit later op true als je echte mp3-bestanden in assets/audio toevoegt.
  const EXTERNAL_AUDIO_ENABLED = false;

  const AUDIO_FILES = {
    music: {
      menu: "assets/audio/music-map-loop.mp3",
      gameDefault: "assets/audio/music-game-gentle-loop.mp3",
      fractionsCalm: "assets/audio/music-breukenzee-calm-loop.mp3",
      fractionsChallenge: "assets/audio/music-breukenzee-challenge-loop.mp3",
      ratios: "assets/audio/music-verhoudingenhaven-loop.mp3",
      percentages: "assets/audio/music-procentenhaven-loop.mp3",
      numbertheory: "assets/audio/music-getallenbaai-loop.mp3",
      shapes: "assets/audio/music-vormeneiland-loop.mp3",
      coordinates: "assets/audio/music-coordinatenbaai-loop.mp3",
      equations: "assets/audio/music-vergelijkingenvallei-loop.mp3",
      inequalities: "assets/audio/music-ongelijkhedenstorm-loop.mp3",
      mixed: "assets/audio/music-mixed-loop.mp3"
    },
    sfx: {
      bubblePop: "assets/audio/sfx-bubble-pop.mp3",
      correct: "assets/audio/sfx-correct-chime.mp3",
      wrong: "assets/audio/sfx-wrong-soft-boop.mp3",
      levelComplete: "assets/audio/sfx-level-complete.mp3",
      worldSelect: "assets/audio/sfx-world-select.mp3",
      worldStart: "assets/audio/sfx-world-start.mp3",
      buttonClick: "assets/audio/sfx-button-click.mp3",
      skip: "assets/audio/sfx-skip.mp3",
      back: "assets/audio/sfx-back.mp3",
      reward: "assets/audio/sfx-reward.mp3"
    }
  };

  const MENU_MUSIC_TRACK = AUDIO_FILES.music.menu;
  const WORLD_MUSIC_TRACKS = {
    fractions: {
      calm: AUDIO_FILES.music.fractionsCalm,
      challenge: AUDIO_FILES.music.fractionsChallenge
    },
    ratios: AUDIO_FILES.music.ratios,
    percentages: AUDIO_FILES.music.percentages,
    numbertheory: AUDIO_FILES.music.numbertheory,
    shapes: AUDIO_FILES.music.shapes,
    coordinates: AUDIO_FILES.music.coordinates,
    equations: AUDIO_FILES.music.equations,
    inequalities: AUDIO_FILES.music.inequalities,
    mixed: AUDIO_FILES.music.mixed
  };
  const SFX_FILES = AUDIO_FILES.sfx;
  const missingSfxFiles = new Set();

  let audioSettings = loadAudioSettings();
  let worldMusicAudio = null;
  let worldMusicKey = "";

  function loadAudioSettings(){
    try{
      const raw = JSON.parse(localStorage.getItem(AUDIO_SETTINGS_KEY) || "{}");
      return {
        music: Math.max(0, Math.min(1, Number(raw.music ?? .35))),
        sfx: Math.max(0, Math.min(1, Number(raw.sfx ?? .70)))
      };
    }catch(e){
      return {music:.35, sfx:.70};
    }
  }

  function saveAudioSettings(){
    try{ localStorage.setItem(AUDIO_SETTINGS_KEY, JSON.stringify(audioSettings)); }catch(e){}
  }

  function updateAudioUI(){
    const musicPct = Math.round((audioSettings.music ?? .35) * 100);
    const sfxPct = Math.round((audioSettings.sfx ?? .70) * 100);
    if(musicVolumeSlider) musicVolumeSlider.value = String(musicPct);
    if(sfxVolumeSlider) sfxVolumeSlider.value = String(sfxPct);
    if(musicVolumeValue) musicVolumeValue.textContent = musicPct + "%";
    if(sfxVolumeValue) sfxVolumeValue.textContent = sfxPct + "%";
    if(worldMusicAudio) worldMusicAudio.volume = audioSettings.music;
    const silent = audioSettings.music <= 0.01 && audioSettings.sfx <= 0.01;
    const icon = silent ? "🔇" : (audioSettings.music <= 0.01 ? "🔈" : "🔊");
    [audioBtn, atlasAudioBtn, ratioAudioBtnMain].forEach(btn => {
      if(btn){
        btn.textContent = icon;
        btn.setAttribute("aria-label", tr("audioLabel"));
      }
    });
  }

  function audioBasename(src){
    return String(src || "").split("/").pop();
  }

  function resolveMusicTrack(topic, currentLevel=level){
    const activeTopic = topic || selectedTopic || (phone ? phone.dataset.topic : "") || "fractions";
    if(startOverlay && !startOverlay.classList.contains("hidden") && !mapStartInProgress){
      return {key:"menu", src:MENU_MUSIC_TRACK, title:"Wereldkaart"};
    }
    if(activeTopic === "fractions"){
      const useChallenge = Number(currentLevel || 1) >= 7;
      const src = useChallenge ? WORLD_MUSIC_TRACKS.fractions.challenge : WORLD_MUSIC_TRACKS.fractions.calm;
      return {key:`fractions:${useChallenge ? "challenge" : "calm"}`, src, title:useChallenge ? "Breukenzee · challenge" : "Breukenzee"};
    }
    const src = WORLD_MUSIC_TRACKS[activeTopic];
    return src ? {key:activeTopic, src, title:topicName(activeTopic)} : {key:"menu", src:MENU_MUSIC_TRACK, title:"Wereldkaart"};
  }

  function updateAudioHint(track){
    const hint = audioHint || document.querySelector(".audioHint");
    if(!hint) return;
    if(!track){
      hint.textContent = "Audio: WebAudio-effecten actief · geen externe mp3-bestanden geladen";
      return;
    }
    hint.textContent = `${tr("audioNow")}: ${track.title} · ${audioBasename(track.src)}`;
  }

  function ensureWorldMusic(track){
    if(!EXTERNAL_AUDIO_ENABLED) return null;
    if(!track || !track.src) return null;
    if(worldMusicAudio && worldMusicKey === track.key) return worldMusicAudio;
    if(worldMusicAudio){
      worldMusicAudio.pause();
      worldMusicAudio = null;
    }
    worldMusicKey = track.key;
    worldMusicAudio = new Audio(track.src);
    worldMusicAudio.loop = true;
    worldMusicAudio.preload = "auto";
    worldMusicAudio.volume = audioSettings.music;
    worldMusicAudio.addEventListener("error", () => {
      // De code is klaar; voeg het juiste mp3-bestand toe aan assets/audio om muziek te horen.
    }, {once:true});
    updateAudioHint(track);
    return worldMusicAudio;
  }

  function updateWorldMusic(){
    const topic = selectedTopic || (phone ? phone.dataset.topic : "") || "fractions";
    const track = resolveMusicTrack(topic, level);
    updateAudioHint(EXTERNAL_AUDIO_ENABLED ? track : null);
    if(!track.src || audioSettings.music <= 0.01){
      if(worldMusicAudio) worldMusicAudio.pause();
      return;
    }
    const audio = ensureWorldMusic(track);
    if(!audio) return;
    audio.volume = audioSettings.music;
    audio.play().catch(() => {});
  }

  function pauseWorldMusic(){
    if(worldMusicAudio) worldMusicAudio.pause();
  }

  function isWorldMapOpen(){
    return !!(startOverlay && !startOverlay.classList.contains("hidden"));
  }

  function toggleAudioPanel(source="game"){
    getAudioContext();
    if(!audioPanel) return;
    const shouldOpen = audioPanel.classList.contains("hidden");
    audioPanel.classList.toggle("hidden", !shouldOpen);
    const mapMode = shouldOpen && (source === "map" || isWorldMapOpen());
    if(phone) phone.classList.toggle("mapAudioOpen", mapMode);
    updateAudioUI();
    updateWorldMusic();
  }

  function closeAudioPanel(){
    if(audioPanel) audioPanel.classList.add("hidden");
    if(phone) phone.classList.remove("mapAudioOpen");
  }

  function getAudioContext(){
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if(!AudioContextClass) return null;
    if(!audioCtx) audioCtx = new AudioContextClass();
    if(audioCtx.state === "suspended") audioCtx.resume().catch(() => {});
    return audioCtx;
  }

  function playTone(freq, duration, type="sine", volume=.035, delay=0){
    if(!audioSettings || audioSettings.sfx <= 0.01) return;
    const ctx = getAudioContext();
    if(!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const t0 = ctx.currentTime + delay;
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    gain.gain.setValueAtTime(0.0001, t0);
    gain.gain.exponentialRampToValueAtTime(volume * audioSettings.sfx, t0 + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  }

  function playExternalSfx(key, fallback){
    if(!audioSettings || audioSettings.sfx <= 0.01) return;
    if(!EXTERNAL_AUDIO_ENABLED){
      if(typeof fallback === "function") fallback();
      return;
    }
    const src = SFX_FILES && SFX_FILES[key];
    const runFallback = (() => {
      let done = false;
      return () => {
        if(done) return;
        done = true;
        if(typeof fallback === "function") fallback();
      };
    })();
    if(!src || missingSfxFiles.has(key)){
      runFallback();
      return;
    }
    try{
      const clip = new Audio(src);
      clip.preload = "auto";
      clip.volume = Math.max(0, Math.min(1, audioSettings.sfx));
      clip.addEventListener("error", () => {
        missingSfxFiles.add(key);
        runFallback();
      }, {once:true});
      const p = clip.play();
      if(p && typeof p.catch === "function"){
        p.catch(() => {
          missingSfxFiles.add(key);
          runFallback();
        });
      }
    }catch(e){
      missingSfxFiles.add(key);
      runFallback();
    }
  }

  function playPopTone(){
    playTone(520, .055, "sine", .032, 0);
    playTone(880, .075, "triangle", .022, .025);
  }

  function playSuccessTone(){
    playPopTone();
    playTone(980, .08, "sine", .026, .07);
    playTone(1320, .10, "triangle", .020, .13);
  }

  function playWorldSelectTone(){
    playTone(620, .055, "sine", .024, 0);
    playTone(880, .070, "triangle", .018, .035);
  }

  function playWorldStartTone(){
    playTone(330, .075, "sine", .026, 0);
    playTone(520, .090, "triangle", .024, .065);
    playTone(760, .120, "sine", .020, .145);
  }

  function playWrongTone(){
    playTone(170, .11, "sawtooth", .018, 0);
  }

  function playPopSound(){
    playExternalSfx("bubblePop", playPopTone);
  }

  function playSuccessSound(){
    playExternalSfx("correct", playSuccessTone);
  }

  function playWorldSelectSound(){
    playExternalSfx("worldSelect", playWorldSelectTone);
  }

  function playWorldStartSound(){
    playExternalSfx("worldStart", playWorldStartTone);
  }

  function playWrongSound(){
    playExternalSfx("wrong", playWrongTone);
  }

  async function toggleFullscreen(){
    try{
      if(!document.fullscreenElement){
        if(!phone.requestFullscreen) throw new Error("Fullscreen API unavailable");
        await phone.requestFullscreen();
      }else{
        await document.exitFullscreen();
      }
    }catch(e){
      showToast(tr("fullscreenDenied"), false);
    }
  }

  phone.addEventListener("pointerup", (e) => {
    const interactive = e.target.closest("button, select, input, textarea, [role='dialog']");
    if(interactive) return;
    const now = Date.now();
    if(now - lastTap < 330){
      toggleFullscreen();
      lastTap = 0;
    }else{
      lastTap = now;
    }
  });

  let mapStartInProgress = false;

  function sessionBriefTextForPlan(plan){
    const q = Number(plan.questions || 10);
    if(plan && plan.mastered) return tr("sessionGoldReplayText");
    if(q === 10) return tr("sessionBronzeText");
    if(q === 20) return tr("sessionSilverText");
    return tr("sessionGoldText");
  }

  function showSessionBriefing(options={}){
    if(!(authUser && authUser.displayName)){
      showLoginPanel();
      mapStartInProgress = false;
      return;
    }
    if(!selectedTopic) activateTopic("fractions", false);

    // v29: oude briefing/leerpad-route vervangen door de nieuwe roadmapmodule.
    // Voor werelden met een roadmap-config openen we géén oud topicLearningPath/briefingTopicPath meer.
    if(ROADMAP_TOPIC_TO_KEY[selectedTopic]){
      openGameRoadmap(selectedTopic);
      mapStartInProgress = false;
      return;
    }

    sessionPlan = getNextSessionPlan(selectedTopic);
    maxRounds = Number(sessionPlan.questions || 10);
    clearTimers();
    stopTimer();
    clearBubbles();
    hideNextRoundButton();
    locked = true;
    score = 0;
    round = 0;
    level = 1;
    correctRemaining = 0;
    correctTotal = 0;
    updateHUD();
    updateTimer();
    if(phone) {
      phone.dataset.topic = selectedTopic || "fractions";
      phone.classList.add("briefingOpen");
      phone.classList.remove("leaderboardOpen");
    }
    if(stage) stage.dataset.topic = selectedTopic || "fractions";
    if(targetText) targetText.textContent = "";
    if(targetFrac) targetFrac.innerHTML = "";
    if(sessionBriefBadge) sessionBriefBadge.textContent = topicBadgeIcon(selectedTopic);
    if(sessionBriefTitle) sessionBriefTitle.textContent = `${topicName(selectedTopic)} · ${tierLabel(sessionPlan.tierAttempt)}`;
    if(sessionBriefText) sessionBriefText.textContent = sessionBriefTextForPlan(sessionPlan);
    if(sessionBriefQuestions) sessionBriefQuestions.textContent = questionCountText(maxRounds);
    if(sessionBriefDifficulty) sessionBriefDifficulty.textContent = levelRangeText(sessionPlan.maxLevel);
    if(sessionBriefReward){
      sessionBriefReward.textContent = sessionPlan.mastered ? tr("tierGoldReplay") : tierLabel(sessionPlan.tierAttempt);
      sessionBriefReward.dataset.tier = sessionPlan.tierName;
    }
    const preservePathSelection = !!(options && options.preservePathSelection);
    if(!preservePathSelection) selectedLearningPathIndex = null;
    renderTopicLearningPath(selectedTopic, true);
    if(PATH_EDIT_MODE && selectedTopic === "fractions") showToast(tr("pathEditorOpenHint"), true);
    if(sessionUserLine) sessionUserLine.textContent = `${tr("playerLabel")}: ${playerDisplayName()}`;
    if(sessionPlayerNameInput) sessionPlayerNameInput.value = playerName || "";
    if(startOverlay) startOverlay.classList.add("hidden");
    if(endOverlay) endOverlay.classList.add("hidden");
    if(sessionBriefPanel) {
      sessionBriefPanel.classList.toggle("hidden", !!activePathData(selectedTopic));
    }
  }

  function beginSessionFromBriefing(){
    if(!(authUser && authUser.displayName)){
      showLoginPanel();
      return;
    }
    start();
  }

  function returnToMapFromBriefing(){
    clearTimers();
    stopTimer();
    hideNextRoundButton();
    clearBubbles();
    locked = true;
    mapStartInProgress = false;
    closeGameRoadmap();
    if(sessionBriefPanel) sessionBriefPanel.classList.add("hidden");
    if(endOverlay) endOverlay.classList.add("hidden");
    setTopicPathBackground(false, currentPathTopic);
    if(phone) phone.classList.remove("briefingOpen","leaderboardOpen","roadmapOpen");
    if(startOverlay) startOverlay.classList.remove("hidden");
    updateMapWorldLabels();
    applyWorldProgress();
    updateWorldMusic();
  }

  function startSelectedTopicWithTransition(){
    if(mapStartInProgress || !selectedTopic) return;
    mapStartInProgress = true;
    dismissIntro();
    getAudioContext();
    playWorldStartSound();
    updateWorldMusic();
    const mapScreen = document.querySelector(".worldMapScreen");
    if(mapScreen) mapScreen.classList.add("transitionOut");
    setTimer(() => {
      if(mapScreen) mapScreen.classList.remove("transitionOut");
      showSessionBriefing();
      phone.classList.add("gameFadeIn");
      setTimer(() => {
        phone.classList.remove("gameFadeIn");
        mapStartInProgress = false;
      }, 520);
    }, 360);
  }



  function atlasMetaForButton(btn){
    if(!btn) return translatedAtlasMeta("fractions", ATLAS_WORLD_META.fractions);
    const topic = btn.dataset.topic;
    const world = btn.dataset.world;
    const key = topic || world || "fractions";
    const base = ATLAS_WORLD_META[topic] || ATLAS_WORLD_META[world] || {
      title:btn.getAttribute("aria-label") || (currentLang === "fr" ? "Monde" : currentLang === "tl" ? "Mundo" : currentLang === "en" ? "World" : "Wereld"),
      desc:currentLang === "fr" ? "Bientôt disponible." : currentLang === "tl" ? "Malapit na." : currentLang === "en" ? "Coming soon." : "Binnenkort beschikbaar.",
      icon:"✨",
      color:"#6ad8ff",
      open:!btn.disabled && !btn.classList.contains("locked")
    };
    return translatedAtlasMeta(key, base);
  }

  function updateAtlasDrawer(topicOrWorld){
    const btn = document.querySelector(`.mapPin[data-topic="${topicOrWorld}"], .mapPin[data-world="${topicOrWorld}"]`)
      || document.querySelector(`.mapPin[data-topic="${selectedTopic}"]`);
    if(!btn) return;

    const meta = atlasMetaForButton(btn);
    const topic = btn.dataset.topic || "";
    const isLocked = btn.disabled || btn.classList.contains("locked") || !topic;
    if(atlasDrawer) atlasDrawer.classList.remove("hidden");
    if(atlasDrawerOrb) {
      atlasDrawerOrb.textContent = isLocked ? "🔒" : (meta.icon || "✨");
      atlasDrawerOrb.style.background = meta.color ? `linear-gradient(180deg, ${meta.color}, rgba(255,255,255,.28))` : "";
    }
    if(atlasDrawerTitle) atlasDrawerTitle.textContent = meta.title || btn.getAttribute("aria-label") || "Wereld";
    if(atlasDrawerDesc) atlasDrawerDesc.textContent = meta.desc || "";
    if(atlasDrawerState) atlasDrawerState.textContent = isLocked ? "Binnenkort" : "Open";
    if(atlasDrawerProgress) atlasDrawerProgress.textContent = isLocked ? "Gesloten" : "Leerpad";
    if(atlasStartBtn) {
      atlasStartBtn.disabled = !!isLocked;
      atlasStartBtn.setAttribute("aria-disabled", isLocked ? "true" : "false");
    }
    let label = btn.querySelector(".atlasPinLabel");
    if(!label){
      label = document.createElement("span");
      label.className = "atlasPinLabel";
      btn.appendChild(label);
    }
    label.textContent = meta.title || btn.getAttribute("aria-label") || "Wereld";
  }

  function selectAtlasButton(btn){
    if(!btn) return;
    document.querySelectorAll(".mapPin").forEach(b => b.classList.remove("atlasSelected"));
    btn.classList.add("atlasSelected");
    updateAtlasDrawer(btn.dataset.topic || btn.dataset.world);
  }

  function openSelectedAtlasWorld(){
    const btn = document.querySelector(".mapPin.atlasSelected") || document.querySelector(`.mapPin[data-topic="${selectedTopic}"]`);
    if(!btn || btn.disabled || btn.classList.contains("locked")) return;
    const topic = btn.dataset.topic || "fractions";
    if(topic){
      openGameRoadmap(topic);
    }
  }

  function loadAtlasPositions(){
    try{
      const saved = JSON.parse(localStorage.getItem("bubblePopAtlasHotspotsV40") || "null");
      if(!saved || typeof saved !== "object") return;
      Object.entries(saved).forEach(([key, pos]) => {
        const btn = document.querySelector(`.mapPin[data-topic="${key}"], .mapPin[data-world="${key}"]`);
        if(btn && Number.isFinite(Number(pos.x)) && Number.isFinite(Number(pos.y))){
          btn.style.setProperty("--x", Math.max(1, Math.min(99, Number(pos.x))));
          btn.style.setProperty("--y", Math.max(1, Math.min(99, Number(pos.y))));
        }
      });
    }catch(e){}
  }

  function atlasPositionKey(btn){
    return btn.dataset.topic || btn.dataset.world || btn.getAttribute("aria-label") || "world";
  }

  function exportAtlasPositions(){
    const out = {};
    document.querySelectorAll(".mapPin").forEach(btn => {
      const key = atlasPositionKey(btn);
      const cs = getComputedStyle(btn);
      const x = Number((btn.style.getPropertyValue("--x") || cs.getPropertyValue("--x") || 50).trim());
      const y = Number((btn.style.getPropertyValue("--y") || cs.getPropertyValue("--y") || 50).trim());
      out[key] = {x:Math.round(x*10)/10, y:Math.round(y*10)/10};
    });
    return out;
  }

  function saveAtlasPositions(){
    try{ localStorage.setItem("bubblePopAtlasHotspotsV40", JSON.stringify(exportAtlasPositions())); }catch(e){}
  }

  function copyAtlasPositions(){
    const text = JSON.stringify(exportAtlasPositions(), null, 2);
    if(navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(text).then(() => showToast("Atlas JSON v31 gekopieerd.", true)).catch(() => {
        console.log(text);
        showToast("Atlas JSON staat in console.", true);
      });
    }else{
      console.log(text);
      showToast("Atlas JSON staat in console.", true);
    }
  }

  function resetAtlasPositions(){
    try{ localStorage.removeItem("bubblePopAtlasHotspotsV40"); }catch(e){}
    document.querySelectorAll(".mapPin").forEach(btn => {
      btn.style.removeProperty("--x");
      btn.style.removeProperty("--y");
    });
    showToast("Atlas-hotspots v31 gereset.", true);
    updateAtlasDrawer(selectedTopic || "fractions");
  }


  function atlasEditActive(){
    return PATH_EDIT_MODE || URL_FLAGS.get("atlasDev") === "1";
  }

  function getAtlasPointerPoint(evt, container){
    const rect = container.getBoundingClientRect();
    return {
      x: ((evt.clientX - rect.left) / rect.width) * 100,
      y: ((evt.clientY - rect.top) / rect.height) * 100
    };
  }

  function clampAtlasPercent(v){
    return Math.max(1, Math.min(99, Math.round(Number(v) * 10) / 10));
  }

  function atlasPinCurrentPosition(btn){
    const cs = getComputedStyle(btn);
    return {
      x: Number((btn.style.getPropertyValue("--x") || cs.getPropertyValue("--x") || 50).trim()),
      y: Number((btn.style.getPropertyValue("--y") || cs.getPropertyValue("--y") || 50).trim())
    };
  }

  function setupAtlasPointerManager(){
    const pinLayer = document.getElementById("topicGrid");
    if(!pinLayer || pinLayer.dataset.atlasPointerManager === "1") return;
    pinLayer.dataset.atlasPointerManager = "1";

    let drag = null;
    let atlasArmedTopic = "";

    function consume(evt){
      evt.preventDefault();
      evt.stopPropagation();
      if(evt.stopImmediatePropagation) evt.stopImmediatePropagation();
    }

    pinLayer.addEventListener("pointerdown", evt => {
      const btn = evt.target && evt.target.closest ? evt.target.closest(".mapPin") : null;
      if(!btn || !pinLayer.contains(btn)) return;

      consume(evt);

      const topic = btn.dataset.topic || "";
      const isLocked = btn.disabled || btn.classList.contains("locked") || !topic;

      if(atlasEditActive()){
        const key = atlasPositionKey(btn);
        const pos = atlasPinCurrentPosition(btn);
        const p = getAtlasPointerPoint(evt, pinLayer);
        drag = {
          btn,
          key,
          pointerId:evt.pointerId,
          offX:p.x - pos.x,
          offY:p.y - pos.y,
          moved:false
        };
        btn.classList.add("atlasDevDragging");
        btn.dataset.atlasDragging = "1";
        selectAtlasButton(btn);
        try{ btn.setPointerCapture(evt.pointerId); }catch(e){}
        return;
      }

      const alreadySelected = atlasArmedTopic === topic && btn.classList.contains("atlasSelected");
      selectAtlasButton(btn);
      if(isLocked) return;

      selectedTopic = topic;
      document.querySelectorAll(".topicBtn").forEach(b => {
        b.classList.toggle("active", b === btn);
      });

      getAudioContext();
      playWorldSelectSound();
      updateWorldMusic();
      if(alreadySelected){
        atlasArmedTopic = "";
        openGameRoadmap(topic);
      }else{
        atlasArmedTopic = topic;
      }
    }, true);

    pinLayer.addEventListener("pointermove", evt => {
      if(!drag || evt.pointerId !== drag.pointerId) return;
      consume(evt);

      const p = getAtlasPointerPoint(evt, pinLayer);
      const x = clampAtlasPercent(p.x - drag.offX);
      const y = clampAtlasPercent(p.y - drag.offY);
      drag.btn.style.setProperty("--x", x);
      drag.btn.style.setProperty("--y", y);
      drag.moved = true;
      updateAtlasDrawer(drag.btn.dataset.topic || drag.btn.dataset.world);
    }, true);

    function endDrag(evt){
      if(!drag || evt.pointerId !== drag.pointerId) return;
      consume(evt);

      const btn = drag.btn;
      btn.classList.remove("atlasDevDragging");
      delete btn.dataset.atlasDragging;
      try{ btn.releasePointerCapture(evt.pointerId); }catch(e){}
      if(drag.moved) saveAtlasPositions();
      drag = null;
      setTimer(() => { mapStartInProgress = false; }, 80);
    }

    pinLayer.addEventListener("pointerup", endDrag, true);
    pinLayer.addEventListener("pointercancel", endDrag, true);
  }

  function setupAtlasDevMode(){
    const active = PATH_EDIT_MODE || URL_FLAGS.get("atlasDev") === "1";
    if(atlasDevPanel) atlasDevPanel.classList.toggle("hidden", !active);
  }

  function cloneRoadmapConfig(config){
    return JSON.parse(JSON.stringify(config || {}));
  }

  function roadmapKeyForTopic(topic){
    return ROADMAP_TOPIC_TO_KEY[topic] || topic || "fractions";
  }

  function topicForRoadmapKey(key){
    return ROADMAP_KEY_TO_TOPIC[key] || key || "fractions";
  }

  function closeGameRoadmap(){
    if(gameRoadmapOverlay) gameRoadmapOverlay.classList.add("hidden");
    if(gameRoadmapStage) gameRoadmapStage.innerHTML = "";
    if(phone) phone.classList.remove("roadmapOpen");
    if(sessionBriefPanel) sessionBriefPanel.classList.add("hidden");
    setTopicPathBackground(false, currentPathTopic);
    if(startOverlay) startOverlay.classList.remove("hidden");
    updateWorldMusic();
  }

  function startGameFromRoadmapNode(worldKey, node){
    const topic = topicForRoadmapKey(worldKey);
    const nodeIndex = Math.max(0, Number(node && node.index ? node.index : 1) - 1);

    closeGameRoadmap();

    if(topic === "ratios"){
      const ratioRootEl = document.getElementById('ratioGame');
      const ratioRoadmapEl = document.getElementById('ratioRoadmap');
      const ratioPlayEl = document.getElementById('ratioPlay');
      const phoneEl = document.getElementById('phone');
      phoneEl?.classList.add('ratioOpen');
      phoneEl?.classList.remove('briefingOpen','roadmapOpen');
      closeAudioPanel();
      if(ratioRootEl) ratioRootEl.classList.remove('hidden');
      if(ratioRoadmapEl) ratioRoadmapEl.classList.add('hidden');
      if(ratioPlayEl) ratioPlayEl.classList.remove('hidden');
      if(typeof window.startRatioLevel === "function") {
        window.startRatioLevel(nodeIndex);
      }
      return;
    }

    selectedTopic = topic;
    document.querySelectorAll(".topicBtn").forEach(b => {
      b.classList.toggle("active", b.dataset.topic === selectedTopic);
    });

    if(stage) stage.dataset.topic = selectedTopic;
    if(phone){
      phone.dataset.topic = selectedTopic;
      phone.classList.remove("briefingOpen","leaderboardOpen");
    }

    sessionPlan = getNextSessionPlan(selectedTopic);
    maxRounds = Number(sessionPlan.questions || 10);
    selectedLearningPathIndex = nodeIndex;

    getAudioContext();
    playWorldStartSound();
    updateWorldMusic();

    if(!(authUser && authUser.displayName)){
      showLoginPanel();
      return;
    }

    start();
  }

  function openGameRoadmap(topic){
    const key = roadmapKeyForTopic(topic);
    const configs = window.ROADMAP_CONFIGS || {};
    const baseConfig = configs[key];
    if(!baseConfig || !gameRoadmapOverlay || !gameRoadmapStage || typeof window.createRoadmapOverlay !== "function"){
      if(topic === "ratios" && typeof window.openRatioGame === "function"){
        window.openRatioGame();
        return;
      }
      selectedTopic = topicForRoadmapKey(key);
      document.querySelectorAll(".topicBtn").forEach(b => {
        b.classList.toggle("active", b.dataset.topic === selectedTopic);
      });
      if(!(authUser && authUser.displayName)){
        showLoginPanel();
        return;
      }
      start();
      return;
    }

    selectedTopic = topicForRoadmapKey(key);
    document.querySelectorAll(".topicBtn").forEach(b => {
      b.classList.toggle("active", b.dataset.topic === selectedTopic);
    });
    updateMapWorldLabels();

    const cfg = translateRoadmapConfig(cloneRoadmapConfig(baseConfig));
    cfg.assetRoot = "assets/roadmap_overlay/assets";
    cfg.bgUrl = `assets/roadmap_overlay/worlds/${key}/${key}_bg.png`;
    cfg.onBack = closeGameRoadmap;
    cfg.onStart = ({ worldKey, node }) => startGameFromRoadmapNode(worldKey, node);

    gameRoadmapStage.innerHTML = "";
    gameRoadmapOverlay.classList.remove("hidden");
    if(phone) {
      phone.classList.add("roadmapOpen");
      phone.classList.remove("briefingOpen","leaderboardOpen");
    }
    if(startOverlay) startOverlay.classList.add("hidden");
    if(endOverlay) endOverlay.classList.add("hidden");
    if(sessionBriefPanel) sessionBriefPanel.classList.add("hidden");
    setTopicPathBackground(false, currentPathTopic);

    window.createRoadmapOverlay(gameRoadmapStage, cfg);
    updateWorldMusic();
  }

  window.openGameRoadmap = openGameRoadmap;
  window.closeGameRoadmap = closeGameRoadmap;

  function activateTopic(topic, startNow=false){
    const nextTopic = topic || "fractions";
    const alreadySelected = selectedTopic === nextTopic;
    const btn = document.querySelector(`.mapPin[data-topic="${nextTopic}"]`);

    if(startNow && alreadySelected){
      getAudioContext();
      playWorldSelectSound();
      openGameRoadmap(nextTopic);
      return;
    }

    selectedTopic = nextTopic;
    document.querySelectorAll(".topicBtn").forEach(b => {
      b.classList.toggle("active", b.dataset.topic === selectedTopic);
    });
    if(btn) selectAtlasButton(btn);
    else updateAtlasDrawer(nextTopic);
    updateMapWorldLabels();
    updateHUD();

    if(startNow){
      getAudioContext();
      playWorldSelectSound();
      updateWorldMusic();
    }else{
      updateWorldMusic();
    }
  }

  function dismissIntro(){
    if(!introSplash || introSplash.classList.contains("hidden")){
      updateWorldMusic();
      return;
    }
    const mapScreen = document.querySelector(".worldMapScreen");
    if(mapScreen) mapScreen.classList.add("introReveal");
    introSplash.classList.add("revealing");
    getAudioContext();
    setTimer(() => {
      introSplash.classList.add("hidden");
      introSplash.classList.remove("revealing");
      if(mapScreen) mapScreen.classList.remove("introReveal");
      updateWorldMusic();
    }, 620);
  }
  if(introEnterBtn){
    let introLogoOpening = false;
    const openIntroMap = (e) => {
      if(e){ e.preventDefault(); e.stopPropagation(); }
      if(introLogoOpening) return;
      introLogoOpening = true;

      // v84: het titel/logo is nu een echte startknop.
      // Geen loginmuur meer: start meteen als Gast en toon de wereldkaart.
      if(!(authUser && authUser.displayName)){
        saveAuthUser(tr("guestName") || "Gast", "guest");
      }
      hideLoginPanel();
      dismissIntro();
      setTimer(() => { introLogoOpening = false; }, 700);
    };
    introEnterBtn.addEventListener("pointerdown", openIntroMap, {passive:false});
    introEnterBtn.addEventListener("pointerup", e => { if(e){ e.preventDefault(); e.stopPropagation(); } }, {passive:false});
    introEnterBtn.addEventListener("click", openIntroMap);
    introEnterBtn.addEventListener("touchstart", openIntroMap, {passive:false});
    introEnterBtn.addEventListener("keydown", e => {
      if(e.key === "Enter" || e.key === " ") openIntroMap(e);
    });
  }


  /* v86: robuste fallback — klik/tik op eender waar op het intro-logo/splash opent de kaart. */
  if(introSplash && !window.__v86IntroSplashFallbackReady){
    window.__v86IntroSplashFallbackReady = true;
    let v86IntroOpening = false;
    const v86OpenIntroMap = (e) => {
      if(e){ e.preventDefault(); e.stopPropagation(); }
      if(v86IntroOpening) return;
      if(introSplash.classList.contains("hidden")) return;
      v86IntroOpening = true;
      if(!(authUser && authUser.displayName)){
        saveAuthUser(tr("guestName") || "Gast", "guest");
      }
      hideLoginPanel();
      dismissIntro();
      setTimer(() => { v86IntroOpening = false; }, 720);
    };
    introSplash.addEventListener("pointerdown", v86OpenIntroMap, {capture:true, passive:false});
    introSplash.addEventListener("click", v86OpenIntroMap, {capture:true});
    introSplash.addEventListener("touchstart", v86OpenIntroMap, {capture:true, passive:false});
  }

  function setupAtlasControls(){
    if(window.__atlasControlsReady) return;
    window.__atlasControlsReady = true;

    setupAtlasPointerManager();
    loadAtlasPositions();
    setupAtlasDevMode();

    if(atlasStartBtn) atlasStartBtn.addEventListener("click", openSelectedAtlasWorld);
    if(atlasDrawer) atlasDrawer.addEventListener("dblclick", openSelectedAtlasWorld);
    if(atlasRankBtn) atlasRankBtn.addEventListener("click", () => mapRankBtn ? mapRankBtn.click() : openLeaderboard());
    if(atlasAudioBtn) atlasAudioBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleAudioPanel("map");
      if(atlasLangMenu) atlasLangMenu.classList.add("hidden");
    });

    if(atlasLangBtn) atlasLangBtn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if(atlasLangMenu) atlasLangMenu.classList.toggle("hidden");
    });

    if(atlasLangMenu){
      atlasLangMenu.querySelectorAll("button[data-lang]").forEach(btn => {
        btn.addEventListener("click", (e) => {
          e.preventDefault();
          e.stopPropagation();
          setLanguage(btn.dataset.lang || "nl");
          atlasLangMenu.classList.add("hidden");
        });
      });
    }

    document.addEventListener("pointerdown", (e) => {
      if(atlasLangMenu && atlasLangBtn && !atlasLangMenu.classList.contains("hidden")){
        if(!atlasLangMenu.contains(e.target) && !atlasLangBtn.contains(e.target)) atlasLangMenu.classList.add("hidden");
      }
    });

    if(atlasCopyBtn) atlasCopyBtn.addEventListener("click", copyAtlasPositions);
    if(atlasResetBtn) atlasResetBtn.addEventListener("click", resetAtlasPositions);

    if(!selectedTopic) selectedTopic = "fractions";
    selectAtlasButton(document.querySelector(`.mapPin[data-topic="${selectedTopic}"]`) || document.querySelector(".mapPin"));
  }

  setupAtlasControls();

  document.querySelectorAll(".langQuickBtn").forEach(btn => {
    btn.addEventListener("pointerup", e => {
      e.preventDefault();
      e.stopPropagation();
      getAudioContext();
      playWorldSelectSound();
      setLanguage(btn.dataset.lang || "nl");
    });
    btn.addEventListener("click", e => e.preventDefault());
  });

  if(langSel) langSel.addEventListener("change", e => setLanguage(e.target.value));
  if(langSelMini) langSelMini.addEventListener("change", e => setLanguage(e.target.value));
  setLanguage(currentLang);
  syncAccountUI();
  applyWorldProgress();
  if(!selectedTopic) selectedTopic = "fractions";
  selectAtlasButton(document.querySelector(`.mapPin[data-topic="${selectedTopic}"]`) || document.querySelector(".mapPin"));
  updateTimer();

  if(nextRoundBtn) nextRoundBtn.addEventListener("click", goToNextRoundFromButton);
  document.getElementById("startBtn").addEventListener("click", () => { getAudioContext(); showSessionBriefing(); });
  document.getElementById("restartBtn").addEventListener("click", () => showSessionBriefing({preservePathSelection:true}));
  if(endPathBtn) endPathBtn.addEventListener("click", () => openGameRoadmap(selectedTopic || currentPathTopic || "fractions"));
  if(endWorldBtn) endWorldBtn.addEventListener("click", returnToMapFromBriefing);
  if(sessionBriefStartBtn) sessionBriefStartBtn.addEventListener("click", beginSessionFromBriefing);
  if(sessionBriefMenuBtn) sessionBriefMenuBtn.addEventListener("click", returnToMapFromBriefing);
  if(pathStartBtn) pathStartBtn.addEventListener("click", beginSessionFromBriefing);
  if(pathBackBtn) pathBackBtn.addEventListener("click", returnToMapFromBriefing);
  if(pathMapBackBtn) pathMapBackBtn.addEventListener("click", returnToMapFromBriefing);
  if(pathCopyBtn) pathCopyBtn.addEventListener("click", () => copyTopicPathCoords(resolvePathTopic(currentPathTopic)));
  if(pathResetBtn) pathResetBtn.addEventListener("click", () => resetTopicPathCoords(resolvePathTopic(currentPathTopic)));
  if(sessionPlayerNameInput) sessionPlayerNameInput.addEventListener("keydown", e => { if(e.key === "Enter") beginSessionFromBriefing(); });
  updateAudioUI();
  if(audioBtn) audioBtn.addEventListener("click", () => toggleAudioPanel(isWorldMapOpen() ? "map" : "game"));
  if(musicVolumeSlider) musicVolumeSlider.addEventListener("input", () => {
    audioSettings.music = Math.max(0, Math.min(1, Number(musicVolumeSlider.value || 0) / 100));
    saveAudioSettings();
    updateAudioUI();
    updateWorldMusic();
  });
  if(sfxVolumeSlider) sfxVolumeSlider.addEventListener("input", () => {
    audioSettings.sfx = Math.max(0, Math.min(1, Number(sfxVolumeSlider.value || 0) / 100));
    saveAudioSettings();
    updateAudioUI();
    if(audioSettings.sfx > 0.01) playWorldSelectSound();
  });

  document.getElementById("menuBtn").addEventListener("click", openMenu);
  if(ui.fsBtn) ui.fsBtn.addEventListener("click", toggleFullscreen);


  if(DEV_MODE){
    if(devPanel) devPanel.setAttribute("aria-hidden", "false");
    if(devStartBtn) devStartBtn.addEventListener("click", startDevSession);
    if(devNextBtn) devNextBtn.addEventListener("click", devNextQuestion);
    if(devMassTestBtn) devMassTestBtn.addEventListener("click", runDevMassTest);
    if(devFullTestBtn) devFullTestBtn.addEventListener("click", runDevFullTest);
    if(devQuestionListBtn) devQuestionListBtn.addEventListener("click", () => showDevQuestionList(false));
    if(devAllQuestionListBtn) devAllQuestionListBtn.addEventListener("click", () => showDevQuestionList(true));
    if(devCopyReportBtn) devCopyReportBtn.addEventListener("click", copyDevReport);
    if(devResetProgressBtn) devResetProgressBtn.addEventListener("click", resetDevProgress);
  }

  if(rankBtn) rankBtn.addEventListener("click", openLeaderboard);
  if(mapRankBtn) mapRankBtn.addEventListener("click", openLeaderboard);
  if(loginSubmitBtn) loginSubmitBtn.addEventListener("click", submitLogin);
  if(loginGuestFillBtn) loginGuestFillBtn.addEventListener("click", () => {
    if(loginUserInput) loginUserInput.value = tr("guestName");
    if(loginPassInput) loginPassInput.value = "";
    submitLogin();
  });
  [loginUserInput, loginPassInput].forEach(input => {
    if(input) input.addEventListener("keydown", e => { if(e.key === "Enter") submitLogin(); });
  });
  if(accountChip) accountChip.addEventListener("click", () => {
    if(loginUserInput) loginUserInput.value = playerName || "";
    showLoginPanel();
  });
  if(closeRankBtn) closeRankBtn.addEventListener("click", closeLeaderboard);
  if(resetRankBtn) resetRankBtn.addEventListener("click", () => {
    localStorage.removeItem("bubblePopLeaderboard");
    renderLeaderboard();
  });
  if(saveRankNameBtn) saveRankNameBtn.addEventListener("click", () => {
    savePlayerName(leaderboardNameInput ? leaderboardNameInput.value : "");
    renderLeaderboard();
  });
  if(leaderboardNameInput) leaderboardNameInput.addEventListener("keydown", e => {
    if(e.key === "Enter"){
      savePlayerName(leaderboardNameInput.value);
      renderLeaderboard();
    }
  });
  if(savePlayerBtn) savePlayerBtn.addEventListener("click", () => {
    savePlayerName(playerNameInput ? playerNameInput.value : "");
    if(profilePanel && profilePanel.dataset.nextAction === "start") start();
  });
  if(guestPlayerBtn) guestPlayerBtn.addEventListener("click", () => {
    savePlayerName("Gast");
    if(profilePanel && profilePanel.dataset.nextAction === "start") start();
  });
  if(playerNameInput) playerNameInput.addEventListener("keydown", e => {
    if(e.key === "Enter"){
      savePlayerName(playerNameInput.value);
      if(profilePanel && profilePanel.dataset.nextAction === "start") start();
    }
  });



  /* v27.15 — Breukenzee: leerweg rond begrip, zonder antwoordlabels in bubbels
     Opbouw: Start → Eerlijke delen → Lees de breuk → Kies de figuur → Zelfde waarde → Vergelijk → Mix.
     Belangrijk: bubbels tonen bij visuele vragen GEEN breuktekst die het antwoord verklapt. */
  (function(){
    const style = document.createElement('style');
    style.textContent = `
      .bubble .modelWrap{transform:none!important; width:78%; height:78%; display:flex; align-items:center; justify-content:center;}
      .bubble .coordBubbleWrap,.bubble .shapeBubbleWrap{transform:none!important; display:flex; align-items:center; justify-content:center;}
      .pathNodeLabel,.pathFloatLabel{font-size:clamp(13px,3.1vw,17px)!important;font-weight:900!important;line-height:1.05!important;}
      .numberBubbleText.fractionBubbleText{min-width:54px;min-height:58px;padding:6px 10px;border-radius:16px;font-size:36px;font-weight:950;line-height:1;color:#172344;}
      .numberBubbleText.fractionBubbleText .frac{margin:0;min-width:.9em;}
      .numberBubbleText.fractionBubbleText .frac-top,.numberBubbleText.fractionBubbleText .frac-bottom{font-size:.58em;line-height:.86;}
      .numberBubbleText.fractionBubbleText .frac-bar{min-width:.9em;margin:.06em 0 .075em;}
    `;
    document.head.appendChild(style);

    Object.assign(I18N.nl, {
      pathFractionsHub:"Start",
      pathFractionsFair:"Eerlijke delen",
      pathFractionsRead:"Lees de breuk",
      pathFractionsChoose:"Kies de figuur",
      pathFractionsEquivalent:"Zelfde waarde",
      pathFractionsCompare:"Vergelijk",
      pathFractionsMixed:"Mix",
      currFractionsIntro:"kennismaken met teller en noemer",
      currFractionsFair:"gelijke en ongelijke delen herkennen",
      currFractionsRead:"van figuur naar breuk",
      currFractionsChoose:"van breuk naar figuur",
      currFractionsEquivalent:"gelijkwaardige breuken zien",
      currFractionsCompare:"breuken vergelijken",
      targetFractionIntroNumerator:"klik de teller",
      targetFractionIntroDenominator:"klik de noemer",
      targetFractionIntroColored:"hoeveel delen zijn gekleurd?",
      targetFractionIntroTotal:"hoeveel gelijke delen zijn er?",
      targetFractionFair:"welke figuur is eerlijk verdeeld in gelijke stukken?",
      targetFractionFairNot:"welke figuur is NIET eerlijk verdeeld?",
      targetFractionFairHalf:"welke figuur toont een echte helft?",
      targetFractionFairCheck:"is deze taart eerlijk verdeeld?",
      targetFractionFairHalfCheck:"is dit een echte helft?",
      answerFairYes:"Eerlijk verdeeld",
      answerFairNo:"Niet eerlijk verdeeld",
      answerRealHalfYes:"Echte helft",
      answerRealHalfNo:"Geen echte helft",
      targetFractionRead:"welke breuk zie je?",
      targetFractionChoose:"welke figuur toont",
      targetFractionEquivalent:"zoek evenveel als",
      targetFractionCompareGreater:"zoek groter dan",
      targetFractionCompareSmaller:"zoek kleiner dan",
      fractionHintIntro:"Teller = gekleurde delen. Noemer = alle gelijke delen.",
      fractionHintFair:"Eerlijke delen zijn even groot. Een echte helft heeft 2 gelijke delen waarvan 1 gekleurd.",
      fractionHintRead:"Tel eerst alle gelijke delen. Tel daarna de gekleurde delen.",
      fractionHintChoose:"Lees de breuk: teller bovenaan, noemer onderaan.",
      fractionHintEquivalent:"Andere verdelingen kunnen toch evenveel tonen.",
      fractionHintCompare:"Vergelijk hoeveel van het geheel gekleurd is."
    });
    Object.assign(I18N.en, {
      pathFractionsHub:"Start", pathFractionsFair:"Equal parts", pathFractionsRead:"Read it", pathFractionsChoose:"Pick picture", pathFractionsEquivalent:"Same value", pathFractionsCompare:"Compare", pathFractionsMixed:"Mix",
      currFractionsIntro:"meet numerator and denominator", currFractionsFair:"recognize equal and unequal parts", currFractionsRead:"picture to fraction", currFractionsChoose:"fraction to picture", currFractionsEquivalent:"see equivalent fractions", currFractionsCompare:"compare fractions",
      targetFractionIntroNumerator:"tap the numerator", targetFractionIntroDenominator:"tap the denominator", targetFractionIntroColored:"how many parts are colored?", targetFractionIntroTotal:"how many equal parts are there?", targetFractionFair:"which figure is divided into equal parts?", targetFractionFairNot:"which figure is NOT fairly divided?", targetFractionFairHalf:"which figure shows a real half?", targetFractionFairCheck:"is this cake fairly divided?", targetFractionFairHalfCheck:"is this a real half?", answerFairYes:"Fairly divided", answerFairNo:"Not fairly divided", answerRealHalfYes:"Real half", answerRealHalfNo:"Not a real half", targetFractionRead:"which fraction do you see?", targetFractionChoose:"which figure shows", targetFractionEquivalent:"find the same amount as", targetFractionCompareGreater:"find greater than", targetFractionCompareSmaller:"find smaller than",
      fractionHintIntro:"Numerator = colored parts. Denominator = all equal parts.", fractionHintFair:"Fractions only work well when the parts are equal.", fractionHintRead:"First count all equal parts. Then count the colored parts.", fractionHintChoose:"Read the fraction: numerator on top, denominator below.", fractionHintEquivalent:"Different divisions can still show the same amount.", fractionHintCompare:"Compare how much of the whole is colored."
    });

    ALL_TOPIC_SKILLS.fractions = ["fractionsIntro","fractionsFair","fractionsRead","fractionsChoose","fractionsEquivalent","fractionsCompare"];
    TOPIC_LEARNING_PATHS.fractions.nodes = [
      {id:"start", key:"pathFractionsHub", x:45, y:82, icon:"⌂", skills:["fractionsIntro"]},
      {id:"fair", key:"pathFractionsFair", x:82, y:51.1, icon:"1", skills:["fractionsFair"]},
      {id:"read", key:"pathFractionsRead", x:35.2, y:52, icon:"2", skills:["fractionsRead"]},
      {id:"choose", key:"pathFractionsChoose", x:55.6, y:40.1, icon:"3", skills:["fractionsChoose"]},
      {id:"equiv", key:"pathFractionsEquivalent", x:28.1, y:35.4, icon:"4", skills:["fractionsEquivalent"]},
      {id:"compare", key:"pathFractionsCompare", x:76.7, y:27.3, icon:"5", skills:["fractionsCompare"]},
      {id:"mixed", key:"pathFractionsMixed", x:53.7, y:17.2, icon:"★", mastery:true, skills:["fractionsFair","fractionsRead","fractionsChoose","fractionsEquivalent","fractionsCompare"]}
    ];

    const oldTopicSkillPoolForTier = topicSkillPoolForTier;
    topicSkillPoolForTier = function(topic, tierAttempt){
      if(topic === "fractions"){
        const t = Number(tierAttempt || 1) || 1;
        if(t >= 3) return ["fractionsFair","fractionsRead","fractionsChoose","fractionsEquivalent","fractionsCompare"];
        if(t === 2) return ["fractionsRead","fractionsChoose","fractionsEquivalent","fractionsCompare"];
        return ["fractionsIntro","fractionsFair","fractionsRead","fractionsChoose"];
      }
      return oldTopicSkillPoolForTier(topic, tierAttempt);
    };

    const oldBuildCurriculumSkillDeck = buildCurriculumSkillDeck;
    buildCurriculumSkillDeck = function(topic, questions, tierAttempt){
      if(topic === "fractions" && Array.isArray(window.__forcedPathSkills) && window.__forcedPathSkills.length){
        const base = window.__forcedPathSkills.slice();
        const deck = [];
        while(deck.length < questions) deck.push(...shuffle(base));
        return deck.slice(0, questions);
      }
      return oldBuildCurriculumSkillDeck(topic, questions, tierAttempt);
    };

    const oldBeginSessionFromBriefing = beginSessionFromBriefing;
    beginSessionFromBriefing = function(){
      const node = activePathNodes(currentPathTopic)[selectedLearningPathIndex || 0];
      window.__forcedPathSkills = node && node.skills && node.skills.length ? node.skills.slice() : null;
      oldBeginSessionFromBriefing();
    };

    const oldMinLevelForSkill = minLevelForSkill;
    minLevelForSkill = function(skill){
      const map = {fractionsIntro:1, fractionsFair:2, fractionsRead:3, fractionsChoose:4, fractionsEquivalent:6, fractionsCompare:8};
      return map[skill] || oldMinLevelForSkill(skill);
    };

    const oldCurriculumSkillLabel = curriculumSkillLabel;
    curriculumSkillLabel = function(skill){
      const map = {fractionsIntro:"currFractionsIntro", fractionsFair:"currFractionsFair", fractionsRead:"currFractionsRead", fractionsChoose:"currFractionsChoose", fractionsEquivalent:"currFractionsEquivalent", fractionsCompare:"currFractionsCompare"};
      return map[skill] ? tr(map[skill]) : oldCurriculumSkillLabel(skill);
    };

    const oldCurriculumTagForTask = curriculumTagForTask;
    curriculumTagForTask = function(t){
      if(t && t.topic === "fractions"){
        const skill = t.skill || (
          t.mode === "fraction-intro" ? "fractionsIntro" :
          t.mode === "fraction-fair" ? "fractionsFair" :
          t.mode === "fraction-read" ? "fractionsRead" :
          t.mode === "fraction-choose" ? "fractionsChoose" :
          t.mode === "fraction-equivalent" || t.mode === "equal-number" || t.mode === "equal-visual" ? "fractionsEquivalent" :
          "fractionsCompare"
        );
        return {domain:"getallenleer", skill};
      }
      return oldCurriculumTagForTask(t);
    };

    function fractionKey(f){ return `${f[0]}/${f[1]}`; }
    function eduFractionItem(n,d,correct,idx, shape){
      const it = makeItem(n,d,correct,idx);
      if(shape) it.shape = shape;
      return it;
    }
    function eduTextItem(label, correct, idx){ return makeTextItem(label, correct, idx); }

    function introTask(){
      const examples = [[1,2],[2,5],[3,4],[1,3],[4,6]];
      const f = examples[Math.floor(Math.random()*examples.length)];
      const sub = ["numerator","denominator","colored","total"][Math.floor(Math.random()*4)];
      return {topic:"fractions", mode:"fraction-intro", skill:"fractionsIntro", subtype:sub, targetFraction:f};
    }
    function fairTask(){
      const subtypes = ["fair-parts","not-fair","real-half"];
      const subtype = subtypes[Math.floor(Math.random()*subtypes.length)];
      return {topic:"fractions", mode:"fraction-fair", skill:"fractionsFair", subtype};
    }
    function readTask(level){
      const pool = level < 5 ? [[1,2],[1,3],[2,3],[1,4],[2,4],[3,4]] : [[1,2],[1,3],[2,3],[1,4],[3,4],[2,5],[3,5],[4,5],[5,6]];
      const f = pool[Math.floor(Math.random()*pool.length)];
      return {topic:"fractions", mode:"fraction-read", skill:"fractionsRead", targetFraction:f};
    }
    function chooseTask(level){
      const pool = level < 5 ? [[1,2],[1,3],[2,3],[1,4],[2,4],[3,4]] : [[1,2],[1,3],[2,3],[1,4],[3,4],[2,5],[3,5],[4,5],[5,6],[3,8]];
      const f = pool[Math.floor(Math.random()*pool.length)];
      return {topic:"fractions", mode:"fraction-choose", skill:"fractionsChoose", targetFraction:f};
    }
    function equivalentTask(level){
      const famPool = families.filter(f => ["1/2","1/3","2/3","1/4","3/4","2/5","3/5"].includes(f.key));
      const family = famPool[Math.floor(Math.random()*famPool.length)] || families[0];
      return {topic:"fractions", mode:"fraction-equivalent", skill:"fractionsEquivalent", family, targetFraction:family.base};
    }
    function compareTask(level){
      const mode = Math.random() < .5 ? "greater" : "smaller";
      const candidates = collectCandidatesForCompare(level || 8).filter(f => f[0] !== f[1] && value(f) > .15 && value(f) < .9);
      const targetFraction = candidates[Math.floor(Math.random()*candidates.length)] || [1,2];
      return {topic:"fractions", mode, skill:"fractionsCompare", targetFraction};
    }

    const oldCreateFractionTaskForLevel = createFractionTaskForLevel;
    createFractionTaskForLevel = function(level){
      if(level <= 1) return introTask();
      if(level <= 2) return fairTask();
      if(level <= 3) return readTask(level);
      if(level <= 5) return chooseTask(level);
      if(level <= 7) return equivalentTask(level);
      return compareTask(level);
    };

    const oldCreateTaskForCurriculumSkill = createTaskForCurriculumSkill;
    createTaskForCurriculumSkill = function(topic, level, skill){
      if(topic === "fractions"){
        if(skill === "fractionsIntro") return introTask();
        if(skill === "fractionsFair") return fairTask();
        if(skill === "fractionsRead") return readTask(level || 3);
        if(skill === "fractionsChoose") return chooseTask(level || 4);
        if(skill === "fractionsEquivalent") return equivalentTask(level || 6);
        if(skill === "fractionsCompare") return compareTask(level || 8);
      }
      return oldCreateTaskForCurriculumSkill(topic, level, skill);
    };

    const oldCorrectWantedForTask = correctWantedForTask;
    correctWantedForTask = function(task, level, count){
      if(task && task.topic === "fractions"){
        if(["fraction-intro","fraction-fair","fraction-read","fraction-choose"].includes(task.mode)) return 1;
        if(task.mode === "fraction-equivalent") return Math.min(2, count);
        if(task.mode === "greater" || task.mode === "smaller") return Math.min(level < 8 ? 1 : 2, count);
      }
      return oldCorrectWantedForTask(task, level, count);
    };

    function addUniqueTextChoices(data, correctLabel, wrongLabels, count){
      data.push(eduTextItem(correctLabel, true, data.length));
      wrongLabels.map(String).filter(x => x !== String(correctLabel)).forEach(x => {
        if(data.length < count && !data.some(it => String(it.label) === x)) data.push(eduTextItem(x, false, data.length));
      });
      return shuffle(data).slice(0,count);
    }

    const oldBuildBubbleData = buildBubbleData;
    buildBubbleData = function(task, count, correctWanted){
      if(!task || task.topic !== "fractions") return oldBuildBubbleData(task, count, correctWanted);
      const data = [];
      const addF = (n,d,correct,shape) => data.push(eduFractionItem(n,d,correct,data.length,shape));

      if(task.mode === "fraction-intro"){
        const [n,d] = task.targetFraction;
        if(task.subtype === "numerator" || task.subtype === "colored") return addUniqueTextChoices(data, n, [d, 1, n+1, Math.max(1,n-1), d-n], count);
        return addUniqueTextChoices(data, d, [n, d-1, d+1, 1, n+1], count);
      }

      if(task.mode === "fraction-fair"){
        // Dit level heeft nu echte inhoud:
        // 1) eerlijke verdelingen herkennen,
        // 2) oneerlijke verdelingen herkennen,
        // 3) een echte helft onderscheiden van "lijkt op de helft".
        const subtype = task.subtype || "fair-parts";

        if(subtype === "not-fair"){
          addF(1,2,true,"unequalHalf");
          addF(1,3,false,"bar");
          addF(2,4,false,"grid");
          addF(3,6,false,"circles");
          addF(1,4,false,"pie");
          return shuffle(data).slice(0,count);
        }

        if(subtype === "real-half"){
          addF(1,2,true,"pie");
          addF(1,2,false,"unequalHalf");
          addF(1,3,false,"pie");
          addF(2,4,false,"unequalFour"); // ziet eruit als helft, maar stukken zijn niet gelijk
          addF(2,3,false,"bar");
          return shuffle(data).slice(0,count);
        }

        const fairOptions = [[1,2,"pie"],[2,4,"grid"],[1,3,"bar"],[3,6,"circles"]];
        const good = fairOptions[Math.floor(Math.random()*fairOptions.length)];
        addF(good[0], good[1], true, good[2]);
        addF(1,2,false,"unequalHalf");
        addF(1,3,false,"unequalThird");
        addF(2,4,false,"unequalFour");
        addF(3,5,false,"unequalStrip");
        return shuffle(data).slice(0,count);
      }

      if(task.mode === "fraction-read"){
        const [n,d] = task.targetFraction;
        const wrong = [[d,n],[Math.min(d,n+1),d],[Math.max(1,n-1),d],[n,Math.max(2,d+1)],[1,d],[n,Math.max(2,d-1)]]
          .filter(f => f[0] > 0 && f[1] > 0 && f[0] <= f[1] && !(f[0] === n && f[1] === d))
          .map(fractionKey);
        return addUniqueTextChoices(data, `${n}/${d}`, wrong, count);
      }

      if(task.mode === "fraction-choose"){
        const [n,d] = task.targetFraction;
        addF(n,d,true,pickShapeForDenominator(d,0));
        const distractors = [[d,n],[Math.min(d,n+1),d],[Math.max(1,n-1),d],[n,Math.max(2,d+1)],[1,d],[n,Math.max(2,d-1)]]
          .filter(f => f[0] > 0 && f[1] > 0 && f[0] <= f[1] && !(f[0] === n && f[1] === d));
        shuffle(distractors).slice(0,count-1).forEach(f => addF(f[0],f[1],false,pickShapeForDenominator(f[1],data.length)));
        return shuffle(data).slice(0,count);
      }

      if(task.mode === "fraction-equivalent"){
        const variants = distinctVariants(task.family.variants);
        shuffle(variants).slice(0, Math.min(correctWanted, variants.length)).forEach(f => addF(f[0],f[1],true,pickShapeForDenominator(f[1],data.length)));
        const distractors = collectDistractorsForEqual(task.targetFraction, 6).filter(f => !variants.some(v => sameFraction(v[0],v[1],f[0],f[1])));
        shuffle(distractors).slice(0, Math.max(0,count-data.length)).forEach(f => addF(f[0],f[1],false,pickShapeForDenominator(f[1],data.length)));
        return shuffle(data).slice(0,count);
      }

      return oldBuildBubbleData(task, count, correctWanted);
    };

    const oldRenderTarget = renderTarget;
    renderTarget = function(task){
      if(!task || task.topic !== "fractions") return oldRenderTarget(task);
      targetModelWrap.innerHTML = "";
      targetModelWrap.classList.add("hidden");
      numberLineWrap.innerHTML = "";
      numberLineWrap.classList.add("hidden");
      targetFrac.classList.remove("hidden","expression");
      const f = task.targetFraction || [1,2];

      if(task.mode === "fraction-intro"){
        targetFrac.classList.add("expression");
        if(task.subtype === "numerator"){
          targetText.textContent = tr("targetFractionIntroNumerator");
          targetFrac.innerHTML = fractionHTML(f[0],f[1]);
        }else if(task.subtype === "denominator"){
          targetText.textContent = tr("targetFractionIntroDenominator");
          targetFrac.innerHTML = fractionHTML(f[0],f[1]);
        }else{
          targetText.textContent = task.subtype === "colored" ? tr("targetFractionIntroColored") : tr("targetFractionIntroTotal");
          targetFrac.classList.add("hidden");
          targetModelWrap.classList.remove("hidden");
          targetModelWrap.appendChild(renderFigure({n:f[0], d:f[1], shape:pickShapeForDenominator(f[1],0), color:colors[0]}, true));
        }
        return;
      }

      if(task.mode === "fraction-fair"){
        if(task.subtype === "not-fair") targetText.textContent = tr("targetFractionFairNot");
        else if(task.subtype === "real-half") targetText.textContent = tr("targetFractionFairHalf");
        else targetText.textContent = tr("targetFractionFair");
        targetFrac.classList.add("hidden");
      }else if(task.mode === "fraction-read"){
        targetText.textContent = tr("targetFractionRead");
        targetFrac.classList.add("hidden");
        targetModelWrap.classList.remove("hidden");
        targetModelWrap.appendChild(renderFigure({n:f[0], d:f[1], shape:pickShapeForDenominator(f[1],0), color:colors[0]}, true));
      }else if(task.mode === "fraction-choose"){
        targetText.textContent = tr("targetFractionChoose");
        targetFrac.innerHTML = fractionHTML(f[0],f[1]);
      }else if(task.mode === "fraction-equivalent"){
        targetText.textContent = tr("targetFractionEquivalent");
        targetFrac.innerHTML = fractionHTML(f[0],f[1]);
      }else if(task.mode === "greater"){
        targetText.textContent = tr("targetFractionCompareGreater");
        targetFrac.innerHTML = fractionHTML(f[0],f[1]);
      }else if(task.mode === "smaller"){
        targetText.textContent = tr("targetFractionCompareSmaller");
        targetFrac.innerHTML = fractionHTML(f[0],f[1]);
      }else{
        oldRenderTarget(task);
      }
    };

    const oldUpdateHint = updateHint;
    updateHint = function(task){
      if(task && task.topic === "fractions"){
        const key = task.mode === "fraction-intro" ? "fractionHintIntro" : task.mode === "fraction-fair" ? "fractionHintFair" : task.mode === "fraction-read" ? "fractionHintRead" : task.mode === "fraction-choose" ? "fractionHintChoose" : task.mode === "fraction-equivalent" ? "fractionHintEquivalent" : "fractionHintCompare";
        hintText.textContent = tr(key);
        return;
      }
      oldUpdateHint(task);
    };

    function renderUnequalModel(kind, item){
      const svg = createSVG(100,90);
      const color = item.color[1];
      if(kind === "unequalHalf"){
        const left = document.createElementNS("http://www.w3.org/2000/svg","path");
        left.setAttribute("d","M50 13 A32 32 0 1 0 50 77 L66 45 Z");
        stylePart(left, true, color); svg.appendChild(left);
        const right = document.createElementNS("http://www.w3.org/2000/svg","path");
        right.setAttribute("d","M50 13 A32 32 0 0 1 50 77 L66 45 Z");
        stylePart(right, false, color); svg.appendChild(right);
      }else if(kind === "unequalThird"){
        [[10,35,38,22,true],[42,27,48,30,false],[22,58,66,18,false]].forEach(([x,y,w,h,fill]) => {
          const r=document.createElementNS("http://www.w3.org/2000/svg","rect");
          r.setAttribute("x",x);r.setAttribute("y",y);r.setAttribute("width",w);r.setAttribute("height",h);r.setAttribute("rx","2");
          stylePart(r, fill, color); svg.appendChild(r);
        });
      }else if(kind === "unequalFour"){
        [[14,24,24,22,true],[40,24,46,22,false],[14,48,44,18,true],[60,48,26,18,false]].forEach(([x,y,w,h,fill]) => {
          const r=document.createElementNS("http://www.w3.org/2000/svg","rect");
          r.setAttribute("x",x);r.setAttribute("y",y);r.setAttribute("width",w);r.setAttribute("height",h);r.setAttribute("rx","2");
          stylePart(r, fill, color); svg.appendChild(r);
        });
      }else{
        [[10,39,18,22,true],[30,39,10,22,true],[42,39,28,22,false],[72,39,18,22,false]].forEach(([x,y,w,h,fill]) => {
          const r=document.createElementNS("http://www.w3.org/2000/svg","rect");
          r.setAttribute("x",x);r.setAttribute("y",y);r.setAttribute("width",w);r.setAttribute("height",h);r.setAttribute("rx","2");
          stylePart(r, fill, color); svg.appendChild(r);
        });
      }
      return svg;
    }

    const oldRenderFigure = renderFigure;
    renderFigure = function(item, forTarget=false){
      if(item && ["unequalHalf","unequalThird","unequalFour","unequalStrip"].includes(item.shape)) return renderUnequalModel(item.shape, item);
      return oldRenderFigure(item, forTarget);
    };

    const oldAnswerLabelForDebug = answerLabelForDebug;
    answerLabelForDebug = function(item){
      if(item && item.n !== undefined && item.d !== undefined){
        const note = item.shape && String(item.shape).startsWith("unequal") ? " — ongelijke delen" : "";
        return `${item.n}/${item.d}${note}`;
      }
      return oldAnswerLabelForDebug(item);
    };

    const oldDebugTaskType = debugTaskType;
    debugTaskType = function(t){
      if(t && t.topic === "fractions"){
        if(t.mode === "fraction-fair"){
          const subMap = {"fair-parts":"eerlijke delen: gelijke stukken", "not-fair":"eerlijke delen: fout herkennen", "real-half":"eerlijke delen: echte helft"};
          return subMap[t.subtype] || "eerlijke delen";
        }
        const map = {"fraction-intro":"start: teller/noemer", "fraction-read":"lees de breuk", "fraction-choose":"kies de figuur", "fraction-equivalent":"zelfde waarde", greater:"groter dan", smaller:"kleiner dan"};
        return map[t.mode] || oldDebugTaskType(t);
      }
      return oldDebugTaskType(t);
    };

    // voorkom oude opgeslagen knooppunten met de vroegere breukenstructuur
    try{ localStorage.removeItem("bubblePopTopicPathCoords:fractions"); }catch(e){}
  })();



  /* v27.26 — Kleurenlogica:
     Start/kennismaking mag de juiste keuze subtiel sturen met één vaste kleur.
     In alle andere rondes worden kleuren pas na het shuffelen willekeurig toegewezen,
     zodat kleur geen verborgen antwoordpatroon wordt. */
  (function(){
    function reshuffleBubbleColors(items, task){
      if(!Array.isArray(items) || !items.length || typeof colors === "undefined") return items;

      const palette = shuffle(colors.slice());
      const isFractionStart = task && task.topic === "fractions" && task.mode === "fraction-intro";

      if(isFractionStart){
        const guideColor = colors[0]; // blauw-zeegroen als begeleidende startkleur
        const rest = shuffle(colors.slice(1));
        let ri = 0;
        items.forEach(item => {
          if(item && item.correct){
            item.color = guideColor;
          }else if(item){
            item.color = rest[ri % rest.length] || palette[ri % palette.length] || guideColor;
            ri++;
          }
        });
        return items;
      }

      items.forEach((item, i) => {
        if(item) item.color = palette[i % palette.length] || colors[i % colors.length];
      });
      return items;
    }

    const previousBuildBubbleDataForColors = buildBubbleData;
    buildBubbleData = function(task, count, correctWanted){
      const items = previousBuildBubbleDataForColors(task, count, correctWanted);
      return reshuffleBubbleColors(items, task);
    };
  })();



  /* =========================================================
     v27.28 — Breukenzee grote update:
     compact leerpad + Taartbouwer + zelfde waarde + korte verhaalvragen.
     ========================================================= */
  (function(){
    const style = document.createElement("style");
    style.textContent = `
      .fractionCakePanel{
        position:absolute;
        z-index:31;
        left:12px;
        right:12px;
        top:12px;
        bottom:12px;
        border-radius:24px;
        background:linear-gradient(180deg,rgba(255,255,255,.76),rgba(232,250,255,.62));
        box-shadow:inset 0 0 0 2px rgba(255,255,255,.65), 0 14px 32px rgba(20,35,72,.12);
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:flex-start;
        gap:8px;
        padding:10px 10px 12px;
        overflow:hidden;
      }
      .fractionCakeMission{
        width:100%;
        text-align:center;
        border-radius:18px;
        background:rgba(255,255,255,.70);
        color:#172344;
        font-weight:900;
        line-height:1.12;
        padding:8px 10px;
        box-shadow:inset 0 0 0 2px rgba(89,176,226,.16);
      }
      .fractionCakeMission small{
        display:block;
        margin-top:3px;
        color:#52647d;
        font-weight:750;
        font-size:12px;
      }
      .cakeSvgWrap{
        flex:1 1 auto;
        min-height:178px;
        width:100%;
        display:flex;
        align-items:center;
        justify-content:center;
      }
      .cakeSvg{
        width:min(76vw,270px);
        height:min(76vw,270px);
        max-height:270px;
        overflow:visible;
        filter:drop-shadow(0 12px 20px rgba(20,35,72,.13));
      }
      .cakeSlice{
        stroke:#1b2748;
        stroke-width:2.2;
        cursor:pointer;
        transition:filter .12s ease, transform .12s ease;
      }
      .cakeSlice:hover{filter:brightness(1.04);}
      .cakeSlice.filled{fill:#7fd7e8;}
      .cakeSlice.empty{fill:rgba(255,253,248,.94);}
      .cakeSliceGuide{fill:none;stroke:rgba(27,39,72,.32);stroke-width:1.8;}
      .cakeControls{
        width:100%;
        display:grid;
        grid-template-columns:repeat(6,1fr);
        gap:6px;
      }
      .cakePartBtn{
        min-height:38px;
        border:0;
        border-radius:14px;
        background:rgba(255,255,255,.78);
        color:#244064;
        font-size:15px;
        font-weight:950;
        box-shadow:0 6px 14px rgba(20,35,72,.08), inset 0 0 0 2px rgba(255,255,255,.62);
      }
      .cakePartBtn.active{
        background:linear-gradient(180deg,#ffe783,#ffc64f);
        color:#68470a;
      }
      .cakeActionRow{
        width:100%;
        display:grid;
        grid-template-columns:1fr 1fr;
        gap:8px;
      }
      .cakeCheckBtn,.cakeClearBtn{
        border:0;
        min-height:44px;
        border-radius:16px;
        font-size:16px;
        font-weight:950;
        box-shadow:0 10px 18px rgba(20,35,72,.10);
      }
      .cakeCheckBtn{background:linear-gradient(180deg,#79d994,#36b967);color:white;}
      .cakeClearBtn{background:rgba(255,255,255,.75);color:#244064;}
      .cakeFeedback{
        min-height:32px;
        width:100%;
        text-align:center;
        font-weight:900;
        color:#244064;
        font-size:14px;
        line-height:1.15;
      }
      .cakeFeedback.good{color:#18763d;}
      .cakeFeedback.bad{color:#9b2a2a;}

      .cakeStepBadge{
        display:inline-flex;
        align-items:center;
        justify-content:center;
        min-width:82px;
        min-height:28px;
        margin:4px auto 0;
        padding:4px 10px;
        border-radius:999px;
        background:rgba(61,137,238,.12);
        color:#244064;
        font-size:12px;
        font-weight:950;
      }
      .cakeControls{
        grid-template-columns:1fr !important;
      }
      .cakePieceStatus{
        min-height:38px;
        border-radius:14px;
        background:rgba(255,255,255,.72);
        display:flex;
        align-items:center;
        justify-content:center;
        color:#244064;
        font-size:15px;
        font-weight:950;
        box-shadow:inset 0 0 0 2px rgba(255,255,255,.62);
      }
      .cakeSvg.cutStep{
        cursor:pointer;
      }
      .cakeWhole{
        fill:rgba(255,253,248,.94);
        stroke:#1b2748;
        stroke-width:3.1;
        cursor:pointer;
      }
    `;
    document.head.appendChild(style);

    Object.assign(I18N.nl, {
      pathFractionsFair:"Gelijke stukken",
      pathFractionsReadChoose:"Lees & kies",
      pathFractionsBuild:"Bouw breuk",
      pathFractionsStory:"Mix & verhaal",
      currFractionsBuild:"breuken zelf bouwen",
      currFractionsStory:"breuken in korte situaties gebruiken",
      targetFractionBuildExact:"maak precies",
      targetFractionBuildExactCut:"snijd en kleur",
      targetFractionBuildExactColor:"bouw de breuk",
      targetFractionBuildEquivalent:"maak evenveel als",
      targetFractionBuildEquivalentSmart:"snijd slim: evenveel als",
      targetFractionBuildEquivalentSame:"bouw dezelfde waarde als",
      targetFractionStory:"breukenverhaal",
      fractionHintBuildExact:"Kies eerst de noemer: zoveel gelijke stukken. Kleur daarna de teller.",
      fractionHintBuildEquivalent:"Je mag slimmer snijden: 1/2 is evenveel als 2/4 en 4/8.",
      fractionHintStory:"Zoek eerst het geheel. De teller is het gekozen deel.",
      cakeParts:"stukken",
      cakeCheck:"Controleer",
      cakeClear:"Wis kleur",
      cakeDoneCutting:"Klaar",
      cakeCutAgain:"Opnieuw snijden",
      cakeResetCut:"Opnieuw",
      cakeStepCutExact:"Stap 1 van 2: snijd de taart in {d} gelijke stukken.",
      cakeStepCutEquivalent:"Stap 1 van 2: snijd slim. Je mag zelf kiezen hoeveel gelijke stukken.",
      cakeStepColorExact:"Stap 2 van 2: kleur {n} stukken.",
      cakeStepColorEquivalent:"Stap 2 van 2: kleur evenveel als {target}.",
      cakeTapToCut:"Tik op de taart om meer stukken te maken.",
      cakeExactGood:"Goed! Je maakte precies {made}.",
      cakeEquivGood:"Goed! Je maakte {made}. Dat is evenveel als {target}.",
      cakeSmartGood:"Slim! {made} is de kortste manier om evenveel als {target} te maken.",
      cakeWrongExact:"Nog niet. Voor {target} heb je {d} gelijke stukken nodig en kleur je er {n}.",
      cakeWrongEquiv:"Nog niet. Je gekleurde deel moet evenveel zijn als {target}."
    });
    Object.assign(I18N.en, {
      pathFractionsFair:"Equal pieces",
      pathFractionsReadChoose:"Read & pick",
      pathFractionsBuild:"Build fraction",
      pathFractionsStory:"Mix & story",
      currFractionsBuild:"build fractions yourself",
      currFractionsStory:"use fractions in short situations",
      targetFractionBuildExact:"make exactly",
      targetFractionBuildExactCut:"cut and color",
      targetFractionBuildExactColor:"build the fraction",
      targetFractionBuildEquivalent:"make the same amount as",
      targetFractionBuildEquivalentSmart:"cut smart: same as",
      targetFractionBuildEquivalentSame:"build the same value as",
      targetFractionStory:"fraction story",
      fractionHintBuildExact:"First choose the denominator: that many equal pieces. Then color the numerator.",
      fractionHintBuildEquivalent:"You may cut smarter: 1/2 is the same amount as 2/4 and 4/8.",
      fractionHintStory:"First find the whole. The numerator is the chosen part.",
      cakeParts:"pieces",
      cakeCheck:"Check",
      cakeClear:"Clear",
      cakeDoneCutting:"Done",
      cakeCutAgain:"Cut again",
      cakeResetCut:"Reset",
      cakeStepCutExact:"Step 1 of 2: cut the cake into {d} equal pieces.",
      cakeStepCutEquivalent:"Step 1 of 2: cut smart. You may choose the number of equal pieces.",
      cakeStepColorExact:"Step 2 of 2: color {n} pieces.",
      cakeStepColorEquivalent:"Step 2 of 2: color the same amount as {target}.",
      cakeTapToCut:"Tap the cake to add more pieces.",
      cakeExactGood:"Good! You made exactly {made}.",
      cakeEquivGood:"Good! You made {made}. That is the same amount as {target}.",
      cakeSmartGood:"Smart! {made} is the shortest way to make the same amount as {target}.",
      cakeWrongExact:"Not yet. For {target}, use {d} equal pieces and color {n}.",
      cakeWrongEquiv:"Not yet. Your colored part must be the same amount as {target}."
    });

    // Compacte Breukenzee: niet langer, maar rijker binnen 6 stappen.
    ALL_TOPIC_SKILLS.fractions = ["fractionsIntro","fractionsFair","fractionsRead","fractionsChoose","fractionsBuild","fractionsEquivalent","fractionsStory"];
    TOPIC_LEARNING_PATHS.fractions.nodes = [
      {id:"start", key:"pathFractionsHub", x:45, y:82, icon:"⌂", skills:["fractionsIntro"]},
      {id:"fair", key:"pathFractionsFair", x:80, y:58, icon:"1", skills:["fractionsFair"]},
      {id:"readchoose", key:"pathFractionsReadChoose", x:34, y:55, icon:"2", skills:["fractionsRead","fractionsChoose"]},
      {id:"build", key:"pathFractionsBuild", x:58, y:40, icon:"3", skills:["fractionsBuild"]},
      {id:"equiv", key:"pathFractionsEquivalent", x:26, y:30, icon:"4", skills:["fractionsEquivalent"]},
      {id:"story", key:"pathFractionsStory", x:57, y:16, icon:"★", mastery:true, skills:["fractionsFair","fractionsRead","fractionsChoose","fractionsBuild","fractionsEquivalent","fractionsStory"]}
    ];
    try{ localStorage.removeItem("bubblePopTopicPathCoords:fractions"); }catch(e){}

    function fracTxt(n,d){ return `${n}/${d}`; }
    function fmtFrac(f){ return `${f[0]}/${f[1]}`; }
    function replaceVars(s, vars){
      return String(s || "").replace(/\{(\w+)\}/g, (_,k) => vars && vars[k] !== undefined ? vars[k] : "");
    }
    function reducePair(n,d){
      const g = gcd(Math.max(0, n), Math.max(1, d)) || 1;
      return [n/g, d/g];
    }
    function isCakeTask(t){
      return t && t.topic === "fractions" && (t.mode === "fraction-build-exact" || t.mode === "fraction-build-equivalent");
    }
    function isStoryTask(t){
      return t && t.topic === "fractions" && t.mode === "fraction-story";
    }

    function buildExactTask(level){
      const pool = level < 6 ? [[1,2],[1,3],[2,3],[1,4],[3,4],[2,5]] : [[1,2],[2,3],[3,4],[2,5],[3,5],[5,6],[3,8],[5,8]];
      const f = pool[Math.floor(Math.random()*pool.length)];
      const promptKeys = ["targetFractionBuildExact","targetFractionBuildExactCut","targetFractionBuildExactColor"];
      return {topic:"fractions", mode:"fraction-build-exact", skill:"fractionsBuild", targetFraction:f, promptKey:promptKeys[Math.floor(Math.random()*promptKeys.length)]};
    }
    function buildEquivalentTask(level){
      const pool = [[2,4],[3,6],[4,8],[2,6],[6,8],[5,10],[3,9]];
      const f = pool[Math.floor(Math.random()*pool.length)];
      const promptKeys = ["targetFractionBuildEquivalent","targetFractionBuildEquivalentSmart","targetFractionBuildEquivalentSame"];
      return {topic:"fractions", mode:"fraction-build-equivalent", skill:"fractionsEquivalent", targetFraction:f, promptKey:promptKeys[Math.floor(Math.random()*promptKeys.length)]};
    }
    function storyTask(){
      const stories = [
        {text:"Schelpenstrand: Er zijn 10 schelpen. 4 schelpen zijn blauw. Welke breuk van alle schelpen is blauw?", correct:"4/10", distractors:["4/6","10/4","2/10","1/2"]},
        {text:"Taartenhut: Een taart heeft 8 gelijke stukken. 3 stukken zijn opgegeten. Welke breuk hoort daarbij?", correct:"3/8", distractors:["5/8","8/3","3/5","1/3"]},
        {text:"Visnet: In het net zitten 6 vissen. 2 vissen zijn rood. Welke breuk van alle vissen is rood?", correct:"2/6", distractors:["2/4","6/2","4/6","1/6"]},
        {text:"Piratenboot: Oscar heeft 1/2 van de buit. Ella heeft 2/4. Wie heeft meer?", correct:"evenveel", distractors:["Oscar","Ella","niemand heeft iets","dat kan je niet weten"]},
        {text:"Vuurtoren: De kaart toont 4/8 van het eiland. Welke breuk is evenveel?", correct:"1/2", distractors:["1/4","3/8","4/4","8/4"]}
      ];
      const s = stories[Math.floor(Math.random()*stories.length)];
      return {topic:"fractions", mode:"fraction-story", skill:"fractionsStory", story:s.text, correctLabels:[s.correct], distractorLabels:s.distractors};
    }

    const prevTopicSkillPoolForTier_v28 = topicSkillPoolForTier;
    topicSkillPoolForTier = function(topic, tierAttempt){
      if(topic === "fractions"){
        const t = Number(tierAttempt || 1) || 1;
        if(t >= 3) return ["fractionsFair","fractionsRead","fractionsChoose","fractionsBuild","fractionsEquivalent","fractionsStory"];
        if(t === 2) return ["fractionsRead","fractionsChoose","fractionsBuild","fractionsEquivalent"];
        return ["fractionsIntro","fractionsFair","fractionsRead","fractionsChoose","fractionsBuild"];
      }
      return prevTopicSkillPoolForTier_v28(topic, tierAttempt);
    };

    const prevMinLevelForSkill_v28 = minLevelForSkill;
    minLevelForSkill = function(skill){
      const map = {fractionsIntro:1, fractionsFair:2, fractionsRead:3, fractionsChoose:3, fractionsBuild:4, fractionsEquivalent:6, fractionsStory:8};
      return map[skill] || prevMinLevelForSkill_v28(skill);
    };

    const prevCurriculumSkillLabel_v28 = curriculumSkillLabel;
    curriculumSkillLabel = function(skill){
      const map = {
        fractionsBuild:"currFractionsBuild",
        fractionsStory:"currFractionsStory"
      };
      return map[skill] ? tr(map[skill]) : prevCurriculumSkillLabel_v28(skill);
    };

    const prevCurriculumTagForTask_v28 = curriculumTagForTask;
    curriculumTagForTask = function(t){
      if(t && t.topic === "fractions" && (isCakeTask(t) || isStoryTask(t))){
        return {domain:"getallenleer", skill:t.skill || (isStoryTask(t) ? "fractionsStory" : "fractionsBuild")};
      }
      return prevCurriculumTagForTask_v28(t);
    };

    const prevCreateFractionTaskForLevel_v28 = createFractionTaskForLevel;
    createFractionTaskForLevel = function(level){
      if(level <= 1) return createTaskForCurriculumSkill("fractions", level, "fractionsIntro");
      if(level <= 2) return createTaskForCurriculumSkill("fractions", level, "fractionsFair");
      if(level <= 3) return Math.random() < .5 ? createTaskForCurriculumSkill("fractions", level, "fractionsRead") : createTaskForCurriculumSkill("fractions", level, "fractionsChoose");
      if(level <= 5) return buildExactTask(level);
      if(level <= 7) return Math.random() < .65 ? buildEquivalentTask(level) : createTaskForCurriculumSkill("fractions", level, "fractionsEquivalent");
      return Math.random() < .55 ? storyTask() : (Math.random() < .5 ? buildEquivalentTask(level) : prevCreateFractionTaskForLevel_v28(level));
    };

    const prevCreateTaskForCurriculumSkill_v28 = createTaskForCurriculumSkill;
    createTaskForCurriculumSkill = function(topic, level, skill){
      if(topic === "fractions"){
        if(skill === "fractionsBuild") return buildExactTask(level || 4);
        if(skill === "fractionsEquivalent") return Math.random() < .55 ? buildEquivalentTask(level || 6) : prevCreateTaskForCurriculumSkill_v28(topic, level, skill);
        if(skill === "fractionsStory") return Math.random() < .65 ? storyTask() : (Math.random() < .5 ? buildExactTask(level || 8) : buildEquivalentTask(level || 8));
      }
      return prevCreateTaskForCurriculumSkill_v28(topic, level, skill);
    };

    const prevCorrectWantedForTask_v28 = correctWantedForTask;
    correctWantedForTask = function(task, level, count){
      if(isStoryTask(task) || isCakeTask(task)) return 1;
      return prevCorrectWantedForTask_v28(task, level, count);
    };

    const prevBuildBubbleData_v28 = buildBubbleData;
    buildBubbleData = function(task, count, correctWanted){
      if(isStoryTask(task)){
        const data = [];
        const add = (label, correct) => {
          if(data.length >= count || data.some(it => String(it.label) === String(label))) return;
          data.push(makeTextItem(label, correct, data.length));
        };
        shuffle(task.correctLabels || []).forEach(x => add(x, true));
        shuffle(task.distractorLabels || []).forEach(x => add(x, false));
        return shuffle(data).slice(0,count);
      }
      return prevBuildBubbleData_v28(task, count, correctWanted);
    };

    const prevRenderTarget_v28 = renderTarget;
    renderTarget = function(task){
      if(isCakeTask(task)){
        targetModelWrap.innerHTML = "";
        targetModelWrap.classList.add("hidden");
        numberLineWrap.innerHTML = "";
        numberLineWrap.classList.add("hidden");
        targetFrac.classList.remove("hidden","expression");
        targetText.textContent = tr(task.promptKey || (task.mode === "fraction-build-exact" ? "targetFractionBuildExact" : "targetFractionBuildEquivalent"));
        targetFrac.innerHTML = fractionHTML(task.targetFraction[0], task.targetFraction[1]);
        return;
      }
      if(isStoryTask(task)){
        targetModelWrap.innerHTML = "";
        targetModelWrap.classList.add("hidden");
        numberLineWrap.innerHTML = "";
        numberLineWrap.classList.add("hidden");
        targetFrac.classList.add("hidden");
        targetText.textContent = task.story || tr("targetFractionStory");
        return;
      }
      return prevRenderTarget_v28(task);
    };

    const prevUpdateHint_v28 = updateHint;
    updateHint = function(task){
      if(isCakeTask(task)){
        hintText.textContent = task.mode === "fraction-build-exact" ? tr("fractionHintBuildExact") : tr("fractionHintBuildEquivalent");
        return;
      }
      if(isStoryTask(task)){
        hintText.textContent = tr("fractionHintStory");
        return;
      }
      return prevUpdateHint_v28(task);
    };

    const prevDebugTaskType_v28 = debugTaskType;
    debugTaskType = function(t){
      if(t && t.topic === "fractions"){
        if(t.mode === "fraction-build-exact") return "taartbouwer: maak precies";
        if(t.mode === "fraction-build-equivalent") return "taartbouwer: zelfde waarde";
        if(t.mode === "fraction-story") return "mix & verhaal: korte contextvraag";
      }
      return prevDebugTaskType_v28(t);
    };

    function clearFractionActivity(){
      if(!stage) return;
      stage.querySelectorAll(".fractionCakePanel,.fractionSystemPanel").forEach(el => el.remove());
    }

    const prevClearBubbles_v28 = clearBubbles;
    clearBubbles = function(){
      clearFractionActivity();
      prevClearBubbles_v28();
    };

    function sectorPath(cx, cy, r, a0, a1){
      const toRad = a => (a - 90) * Math.PI / 180;
      const x0 = cx + r * Math.cos(toRad(a0));
      const y0 = cy + r * Math.sin(toRad(a0));
      const x1 = cx + r * Math.cos(toRad(a1));
      const y1 = cy + r * Math.sin(toRad(a1));
      const large = (a1-a0) > 180 ? 1 : 0;
      return `M ${cx} ${cy} L ${x0} ${y0} A ${r} ${r} 0 ${large} 1 ${x1} ${y1} Z`;
    }

    function renderCakeBuilder(task){
      clearFractionActivity();
      const [targetN, targetD] = task.targetFraction || [1,2];
      const exact = task.mode === "fraction-build-exact";
      const baseAllowed = [2,3,4,5,6,8,10,12];
      function uniq(arr){ return Array.from(new Set(arr.filter(n => Number.isFinite(n) && n >= 2 && n <= 12))).sort((a,b)=>a-b); }
      let allowed = exact
        ? uniq([targetD])
        : uniq([reducePair(targetN,targetD)[1], targetD, ...baseAllowed.filter(d => (targetN*d) % targetD === 0 && (targetN*d/targetD) <= d), ...baseAllowed]);
      let selectedD = exact ? targetD : (allowed.find(d => d !== targetD && (targetN*d) % targetD === 0 && (targetN*d/targetD) <= d) || targetD);
      let filled = new Set();

      const panel = document.createElement("div");
      panel.className = "fractionCakePanel fractionBarPanel";

      const mission = document.createElement("div");
      mission.className = "fractionCakeMission fractionBarMission compact";
      panel.appendChild(mission);

      const visual = document.createElement("div");
      visual.className = "fractionBarVisual compact";
      panel.appendChild(visual);

      const feedback = document.createElement("div");
      feedback.className = "cakeFeedback";
      panel.appendChild(feedback);

      const row = document.createElement("div");
      row.className = "cakeActionRow fractionBarActions compact";
      const clearBtn = document.createElement("button");
      clearBtn.className = "cakeClearBtn";
      clearBtn.type = "button";
      clearBtn.textContent = tr("cakeClear");
      const checkBtn = document.createElement("button");
      checkBtn.className = "cakeCheckBtn";
      checkBtn.type = "button";
      checkBtn.textContent = tr("cakeCheck");
      row.appendChild(clearBtn);
      row.appendChild(checkBtn);
      panel.appendChild(row);
      stage.appendChild(panel);

      function currentMade(){ return fracTxt(filled.size, selectedD); }
      function updateMission(){
        const prompt = tr(task.promptKey || (exact ? "targetFractionBuildExact" : "targetFractionBuildEquivalent"));
        mission.innerHTML = `${prompt} ${fractionHTML(targetN,targetD)}`;
        feedback.textContent = replaceVars(tr("fractionBarMade"), {made:currentMade()});
        feedback.className = "cakeFeedback";
      }
      function stepDenom(dir){
        if(exact || locked) return;
        const idx = allowed.indexOf(selectedD);
        const next = Math.max(0, Math.min(allowed.length - 1, idx + dir));
        if(next !== idx){
          selectedD = allowed[next];
          filled = new Set(Array.from(filled).filter(i => i < selectedD));
          redraw();
        }
      }
      function redraw(){
        updateMission();
        visual.innerHTML = "";

        const controls = document.createElement("div");
        controls.className = "fractionBarControlStrip" + (exact ? " exact" : "");

        const minus = document.createElement("button");
        minus.type = "button";
        minus.className = "fractionStepperBtn";
        minus.textContent = "−";
        minus.disabled = exact || allowed.indexOf(selectedD) <= 0;
        minus.addEventListener("click", () => stepDenom(-1));

        const plus = document.createElement("button");
        plus.type = "button";
        plus.className = "fractionStepperBtn";
        plus.textContent = "+";
        plus.disabled = exact || allowed.indexOf(selectedD) >= allowed.length - 1;
        plus.addEventListener("click", () => stepDenom(1));

        const center = document.createElement("div");
        center.className = "fractionBarCenterStack";
        const bar = document.createElement("div");
        bar.className = "fractionBuildBar compact";
        bar.style.setProperty("--parts", selectedD);
        for(let i=0;i<selectedD;i++){
          const seg = document.createElement("button");
          seg.type = "button";
          seg.className = "fractionBarSeg" + (filled.has(i) ? " filled" : "");
          seg.setAttribute("aria-label", `${i+1}/${selectedD}`);
          seg.addEventListener("click", () => {
            if(locked) return;
            if(filled.has(i)) filled.delete(i); else filled.add(i);
            redraw();
          });
          bar.appendChild(seg);
        }
        const info = document.createElement("div");
        info.className = "fractionBarTinyInfo";
        info.textContent = exact ? replaceVars(tr("fractionBarFixedParts"), {d:selectedD}) : replaceVars(tr("fractionBarParts"), {d:selectedD});

        const value = document.createElement("div");
        value.className = "fractionBarValue";
        value.innerHTML = `${fractionHTML(filled.size, selectedD)}`;

        center.appendChild(bar);
        center.appendChild(info);
        center.appendChild(value);

        controls.appendChild(minus);
        controls.appendChild(center);
        controls.appendChild(plus);
        visual.appendChild(controls);
      }

      clearBtn.addEventListener("click", () => {
        if(locked) return;
        filled.clear();
        feedback.textContent = "";
        redraw();
      });

      checkBtn.addEventListener("click", () => {
        if(locked) return;
        const madeN = filled.size;
        const madeD = selectedD;
        const made = fracTxt(madeN, madeD);
        const target = fracTxt(targetN, targetD);
        const correct = exact
          ? (madeN === targetN && madeD === targetD)
          : (madeN > 0 && madeN * targetD === targetN * madeD);
        if(correct){
          locked = true;
          score += 10 + level;
          correctRemaining = 0;
          updateHUD();
          playSuccessSound();
          let msg;
          if(!exact){
            const red = reducePair(targetN, targetD);
            const isShortest = madeN === red[0] && madeD === red[1];
            msg = isShortest ? replaceVars(tr("cakeSmartGood"), {made, target}) : replaceVars(tr("cakeEquivGood"), {made, target});
          }else{
            msg = replaceVars(tr("cakeExactGood"), {made});
          }
          feedback.textContent = msg;
          feedback.className = "cakeFeedback good";
          showToast(msg, true);
          setTimer(() => { if(round >= maxRounds) end(); else nextRound(); }, AUTO_NEXT_DELAY_MS);
        }else{
          perfectRun = false;
          score = Math.max(0, score - 3);
          updateHUD();
          playWrongSound();
          const msg = exact
            ? replaceVars(tr("cakeWrongExact"), {target, n:targetN, d:targetD})
            : replaceVars(tr("cakeWrongEquiv"), {target});
          feedback.textContent = msg;
          feedback.className = "cakeFeedback bad";
          showToast(msg, false);
        }
      });
      redraw();
    }



    /* v27.32 — vijf extra breuksystemen: water, schat, ritme, bootroute en recept. */
    const extraSystemsStyle = document.createElement("style");
    extraSystemsStyle.textContent = `
      .fractionSystemPanel{
        position:absolute;z-index:31;left:12px;right:12px;top:12px;bottom:12px;
        border-radius:24px;background:linear-gradient(180deg,rgba(255,255,255,.78),rgba(232,250,255,.64));
        box-shadow:inset 0 0 0 2px rgba(255,255,255,.65),0 14px 32px rgba(20,35,72,.12);
        display:flex;flex-direction:column;align-items:center;gap:8px;padding:10px;overflow:hidden;
      }
      .fractionSystemMission{
        width:100%;text-align:center;border-radius:18px;background:rgba(255,255,255,.72);color:#172344;
        font-weight:900;line-height:1.12;padding:8px 10px;box-shadow:inset 0 0 0 2px rgba(89,176,226,.16);
      }
      .fractionSystemMission small{display:block;margin-top:3px;color:#52647d;font-weight:750;font-size:12px;}
      .systemVisual{
        flex:1 1 auto;width:100%;min-height:150px;display:flex;align-items:center;justify-content:center;
      }
      .sysActions{width:100%;display:grid;grid-template-columns:repeat(4,1fr);gap:7px;}
      .sysActions.three{grid-template-columns:repeat(3,1fr);}
      .sysActions.two{grid-template-columns:repeat(2,1fr);}
      .sysBtn{
        min-height:42px;border:0;border-radius:15px;background:rgba(255,255,255,.80);color:#244064;
        font-size:15px;font-weight:950;box-shadow:0 7px 14px rgba(20,35,72,.08),inset 0 0 0 2px rgba(255,255,255,.62);
      }
      .sysBtn.primary{background:linear-gradient(180deg,#79d994,#36b967);color:white;}
      .sysFeedback{min-height:34px;width:100%;text-align:center;font-weight:900;color:#244064;font-size:14px;line-height:1.15;}
      .sysFeedback.good{color:#18763d}.sysFeedback.bad{color:#9b2a2a}
      .meterBox{width:96px;height:190px;border-radius:26px 26px 18px 18px;border:4px solid #1b2748;background:rgba(255,255,255,.72);position:relative;overflow:hidden;}
      .meterWater{position:absolute;left:0;right:0;bottom:0;background:linear-gradient(180deg,#8ee8ff,#3aa7d8);transition:height .25s ease;}
      .meterWave{position:absolute;left:-10%;right:-10%;height:15px;top:-8px;border-radius:50%;background:rgba(255,255,255,.38);}
      .meterMark{position:absolute;left:0;right:0;height:1.5px;background:rgba(27,39,72,.22);}
      .meterTarget{position:absolute;left:-10px;right:-10px;height:3px;background:#ffb84d;box-shadow:0 0 0 2px rgba(255,255,255,.7);}
      .meterLabel{position:absolute;right:108px;transform:translateY(50%);font-size:12px;font-weight:950;color:#244064;white-space:nowrap;}
      .treasureGrid{display:grid;grid-template-columns:repeat(6,38px);gap:8px;align-items:center;justify-content:center;}
      .pearlBtn{width:38px;height:38px;border-radius:999px;border:0;background:radial-gradient(circle at 32% 25%,#fff,#bde8ff 48%,#5cb6dc);box-shadow:0 6px 11px rgba(20,35,72,.14),inset 0 0 0 2px rgba(255,255,255,.72);}
      .pearlBtn.selected{background:radial-gradient(circle at 32% 25%,#fff7c8,#ffd05b 52%,#f49b34);transform:translateY(-2px);}
      .rhythmBar{width:min(82vw,310px);height:66px;border-radius:18px;background:rgba(255,255,255,.78);box-shadow:inset 0 0 0 3px rgba(27,39,72,.18);display:flex;overflow:hidden;}
      .rhythmSeg{height:100%;display:flex;align-items:center;justify-content:center;border-right:2px solid rgba(27,39,72,.22);font-weight:950;color:#172344;background:linear-gradient(180deg,#fff2ad,#ffd56d);}
      .rhythmEmpty{flex:1;background:repeating-linear-gradient(90deg,rgba(61,137,238,.06),rgba(61,137,238,.06) 24px,rgba(255,255,255,.10) 24px,rgba(255,255,255,.10) 48px);}
      .routeWrap{width:min(86vw,330px);height:150px;position:relative;}
      .routeLine{position:absolute;left:20px;right:20px;top:76px;height:8px;border-radius:999px;background:linear-gradient(90deg,#a8e5ff,#52aee0);}
      .routeTarget{position:absolute;top:54px;width:4px;height:52px;border-radius:99px;background:#ffb84d;box-shadow:0 0 0 2px white;}
      .routeBoat{position:absolute;top:42px;transform:translateX(-50%);font-size:42px;filter:drop-shadow(0 6px 8px rgba(20,35,72,.22));transition:left .25s ease;}
      .routeFlags{position:absolute;left:20px;right:20px;top:91px;display:flex;justify-content:space-between;font-size:11px;font-weight:950;color:#244064;}
      .recipeCup{width:132px;height:178px;border:4px solid #1b2748;border-top-width:3px;border-radius:16px 16px 28px 28px;background:rgba(255,255,255,.72);position:relative;overflow:hidden;}
      .recipeFill{position:absolute;left:0;right:0;bottom:0;background:linear-gradient(180deg,#ffeaa0,#f4b84d);transition:height .25s ease;}
      .recipeSteam{font-size:32px;margin-left:12px;}
    `;
    document.head.appendChild(extraSystemsStyle);

    Object.assign(I18N.nl, {
      targetFractionWater:"Waterput",
      targetFractionTreasure:"Schat verdelen",
      targetFractionRhythm:"Ritmebouwer",
      targetFractionRoute:"Bootroute",
      targetFractionRecipe:"Recepten",
      fractionHintWater:"Vul of leeg tot het water precies bij de gevraagde breuk staat.",
      fractionHintTreasure:"Neem de gevraagde breuk van alle parels. Eerst het geheel, dan het deel.",
      fractionHintRhythm:"Vul de maatbalk precies tot 1 geheel.",
      fractionHintRoute:"De hele route is 1. Vaar tot de gevraagde breuk van de route.",
      fractionHintRecipe:"Gebruik de maatbeker. Tel de breuken rustig op.",
      sysCheck:"Controleer",
      sysReset:"Reset",
      sysUndo:"Terug",
      sysGood:"Goed!",
      sysWaterGood:"Goed! Het water staat op {made}.",
      sysWaterWrong:"Nog niet. Het water staat op {made}, maar moet op {target}.",
      sysTreasureGood:"Goed! {count} van de {total} is {frac}.",
      sysTreasureWrong:"Nog niet. Je koos {count}. Je moet {need} kiezen.",
      sysRhythmGood:"Mooi! De maat is precies 1 geheel.",
      sysRhythmWrong:"Nog niet. Je maat is nu {made}.",
      sysRouteGood:"Juist! De boot is op {made} van de route.",
      sysRouteWrong:"Nog niet. De boot is op {made}, maar moet naar {target}.",
      sysRecipeGood:"Goed! De maatbeker toont {made}.",
      sysRecipeWrong:"Nog niet. Je maatbeker toont {made}, maar je hebt {target} nodig."
    });


    /* v58 — volledige ontbrekende vertalingen voor NL/EN/FR/TL */
    Object.assign(I18N.en, {
      targetFractionWater:"Water well",
      targetFractionTreasure:"Share the treasure",
      targetFractionRhythm:"Rhythm builder",
      targetFractionRoute:"Boat route",
      targetFractionRecipe:"Recipes",
      fractionHintWater:"Fill or empty the well until the water is exactly at the requested fraction.",
      fractionHintTreasure:"Take the requested fraction of all pearls. First find the whole, then the part.",
      fractionHintRhythm:"Fill the measure bar exactly to 1 whole.",
      fractionHintRoute:"The full route is 1. Sail to the requested fraction of the route.",
      fractionHintRecipe:"Use the measuring cup. Add the fractions carefully.",
      sysCheck:"Check",
      sysReset:"Reset",
      sysUndo:"Undo",
      sysGood:"Good!",
      sysWaterGood:"Good! The water is at {made}.",
      sysWaterWrong:"Not yet. The water is at {made}, but it should be at {target}.",
      sysTreasureGood:"Good! {count} out of {total} is {frac}.",
      sysTreasureWrong:"Not yet. You chose {count}. You need to choose {need}.",
      sysRhythmGood:"Nice! The measure is exactly 1 whole.",
      sysRhythmWrong:"Not yet. Your measure is now {made}.",
      sysRouteGood:"Correct! The boat is at {made} of the route.",
      sysRouteWrong:"Not yet. The boat is at {made}, but it should go to {target}.",
      sysRecipeGood:"Good! The measuring cup shows {made}.",
      sysRecipeWrong:"Not yet. Your measuring cup shows {made}, but you need {target}.",
      answerCongruent:"congruent",
      devQuestionListMode:"mode",
      copiedExtra:"also in the console"
    });

    Object.assign(I18N.fr, {
      answerFairNo:"Répartition non équitable",
      answerFairYes:"Répartition équitable",
      answerRealHalfNo:"Ce n’est pas une vraie moitié",
      answerRealHalfYes:"Vraie moitié",
      answerCongruent:"congruentes",
      cakeCheck:"Vérifier",
      cakeClear:"Effacer la couleur",
      cakeCutAgain:"Recouper",
      cakeDoneCutting:"Terminé",
      cakeEquivGood:"Bien ! Tu as fait {made}. C’est équivalent à {target}.",
      cakeExactGood:"Bien ! Tu as fait exactement {made}.",
      cakeParts:"parts",
      cakeResetCut:"Recommencer",
      cakeSmartGood:"Bien joué ! {made} est la façon la plus courte de faire autant que {target}.",
      cakeStepColorEquivalent:"Étape 2 sur 2 : colorie une part équivalente à {target}.",
      cakeStepColorExact:"Étape 2 sur 2 : colorie {n} parts.",
      cakeStepCutEquivalent:"Étape 1 sur 2 : coupe intelligemment. Tu peux choisir le nombre de parts égales.",
      cakeStepCutExact:"Étape 1 sur 2 : coupe le gâteau en {d} parts égales.",
      cakeTapToCut:"Tape sur le gâteau pour créer plus de parts.",
      cakeWrongEquiv:"Pas encore. La partie colorée doit être équivalente à {target}.",
      cakeWrongExact:"Pas encore. Pour {target}, il faut {d} parts égales et tu en colories {n}.",
      currFractionsBuild:"construire soi-même des fractions",
      currFractionsChoose:"passer de la fraction à la figure",
      currFractionsFair:"reconnaître des parts égales et inégales",
      currFractionsIntro:"découvrir le numérateur et le dénominateur",
      currFractionsRead:"passer de la figure à la fraction",
      currFractionsStory:"utiliser les fractions dans de courtes situations",
      fractionHintBuildEquivalent:"Tu peux couper plus intelligemment : 1/2 équivaut à 2/4 et à 4/8.",
      fractionHintBuildExact:"Choisis d’abord le dénominateur : le nombre de parts égales. Colorie ensuite le numérateur.",
      fractionHintChoose:"Lis la fraction : le numérateur en haut, le dénominateur en bas.",
      fractionHintCompare:"Compare la partie colorée du tout.",
      fractionHintEquivalent:"Des découpages différents peuvent représenter la même quantité.",
      fractionHintFair:"Des parts équitables ont la même taille. Une vraie moitié a 2 parts égales dont 1 est coloriée.",
      fractionHintIntro:"Numérateur = parts coloriées. Dénominateur = toutes les parts égales.",
      fractionHintRead:"Compte d’abord toutes les parts égales. Compte ensuite les parts coloriées.",
      fractionHintRecipe:"Utilise le verre doseur. Additionne les fractions calmement.",
      fractionHintRhythm:"Remplis la barre de mesure exactement jusqu’à 1 entier.",
      fractionHintRoute:"La route complète vaut 1. Navigue jusqu’à la fraction demandée de la route.",
      fractionHintStory:"Cherche d’abord le tout. Le numérateur indique la partie choisie.",
      fractionHintTreasure:"Prends la fraction demandée de toutes les perles. D’abord le tout, puis la partie.",
      fractionHintWater:"Remplis ou vide jusqu’à ce que l’eau arrive exactement à la fraction demandée.",
      pathFractionsBuild:"Construire la fraction",
      pathFractionsChoose:"Choisir la figure",
      pathFractionsFair:"Parts égales",
      pathFractionsRead:"Lire la fraction",
      pathFractionsReadChoose:"Lire et choisir",
      pathFractionsStory:"Mélange et histoire",
      pathCoordHub:"Départ",
      pathCoordMastery:"Finale",
      pathEquationHub:"Départ",
      pathEquationFormula:"Formule",
      pathEquationMastery:"Finale",
      pathFractionsHub:"Départ",
      pathFractionsMastery:"Finale",
      pathFractionsMixed:"Mélange",
      pathIneqHub:"Départ",
      pathIneqMastery:"Finale",
      pathIneqMixed:"Mélange",
      pathNumberHub:"Départ",
      pathNumberMastery:"Finale",
      pathPercentHub:"Départ",
      pathPercentMastery:"Finale",
      pathShapeHub:"Départ",
      pathShapeMastery:"Finale",
      levelMix:"Mélange",
      levelWord:"Niveau",
      loginPasswordPlaceholder:"Mot de passe",
      devQuestionListLevel:"niveau",
      devQuestionListMode:"mode",
      pathEditorReset:"Réinitialiser",
      playedRewardLine:"{played} <b>{topic}</b>.",
      qaOk:"✓ OK",
      score:"Score",
      targetFractionBuildEquivalent:"fais une quantité équivalente à",
      targetFractionBuildEquivalentSame:"construis la même valeur que",
      targetFractionBuildEquivalentSmart:"coupe intelligemment : équivalent à",
      targetFractionBuildExact:"fais exactement",
      targetFractionBuildExactColor:"construis la fraction",
      targetFractionBuildExactCut:"coupe et colorie",
      targetFractionChoose:"quelle figure montre",
      targetFractionCompareGreater:"trouve plus grand que",
      targetFractionCompareSmaller:"trouve plus petit que",
      targetFractionEquivalent:"trouve une fraction équivalente à",
      targetFractionFair:"quelle figure est partagée équitablement en parts égales ?",
      targetFractionFairCheck:"ce gâteau est-il partagé équitablement ?",
      targetFractionFairHalf:"quelle figure montre une vraie moitié ?",
      targetFractionFairHalfCheck:"est-ce une vraie moitié ?",
      targetFractionFairNot:"quelle figure n’est PAS partagée équitablement ?",
      targetFractionIntroColored:"combien de parts sont coloriées ?",
      targetFractionIntroDenominator:"clique sur le dénominateur",
      targetFractionIntroNumerator:"clique sur le numérateur",
      targetFractionIntroTotal:"combien y a-t-il de parts égales ?",
      targetFractionRead:"quelle fraction vois-tu ?",
      targetFractionRecipe:"Recettes",
      targetFractionRhythm:"Constructeur de rythme",
      targetFractionRoute:"Route du bateau",
      targetFractionStory:"histoire de fractions",
      targetFractionTreasure:"Partager le trésor",
      targetFractionWater:"Puits d’eau",
      sysCheck:"Vérifier",
      sysReset:"Réinitialiser",
      sysUndo:"Annuler",
      sysGood:"Bien !",
      sysWaterGood:"Bien ! L’eau est à {made}.",
      sysWaterWrong:"Pas encore. L’eau est à {made}, mais elle doit être à {target}.",
      sysTreasureGood:"Bien ! {count} sur {total}, c’est {frac}.",
      sysTreasureWrong:"Pas encore. Tu as choisi {count}. Tu dois choisir {need}.",
      sysRhythmGood:"Très bien ! La mesure vaut exactement 1 entier.",
      sysRhythmWrong:"Pas encore. Ta mesure vaut maintenant {made}.",
      sysRouteGood:"Correct ! Le bateau est à {made} de la route.",
      sysRouteWrong:"Pas encore. Le bateau est à {made}, mais il doit aller à {target}.",
      sysRecipeGood:"Bien ! Le verre doseur indique {made}.",
      sysRecipeWrong:"Pas encore. Ton verre doseur indique {made}, mais il faut {target}."
    });

    Object.assign(I18N.tl, {
      answerFairNo:"Hindi pantay ang hati",
      answerFairYes:"Pantay ang hati",
      answerRealHalfNo:"Hindi tunay na kalahati",
      answerRealHalfYes:"Tunay na kalahati",
      answerCongruent:"magkapareho ang hugis at sukat",
      cakeCheck:"Suriin",
      cakeClear:"Burahin ang kulay",
      cakeCutAgain:"Hatiin muli",
      cakeDoneCutting:"Tapos",
      cakeEquivGood:"Tama! Nakagawa ka ng {made}. Katumbas ito ng {target}.",
      cakeExactGood:"Tama! Eksaktong {made} ang nagawa mo.",
      cakeParts:"bahagi",
      cakeResetCut:"Magsimula muli",
      cakeSmartGood:"Magaling! {made} ang pinakamaikling paraan para makagawa ng katumbas ng {target}.",
      cakeStepColorEquivalent:"Hakbang 2 ng 2: kulayan ang katumbas ng {target}.",
      cakeStepColorExact:"Hakbang 2 ng 2: kulayan ang {n} bahagi.",
      cakeStepCutEquivalent:"Hakbang 1 ng 2: hatiin nang matalino. Ikaw ang pipili ng bilang ng pantay na bahagi.",
      cakeStepCutExact:"Hakbang 1 ng 2: hatiin ang cake sa {d} pantay na bahagi.",
      cakeTapToCut:"I-tap ang cake para gumawa ng mas maraming bahagi.",
      cakeWrongEquiv:"Hindi pa. Ang kinulayang bahagi ay dapat katumbas ng {target}.",
      cakeWrongExact:"Hindi pa. Para sa {target}, kailangan mo ng {d} pantay na bahagi at kukulayan mo ang {n}.",
      currFractionsBuild:"bumuo mismo ng mga praksyon",
      currFractionsChoose:"mula praksyon patungo sa figure",
      currFractionsFair:"kilalanin ang pantay at hindi pantay na bahagi",
      currFractionsIntro:"kilalanin ang numerator at denominator",
      currFractionsRead:"mula figure patungo sa praksyon",
      currFractionsStory:"gamitin ang praksyon sa maiikling sitwasyon",
      fractionHintBuildEquivalent:"Puwede kang maghati nang mas matalino: ang 1/2 ay katumbas ng 2/4 at 4/8.",
      fractionHintBuildExact:"Piliin muna ang denominator: ganoon karami ang pantay na bahagi. Pagkatapos, kulayan ang numerator.",
      fractionHintChoose:"Basahin ang praksyon: numerator sa itaas, denominator sa ibaba.",
      fractionHintCompare:"Ihambing kung gaano karami sa kabuuan ang may kulay.",
      fractionHintEquivalent:"Magkaibang hati ang maaaring magpakita ng parehong dami.",
      fractionHintFair:"Pantay ang mga bahagi kapag pare-pareho ang laki. Ang tunay na kalahati ay may 2 pantay na bahagi at 1 ang may kulay.",
      fractionHintIntro:"Numerator = mga bahaging may kulay. Denominator = lahat ng pantay na bahagi.",
      fractionHintRead:"Bilangin muna ang lahat ng pantay na bahagi. Pagkatapos, bilangin ang may kulay.",
      fractionHintRecipe:"Gamitin ang measuring cup. Dahan-dahang idagdag ang mga praksyon.",
      fractionHintRhythm:"Punuin ang measure bar nang eksakto hanggang 1 buo.",
      fractionHintRoute:"Ang buong ruta ay 1. Maglayag hanggang sa hinihinging praksyon ng ruta.",
      fractionHintStory:"Hanapin muna ang kabuuan. Ang numerator ang napiling bahagi.",
      fractionHintTreasure:"Kunin ang hinihinging praksyon ng lahat ng perlas. Una ang kabuuan, pagkatapos ang bahagi.",
      fractionHintWater:"Punuin o bawasan hanggang eksaktong nasa hinihinging praksyon ang tubig.",
      pathFractionsBuild:"Bumuo ng praksyon",
      pathFractionsChoose:"Piliin ang figure",
      pathFractionsFair:"Pantay na bahagi",
      pathFractionsRead:"Basahin ang praksyon",
      pathFractionsReadChoose:"Basahin at piliin",
      pathFractionsStory:"Halo at kuwento",
      pathCoordHub:"Simula",
      pathCoordMastery:"Pangwakas",
      pathEquationHub:"Simula",
      pathEquationMastery:"Pangwakas",
      pathFractionsHub:"Simula",
      pathFractionsMastery:"Pangwakas",
      pathFractionsMixed:"Halo",
      pathIneqHub:"Simula",
      pathIneqMastery:"Pangwakas",
      pathIneqMixed:"Halo",
      pathNumberHub:"Simula",
      pathNumberMastery:"Pangwakas",
      pathPercentHub:"Simula",
      pathPercentMastery:"Pangwakas",
      pathShapeHub:"Simula",
      pathShapeMastery:"Pangwakas",
      levelMix:"Halo",
      loginButton:"Simulan",
      loginPasswordPlaceholder:"Password",
      devQuestionListMode:"uri",
      pathEditorReset:"I-reset",
      playedRewardLine:"{played} <b>{topic}</b>.",
      qaOk:"✓ OK",
      reset:"I-reset",
      startTest:"Simulan ang test",
      test100:"Test 100",
      targetFractionBuildEquivalent:"gumawa ng katumbas ng",
      targetFractionBuildEquivalentSame:"bumuo ng parehong halaga ng",
      targetFractionBuildEquivalentSmart:"hatiin nang matalino: katumbas ng",
      targetFractionBuildExact:"gumawa nang eksakto",
      targetFractionBuildExactColor:"bumuo ng praksyon",
      targetFractionBuildExactCut:"hatiin at kulayan",
      targetFractionChoose:"aling figure ang nagpapakita ng",
      targetFractionCompareGreater:"hanapin ang mas malaki kaysa",
      targetFractionCompareSmaller:"hanapin ang mas maliit kaysa",
      targetFractionEquivalent:"hanapin ang katumbas ng",
      targetFractionFair:"aling figure ang pantay ang hati sa magkakaparehong bahagi?",
      targetFractionFairCheck:"pantay ba ang hati ng cake na ito?",
      targetFractionFairHalf:"aling figure ang nagpapakita ng tunay na kalahati?",
      targetFractionFairHalfCheck:"tunay bang kalahati ito?",
      targetFractionFairNot:"aling figure ang HINDI pantay ang hati?",
      targetFractionIntroColored:"ilang bahagi ang may kulay?",
      targetFractionIntroDenominator:"i-click ang denominator",
      targetFractionIntroNumerator:"i-click ang numerator",
      targetFractionIntroTotal:"ilang pantay na bahagi ang mayroon?",
      targetFractionRead:"aling praksyon ang nakikita mo?",
      targetFractionRecipe:"Mga resipe",
      targetFractionRhythm:"Tagabuo ng ritmo",
      targetFractionRoute:"Ruta ng bangka",
      targetFractionStory:"kuwento ng praksyon",
      targetFractionTreasure:"Hatiin ang kayamanan",
      targetFractionWater:"Balon ng tubig",
      sysCheck:"Suriin",
      sysReset:"I-reset",
      sysUndo:"I-undo",
      sysGood:"Tama!",
      sysWaterGood:"Tama! Ang tubig ay nasa {made}.",
      sysWaterWrong:"Hindi pa. Ang tubig ay nasa {made}, pero dapat nasa {target}.",
      sysTreasureGood:"Tama! {count} sa {total} ay {frac}.",
      sysTreasureWrong:"Hindi pa. Pinili mo ang {count}. Kailangan mong pumili ng {need}.",
      sysRhythmGood:"Maganda! Eksaktong 1 buo ang sukat.",
      sysRhythmWrong:"Hindi pa. Ang sukat mo ngayon ay {made}.",
      sysRouteGood:"Tama! Ang bangka ay nasa {made} ng ruta.",
      sysRouteWrong:"Hindi pa. Ang bangka ay nasa {made}, pero dapat pumunta sa {target}.",
      sysRecipeGood:"Tama! Ang measuring cup ay nagpapakita ng {made}.",
      sysRecipeWrong:"Hindi pa. Ang measuring cup mo ay nagpapakita ng {made}, pero kailangan mo ng {target}."
    });

  function normalizeI18NCompleteness(){
    if(!window.__i18nNormalizedOnce && typeof I18N === "object" && I18N.nl){
      const base = I18N.nl;
      ["en","fr","tl"].forEach(lang => {
        I18N[lang] = I18N[lang] || {};
        Object.keys(base).forEach(key => {
          if(!(key in I18N[lang])){
            I18N[lang][key] = (lang !== "en" && I18N.en && key in I18N.en) ? I18N.en[key] : base[key];
          }
        });
      });
      window.__i18nNormalizedOnce = true;
    }
  }
  normalizeI18NCompleteness();


    function unitsForFraction(f, denom=8){
      return Math.round((f[0] / f[1]) * denom);
    }
    function fracFromUnits(units, denom=8){
      const u = Math.max(0, Math.min(denom, units));
      if(u === 0) return [0,1];
      if(u === denom) return [1,1];
      return reducePair(u, denom);
    }
    function fracLabelFromUnits(units, denom=8){
      const f = fracFromUnits(units, denom);
      return fracTxt(f[0], f[1]);
    }
    function miniGood(msg){
      locked = true;
      score += 10 + level;
      correctRemaining = 0; correctTotal = 1;
      updateHUD(); playSuccessSound();
      showToast(msg || tr("sysGood"), true);
      setTimer(() => { if(round >= maxRounds) end(); else nextRound(); }, AUTO_NEXT_DELAY_MS);
    }
    function miniWrong(msg, fb){
      perfectRun = false;
      score = Math.max(0, score - 3);
      updateHUD(); playWrongSound();
      if(fb){ fb.textContent = msg; fb.className = "sysFeedback bad"; }
      showToast(msg, false);
    }
    function isFractionSystemTask(t){
      return t && t.topic === "fractions" && [
        "fraction-water","fraction-treasure","fraction-rhythm","fraction-route","fraction-recipe"
      ].includes(t.mode);
    }

    function waterTask(){
      const targets = [[1,2],[3,4],[1,4],[5,8],[7,8]];
      const target = targets[Math.floor(Math.random()*targets.length)];
      const starts = [[0,1],[1,4],[1,8],[1,2]].filter(s => s[0]*target[1] < target[0]*s[1]);
      const start = Math.random() < .45 ? starts[Math.floor(Math.random()*starts.length)] : [0,1];
      return {
        topic:"fractions", mode:"fraction-water", skill:"fractionsStory",
        targetFraction:target, startFraction:start,
        storyKey:start[0] ? "storyWaterFillFrom" : "storyWaterFillTo",
        storyVars:{start:fmtFrac(start), target:fmtFrac(target)}
      };
    }
    function treasureTask(){
      const options = [
        {total:8, frac:[1,4]}, {total:8, frac:[3,4]}, {total:10, frac:[2,5]},
        {total:12, frac:[1,3]}, {total:12, frac:[1,2]}, {total:6, frac:[2,3]}
      ];
      const o = options[Math.floor(Math.random()*options.length)];
      const need = Math.round(o.total * o.frac[0] / o.frac[1]);
      return {topic:"fractions", mode:"fraction-treasure", skill:"fractionsStory", total:o.total, need, targetFraction:o.frac,
        storyKey:"storyTreasureElla", storyVars:{frac:fmtFrac(o.frac), total:o.total}};
    }
    function rhythmTask(){
      return {topic:"fractions", mode:"fraction-rhythm", skill:"fractionsStory", targetFraction:[1,1],
        storyKey:"storyRhythmWhole", storyVars:{}};
    }
    function routeTask(){
      const targets = [[1,4],[1,2],[3,4],[5,8],[7,8]];
      const target = targets[Math.floor(Math.random()*targets.length)];
      return {topic:"fractions", mode:"fraction-route", skill:"fractionsStory", targetFraction:target,
        storyKey:"storyRouteTo", storyVars:{target:fmtFrac(target)}};
    }
    function recipeTask(){
      const options = [
        {per:[1,2], times:2, target:[1,1]},
        {per:[1,4], times:2, target:[1,2]},
        {per:[1,4], times:3, target:[3,4]},
        {per:[1,8], times:4, target:[1,2]},
        {per:[1,3], times:2, target:[2,3]}
      ];
      const o = options[Math.floor(Math.random()*options.length)];
      return {topic:"fractions", mode:"fraction-recipe", skill:"fractionsStory", targetFraction:o.target,
        storyKey:"storyRecipeMilk", storyVars:{per:fmtFrac(o.per), times:o.times}};
    }
    function randomSystemTask(){
      const makers = [waterTask, treasureTask, rhythmTask, routeTask, recipeTask];
      return makers[Math.floor(Math.random()*makers.length)]();
    }

    const prevCreateTaskForCurriculumSkill_v32 = createTaskForCurriculumSkill;
    createTaskForCurriculumSkill = function(topic, level, skill){
      if(topic === "fractions" && skill === "fractionsStory"){
        return Math.random() < .78 ? randomSystemTask() : storyTask();
      }
      return prevCreateTaskForCurriculumSkill_v32(topic, level, skill);
    };
    const prevCreateFractionTaskForLevel_v32 = createFractionTaskForLevel;
    createFractionTaskForLevel = function(level){
      if(level >= 8 && Math.random() < .70) return randomSystemTask();
      return prevCreateFractionTaskForLevel_v32(level);
    };
    const prevCorrectWantedForTask_v32 = correctWantedForTask;
    correctWantedForTask = function(task, level, count){
      if(isFractionSystemTask(task)) return 1;
      return prevCorrectWantedForTask_v32(task, level, count);
    };
    const prevRenderTarget_v32 = renderTarget;
    renderTarget = function(task){
      if(isFractionSystemTask(task)){
        targetText.textContent = task.story || tr("targetFractionStory");
        targetFrac.classList.add("hidden");
        targetModelWrap.innerHTML = ""; targetModelWrap.classList.add("hidden");
        numberLineWrap.innerHTML = ""; numberLineWrap.classList.add("hidden");
        return;
      }
      return prevRenderTarget_v32(task);
    };
    const prevUpdateHint_v32 = updateHint;
    updateHint = function(task){
      if(task && task.mode === "fraction-water"){ hintText.textContent = tr("fractionHintWater"); return; }
      if(task && task.mode === "fraction-treasure"){ hintText.textContent = tr("fractionHintTreasure"); return; }
      if(task && task.mode === "fraction-rhythm"){ hintText.textContent = tr("fractionHintRhythm"); return; }
      if(task && task.mode === "fraction-route"){ hintText.textContent = tr("fractionHintRoute"); return; }
      if(task && task.mode === "fraction-recipe"){ hintText.textContent = tr("fractionHintRecipe"); return; }
      return prevUpdateHint_v32(task);
    };
    const prevDebugTaskType_v32 = debugTaskType;
    debugTaskType = function(t){
      const map = {
        "fraction-water":"watermeter: vullen tot breuk",
        "fraction-treasure":"schat verdelen: deel van verzameling",
        "fraction-rhythm":"ritmebouwer: breuken samen tot 1",
        "fraction-route":"bootroute: breuk als afstand",
        "fraction-recipe":"recept: breuken optellen in context"
      };
      return t && map[t.mode] ? map[t.mode] : prevDebugTaskType_v32(t);
    };

    function makePanel(task, titleKey, subtitle){
      clearFractionActivity();
      const panel = document.createElement("div");
      panel.className = "fractionSystemPanel";
      const mission = document.createElement("div");
      mission.className = "fractionSystemMission";
      const resolvedSubtitle = subtitle || (task && task.storyKey ? replaceVars(tr(task.storyKey), task.storyVars || {}) : (task.story || ""));
      mission.innerHTML = `${tr(titleKey)}<small>${resolvedSubtitle}</small>`;
      const visual = document.createElement("div");
      visual.className = "systemVisual";
      const feedback = document.createElement("div");
      feedback.className = "sysFeedback";
      const actions = document.createElement("div");
      actions.className = "sysActions";
      panel.appendChild(mission); panel.appendChild(visual); panel.appendChild(actions); panel.appendChild(feedback);
      stage.appendChild(panel);
      return {panel, mission, visual, actions, feedback};
    }
    function renderMeterVisual(visual, units, targetUnits, className="meterBox"){
      visual.innerHTML = "";
      const box = document.createElement("div");
      box.className = className;
      const water = document.createElement("div");
      water.className = className === "recipeCup" ? "recipeFill" : "meterWater";
      water.style.height = `${Math.max(0, Math.min(1, units/8))*100}%`;
      if(className !== "recipeCup"){
        const wave = document.createElement("div"); wave.className = "meterWave"; water.appendChild(wave);
      }
      box.appendChild(water);
      for(let u of [0,2,4,6,8]){
        const mark = document.createElement("div");
        mark.className = "meterMark";
        mark.style.bottom = `${u/8*100}%`;
        box.appendChild(mark);
      }
      const target = document.createElement("div");
      target.className = "meterTarget";
      target.style.bottom = `${targetUnits/8*100}%`;
      box.appendChild(target);
      visual.appendChild(box);
      if(className === "recipeCup"){
        const steam = document.createElement("div"); steam.className = "recipeSteam"; steam.textContent = "🥛"; visual.appendChild(steam);
      }
    }
    function renderWaterOrRecipe(task, recipe=false){
      const targetUnits = unitsForFraction(task.targetFraction, 8);
      let units = recipe ? 0 : unitsForFraction(task.startFraction || [0,1], 8);
      const ui = makePanel(task, recipe ? "targetFractionRecipe" : "targetFractionWater", task.story);
      ui.actions.className = "sysActions";
      function redraw(){
        renderMeterVisual(ui.visual, units, targetUnits, recipe ? "recipeCup" : "meterBox");
        ui.feedback.textContent = `${tr(recipe ? "fractionLabelCup" : "fractionLabelWater")}: ${fracLabelFromUnits(units,8)}`;
        ui.feedback.className = "sysFeedback";
      }
      const buttons = [
        ["+ 1/2", () => {units=Math.min(8,units+4); redraw();}],
        ["+ 1/4", () => {units=Math.min(8,units+2); redraw();}],
        ["+ 1/8", () => {units=Math.min(8,units+1); redraw();}],
        [tr("sysReset"), () => {units=recipe ? 0 : unitsForFraction(task.startFraction || [0,1],8); redraw();}],
      ];
      buttons.forEach(([label,fn]) => { const b=document.createElement("button"); b.className="sysBtn"; b.textContent=label; b.addEventListener("click",fn); ui.actions.appendChild(b); });
      const check = document.createElement("button"); check.className="sysBtn primary"; check.textContent=tr("sysCheck");
      check.addEventListener("click", () => {
        const made = fracLabelFromUnits(units,8), target = fmtFrac(task.targetFraction);
        if(units === targetUnits) miniGood(replaceVars(recipe ? tr("sysRecipeGood") : tr("sysWaterGood"), {made}));
        else miniWrong(replaceVars(recipe ? tr("sysRecipeWrong") : tr("sysWaterWrong"), {made, target}), ui.feedback);
      });
      ui.actions.appendChild(check);
      redraw();
    }
    function renderTreasure(task){
      let selected = new Set();
      const ui = makePanel(task, "targetFractionTreasure", task.story);
      ui.actions.className = "sysActions two";
      const grid = document.createElement("div"); grid.className = "treasureGrid"; ui.visual.appendChild(grid);
      function redraw(){
        grid.innerHTML = "";
        for(let i=0;i<task.total;i++){
          const p = document.createElement("button");
          p.type = "button"; p.className = "pearlBtn" + (selected.has(i) ? " selected" : "");
          p.setAttribute("aria-label", tr("fractionLabelPearl") + " " + (i+1));
          p.addEventListener("click", () => { if(selected.has(i)) selected.delete(i); else selected.add(i); redraw(); });
          grid.appendChild(p);
        }
        ui.feedback.textContent = replaceVars(tr("fractionChosenCount"), {count:selected.size, total:task.total});
        ui.feedback.className = "sysFeedback";
      }
      const reset = document.createElement("button"); reset.className="sysBtn"; reset.textContent=tr("sysReset");
      reset.addEventListener("click", () => {selected.clear(); redraw();});
      const check = document.createElement("button"); check.className="sysBtn primary"; check.textContent=tr("sysCheck");
      check.addEventListener("click", () => {
        if(selected.size === task.need) miniGood(replaceVars(tr("sysTreasureGood"), {count:task.need, total:task.total, frac:fmtFrac(task.targetFraction)}));
        else miniWrong(replaceVars(tr("sysTreasureWrong"), {count:selected.size, need:task.need}), ui.feedback);
      });
      ui.actions.appendChild(reset); ui.actions.appendChild(check);
      redraw();
    }
    function renderRhythm(task){
      let units = 0;
      const ui = makePanel(task, "targetFractionRhythm", task.story);
      ui.actions.className = "sysActions";
      function redraw(){
        ui.visual.innerHTML = "";
        const bar = document.createElement("div"); bar.className = "rhythmBar";
        let remaining = Math.max(0, 8-units);
        const chosen = task._rhythmParts || [];
        chosen.forEach(part => {
          const seg = document.createElement("div"); seg.className = "rhythmSeg"; seg.style.flex = String(part.u); seg.textContent = part.label; bar.appendChild(seg);
        });
        if(remaining > 0){ const empty = document.createElement("div"); empty.className = "rhythmEmpty"; empty.style.flex = String(remaining); bar.appendChild(empty); }
        ui.visual.appendChild(bar);
        ui.feedback.textContent = `${tr("fractionLabelMeasure")}: ${fracLabelFromUnits(units,8)}`;
        ui.feedback.className = "sysFeedback";
      }
      task._rhythmParts = [];
      [["1/2",4],["1/4",2],["1/8",1]].forEach(([label,u]) => {
        const b=document.createElement("button"); b.className="sysBtn"; b.textContent=label;
        b.addEventListener("click", () => { if(units + u <= 8){ units += u; task._rhythmParts.push({label,u}); redraw(); } });
        ui.actions.appendChild(b);
      });
      const undo=document.createElement("button"); undo.className="sysBtn"; undo.textContent=tr("sysUndo");
      undo.addEventListener("click", () => { const p=task._rhythmParts.pop(); if(p) units -= p.u; redraw(); });
      const check=document.createElement("button"); check.className="sysBtn primary"; check.textContent=tr("sysCheck");
      check.addEventListener("click", () => {
        if(units === 8) miniGood(tr("sysRhythmGood"));
        else miniWrong(replaceVars(tr("sysRhythmWrong"), {made:fracLabelFromUnits(units,8)}), ui.feedback);
      });
      ui.actions.appendChild(undo); ui.actions.appendChild(check);
      redraw();
    }
    function renderRoute(task){
      let units = 0;
      const targetUnits = unitsForFraction(task.targetFraction,8);
      const ui = makePanel(task, "targetFractionRoute", task.story);
      ui.actions.className = "sysActions";
      function redraw(){
        ui.visual.innerHTML = "";
        const wrap = document.createElement("div"); wrap.className = "routeWrap";
        const line = document.createElement("div"); line.className = "routeLine"; wrap.appendChild(line);
        const target = document.createElement("div"); target.className = "routeTarget"; target.style.left = `calc(20px + (100% - 40px) * ${targetUnits/8})`; wrap.appendChild(target);
        const boat = document.createElement("div"); boat.className = "routeBoat"; boat.style.left = `calc(20px + (100% - 40px) * ${units/8})`; boat.textContent = "⛵"; wrap.appendChild(boat);
        const flags = document.createElement("div"); flags.className = "routeFlags"; flags.innerHTML = "<span>0</span><span>1/4</span><span>1/2</span><span>3/4</span><span>1</span>"; wrap.appendChild(flags);
        ui.visual.appendChild(wrap);
        ui.feedback.textContent = `${tr("fractionLabelBoat")}: ${fracLabelFromUnits(units,8)}`;
        ui.feedback.className = "sysFeedback";
      }
      [["+ 1/4",2],["+ 1/8",1],["− 1/8",-1]].forEach(([label,u]) => {
        const b=document.createElement("button"); b.className="sysBtn"; b.textContent=label;
        b.addEventListener("click", () => { units = Math.max(0, Math.min(8, units+u)); redraw(); });
        ui.actions.appendChild(b);
      });
      const check=document.createElement("button"); check.className="sysBtn primary"; check.textContent=tr("sysCheck");
      check.addEventListener("click", () => {
        const made = fracLabelFromUnits(units,8), target = fmtFrac(task.targetFraction);
        if(units === targetUnits) miniGood(replaceVars(tr("sysRouteGood"), {made}));
        else miniWrong(replaceVars(tr("sysRouteWrong"), {made, target}), ui.feedback);
      });
      ui.actions.appendChild(check);
      redraw();
    }
    function renderFractionSystemTask(task){
      if(task.mode === "fraction-water") return renderWaterOrRecipe(task, false);
      if(task.mode === "fraction-recipe") return renderWaterOrRecipe(task, true);
      if(task.mode === "fraction-treasure") return renderTreasure(task);
      if(task.mode === "fraction-rhythm") return renderRhythm(task);
      if(task.mode === "fraction-route") return renderRoute(task);
    }
    function buildSafeFallbackData(task, count){
      if(!task || task.topic !== "fractions") return [];
      const data = [];
      const pushText = (label, correct) => data.push({label, correct, text:label});
      if(task.mode === "fraction-equivalent"){
        const [n,d] = task.targetFraction || [1,2];
        const variants = task.family && task.family.variants ? distinctVariants(task.family.variants) : [[n,d],[n*2,d*2],[n*3,d*3]].filter(f => f[0] <= f[1]);
        const corrects = variants.slice(0, Math.min(2, count));
        corrects.forEach(f => pushText(`${f[0]}/${f[1]}`, true));
        const distractors = collectDistractorsForEqual([n,d], 10).slice(0, Math.max(0, count - data.length));
        distractors.forEach(f => pushText(`${f[0]}/${f[1]}`, false));
        return shuffle(data).slice(0, count);
      }
      if(task.mode === "fraction-read" || task.mode === "fraction-choose" || task.mode === "greater" || task.mode === "smaller"){
        const [n,d] = task.targetFraction || [1,2];
        const labels = new Set([`${n}/${d}`]);
        pushText(`${n}/${d}`, task.mode !== "greater" && task.mode !== "smaller");
        [[1,2],[1,3],[2,3],[3,4],[1,4],[2,5],[5,8]].forEach(f => {
          const k=`${f[0]}/${f[1]}`;
          if(labels.has(k) || data.length >= count) return;
          let correct=false;
          if(task.mode === "greater") correct = f[0]*d > n*f[1];
          if(task.mode === "smaller") correct = f[0]*d < n*f[1];
          pushText(k, correct);
          labels.add(k);
        });
        return shuffle(data).slice(0, count);
      }
      return [];
    }

    const prevNextRound_v28 = nextRound;
    nextRound = function(){
      hideNextRoundButton();
      clearTimers();

      if(round >= maxRounds){
        end();
        return;
      }

      round++;
      const sessionMaxLevel = Math.max(1, Number(sessionPlan.maxLevel || 9));
      level = Math.max(1, Math.min(sessionMaxLevel, Math.ceil((round / Math.max(1, maxRounds)) * sessionMaxLevel)));
      updateWorldMusic();
      locked = false;
      clearBubbles();

      let count = bubbleCountForLevel(level);
      let correctWanted = 1;
      let data = [];

      for(let attempt = 0; attempt < 12; attempt++){
        task = createTaskForLevel(level);
        count = bubbleCountForLevel(level);
        correctWanted = correctWantedForTask(task, level, count);

        if(isCakeTask(task) || isFractionSystemTask(task)){
          data = [];
          break;
        }

        data = validateRoundData(buildBubbleData(task, count, correctWanted), task, count);
        if(data.length === count && data.some(item => item.correct)) break;
      }
      if(!isCakeTask(task) && !isFractionSystemTask(task) && (data.length !== count || !data.some(item => item.correct))){
        const fallback = buildSafeFallbackData(task, count);
        if(fallback.length) data = fallback;
      }

      renderTarget(task);

      if(isCakeTask(task) || isFractionSystemTask(task)){
        correctRemaining = 1;
        correctTotal = 1;
        updateHUD();
        updateHint(task);
        if(isCakeTask(task)) renderCakeBuilder(task);
        else renderFractionSystemTask(task);
        return;
      }

      const positions = layoutPositions(data.length || count);
      data.forEach((item, i) => {
        const el = createBubble(item, positions[i], i);
        stage.appendChild(el);
        requestAnimationFrame(() => fitBubbleText(el, item));
        item.el = el;
        bubbles.push(item);
      });

      correctRemaining = data.filter(b => b.correct).length;
      correctTotal = correctRemaining;
      updateHUD();
      updateHint(task);
      markDebugAnswers();
    };
  })();



  /* =========================================================
     v27.31 — Gelijke stukken gebouwd als eigen mini-game.
     Eén grote taart/figuur centraal, leerling kiest eerlijk/niet eerlijk
     of echte helft/geen echte helft.
     ========================================================= */
  (function(){
    function fairCheckTask(){
      const variants = [
        {shape:"pie", n:1, d:2, fair:true, half:true},
        {shape:"grid", n:2, d:4, fair:true, half:true},
        {shape:"bar", n:1, d:3, fair:true, half:false},
        {shape:"circles", n:3, d:6, fair:true, half:true},
        {shape:"unequalHalf", n:1, d:2, fair:false, half:false},
        {shape:"unequalThird", n:1, d:3, fair:false, half:false},
        {shape:"unequalFour", n:2, d:4, fair:false, half:false},
        {shape:"unequalStrip", n:3, d:5, fair:false, half:false}
      ];
      const v = variants[Math.floor(Math.random()*variants.length)];
      const subtype = Math.random() < .58 ? "fair" : "half";
      return {
        topic:"fractions",
        mode:"fraction-fair-check",
        skill:"fractionsFair",
        subtype,
        model:v,
        correctLabels: subtype === "fair"
          ? [v.fair ? tr("answerFairYes") : tr("answerFairNo")]
          : [v.half ? tr("answerRealHalfYes") : tr("answerRealHalfNo")],
        distractorLabels: subtype === "fair"
          ? [v.fair ? tr("answerFairNo") : tr("answerFairYes")]
          : [v.half ? tr("answerRealHalfNo") : tr("answerRealHalfYes")]
      };
    }

    const prevCreateTaskForCurriculumSkill_v31 = createTaskForCurriculumSkill;
    createTaskForCurriculumSkill = function(topic, level, skill){
      if(topic === "fractions" && skill === "fractionsFair"){
        return fairCheckTask();
      }
      return prevCreateTaskForCurriculumSkill_v31(topic, level, skill);
    };

    const prevCreateFractionTaskForLevel_v31 = createFractionTaskForLevel;
    createFractionTaskForLevel = function(level){
      if(level <= 2) return level <= 1 ? prevCreateTaskForCurriculumSkill_v31("fractions", level, "fractionsIntro") : fairCheckTask();
      return prevCreateFractionTaskForLevel_v31(level);
    };

    const prevBuildBubbleData_v31 = buildBubbleData;
    buildBubbleData = function(task, count, correctWanted){
      if(task && task.topic === "fractions" && task.mode === "fraction-fair-check"){
        const data = [];
        const add = (label, correct) => data.push(makeTextItem(label, correct, data.length));
        add(task.correctLabels[0], true);
        add(task.distractorLabels[0], false);
        return shuffle(data);
      }
      return prevBuildBubbleData_v31(task, count, correctWanted);
    };

    const prevCorrectWantedForTask_v31 = correctWantedForTask;
    correctWantedForTask = function(task, level, count){
      if(task && task.topic === "fractions" && task.mode === "fraction-fair-check") return 1;
      return prevCorrectWantedForTask_v31(task, level, count);
    };

    const prevRenderTarget_v31 = renderTarget;
    renderTarget = function(task){
      if(task && task.topic === "fractions" && task.mode === "fraction-fair-check"){
        const m = task.model || {n:1,d:2,shape:"pie"};
        targetText.textContent = task.subtype === "half" ? tr("targetFractionFairHalfCheck") : tr("targetFractionFairCheck");
        targetFrac.classList.add("hidden");
        numberLineWrap.innerHTML = "";
        numberLineWrap.classList.add("hidden");
        targetModelWrap.innerHTML = "";
        targetModelWrap.classList.remove("hidden");
        targetModelWrap.appendChild(renderFigure({
          n:m.n, d:m.d, shape:m.shape, color:colors[0]
        }, true));
        return;
      }
      return prevRenderTarget_v31(task);
    };

    const prevUpdateHint_v31 = updateHint;
    updateHint = function(task){
      if(task && task.topic === "fractions" && task.mode === "fraction-fair-check"){
        hintText.textContent = tr("fractionHintFair");
        return;
      }
      return prevUpdateHint_v31(task);
    };

    const prevDebugTaskType_v31 = debugTaskType;
    debugTaskType = function(t){
      if(t && t.topic === "fractions" && t.mode === "fraction-fair-check"){
        return t.subtype === "half" ? "gelijke stukken: echte helft?" : "gelijke stukken: eerlijk verdeeld?";
      }
      return prevDebugTaskType_v31(t);
    };
  })();




  /* v75 — Breukenzee merge is now injected INSIDE the main game closure.
     Previous v67-v74 patches sat outside this closure, so they could not see I18N,
     renderTarget, nextRound, clearBubbles, etc. This is the actual fix. */
  (function(){
  function safeAssign(lang, values){ if(typeof I18N !== 'undefined' && I18N && I18N[lang]) Object.assign(I18N[lang], values); }
  safeAssign('nl', {
    pathFractionsHub:'Start', pathFractionsFair:'Maak 1/2', pathFractionsReadChoose:'Maak 3/4', pathFractionsBuild:'Maak 5/8', pathFractionsEquivalent:'Maak 7/8', pathFractionsStory:'Bubble meester',
    currFractionsBuild:'breuken optellen door bubbles samen te voegen', targetFractionMergeTop:'Maak', fractionMergeStageTitle:'Sleep de juiste bubble naar de middenbubble', fractionMergeStageSub:'De middenbubble groeit pas wanneer je loslaat.', fractionMergeMoves:'zetten', fractionMergeUndo2:'Terug', fractionMergeReset2:'Opnieuw', fractionMergeHint2:'Hint', fractionMergeNow2:'Nu', fractionMergeGoal2:'Doel', fractionMergeReady2:'Laat de middenbubble groeien tot precies het doel.', fractionMergeHintMsg2:'Probeer eerst de grootste makkelijke stap.', fractionMergeTooMuch2:'Deze twee samen worden groter dan 1.', fractionMergeSolved2:'Juist! Je maakte {target} in {moves} zetten.'
  });
  safeAssign('en', {
    pathFractionsHub:'Start', pathFractionsFair:'Make 1/2', pathFractionsReadChoose:'Make 3/4', pathFractionsBuild:'Make 5/8', pathFractionsEquivalent:'Make 7/8', pathFractionsStory:'Bubble master',
    currFractionsBuild:'add fractions by merging bubbles', targetFractionMergeTop:'Make', fractionMergeStageTitle:'Drag the right bubble into the middle bubble', fractionMergeStageSub:'The middle bubble only grows when you release.', fractionMergeMoves:'moves', fractionMergeUndo2:'Undo', fractionMergeReset2:'Reset', fractionMergeHint2:'Hint', fractionMergeNow2:'Now', fractionMergeGoal2:'Goal', fractionMergeReady2:'Grow the middle bubble until it matches the goal exactly.', fractionMergeHintMsg2:'Try the largest easy step first.', fractionMergeTooMuch2:'These two together become larger than 1.', fractionMergeSolved2:'Correct! You made {target} in {moves} moves.'
  });
  safeAssign('fr', {pathFractionsHub:'Départ', pathFractionsFair:'Fais 1/2', pathFractionsReadChoose:'Fais 3/4', pathFractionsBuild:'Fais 5/8', pathFractionsEquivalent:'Fais 7/8', pathFractionsStory:'Maître des bulles', currFractionsBuild:'additionner des fractions en fusionnant des bulles', targetFractionMergeTop:'Fais', fractionMergeStageTitle:'Glisse la bonne bulle dans la bulle centrale', fractionMergeStageSub:'La bulle centrale grandit seulement quand tu relâches.', fractionMergeMoves:'coups', fractionMergeUndo2:'Retour', fractionMergeReset2:'Reset', fractionMergeHint2:'Indice', fractionMergeNow2:'Maintenant', fractionMergeGoal2:'But', fractionMergeReady2:'Fais grandir la bulle centrale jusqu’au but exact.', fractionMergeHintMsg2:'Commence par la plus grande étape facile.', fractionMergeTooMuch2:'Ces deux bulles dépassent 1.', fractionMergeSolved2:'Correct ! Tu as fait {target} en {moves} coups.'});
  safeAssign('tl', {pathFractionsHub:'Simula', pathFractionsFair:'Gumawa ng 1/2', pathFractionsReadChoose:'Gumawa ng 3/4', pathFractionsBuild:'Gumawa ng 5/8', pathFractionsEquivalent:'Gumawa ng 7/8', pathFractionsStory:'Bubble master', currFractionsBuild:'pagdaragdag ng fractions sa pagsanib ng bubbles', targetFractionMergeTop:'Gumawa ng', fractionMergeStageTitle:'I-drag ang tamang bubble sa gitnang bubble', fractionMergeStageSub:'Lalaki lang ang gitnang bubble kapag binitiwan mo.', fractionMergeMoves:'galaw', fractionMergeUndo2:'Undo', fractionMergeReset2:'Reset', fractionMergeHint2:'Hint', fractionMergeNow2:'Ngayon', fractionMergeGoal2:'Target', fractionMergeReady2:'Palakihin ang gitnang bubble hanggang eksakto ang target.', fractionMergeHintMsg2:'Subukan muna ang pinakamadaling malaking hakbang.', fractionMergeTooMuch2:'Mas malaki na ito sa 1.', fractionMergeSolved2:'Tama! Nakuha mo ang {target} sa {moves} galaw.'});

  try{
    if(typeof ALL_TOPIC_SKILLS !== 'undefined') ALL_TOPIC_SKILLS.fractions = ['fractionsBuild'];
    if(typeof TOPIC_LEARNING_PATHS !== 'undefined' && TOPIC_LEARNING_PATHS.fractions){
      TOPIC_LEARNING_PATHS.fractions.nodes = [
        {id:'start', key:'pathFractionsHub', x:45, y:82, icon:'⌂', skills:['fractionsBuild']},
        {id:'merge1', key:'pathFractionsFair', x:79, y:58, icon:'1', skills:['fractionsBuild']},
        {id:'merge2', key:'pathFractionsReadChoose', x:34, y:55, icon:'2', skills:['fractionsBuild']},
        {id:'merge3', key:'pathFractionsBuild', x:58, y:40, icon:'3', skills:['fractionsBuild']},
        {id:'merge4', key:'pathFractionsEquivalent', x:26, y:30, icon:'4', skills:['fractionsBuild']},
        {id:'master', key:'pathFractionsStory', x:57, y:16, icon:'★', mastery:true, skills:['fractionsBuild']}
      ];
    }
    localStorage.removeItem('bubblePopTopicPathCoords:fractions');
  }catch(e){}

  const style = document.createElement('style');
  style.id = 'v72-fraction-merge-style';
  style.textContent = `
    .fractionMergeBoard{position:absolute;z-index:34;left:10px;right:10px;top:10px;bottom:10px;display:flex;flex-direction:column;gap:8px;padding:10px;border-radius:26px;background:linear-gradient(180deg,rgba(255,255,255,.44),rgba(219,247,255,.18));box-shadow:inset 0 0 0 2px rgba(255,255,255,.45);backdrop-filter:blur(2px);overflow:hidden;}
    .fractionMergeTop{border-radius:20px;padding:8px 10px;background:rgba(255,255,255,.72);box-shadow:inset 0 0 0 2px rgba(89,176,226,.14);text-align:center;color:#173150;font-weight:950;line-height:1.08;}
    .fractionMergeTop .title{font-size:clamp(16px,4.1vw,24px);}.fractionMergeTop .sub{margin-top:3px;font-size:12px;color:#5b7088;font-weight:850;}
    .fractionMergeMeta{display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:6px}.fractionMergePill{display:inline-flex;align-items:center;justify-content:center;min-height:30px;padding:0 12px;border-radius:999px;background:rgba(255,255,255,.84);color:#244064;font-size:13px;font-weight:950;box-shadow:0 6px 12px rgba(20,35,72,.07),inset 0 0 0 2px rgba(255,255,255,.72)}
    .fractionMergeArena{position:relative;flex:1 1 auto;border-radius:24px;overflow:hidden;min-height:280px;background:linear-gradient(180deg,rgba(255,255,255,.13),rgba(255,255,255,.04));box-shadow:inset 0 0 0 2px rgba(255,255,255,.30);touch-action:none;}
    .fractionMergeBubble{position:absolute;left:0;top:0;border:0;background:transparent;padding:0;margin:0;transform:translate(-50%,-50%);border-radius:999px;touch-action:none;cursor:grab;z-index:2}.fractionMergeBubble.dragging{cursor:grabbing;z-index:7}.fractionMergeBubble.targeting{z-index:4}.fractionMergeBubble.invalid{animation:fractionMergeInvalid .26s ease}
    .fractionMergeHit{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);border-radius:999px}.fractionMergeVisual{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);pointer-events:none}.fractionMergeOrb{position:absolute;left:50%;top:50%;width:122%;height:122%;transform:translate(-50%,-50%);object-fit:contain;user-select:none;-webkit-user-drag:none;pointer-events:none}.fractionMergeBubble.dragging .fractionMergeVisual{animation:fractionMergeFloat .9s ease-in-out infinite}.fractionMergeBubble.pop .fractionMergeVisual{animation:fractionMergePop .34s ease-out}.fractionMergeBubble.targeting .fractionMergeVisual{animation:fractionMergeTarget .9s ease-in-out infinite}
    .fractionMergeGlow{position:absolute;left:50%;top:78%;width:88%;height:24%;transform:translate(-50%,-50%);border-radius:999px;background:radial-gradient(circle at center,rgba(110,227,255,.34),rgba(110,227,255,.16) 48%,rgba(110,227,255,0) 75%);filter:blur(8px);opacity:.74;pointer-events:none}
    .fractionMergeModel{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:64%;height:46%;display:block;pointer-events:none;z-index:3;filter:drop-shadow(0 1px 0 rgba(255,255,255,.38))}.fractionMergeModel text{font-family:Arial,sans-serif;font-weight:900}
    .fractionMergeDropRing{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:148%;height:148%;border-radius:999px;border:2px dashed rgba(255,255,255,.66);box-shadow:0 0 0 3px rgba(80,198,255,.16),0 0 18px rgba(80,198,255,.14);opacity:0;pointer-events:none}.fractionMergeBubble.targeting .fractionMergeDropRing{opacity:1;animation:fractionMergeRing 1s ease-in-out infinite}
    .fractionMergeFooter{display:grid;grid-template-columns:1fr auto auto auto;gap:8px;align-items:center}.fractionMergeStatus{min-height:34px;padding:7px 10px;border-radius:14px;background:rgba(255,255,255,.68);color:#244064;font-size:13px;font-weight:950;display:flex;align-items:center;line-height:1.12;box-shadow:inset 0 0 0 1px rgba(255,255,255,.62)}.fractionMergeStatus.good{color:#1a7842;background:rgba(231,255,239,.76)}.fractionMergeStatus.bad{color:#9b2a2a;background:rgba(255,236,236,.76)}.fractionMergeFooter button{min-width:76px;min-height:42px;border:0;border-radius:16px;background:rgba(255,255,255,.82);color:#244064;font-size:14px;font-weight:950;box-shadow:0 7px 14px rgba(20,35,72,.08),inset 0 0 0 2px rgba(255,255,255,.62)}.fractionMergeFooter button:disabled{opacity:.42}
    @keyframes fractionMergePop{0%{transform:translate(-50%,-50%) scale(1,1)}28%{transform:translate(-50%,-50%) scale(1.11,.95)}52%{transform:translate(-50%,-50%) scale(.97,1.05)}72%{transform:translate(-50%,-50%) scale(1.03,.99)}100%{transform:translate(-50%,-50%) scale(1,1)}}@keyframes fractionMergeFloat{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-52%) scale(1.04)}}@keyframes fractionMergeTarget{0%,100%{transform:translate(-50%,-50%) scale(1)}50%{transform:translate(-50%,-50%) scale(1.05)}}@keyframes fractionMergeRing{0%,100%{transform:translate(-50%,-50%) scale(.98);opacity:.5}50%{transform:translate(-50%,-50%) scale(1.05);opacity:.95}}@keyframes fractionMergeInvalid{0%,100%{transform:translate(-50%,-50%) translateX(0)}25%{transform:translate(-50%,-50%) translateX(-5px)}75%{transform:translate(-50%,-50%) translateX(5px)}}
    @media(max-width:430px){.fractionMergeFooter{grid-template-columns:1fr auto auto auto}.fractionMergeFooter button{min-width:66px;font-size:13px}.fractionMergeArena{min-height:260px}}
  `;
  document.head.appendChild(style);

  function gcd2(a,b){a=Math.abs(a||0);b=Math.abs(b||0);while(b){const t=a%b;a=b;b=t}return a||1}
  function normF(f){if(!Array.isArray(f)||f.length<2)return[0,1];let n=Number(f[0]||0),d=Number(f[1]||1);if(!Number.isFinite(n)||!Number.isFinite(d)||d===0)return[0,1];if(d<0){n=-n;d=-d}const g=gcd2(n,d);return[n/g,d/g]}
  function addF2(a,b){a=normF(a);b=normF(b);return normF([a[0]*b[1]+b[0]*a[1],a[1]*b[1]])} function valF2(f){f=normF(f);return f[0]/f[1]} function sameF2(a,b){a=normF(a);b=normF(b);return a[0]===b[0]&&a[1]===b[1]} function fmtF2(f){f=normF(f);return `${f[0]}/${f[1]}`}
  const MERGE_SERIES=[
    /* Level 1: echte bubble-expand: één middenbubble groeit door de juiste bovenbubble erin te slepen. */
    {target:[1,2],optimal:1,hint:[[1,4],[1,4]],bubbles:[{id:'center',f:[1,4],x:50,y:63},{id:'a',f:[1,4],x:26,y:29},{id:'b',f:[1,8],x:50,y:29},{id:'c',f:[1,8],x:74,y:29}]},
    {target:[3,4],optimal:1,hint:[[1,2],[1,4]],bubbles:[{id:'center',f:[1,4],x:50,y:63},{id:'a',f:[1,2],x:26,y:29},{id:'b',f:[1,8],x:50,y:29},{id:'c',f:[1,8],x:74,y:29}]},
    {target:[5,8],optimal:1,hint:[[1,2],[1,8]],bubbles:[{id:'center',f:[1,2],x:50,y:63},{id:'a',f:[1,8],x:26,y:29},{id:'b',f:[1,4],x:50,y:29},{id:'c',f:[1,8],x:74,y:29}]},
    {target:[7,8],optimal:2,hint:[[1,2],[1,4]],bubbles:[{id:'center',f:[1,2],x:50,y:63},{id:'a',f:[1,4],x:26,y:29},{id:'b',f:[1,8],x:50,y:29},{id:'c',f:[1,8],x:74,y:29}]},
    {target:[1,1],optimal:3,hint:[[1,2],[1,4]],bubbles:[{id:'center',f:[1,2],x:50,y:63},{id:'a',f:[1,4],x:26,y:29},{id:'b',f:[1,8],x:50,y:29},{id:'c',f:[1,8],x:74,y:29}]},
    {target:[3,8],optimal:1,hint:[[1,4],[1,8]],bubbles:[{id:'center',f:[1,4],x:50,y:63},{id:'a',f:[1,8],x:26,y:29},{id:'b',f:[1,2],x:50,y:29},{id:'c',f:[1,8],x:74,y:29}]}
  ];
  function makeMergeTask(roundNum){const base=MERGE_SERIES[(Math.max(1,roundNum)-1)%MERGE_SERIES.length];return{topic:'fractions',mode:'fraction-merge-drag',skill:'fractionsBuild',targetFraction:normF(base.target),optimalMoves:Number(base.optimal||1),hintPair:(base.hint||[]).map(normF),bubbles:(base.bubbles||[]).map((b,i)=>({id:b.id||('b'+i),f:normF(b.f),x:b.x,y:b.y})),promptKey:'targetFractionMergeTop'}}
  function isMergeDragTask(t){return !!(t&&t.topic==='fractions'&&t.mode==='fraction-merge-drag')}
  if(typeof createFractionTaskForLevel==='function'){createFractionTaskForLevel=function(level){return makeMergeTask(round+1)}}
  if(typeof createTaskForCurriculumSkill==='function'){const prev=createTaskForCurriculumSkill;createTaskForCurriculumSkill=function(topic,level,skill){if(topic==='fractions')return makeMergeTask(round+1);return prev(topic,level,skill)}}
  if(typeof topicSkillPoolForTier==='function'){const prev=topicSkillPoolForTier;topicSkillPoolForTier=function(topic,tierAttempt){if(topic==='fractions')return['fractionsBuild'];return prev(topic,tierAttempt)}}
  if(typeof minLevelForSkill==='function'){const prev=minLevelForSkill;minLevelForSkill=function(skill){if(skill==='fractionsBuild')return 1;return prev(skill)}}
  const prevRenderTarget=renderTarget;renderTarget=function(task){if(isMergeDragTask(task)){targetModelWrap.innerHTML='';targetModelWrap.classList.add('hidden');numberLineWrap.innerHTML='';numberLineWrap.classList.add('hidden');targetFrac.classList.remove('hidden');targetFrac.classList.remove('expression');targetText.textContent=tr('targetFractionMergeTop');targetFrac.innerHTML=fractionHTML(task.targetFraction[0],task.targetFraction[1]);return}return prevRenderTarget(task)}
  const prevUpdateHint=updateHint;updateHint=function(task){if(isMergeDragTask(task)){hintText.textContent=tr('fractionMergeStageSub');return}return prevUpdateHint(task)}
  function clearBoard(){if(stage)stage.querySelectorAll('.fractionMergeBoard').forEach(el=>el.remove());window.__fractionMergeV72=null} const prevClear=clearBubbles; clearBubbles=function(){clearBoard();return prevClear()}
  function svgFractionModel(f){f=normF(f);const n=Math.max(0,f[0]),d=Math.max(1,f[1]);const cols=d<=4?d:d<=6?3:4;const rows=Math.ceil(d/cols);const gap=4,cellW=18,cellH=rows>1?14:18;const W=cols*cellW+(cols-1)*gap,H=rows*cellH+(rows-1)*gap;let rects='';for(let i=0;i<d;i++){const c=i%cols,r=Math.floor(i/cols),x=c*(cellW+gap),y=r*(cellH+gap),fill=i<n?'#9adf81':'rgba(255,255,255,.42)';rects+=`<rect x="${x}" y="${y}" width="${cellW}" height="${cellH}" rx="4" fill="${fill}" stroke="#244064" stroke-width="2"/>`}return`<svg class="fractionMergeModel" viewBox="0 0 ${W} ${H}" aria-hidden="true">${rects}</svg>`}
  function visualDia(f,arena){const full=Math.max(130,Math.min(162,Math.min(arena.clientWidth*.34,arena.clientHeight*.31)));return Math.max(44,full*Math.sqrt(Math.max(0,Math.min(1,valF2(f)))))} function cloneList(list){return(list||[]).map(b=>({id:b.id,f:normF(b.f),x:b.x,y:b.y}))} function setStatus(s,msg,kind=''){if(!s||!s.statusEl)return;s.statusEl.textContent=msg;s.statusEl.className='fractionMergeStatus'+(kind?' '+kind:'')} function currentBubble(s){const exact=s.bubbles.find(b=>sameF2(b.f,s.task.targetFraction));return exact||s.bubbles.slice().sort((a,b)=>valF2(b.f)-valF2(a.f))[0]||null}
  function updateMeta(s){if(s.movesEl)s.movesEl.textContent=`${tr('fractionMergeMoves')}: ${s.history.length}`;if(s.goalEl)s.goalEl.textContent=`${tr('fractionMergeGoal2')}: ${fmtF2(s.task.targetFraction)}`;const cur=currentBubble(s);if(s.nowEl)s.nowEl.textContent=`${tr('fractionMergeNow2')}: ${cur?fmtF2(cur.f):'—'}`;if(s.undoBtn)s.undoBtn.disabled=s.animating||s.history.length===0||s.solved;if(s.resetBtn)s.resetBtn.disabled=s.animating||s.history.length===0||s.solved}
  function centerPx(s,b){const r=s.arenaEl.getBoundingClientRect();return{x:r.width*(b.x/100),y:r.height*(b.y/100)}} function posPx(s,el,b,px){const vd=visualDia(b.f,s.arenaEl),hit=Math.max(76,vd+18);el.style.width=hit+'px';el.style.height=hit+'px';el.style.left=px.x+'px';el.style.top=px.y+'px';const v=el.querySelector('.fractionMergeVisual');if(v){v.style.width=vd+'px';v.style.height=vd+'px'}const h=el.querySelector('.fractionMergeHit');if(h){h.style.width=hit+'px';h.style.height=hit+'px'}} function posPerc(s,el,b){posPx(s,el,b,centerPx(s,b))}
  function buildEl(s,b){const btn=document.createElement('button');btn.type='button';btn.className='fractionMergeBubble';btn.dataset.id=b.id;const vd=visualDia(b.f,s.arenaEl),hit=Math.max(76,vd+18);btn.innerHTML=`<div class="fractionMergeHit" style="width:${hit}px;height:${hit}px"></div><div class="fractionMergeVisual" style="width:${vd}px;height:${vd}px"><div class="fractionMergeGlow"></div><div class="fractionMergeDropRing"></div><img class="fractionMergeOrb" src="assets/ui/gamebubble-fractions.png" alt="" draggable="false">${svgFractionModel(b.f)}</div>`;bindDrag(s,btn,b);return btn}
  function rebuild(s){s.arenaEl.innerHTML='';s.elMap=new Map();s.bubbles.forEach(b=>{const el=buildEl(s,b);s.elMap.set(b.id,el);s.arenaEl.appendChild(el);posPerc(s,el,b)});updateMeta(s)} function clearTargets(s){s.elMap&&s.elMap.forEach(el=>el.classList.remove('targeting'));s.hoverId=''} function findTarget(s,src,px){let best=null,bestDist=1e9;s.bubbles.forEach(b=>{if(b.id===src.id)return;const c=centerPx(s,b),rad=visualDia(b.f,s.arenaEl)*.52,dist=Math.hypot(c.x-px.x,c.y-px.y);if(dist<=rad*1.05&&dist<bestDist){best=b;bestDist=dist}});return best}
  function bindDrag(s,el,b){el.addEventListener('pointerdown',ev=>{if(locked||s.animating||s.solved)return;ev.preventDefault();const rect=s.arenaEl.getBoundingClientRect(),c=centerPx(s,b),off={x:ev.clientX-rect.left-c.x,y:ev.clientY-rect.top-c.y};el.classList.add('dragging');if(el.setPointerCapture)try{el.setPointerCapture(ev.pointerId)}catch(e){};const move=mv=>{const px={x:Math.max(0,Math.min(rect.width,mv.clientX-rect.left-off.x)),y:Math.max(0,Math.min(rect.height,mv.clientY-rect.top-off.y))};posPx(s,el,b,px);clearTargets(s);const t=findTarget(s,b,px);if(t){s.hoverId=t.id;const tel=s.elMap.get(t.id);if(tel)tel.classList.add('targeting')}};const up=upEv=>{window.removeEventListener('pointermove',move);window.removeEventListener('pointerup',up);el.classList.remove('dragging');if(el.releasePointerCapture)try{el.releasePointerCapture(upEv.pointerId)}catch(e){};const px={x:Math.max(0,Math.min(rect.width,upEv.clientX-rect.left-off.x)),y:Math.max(0,Math.min(rect.height,upEv.clientY-rect.top-off.y))};const t=findTarget(s,b,px);clearTargets(s);if(t)merge(s,b.id,t.id);else posPerc(s,el,b)};window.addEventListener('pointermove',move);window.addEventListener('pointerup',up)})}
  function invalid(s,id){const el=s.elMap.get(id);if(el){el.classList.remove('invalid');void el.offsetWidth;el.classList.add('invalid');setTimeout(()=>el.classList.remove('invalid'),300)} if(playWrongSound)playWrongSound();setStatus(s,tr('fractionMergeTooMuch2'),'bad')}
  function complete(s){const win=s.bubbles.find(b=>sameF2(b.f,s.task.targetFraction));if(!win)return false;s.solved=true;locked=true;updateMeta(s);const el=s.elMap.get(win.id);if(el){const img=el.querySelector('.fractionMergeOrb');if(img)img.src='assets/ui/gamebubble-success.png';el.classList.add('pop');if(window.spawnBubblePopEffect)window.spawnBubblePopEffect(el,{variant:'success'})}score+=10+level+Math.max(1,3-Math.max(0,s.history.length-s.task.optimalMoves));correctRemaining=0;correctTotal=1;updateHUD();const msg=replaceVars(tr('fractionMergeSolved2'),{target:fmtF2(s.task.targetFraction),moves:s.history.length});setStatus(s,msg,'good');showToast(msg,true);if(playSuccessSound)playSuccessSound();setTimeout(()=>{if(round>=maxRounds)end();else nextRound()},1100);return true}
  function merge(s,sid,tid){if(s.animating||s.solved)return;const src=s.bubbles.find(b=>b.id===sid),tar=s.bubbles.find(b=>b.id===tid),srcEl=s.elMap.get(sid),tarEl=s.elMap.get(tid);if(!src||!tar||!srcEl||!tarEl)return;const res=addF2(src.f,tar.f);if(valF2(res)>1.00001){posPerc(s,srcEl,src);invalid(s,tid);return}s.animating=true;s.history.push(cloneList(s.bubbles));updateMeta(s);if(playPopSound)playPopSound();if(window.spawnBubblePopEffect)window.spawnBubblePopEffect(srcEl,{variant:'mini'});const tc=centerPx(s,tar);srcEl.style.transition='left .22s ease, top .22s ease, opacity .22s ease';posPx(s,srcEl,src,tc);srcEl.style.opacity='0';tar.f=res;const gv=tarEl.querySelector('.fractionMergeVisual'),gd=visualDia(res,s.arenaEl);if(gv){gv.style.width=gd+'px';gv.style.height=gd+'px'}tarEl.classList.remove('pop');void tarEl.offsetWidth;tarEl.classList.add('pop');setTimeout(()=>{s.bubbles=s.bubbles.filter(b=>b.id!==sid);rebuild(s);s.animating=false;setStatus(s,tr('fractionMergeReady2'));complete(s)},260)}
  function renderBoard(task){clearBoard();const board=document.createElement('div');board.className='fractionMergeBoard';board.innerHTML=`<div class="fractionMergeTop"><div class="title">${tr('fractionMergeStageTitle')}</div><div class="sub">${tr('fractionMergeStageSub')}</div><div class="fractionMergeMeta"><span class="fractionMergePill" data-k="moves"></span><span class="fractionMergePill" data-k="goal"></span><span class="fractionMergePill" data-k="now"></span></div></div><div class="fractionMergeArena"></div><div class="fractionMergeFooter"><div class="fractionMergeStatus"></div><button type="button" data-a="hint">${tr('fractionMergeHint2')}</button><button type="button" data-a="undo">${tr('fractionMergeUndo2')}</button><button type="button" data-a="reset">${tr('fractionMergeReset2')}</button></div>`;stage.appendChild(board);const s={task,board,arenaEl:board.querySelector('.fractionMergeArena'),statusEl:board.querySelector('.fractionMergeStatus'),movesEl:board.querySelector('[data-k="moves"]'),goalEl:board.querySelector('[data-k="goal"]'),nowEl:board.querySelector('[data-k="now"]'),hintBtn:board.querySelector('[data-a="hint"]'),undoBtn:board.querySelector('[data-a="undo"]'),resetBtn:board.querySelector('[data-a="reset"]'),bubbles:cloneList(task.bubbles),initial:cloneList(task.bubbles),history:[],elMap:new Map(),animating:false,solved:false};window.__fractionMergeV72=s;rebuild(s);setStatus(s,tr('fractionMergeReady2'));s.hintBtn.addEventListener('click',()=>{const h=(task.hintPair||[]).map(fmtF2).join(' + '),msg=h?`${tr('fractionMergeHintMsg2')} ${h}`:tr('fractionMergeHintMsg2');setStatus(s,msg);showToast(msg,true)});s.undoBtn.addEventListener('click',()=>{if(s.animating||!s.history.length||s.solved)return;s.bubbles=cloneList(s.history.pop());rebuild(s);if(playPopSound)playPopSound();setStatus(s,tr('fractionMergeReady2'))});s.resetBtn.addEventListener('click',()=>{if(s.animating||s.solved)return;s.bubbles=cloneList(s.initial);s.history=[];rebuild(s);if(playPopSound)playPopSound();setStatus(s,tr('fractionMergeReady2'))})}
  window.__fractionMergeMakeTask = makeMergeTask;
  window.__fractionMergeRenderBoard = renderBoard;
  window.__fractionMergeIsTask = isMergeDragTask;
  const prevNextRound=nextRound; nextRound=function(){if(selectedTopic!=='fractions')return prevNextRound();hideNextRoundButton();clearTimers();if(round>=maxRounds){end();return}round++;level=1;updateWorldMusic();locked=false;clearBubbles();task=applyCurriculumTag(makeMergeTask(round, selectedLearningPathIndex));correctRemaining=1;correctTotal=1;updateHUD();updateHint(task);renderTarget(task);renderBoard(task);markDebugAnswers();};
})();

  (function(){
  const MERGE_ROADMAP_LABELS = {
    nl:['Start','Maak 1/2','Maak 3/4','Maak 5/8','Maak 7/8','Bubble meester'],
    en:['Start','Make 1/2','Make 3/4','Make 5/8','Make 7/8','Bubble master'],
    fr:['Départ','Fais 1/2','Fais 3/4','Fais 5/8','Fais 7/8','Maître des bulles'],
    tl:['Simula','Gumawa ng 1/2','Gumawa ng 3/4','Gumawa ng 5/8','Gumawa ng 7/8','Bubble master']
  };
  const MERGE_NODES = [
    {"id":"n1","index":1,"label":"Start","x":50.3,"y":75.9,"state":"done"},
    {"id":"n2","index":2,"label":"Make 1/2","x":52.8,"y":61,"state":"open"},
    {"id":"n3","index":3,"label":"Make 3/4","x":50.2,"y":48.4,"state":"open"},
    {"id":"n4","index":4,"label":"Make 5/8","x":49.9,"y":36.1,"state":"open"},
    {"id":"n5","index":5,"label":"Make 7/8","x":58.3,"y":23.8,"state":"open"},
    {"id":"n6","index":6,"label":"Bubble master","x":47.9,"y":10.4,"state":"open"}
  ];
  const MERGE_PATH = [
    {"type":"node","nodeId":"n1"},
    {"type":"waypoint","id":"wp-m1","x":33.4,"y":71.8},
    {"type":"node","nodeId":"n2"},
    {"type":"waypoint","id":"wp-m2","x":40.7,"y":58.8},
    {"type":"waypoint","id":"wp-kv5ttl","x":39.1,"y":55.4},
    {"type":"node","nodeId":"n3"},
    {"type":"waypoint","id":"wp-m3","x":35.4,"y":43.6},
    {"type":"node","nodeId":"n4"},
    {"type":"waypoint","id":"wp-m4","x":66.5,"y":31.4},
    {"type":"node","nodeId":"n5"},
    {"type":"waypoint","id":"wp-m5","x":54.4,"y":19.5},
    {"type":"node","nodeId":"n6"}
  ];
  function applyMergeRoadmap(){
    if(window.ROADMAP_CONFIGS){
      window.ROADMAP_CONFIGS.fractions = {
        worldKey:'fractions',
        title:'Fractions Bay',
        selectedId:'n2',
        nodes:MERGE_NODES.map(n => ({...n})),
        path:MERGE_PATH.map(p => ({...p}))
      };
    }
    try{
      const lang = (typeof currentLang !== 'undefined' && currentLang) ? currentLang : 'nl';
      const labels = MERGE_ROADMAP_LABELS[lang] || MERGE_ROADMAP_LABELS.nl;
      if(window.ROADMAP_CONFIGS && window.ROADMAP_CONFIGS.fractions){
        window.ROADMAP_CONFIGS.fractions.nodes.forEach((node, i) => { node.label = labels[i] || node.label; });
      }
    }catch(e){}
  }
  applyMergeRoadmap();
  document.addEventListener('DOMContentLoaded', applyMergeRoadmap);

  /* Laatste veiligheidsnet: als Breukenzee start, mag nextRound alleen nog fraction-merge tekenen. */
  const previousNextRound = nextRound;
  nextRound = function(){
    if(selectedTopic !== 'fractions') return previousNextRound();
    if(typeof window.__fractionMergeMakeTask !== 'function' || typeof window.__fractionMergeRenderBoard !== 'function') return previousNextRound();
    hideNextRoundButton();
    clearTimers();
    if(round >= maxRounds){ end(); return; }
    round++;
    level = 1;
    updateWorldMusic();
    locked = false;
    clearBubbles();
    task = applyCurriculumTag(window.__fractionMergeMakeTask(round, selectedLearningPathIndex));
    correctRemaining = 1;
    correctTotal = 1;
    updateHUD();
    updateHint(task);
    renderTarget(task);
    window.__fractionMergeRenderBoard(task);
    markDebugAnswers();
  };

  window.__breukenzeeMergeOnlyV74 = true;
})();

  (function(){
    try{
      const badge = document.createElement('div');
      badge.id = 'breukenzeeV75Badge';
      badge.textContent = 'v79 Breukenzee technisch';
      badge.style.cssText = 'position:absolute;right:10px;bottom:8px;z-index:2000;padding:4px 8px;border-radius:999px;background:rgba(255,255,255,.72);color:#244064;font-size:10px;font-weight:900;pointer-events:none;opacity:.75;';
      if(stage && !document.getElementById('breukenzeeV75Badge')) stage.appendChild(badge);
      if(window.ROADMAP_CONFIGS && window.ROADMAP_CONFIGS.fractions){
        window.ROADMAP_CONFIGS.fractions.selectedId = 'n2';
        window.ROADMAP_CONFIGS.fractions.title = 'Fractions Bay';
        window.ROADMAP_CONFIGS.fractions.selectedId = 'n2';
        window.ROADMAP_CONFIGS.fractions.nodes = MERGE_NODES.map(n => ({...n}));
        window.ROADMAP_CONFIGS.fractions.path = MERGE_PATH.map(point => ({...point}));
      }
      window.__breukenzeeMergeOnlyV75 = true;
    }catch(e){ console.warn('v75 badge/roadmap marker failed', e); }
  })();





  /* v78 — Breukenzee levelsysteem.
     Level 1: samenvoegen met veel visuele steun.
     Level 2: rode min-bubble.
     Level 3: uniform symbolischer lezen.
     Level 4: ×2/×3 multiplier-bubbles.
     Level 5: :2/:3 division-bubbles.
     Elke oefening gebruikt één uniforme value-displayMode en minMoves wordt automatisch berekend. */
  (function(){
    const V78_VALUE_ASSETS = ['bubble-cyan.png','bubble-value-purple.png','bubble-amber.png','bubble-value-green.png','bubble-blue.png'];
    const V78_OPERATOR_ASSETS = { minus:'bubble-red.png', multiplyInt:'bubble-green.png', divideInt:'bubble-purple.png', multiplyFraction:'bubble-blue.png', divideFraction:'bubble-purple.png' };
    const V78_COLORS = ['#62f3ff','#b37cff','#ffd05b','#81f07f','#66a8ff','#ff7676','#ff9fd6','#93ffe4'];
    const V78_LEVEL_NAMES = {1:'Samenvoegen',2:'Wegnemen',3:'Breuken lezen',4:'Vergroten',5:'Verdelen'};

    function V(f){return {type:'value', f:f};}
    function M(f){return {type:'minus', f:f};}
    function X(k){return {type:'multiplyInt', factor:k};}
    function D(k){return {type:'divideInt', divisor:k};}

    const V78_BANKS = {
      1: [
        {target:[1,1], displayMode:'visual+symbol', items:[V([1,2]),V([1,2])]},
        {target:[1,2], displayMode:'visual+symbol', items:[V([1,4]),V([1,4]),V([1,8])]},
        {target:[3,4], displayMode:'visual+symbol', items:[V([1,2]),V([1,4]),V([1,8]),V([1,8])]},
        {target:[1,1], displayMode:'visual+symbol', items:[V([1,4]),V([1,4]),V([1,4]),V([1,4])]},
        {target:[2,3], displayMode:'visual+symbol', items:[V([1,3]),V([1,3]),V([1,6])]},
        {target:[3,4], displayMode:'visual+symbol', items:[V([1,4]),V([1,4]),V([1,4]),V([1,8])]},
        {target:[5,6], displayMode:'visual+symbol', items:[V([1,2]),V([1,3]),V([1,6])]},
        {target:[7,8], displayMode:'visual+symbol', items:[V([1,2]),V([1,4]),V([1,8]),V([1,16])]} 
      ],
      2: [
        {target:[1,2], displayMode:'visual+symbol', items:[V([3,4]),M([1,4]),V([1,8])]},
        {target:[3,4], displayMode:'visual', items:[V([1,1]),M([1,4]),V([1,8])]},
        {target:[1,4], displayMode:'visual+symbol', items:[V([1,2]),M([1,4]),V([1,8])]},
        {target:[1,1], displayMode:'visual', items:[V([1,2]),V([3,4]),M([1,4])]},
        {target:[3,4], displayMode:'visual+symbol', items:[V([1,1]),M([1,2]),V([1,4])]},
        {target:[5,8], displayMode:'visual', items:[V([7,8]),M([1,4]),V([1,8])]},
        {target:[2,3], displayMode:'visual+symbol', items:[V([1,1]),M([1,3]),V([1,6])]},
        {target:[1,3], displayMode:'visual', items:[V([2,3]),M([1,3]),V([1,6])]} 
      ],
      3: [
        {target:[5,6], displayMode:'symbol', items:[V([1,2]),V([1,3]),V([1,6])]},
        {target:[3,8], displayMode:'symbol', items:[V([7,8]),M([1,2]),V([1,8])]},
        {target:[5,8], displayMode:'visual', items:[V([1,4]),V([3,8]),V([1,8])]},
        {target:[1,2], displayMode:'symbol', items:[V([5,6]),M([1,3]),V([1,6])]},
        {target:[3,4], displayMode:'symbol', items:[V([7,8]),M([1,4]),V([1,8])]},
        {target:[7,8], displayMode:'visual+symbol', items:[V([1,2]),V([3,8]),V([1,8])]},
        {target:[2,5], displayMode:'symbol', items:[V([3,5]),M([1,5]),V([1,10])]},
        {target:[5,6], displayMode:'visual+symbol', items:[V([1,6]),V([1,3]),V([1,3]),M([1,6])]} 
      ],
      4: [
        {target:[1,2], displayMode:'visual+symbol', items:[V([1,4]),X(2),V([1,8])]},
        {target:[3,4], displayMode:'visual+symbol', items:[V([1,4]),X(3),V([1,8])]},
        {target:[1,1], displayMode:'visual+symbol', items:[V([1,2]),X(2),V([1,8])]},
        {target:[5,6], displayMode:'visual+symbol', items:[V([1,6]),X(3),V([1,3])]},
        {target:[3,4], displayMode:'visual+symbol', items:[V([1,8]),X(2),V([1,2])]},
        {target:[1,2], displayMode:'visual+symbol', items:[V([1,4]),X(3),M([1,4])]},
        {target:[2,3], displayMode:'visual+symbol', items:[V([1,3]),X(2),V([1,6])]},
        {target:[7,8], displayMode:'visual+symbol', items:[V([1,4]),X(3),V([1,8])]} 
      ],
      5: [
        {target:[1,4], displayMode:'visual+symbol', items:[V([1,2]),D(2),V([1,8])]},
        {target:[1,3], displayMode:'visual+symbol', items:[V([2,3]),D(2),V([1,6])]},
        {target:[1,4], displayMode:'visual+symbol', items:[V([3,4]),D(3),V([1,8])]},
        {target:[1,2], displayMode:'visual+symbol', items:[V([1,1]),D(2),V([1,4])]},
        {target:[5,12], displayMode:'visual+symbol', items:[V([5,6]),D(2),V([1,6])]},
        {target:[3,8], displayMode:'visual+symbol', items:[V([3,4]),D(2),V([1,8])]},
        {target:[3,4], displayMode:'visual+symbol', items:[V([1,1]),D(2),V([1,4])]},
        {target:[1,4], displayMode:'visual+symbol', items:[V([1,1]),D(2),M([1,4])]} 
      ]
    };

    function safeAssignV78(lang, values){ if(typeof I18N !== 'undefined' && I18N && I18N[lang]) Object.assign(I18N[lang], values); }
    safeAssignV78('nl', {
      pathFractionsHub:'Start', pathFractionsFair:'Samenvoegen', pathFractionsReadChoose:'Wegnemen', pathFractionsBuild:'Breuken lezen', pathFractionsEquivalent:'Vergroten', pathFractionsStory:'Verdelen', pathFractionsMastery:'Meester',
      currFractionsBuild:'breuken bouwen met merge-bubbles', targetFractionMergeTop:'Maak', fractionMergeUndo2:'Terug'
    });
    safeAssignV78('en', {
      pathFractionsHub:'Start', pathFractionsFair:'Merge', pathFractionsReadChoose:'Take away', pathFractionsBuild:'Read fractions', pathFractionsEquivalent:'Grow', pathFractionsStory:'Divide', pathFractionsMastery:'Master',
      currFractionsBuild:'build fractions with merge bubbles', targetFractionMergeTop:'Make', fractionMergeUndo2:'Undo'
    });
    safeAssignV78('fr', {
      pathFractionsHub:'Départ', pathFractionsFair:'Fusionner', pathFractionsReadChoose:'Enlever', pathFractionsBuild:'Lire fractions', pathFractionsEquivalent:'Agrandir', pathFractionsStory:'Diviser', pathFractionsMastery:'Maître',
      currFractionsBuild:'construire des fractions avec des bulles', targetFractionMergeTop:'Fais', fractionMergeUndo2:'Retour'
    });
    safeAssignV78('tl', {
      pathFractionsHub:'Simula', pathFractionsFair:'Pagsamahin', pathFractionsReadChoose:'Bawasan', pathFractionsBuild:'Basahin', pathFractionsEquivalent:'Palakihin', pathFractionsStory:'Hatiin', pathFractionsMastery:'Master',
      currFractionsBuild:'bumuo ng fractions gamit ang merge bubbles', targetFractionMergeTop:'Gumawa ng', fractionMergeUndo2:'Undo'
    });

    try{
      if(typeof ALL_TOPIC_SKILLS !== 'undefined') ALL_TOPIC_SKILLS.fractions = ['fractionsBuild'];
      if(typeof TOPIC_LEARNING_PATHS !== 'undefined' && TOPIC_LEARNING_PATHS.fractions){
        TOPIC_LEARNING_PATHS.fractions.nodes = [
          {id:'start', key:'pathFractionsHub', x:45, y:84, icon:'⌂', skills:['fractionsBuild']},
          {id:'level1', key:'pathFractionsFair', x:26, y:68, icon:'1', skills:['fractionsBuild']},
          {id:'level2', key:'pathFractionsReadChoose', x:69, y:60, icon:'2', skills:['fractionsBuild']},
          {id:'level3', key:'pathFractionsBuild', x:38, y:46, icon:'3', skills:['fractionsBuild']},
          {id:'level4', key:'pathFractionsEquivalent', x:73, y:34, icon:'4', skills:['fractionsBuild']},
          {id:'level5', key:'pathFractionsStory', x:34, y:25, icon:'5', skills:['fractionsBuild']},
          {id:'master', key:'pathFractionsMastery', x:58, y:12, icon:'★', mastery:true, skills:['fractionsBuild']}
        ];
      }
      localStorage.removeItem('bubblePopTopicPathCoords:fractions');
    }catch(e){}

    const v78Style = document.createElement('style');
    v78Style.id = 'v78-fraction-merge-level-style';
    v78Style.textContent = `
      .fractionMergeBoard.v78Discovery{left:8px!important;right:8px!important;top:74px!important;bottom:12px!important;padding:0!important;display:block!important;background:transparent!important;box-shadow:none!important;backdrop-filter:none!important;overflow:visible!important;}
      .fractionMergeBoard.v78Discovery .fractionMergeTop,.fractionMergeBoard.v78Discovery .fractionMergeFooter{display:none!important;}
      .fractionMergeBoard.v78Discovery .fractionMergeArena{position:absolute!important;inset:0!important;min-height:0!important;border-radius:24px!important;background:transparent!important;box-shadow:none!important;overflow:visible!important;touch-action:none!important;}
      .fractionMergeBoard.v78Discovery .fractionMergeBubble{filter:drop-shadow(0 16px 18px rgba(0,32,84,.25));transition:filter .18s ease;}
      .fractionMergeBoard.v78Discovery .fractionMergeBubble.dragging{filter:drop-shadow(0 22px 26px rgba(0,32,84,.33));}
      .fractionMergeBoard.v78Discovery .fractionMergeOrb{width:128%!important;height:128%!important;filter:saturate(1.45) contrast(1.08) drop-shadow(0 0 14px rgba(255,255,255,.35));}
      .fractionMergeBoard.v78Discovery .fractionMergeVisual::before{content:"";position:absolute;inset:-13%;border-radius:999px;background:radial-gradient(circle at 30% 22%,rgba(255,255,255,.96),rgba(255,255,255,.18) 24%,rgba(255,255,255,0) 46%),radial-gradient(circle at 50% 58%,rgba(255,255,255,.10),rgba(0,190,255,.14) 48%,rgba(73,66,255,.08) 72%,rgba(255,255,255,0) 82%);z-index:4;pointer-events:none;mix-blend-mode:screen;}
      .fractionMergeBoard.v78Discovery .fractionMergeModel{width:70%!important;height:70%!important;filter:drop-shadow(0 2px 1px rgba(255,255,255,.32)) drop-shadow(0 7px 8px rgba(0,41,82,.16));}
      .fractionMergeBoard.v78Discovery .fractionMergeGlow{top:84%!important;width:96%!important;height:27%!important;background:radial-gradient(circle at center,rgba(105,238,255,.47),rgba(101,189,255,.18) 46%,rgba(101,189,255,0) 76%)!important;filter:blur(10px)!important;}
      .fractionMergeBoard.v78Discovery .fractionMergeDropRing{border:3px solid rgba(255,255,255,.84)!important;box-shadow:0 0 0 7px rgba(102,230,255,.23),0 0 30px rgba(102,230,255,.62)!important;}
      .fractionMergeBoard.v78Discovery .fractionMergeBubble.failFast .fractionMergeVisual{animation:fractionMergeInvalid .28s ease 0s 2;}
      .fractionMergeBoard.v78Discovery .fractionMergeBubble.successPulse .fractionMergeVisual{animation:fractionMergePop .42s ease-out 0s 2;}
      .fractionMergeBoard.v78Discovery .fractionMergeBubble.v77GoldSuccess{z-index:9!important;filter:drop-shadow(0 26px 30px rgba(128,82,0,.36)) drop-shadow(0 0 26px rgba(255,218,78,.62))!important;}
      .fractionMergeBoard.v78Discovery .fractionMergeBubble.v77GoldSuccess .fractionMergeVisual{width:min(54vw,214px)!important;height:min(54vw,214px)!important;}
      .fractionMergeBoard.v78Discovery .fractionMergeBubble.v77GoldSuccess .fractionMergeOrb{width:136%!important;height:136%!important;filter:saturate(1.55) contrast(1.12) drop-shadow(0 0 24px rgba(255,235,120,.90))!important;}
      .fractionMergeBoard.v78Discovery .fractionMergeBubble.v77GoldSuccess .fractionMergeModel{width:66%!important;height:66%!important;}
      .fractionMergeMathLabel{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:6;display:inline-grid;grid-template-rows:auto 3px auto;align-items:center;justify-items:center;min-width:38px;padding:5px 8px;border-radius:13px;background:rgba(255,255,255,.78);box-shadow:0 5px 12px rgba(0,34,75,.14),inset 0 0 0 2px rgba(255,255,255,.75);color:#173150;font-family:Arial,sans-serif;font-weight:1000;line-height:1;font-size:23px;text-shadow:0 1px 0 rgba(255,255,255,.60);pointer-events:none;}
      .fractionMergeMathLabel i{display:block;width:100%;height:3px;border-radius:3px;background:#173150;}
      .fractionMergeMathLabel.whole{grid-template-rows:auto;font-size:clamp(20px,calc(var(--bDia,100px)*.24),30px);}
      .fractionMergeBubble.reprVisual .fractionMergeMathLabel{display:none!important;}
      .fractionMergeBubble.reprBoth .fractionMergeMathLabel{top:73%;font-size:clamp(12px,calc(var(--bDia,100px)*.15),18px);min-width:calc(var(--bDia,100px)*.22);padding:calc(var(--bDia,100px)*.025) calc(var(--bDia,100px)*.055);grid-template-rows:auto 2px auto;}
      .fractionMergeBubble.reprBoth .fractionMergeMathLabel i{height:2px;}
      .fractionMergeBubble.reprBoth .fractionMergeModel{width:62%!important;height:62%!important;top:43%!important;}
      .fractionMergeBubble.reprMath .fractionMergeModel{display:none!important;}
      .fractionMergeBubble.reprMath .fractionMergeMathLabel{font-size:clamp(18px,calc(var(--bDia,100px)*.25),31px);background:rgba(255,255,255,.84);min-width:calc(var(--bDia,100px)*.32);padding:calc(var(--bDia,100px)*.055) calc(var(--bDia,100px)*.075);}
      .fractionMergeBubble.operatorBubble .fractionMergeMathLabel{display:none!important;}
      .fractionMergeBubble.operatorBubble .fractionMergeVisual{width:var(--opDia,86px)!important;height:var(--opDia,86px)!important;}
      .fractionMergeBubble.operatorBubble .fractionMergeModel{display:none!important;}
      .fractionMergeBubble.operatorMinus .fractionMergeModel{display:block!important;position:absolute;left:30%;top:46%;transform:translate(-50%,-50%);z-index:6;width:43%!important;height:43%!important;filter:drop-shadow(0 2px 2px rgba(255,255,255,.35)) drop-shadow(0 5px 7px rgba(70,0,0,.18));}
      .fractionMergeBubble.operatorMinus .fractionMergeModel path[fill^="rgba"]{fill:rgba(255,255,255,.34);}
      .fractionMergeBubble.operatorMultiplyInt .fractionMergeVisual{--opDia:82px;}
      .fractionMergeBubble.operatorDivideInt .fractionMergeVisual{--opDia:82px;}
      .fractionMergeBubble.operatorMinus .fractionMergeVisual{--opDia:92px;}
      .fractionMergeBubble.operatorMultiplyInt .fractionMergeOrb{filter:saturate(1.75) hue-rotate(18deg) contrast(1.12) drop-shadow(0 0 13px rgba(67,255,154,.48))!important;}
      .fractionMergeBubble.operatorDivideInt .fractionMergeOrb{filter:saturate(1.65) hue-rotate(-8deg) contrast(1.12) drop-shadow(0 0 13px rgba(184,111,255,.54))!important;}
      .fractionMergeBubble.operatorMinus .fractionMergeOrb{filter:saturate(1.55) contrast(1.10) drop-shadow(0 0 14px rgba(255,89,89,.48))!important;}
      .fractionMergeOperatorLabel{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);z-index:7;display:flex;align-items:center;justify-content:center;gap:4px;min-width:calc(var(--opDia,86px)*.45);min-height:calc(var(--opDia,86px)*.36);padding:calc(var(--opDia,86px)*.035) calc(var(--opDia,86px)*.075);border-radius:calc(var(--opDia,86px)*.16);background:rgba(255,255,255,.70);box-shadow:0 6px 14px rgba(0,34,75,.16),inset 0 0 0 2px rgba(255,255,255,.76);color:#173150;font-family:Arial,sans-serif;font-weight:1000;line-height:1;text-shadow:0 1px 0 rgba(255,255,255,.66);pointer-events:none;}
      .fractionMergeOperatorLabel .opSign{font-size:calc(var(--opDia,86px)*.27);line-height:.8;}
      .fractionMergeOperatorLabel .opText{font-size:calc(var(--opDia,86px)*.37);letter-spacing:-1px;}
      .fractionMiniFrac{display:inline-grid;grid-template-rows:auto 2px auto;align-items:center;justify-items:center;font-size:calc(var(--opDia,86px)*.17);line-height:.9;min-width:calc(var(--opDia,86px)*.22);}
      .fractionMiniFrac i{display:block;width:100%;height:2px;border-radius:2px;background:#173150;}
      .operatorMinus .fractionMergeOperatorLabel{left:70%;top:50%;background:rgba(255,244,244,.74);color:#802225;}
      .operatorMinus .fractionMiniFrac i{background:#802225;}
      .operatorMultiplyInt .fractionMergeOperatorLabel{background:rgba(232,255,236,.70);color:#07592d;}
      .operatorDivideInt .fractionMergeOperatorLabel{background:rgba(246,239,255,.72);color:#3e1877;}
      .fractionMergeOperatorIcon{position:absolute;left:50%;top:74%;transform:translate(-50%,-50%);z-index:6;width:42%;height:24%;opacity:.78;filter:drop-shadow(0 2px 4px rgba(0,0,0,.16));pointer-events:none;}
      .operatorMultiplyInt .fractionMergeOperatorIcon circle{fill:rgba(206,255,222,.72);stroke:rgba(8,92,42,.55);}
      .operatorDivideInt .fractionMergeOperatorIcon circle{fill:rgba(232,212,255,.72);stroke:rgba(75,28,126,.55);}
      .fractionMergeEquationFlash{position:absolute;z-index:12;transform:translate(-50%,-128%);padding:6px 11px;border-radius:999px;background:rgba(255,255,255,.90);box-shadow:0 10px 24px rgba(0,38,84,.18),inset 0 0 0 2px rgba(255,255,255,.80);color:#173150;font-family:Arial,sans-serif;font-size:15px;font-weight:1000;white-space:nowrap;pointer-events:none;animation:fractionEquationFloat 1.05s ease forwards;}
      #skipBtn.fractionUndoBtn{background:linear-gradient(180deg,#fffef2,#ffe9a6)!important;color:#45320b!important;box-shadow:0 8px 18px rgba(130,88,0,.16),inset 0 0 0 2px rgba(255,255,255,.65)!important;}
      #skipBtn.fractionUndoBtn:disabled{opacity:.43!important;filter:grayscale(.25);}
      @keyframes fractionEquationFloat{0%{opacity:0;transform:translate(-50%,-92%) scale(.92)}18%{opacity:1;transform:translate(-50%,-128%) scale(1)}78%{opacity:1;transform:translate(-50%,-148%) scale(1)}100%{opacity:0;transform:translate(-50%,-166%) scale(.97)}}
    `;
    document.head.appendChild(v78Style);

    function gcdV(a,b){a=Math.abs(a||0);b=Math.abs(b||0);while(b){const t=a%b;a=b;b=t;}return a||1;}
    function normV(f){if(!Array.isArray(f)||f.length<2)return[0,1];let n=Number(f[0]||0),d=Number(f[1]||1);if(!Number.isFinite(n)||!Number.isFinite(d)||d===0)return[0,1];if(d<0){n=-n;d=-d;}const g=gcdV(n,d);return[n/g,d/g];}
    function addV(a,b){a=normV(a);b=normV(b);return normV([a[0]*b[1]+b[0]*a[1],a[1]*b[1]]);}
    function subV(a,b){a=normV(a);b=normV(b);return normV([a[0]*b[1]-b[0]*a[1],a[1]*b[1]]);}
    function mulIntV(a,k){a=normV(a);return normV([a[0]*Number(k||1),a[1]]);}
    function divIntV(a,k){a=normV(a);return normV([a[0],a[1]*Number(k||1)]);}
    function valV(f){f=normV(f);return f[0]/f[1];}
    function sameV(a,b){a=normV(a);b=normV(b);return a[0]===b[0]&&a[1]===b[1];}
    function fmtV(f){f=normV(f);return f[1]===1?String(f[0]):`${f[0]}/${f[1]}`;}
    function cloneBubbleV(b){return {id:b.id,type:b.type||'value',f:b.f?normV(b.f):undefined,factor:b.factor,divisor:b.divisor,x:b.x,y:b.y,asset:b.asset,colorIndex:b.colorIndex,repr:b.repr,displayMode:b.displayMode};}
    function cloneV(list){return(list||[]).map(cloneBubbleV);}
    function shuffleV(arr){for(let i=arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[arr[i],arr[j]]=[arr[j],arr[i]];}return arr;}
    function isValueV(b){return !b || !b.type || b.type==='value';}
    function isMinusV(b){return b && b.type==='minus';}
    function isMultiplyIntV(b){return b && b.type==='multiplyInt';}
    function isDivideIntV(b){return b && b.type==='divideInt';}
    function reprForDisplayModeV(mode){if(mode==='symbol')return 'math'; if(mode==='visual')return 'visual'; return 'both';}
    function positionsV(count){
      const base = [{x:23,y:24},{x:52,y:18},{x:78,y:29},{x:32,y:49},{x:67,y:53},{x:20,y:72},{x:50,y:78},{x:80,y:72}];
      return shuffleV(base.slice()).slice(0,count).map(p=>({x:Math.max(13,Math.min(87,p.x+(Math.random()*8-4))),y:Math.max(13,Math.min(86,p.y+(Math.random()*8-4)))}));
    }
    function currentFractionLevelV78(roundNum){
      const idx = (typeof selectedLearningPathIndex === 'number') ? selectedLearningPathIndex : 1;
      if(idx >= 6) return ((Math.max(1,roundNum)-1)%5)+1;
      if(idx <= 0) return 1;
      return Math.max(1, Math.min(5, idx));
    }
    function itemKeyV(item){
      if(isValueV(item)) return 'v:'+fmtV(item.f);
      if(isMinusV(item)) return 'm:'+fmtV(item.f);
      if(isMultiplyIntV(item)) return 'x:'+String(item.factor);
      if(isDivideIntV(item)) return 'd:'+String(item.divisor);
      return '?';
    }
    function encodeStateV(items){return items.map(itemKeyV).sort().join('|');}
    function itemFromKeyV(key){
      const [kind,raw]=String(key).split(':');
      function parseF(s){ if(!s || !s.includes('/')) return [Number(s||0),1]; const p=s.split('/'); return [Number(p[0]),Number(p[1])]; }
      if(kind==='v') return {type:'value', f:parseF(raw)};
      if(kind==='m') return {type:'minus', f:parseF(raw)};
      if(kind==='x') return {type:'multiplyInt', factor:Number(raw)};
      if(kind==='d') return {type:'divideInt', divisor:Number(raw)};
      return {type:'value', f:[0,1]};
    }
    function operationResultItemsV(a,b){
      let value=null, op=null;
      if(isValueV(a) && isValueV(b)){
        const res=addV(a.f,b.f); return valV(res)<=1.00001 ? [{type:'value', f:res}] : [];
      }
      if(isValueV(a)){value=a; op=b;} else if(isValueV(b)){value=b; op=a;}
      if(!value || !op) return [];
      let res=null;
      if(isMinusV(op)) res=subV(value.f, op.f);
      if(isMultiplyIntV(op)) res=mulIntV(value.f, op.factor);
      if(isDivideIntV(op)) res=divIntV(value.f, op.divisor);
      if(!res || valV(res)<-0.00001 || valV(res)>1.00001) return [];
      return [{type:'value', f:res}];
    }
    function autoMinMovesV(items,target){
      target=normV(target); const start=items.map(cloneBubbleV); const q=[{items:start,moves:0}], seen=new Set([encodeStateV(start)]);
      const maxDepth=5;
      while(q.length){
        const cur=q.shift();
        if(cur.moves>0 && cur.items.some(it=>isValueV(it)&&sameV(it.f,target))) return cur.moves;
        if(cur.moves>=maxDepth) continue;
        for(let i=0;i<cur.items.length;i++){
          for(let j=i+1;j<cur.items.length;j++){
            const results=operationResultItemsV(cur.items[i],cur.items[j]);
            results.forEach(res=>{
              const next=cur.items.filter((_,idx)=>idx!==i&&idx!==j).concat([res]);
              const key=encodeStateV(next); if(seen.has(key))return; seen.add(key); q.push({items:next,moves:cur.moves+1});
            });
          }
        }
      }
      return null;
    }
    function makeTaskV78(roundNum){
      const chosenLevel = currentFractionLevelV78(roundNum);
      const bank = V78_BANKS[chosenLevel] || V78_BANKS[1];
      const base = bank[(Math.max(1,roundNum)-1)%bank.length];
      const hasVisualOperator = (base.items||[]).some(it=>isMultiplyIntV(it)||isDivideIntV(it));
      const displayMode = (hasVisualOperator || chosenLevel>=4) ? 'visual+symbol' : (base.displayMode || 'visual+symbol');
      const repr = reprForDisplayModeV(displayMode);
      const pos = positionsV(base.items.length);
      const items = shuffleV(base.items.map(cloneBubbleV));
      const minMoves = autoMinMovesV(items, base.target);
      const taskBubbles = items.map((it,i)=>{
        const b=cloneBubbleV(it); b.id='v78b'+i+'_'+Date.now().toString(36)+'_'+Math.random().toString(36).slice(2,5); b.x=pos[i].x; b.y=pos[i].y; b.colorIndex=i; b.displayMode=displayMode;
        if(isValueV(b)){ b.repr=repr; b.asset=V78_VALUE_ASSETS[i%V78_VALUE_ASSETS.length]; }
        else { b.repr='operator'; b.asset=V78_OPERATOR_ASSETS[b.type] || 'bubble-blue.png'; }
        return b;
      });
      const fallbackMin = Number(base.optimal || 1);
      if(minMoves === null) console.warn('Breukenzee v78: geen minMoves gevonden', base);
      return { topic:'fractions', mode:'fraction-merge-drag-v78', skill:'fractionsBuild', fractionLevel:chosenLevel, levelName:V78_LEVEL_NAMES[chosenLevel] || 'Breuken', displayMode, targetFraction:normV(base.target), optimalMoves:Number(minMoves || fallbackMin), promptKey:'targetFractionMergeTop', bubbles:taskBubbles };
    }
    function isTaskV78(t){return !!(t && t.topic==='fractions' && (t.mode==='fraction-merge-drag-v78' || t.mode==='fraction-merge-drag-v76' || t.mode==='fraction-merge-drag'));}

    const prevRenderTargetV78 = renderTarget;
    renderTarget = function(t){
      if(isTaskV78(t)){
        targetModelWrap.innerHTML=''; targetModelWrap.classList.add('hidden');
        numberLineWrap.innerHTML=''; numberLineWrap.classList.add('hidden');
        targetFrac.classList.remove('hidden'); targetFrac.classList.remove('expression');
        targetText.textContent = tr('targetFractionMergeTop');
        const tf=normV(t.targetFraction);
        targetFrac.innerHTML = tf[1]===1 ? `<span class="targetWhole">${tf[0]}</span>` : fractionHTML(tf[0], tf[1]);
        return;
      }
      return prevRenderTargetV78(t);
    };
    const prevUpdateHintV78 = updateHint;
    updateHint = function(t){ if(isTaskV78(t)){ hintText.innerHTML=''; return; } return prevUpdateHintV78(t); };

    function clearBoardV78(){ if(stage) stage.querySelectorAll('.fractionMergeBoard').forEach(el=>el.remove()); window.__fractionMergeV76 = null; }
    const prevClearV78 = clearBubbles;
    clearBubbles = function(){ clearBoardV78(); return prevClearV78(); };

    function polar(cx,cy,r,ang){const a=(ang-90)*Math.PI/180;return [cx+r*Math.cos(a), cy+r*Math.sin(a)];}
    function wedgePath(cx,cy,r,a0,a1){const p0=polar(cx,cy,r,a0),p1=polar(cx,cy,r,a1),large=(a1-a0)>180?1:0;return `M ${cx} ${cy} L ${p0[0].toFixed(2)} ${p0[1].toFixed(2)} A ${r} ${r} 0 ${large} 1 ${p1[0].toFixed(2)} ${p1[1].toFixed(2)} Z`;}
    function svgModelV(f,idx){
      f=normV(f); const n=Math.max(0,f[0]), d=Math.max(1,f[1]);
      if(d===1 && n>=1){
        const fill=V78_COLORS[idx%V78_COLORS.length];
        return `<svg class="fractionMergeModel" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="45" fill="rgba(255,255,255,.46)" stroke="rgba(255,255,255,.92)" stroke-width="3"/><circle cx="50" cy="50" r="42" fill="${fill}" stroke="rgba(21,52,98,.82)" stroke-width="2.5"/><circle cx="36" cy="28" r="11" fill="rgba(255,255,255,.36)"/></svg>`;
      }
      const step=360/d; let parts='';
      for(let i=0;i<d;i++){
        const filled=i<n;
        const fill=filled ? V78_COLORS[(idx+i)%V78_COLORS.length] : 'rgba(247,253,255,.48)';
        parts += `<path d="${wedgePath(50,50,42,i*step,(i+1)*step)}" fill="${fill}" stroke="rgba(8,39,84,.58)" stroke-width="2"/>`;
      }
      return `<svg class="fractionMergeModel" viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="50" r="45" fill="rgba(255,255,255,.46)" stroke="rgba(255,255,255,.92)" stroke-width="3"/>${parts}<circle cx="50" cy="50" r="42" fill="none" stroke="rgba(21,52,98,.82)" stroke-width="2.5"/><circle cx="36" cy="28" r="11" fill="rgba(255,255,255,.36)"/></svg>`;
    }
    function mathLabelV(f){
      f=normV(f);
      if(f[1]===1) return `<span class="fractionMergeMathLabel whole"><span>${f[0]}</span></span>`;
      return `<span class="fractionMergeMathLabel"><span>${f[0]}</span><i></i><span>${f[1]}</span></span>`;
    }
    function miniFracV(f){
      f=normV(f); if(f[1]===1) return `<span class="fractionMiniWhole">${f[0]}</span>`;
      return `<span class="fractionMiniFrac"><span>${f[0]}</span><i></i><span>${f[1]}</span></span>`;
    }
    function operatorLabelV(b){
      if(isMinusV(b)) return `<span class="fractionMergeOperatorLabel"><span class="opSign">−</span>${miniFracV(b.f)}</span>`;
      if(isMultiplyIntV(b)) return `<span class="fractionMergeOperatorLabel"><span class="opText">×${Number(b.factor||1)}</span></span>`;
      if(isDivideIntV(b)) return `<span class="fractionMergeOperatorLabel"><span class="opText">:${Number(b.divisor||1)}</span></span>`;
      return `<span class="fractionMergeOperatorLabel"><span class="opText">?</span></span>`;
    }
    function operatorClassV(b){ if(isMinusV(b))return 'operatorMinus'; if(isMultiplyIntV(b))return 'operatorMultiplyInt'; if(isDivideIntV(b))return 'operatorDivideInt'; return 'operatorSpecial'; }
    function operatorDiaV(b,arena){
      const w = arena ? arena.clientWidth : 360, h = arena ? arena.clientHeight : 560;
      const base = Math.min(w*.205, h*.17);
      if(isMinusV(b)) return Math.max(74, Math.min(94, base+6));
      if(isMultiplyIntV(b) || isDivideIntV(b)) return Math.max(68, Math.min(84, base));
      return Math.max(70, Math.min(88, base));
    }
    function operatorIconV(b){
      if(isMultiplyIntV(b)) return `<svg class="fractionMergeOperatorIcon" viewBox="0 0 100 42" aria-hidden="true"><circle cx="32" cy="21" r="15"/><circle cx="68" cy="21" r="15"/><path d="M48 21H56" stroke="rgba(255,255,255,.88)" stroke-width="5" stroke-linecap="round"/></svg>`;
      if(isDivideIntV(b)) return `<svg class="fractionMergeOperatorIcon" viewBox="0 0 100 42" aria-hidden="true"><circle cx="26" cy="21" r="14"/><circle cx="50" cy="21" r="14"/><circle cx="74" cy="21" r="14"/><path d="M39 21H61" stroke="rgba(255,255,255,.82)" stroke-width="5" stroke-linecap="round"/></svg>`;
      return '';
    }
    function operationV(src,tar){
      if(isValueV(src) && isValueV(tar)){
        const res=addV(src.f,tar.f); return {res, formula:`${fmtV(src.f)} + ${fmtV(tar.f)} = ${fmtV(res)}`};
      }
      let value=null, op=null;
      if(isValueV(src)){value=src; op=tar;} else if(isValueV(tar)){value=tar; op=src;}
      if(!value || !op) return null;
      let res=null, formula='';
      if(isMinusV(op)){res=subV(value.f,op.f); formula=`${fmtV(value.f)} − ${fmtV(op.f)} = ${fmtV(res)}`;}
      else if(isMultiplyIntV(op)){res=mulIntV(value.f,op.factor); formula=`${fmtV(value.f)} × ${Number(op.factor||1)} = ${fmtV(res)}`;}
      else if(isDivideIntV(op)){res=divIntV(value.f,op.divisor); formula=`${fmtV(value.f)} : ${Number(op.divisor||1)} = ${fmtV(res)}`;}
      else return null;
      return {res, formula};
    }
    function showEquationFlashV(s,bid,text){
      if(!s||!s.arenaEl||!bid||!text)return;
      const b=s.bubbles.find(x=>x.id===bid); if(!b)return;
      const c=centerPxV(s,b); const flash=document.createElement('div'); flash.className='fractionMergeEquationFlash'; flash.textContent=text;
      flash.style.left=c.x+'px'; flash.style.top=c.y+'px'; s.arenaEl.appendChild(flash); setTimeout(()=>flash.remove(),1080);
    }
    function setFractionUndoButtonV(s){
      const btn=document.getElementById('skipBtn'); if(!btn)return;
      btn.textContent='↶ Terug'; btn.title='Stap terug'; btn.setAttribute('aria-label','Stap terug'); btn.classList.add('fractionUndoBtn');
      btn.disabled=!(s && s.history && s.history.length>0) || !!(s && (s.animating||s.solved||s.resetting));
    }
    function restoreSkipButtonV(){
      const btn=document.getElementById('skipBtn'); if(!btn)return;
      btn.textContent=tr('skip'); btn.title=tr('skip'); btn.setAttribute('aria-label',tr('skip')); btn.classList.remove('fractionUndoBtn'); btn.disabled=false;
    }
    function undoV(s){
      if(!s||!s.history||!s.history.length||s.animating||s.solved||s.resetting)return false;
      const prev=s.history.pop(); s.bubbles=cloneV(prev); s.animating=false; s.solved=false; locked=false; rebuildV(s); setFractionUndoButtonV(s); return true;
    }
    function visualDiaV(f,arena){
      /* v79: oppervlakte van value-bubbles volgt de breukwaarde.
         diameter ∝ sqrt(value / 1/8), daarna zachte mobiele clamp zodat 3/4 en 1 niet het veld vullen. */
      const w = arena ? arena.clientWidth : 360, h = arena ? arena.clientHeight : 560;
      const baseDia = Math.max(58, Math.min(76, Math.min(w*.18, h*.13))); // diameter voor 1/8
      const raw = baseDia * Math.sqrt(Math.max(0.0625, valV(f)) / 0.125);
      const maxDia = Math.max(122, Math.min(164, Math.min(w*.41, h*.30)));
      return Math.max(54, Math.min(maxDia, raw));
    }
    function centerPxV(s,b){const r=s.arenaEl.getBoundingClientRect();return{x:r.width*(b.x/100),y:r.height*(b.y/100)};}
    function posPxV(s,el,b,px){
      const vd=isValueV(b)?visualDiaV(b.f,s.arenaEl):operatorDiaV(b,s.arenaEl);
      const hit=Math.max(isValueV(b)?86:74,vd+(isValueV(b)?22:18)); el.style.width=hit+'px'; el.style.height=hit+'px'; el.style.left=px.x+'px'; el.style.top=px.y+'px';
      const v=el.querySelector('.fractionMergeVisual'); if(v){v.style.width=vd+'px'; v.style.height=vd+'px'; v.style.setProperty(isValueV(b)?'--bDia':'--opDia',vd+'px');}
      const h=el.querySelector('.fractionMergeHit'); if(h){h.style.width=hit+'px'; h.style.height=hit+'px';}
    }
    function posPercV(s,el,b){posPxV(s,el,b,centerPxV(s,b));}
    function buildElV(s,b){
      const btn=document.createElement('button'); btn.type='button'; btn.dataset.id=b.id;
      const vd=isValueV(b)?visualDiaV(b.f,s.arenaEl):operatorDiaV(b,s.arenaEl);
      const hit=Math.max(isValueV(b)?86:74,vd+(isValueV(b)?22:18)), asset=b.asset || (isValueV(b)?V78_VALUE_ASSETS[(b.colorIndex||0)%V78_VALUE_ASSETS.length]:(V78_OPERATOR_ASSETS[b.type]||'bubble-blue.png'));
      if(isValueV(b)){
        const repr=b.repr||reprForDisplayModeV(s.task.displayMode);
        btn.className='fractionMergeBubble repr'+repr.charAt(0).toUpperCase()+repr.slice(1);
        btn.innerHTML=`<div class="fractionMergeHit" style="width:${hit}px;height:${hit}px"></div><div class="fractionMergeVisual" style="width:${vd}px;height:${vd}px;--bDia:${vd}px"><div class="fractionMergeGlow"></div><div class="fractionMergeDropRing"></div><img class="fractionMergeOrb" src="assets/ui/${asset}" alt="" draggable="false">${svgModelV(b.f,b.colorIndex||0)}${mathLabelV(b.f)}</div>`;
      }else{
        btn.className='fractionMergeBubble operatorBubble '+operatorClassV(b);
        const opVisual = isMinusV(b) ? svgModelV(b.f,5) : operatorIconV(b);
        btn.innerHTML=`<div class="fractionMergeHit" style="width:${hit}px;height:${hit}px"></div><div class="fractionMergeVisual" style="width:${vd}px;height:${vd}px;--opDia:${vd}px"><div class="fractionMergeGlow"></div><div class="fractionMergeDropRing"></div><img class="fractionMergeOrb" src="assets/ui/${asset}" alt="" draggable="false">${opVisual}${operatorLabelV(b)}</div>`;
      }
      bindDragV(s,btn,b); return btn;
    }
    function rebuildV(s){s.arenaEl.innerHTML=''; s.elMap=new Map(); s.bubbles.forEach(b=>{const el=buildElV(s,b); s.elMap.set(b.id,el); s.arenaEl.appendChild(el); posPercV(s,el,b);}); setFractionUndoButtonV(s);}
    function clearTargetsV(s){s.elMap && s.elMap.forEach(el=>el.classList.remove('targeting'));}
    function findTargetV(s,src,px){let best=null,bestDist=1e9; s.bubbles.forEach(b=>{if(b.id===src.id)return;const c=centerPxV(s,b),d=isValueV(b)?visualDiaV(b.f,s.arenaEl):operatorDiaV(b,s.arenaEl),rad=Math.max(48,d*.62),dist=Math.hypot(c.x-px.x,c.y-px.y); if(dist<=rad && dist<bestDist){best=b; bestDist=dist;}}); return best;}
    function bindDragV(s,el,b){
      el.addEventListener('pointerdown',ev=>{
        if(locked||s.animating||s.solved)return; ev.preventDefault();
        const rect=s.arenaEl.getBoundingClientRect(), c=centerPxV(s,b), off={x:ev.clientX-rect.left-c.x,y:ev.clientY-rect.top-c.y};
        el.classList.add('dragging'); if(el.setPointerCapture)try{el.setPointerCapture(ev.pointerId);}catch(e){}
        const move=mv=>{const px={x:Math.max(0,Math.min(rect.width,mv.clientX-rect.left-off.x)),y:Math.max(0,Math.min(rect.height,mv.clientY-rect.top-off.y))}; posPxV(s,el,b,px); clearTargetsV(s); const t=findTargetV(s,b,px); if(t){const tel=s.elMap.get(t.id); if(tel)tel.classList.add('targeting');}};
        const up=upEv=>{window.removeEventListener('pointermove',move); window.removeEventListener('pointerup',up); el.classList.remove('dragging'); if(el.releasePointerCapture)try{el.releasePointerCapture(upEv.pointerId);}catch(e){} const px={x:Math.max(0,Math.min(rect.width,upEv.clientX-rect.left-off.x)),y:Math.max(0,Math.min(rect.height,upEv.clientY-rect.top-off.y))}; const t=findTargetV(s,b,px); clearTargetsV(s); if(t)mergeV(s,b.id,t.id); else posPercV(s,el,b);};
        window.addEventListener('pointermove',move); window.addEventListener('pointerup',up);
      });
    }
    function resetSameLevelV(s){
      if(s.resetting)return; s.resetting=true; perfectRun=false;
      showToast('Goed gevonden. Kan sneller!', false);
      if(playWrongSound)playWrongSound();
      s.elMap && s.elMap.forEach(el=>el.classList.add('failFast'));
      locked=true;
      setTimeout(()=>{s.bubbles=cloneV(s.initial); s.history=[]; s.animating=false; s.solved=false; s.resetting=false; locked=false; rebuildV(s); setFractionUndoButtonV(s);},840);
    }
    function completeV(s){
      const win=s.bubbles.find(b=>isValueV(b)&&sameV(b.f,s.task.targetFraction)); if(!win)return false;
      if(s.history.length !== s.task.optimalMoves){ resetSameLevelV(s); return false; }
      s.solved=true; locked=true; const el=s.elMap.get(win.id);
      if(el){const img=el.querySelector('.fractionMergeOrb'); if(img)img.src='assets/ui/bubble-gold-success-v77.png'; el.classList.add('v77GoldSuccess','successPulse','pop'); if(window.spawnBubblePopEffect)window.spawnBubblePopEffect(el,{variant:'success'});}
      setFractionUndoButtonV(s);
      score += 12 + s.task.fractionLevel + Math.max(0, 3-s.history.length); correctRemaining=0; correctTotal=1; updateHUD();
      const msg=`${fmtV(s.task.targetFraction)} in ${s.history.length} zet${s.history.length===1?'':'ten'}`;
      showToast(msg,true); if(playSuccessSound)playSuccessSound();
      setTimeout(()=>{if(round>=maxRounds)end();else nextRound();},1850); return true;
    }
    function mergeV(s,sid,tid){
      if(s.animating||s.solved||s.resetting)return;
      const src=s.bubbles.find(b=>b.id===sid), tar=s.bubbles.find(b=>b.id===tid), srcEl=s.elMap.get(sid), tarEl=s.elMap.get(tid);
      if(!src||!tar||!srcEl||!tarEl)return;
      const op=operationV(src,tar);
      if(!op || valV(op.res)<-0.00001 || valV(op.res)>1.00001){posPercV(s,srcEl,src); if(playWrongSound)playWrongSound(); tarEl.classList.add('failFast'); setTimeout(()=>tarEl.classList.remove('failFast'),420); return;}
      s.animating=true; s.history.push(cloneV(s.bubbles)); setFractionUndoButtonV(s);
      if(playPopSound)playPopSound(); if(window.spawnBubblePopEffect)window.spawnBubblePopEffect(srcEl,{variant:'mini'});
      const tc=centerPxV(s,tar); srcEl.style.transition='left .22s ease, top .22s ease, opacity .22s ease'; posPxV(s,srcEl,src,tc); srcEl.style.opacity='0';
      tar.type='value'; tar.f=op.res; tar.factor=undefined; tar.divisor=undefined; tar.asset=V78_VALUE_ASSETS[(tar.colorIndex||0)%V78_VALUE_ASSETS.length]; tar.repr=reprForDisplayModeV(s.task.displayMode);
      const gv=tarEl.querySelector('.fractionMergeVisual'), gd=visualDiaV(op.res,s.arenaEl); if(gv){gv.style.width=gd+'px'; gv.style.height=gd+'px';}
      const model=tarEl.querySelector('.fractionMergeModel'); if(model) model.outerHTML=svgModelV(op.res,tar.colorIndex||0);
      tarEl.classList.remove('pop'); void tarEl.offsetWidth; tarEl.classList.add('pop');
      setTimeout(()=>{
        s.bubbles=s.bubbles.filter(b=>b.id!==sid); rebuildV(s); s.animating=false; showEquationFlashV(s,tid,op.formula); setFractionUndoButtonV(s);
        if(s.history.length > s.task.optimalMoves){ resetSameLevelV(s); return; }
        completeV(s);
      },260);
    }
    function renderBoardV78(task){
      clearBoardV78();
      const board=document.createElement('div'); board.className='fractionMergeBoard v78Discovery';
      board.innerHTML='<div class="fractionMergeArena"></div>'; stage.appendChild(board);
      const s={task,board,arenaEl:board.querySelector('.fractionMergeArena'),bubbles:cloneV(task.bubbles),initial:cloneV(task.bubbles),history:[],elMap:new Map(),animating:false,solved:false,resetting:false};
      s.undoStep=function(){return undoV(s);};
      window.__fractionMergeV76=s; rebuildV(s); setFractionUndoButtonV(s);
    }

    try{
      Object.keys(V78_BANKS).forEach(lvl=>{
        V78_BANKS[lvl].forEach((p,idx)=>{
          const m=autoMinMovesV(p.items,p.target);
          if(m===null) console.warn('Breukenzee v78 puzzle zonder oplossing', lvl, idx, p);
          p.optimal=m || p.optimal || 1;
        });
      });
    }catch(e){ console.warn('Breukenzee v78 minMoves check failed', e); }

    window.__fractionMergeMakeTask = makeTaskV78;
    window.__fractionMergeRenderBoard = renderBoardV78;
    window.__fractionMergeIsTask = isTaskV78;
    if(typeof createFractionTaskForLevel==='function') createFractionTaskForLevel=function(level){return makeTaskV78(round+1);};
    if(typeof createTaskForCurriculumSkill==='function'){
      const prevSkillV78 = createTaskForCurriculumSkill;
      createTaskForCurriculumSkill=function(topic,level,skill){ if(topic==='fractions') return makeTaskV78(round+1); return prevSkillV78(topic,level,skill); };
    }

    const prevNextRoundV78 = nextRound;
    nextRound=function(){
      if(selectedTopic!=='fractions'){ restoreSkipButtonV(); return prevNextRoundV78(); }
      hideNextRoundButton(); clearTimers(); if(round>=maxRounds){restoreSkipButtonV(); end();return;}
      round++; const fractionLevel=currentFractionLevelV78(round); level=fractionLevel; updateWorldMusic(); locked=false; clearBubbles();
      task=applyCurriculumTag(makeTaskV78(round)); correctRemaining=1; correctTotal=1;
      updateHUD(); updateHint(task); renderTarget(task); renderBoardV78(task); markDebugAnswers();
    };
    window.__breukenzeeMergeV78Levels = true;
  })();



  document.getElementById("skipBtn").addEventListener("click", () => {
    if(selectedTopic === 'fractions' && window.__fractionMergeV76 && typeof window.__fractionMergeV76.undoStep === 'function'){
      window.__fractionMergeV76.undoStep();
      return;
    }
    hideNextRoundButton();
    perfectRun = false;
    locked = true;
    nextRound();
  });
})();
