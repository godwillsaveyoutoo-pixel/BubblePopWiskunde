// v87 menu safety: only hide the intro splash; app-main owns select/open behavior.
(function(){
  function ready(fn){
    if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', fn, {once:true});
    else fn();
  }
  ready(function(){
    var intro = document.getElementById('introSplash');
    if(intro) intro.classList.add('hidden');
  });
})();
