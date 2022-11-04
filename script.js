let inizio;
let pixel;
let em;
document.getElementById('conv').onclick = function(){

    inizio = parseInt(document.getElementById('nIniziale').value);
    pixel = Math.round(inizio/1.33);
    em = Math.round(pixel/16);
  document.getElementById('px').value = pixel;
  document.getElementById('em').value = em;
}
