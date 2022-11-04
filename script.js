let inizio;
let pixel;
let em;
document.getElementById('conv').onclick = function(){

    inizio = parseInt(document.getElementById('nIniziale').value);
    pixel = (inizio/1.33).toFixed(4) ;
    em = (pixel/16).toFixed(4) ;
  document.getElementById('px').value = pixel;
  document.getElementById('em').value = em;
}
