// BubblePopWiskunde menu-lang-marker.js; extracted from index.html.
// // Extracted script block 3; original line 17420; attrs: id="v82-menu-lang-marker"

(function(){
  function setLangMarker(){
    const sel = document.getElementById('langSel') || document.getElementById('langSelMini');
    const lang = (sel && sel.value) || localStorage.getItem('bubblePopLang') || 'nl';
    document.documentElement.setAttribute('data-lang', lang);
  }
  setLangMarker();
  document.addEventListener('change', function(e){
    if(e.target && (e.target.id === 'langSel' || e.target.id === 'langSelMini')) setTimeout(setLangMarker, 0);
  }, true);
  document.addEventListener('click', function(e){
    const b = e.target && e.target.closest && e.target.closest('[data-lang]');
    if(b) setTimeout(setLangMarker, 0);
  }, true);
})();
