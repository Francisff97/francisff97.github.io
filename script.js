let oggi = document.getElementById('oggi');
let ieri = document.getElementById('ieri');
let settimana = document.getElementById('settimana');
let mese = document.getElementById('mese');
let mese_scorso = document.getElementById('mese_scorso');
let tre_mesi = document.getElementById('tre_mesi');
let sei_mesi = document.getElementById('sei_mesi');
let anno = document.getElementById('anno');
let campoOggi = document.getElementById('1').value;
let campoIeri = document.getElementById('2').value;
let campoSettimana = document.getElementById('3').value;
let campoMese = document.getElementById('4').value;
let campoMese_scorso = document.getElementById('5').value;
let campoTre_mesi = document.getElementById('6').value;
let campoSei_mesi = document.getElementById('7').value;
let campoAnno = document.getElementById('8').value;
let numero = document.getElementById('numero');
let pulsante = document.getElementById('pulsante');
let campo = document.getElementById('campo');

let oggiDef = parseInt(oggi.innerText);
let ieriDef = parseInt(ieri.innerText);
let settimanaDef = parseInt(settimana.innerText);
let meseDef = parseInt(mese.innerText);
let mese_scorsoDef = parseInt(mese_scorso.innerText);
let tre_mesiDef = parseInt(tre_mesi.innerText);
let sei_mesiDef = parseInt(sei_mesi.innerText);
let annoDef = parseInt(anno.innerText);
// funzionante
  /*   function incrementa() {
        var numero_intero = parseInt(numero.value)
        console.log(numero_intero);
        console.log(oggiDef);
        var somma = oggiDef + numero_intero;
        console.log(somma);
    oggi.innerHTML = somma;
}
*/

function incrementa() {
var selezionato = document.getElementById('1').selected;
var selezionato2 = document.getElementById('2').selected;
var selezionato3 = document.getElementById('3').selected;
var selezionato4 = document.getElementById('4').selected;
var selezionato5 = document.getElementById('5').selected;
var selezionato6 = document.getElementById('6').selected;
var selezionato7 = document.getElementById('7').selected;
var selezionato8 = document.getElementById('8').selected;
 if (selezionato){
    var numero_intero = parseInt(numero.value)
    var somma = oggiDef + numero_intero;
oggi.innerHTML = somma;
settimana.innerHTML = settimanaDef + numero_intero;
mese.innerHTML = meseDef + numero_intero;
localStorage.setItem ('oggi', parseInt(oggi.innerText));
localStorage.setItem ('settimana', parseInt(settimana.innerText));
localStorage.setItem ('mese', parseInt(mese.innerText));
 } else if (selezionato2){
    var numero_intero = parseInt(numero.value)
    var somma = ieriDef + numero_intero;
ieri.innerHTML = somma;
localStorage.setItem ('ieri', parseInt(ieri.innerText));
 } else if (selezionato3){
    var numero_intero = parseInt(numero.value)
    var somma = settimanaDef + numero_intero;
settimana.innerHTML = somma;
localStorage.setItem ('settimana', parseInt(settimana.innerText));
 } else if (selezionato4){
    var numero_intero = parseInt(numero.value)
    var somma = meseDef + numero_intero;
mese.innerHTML = somma;
localStorage.setItem ('mese', parseInt(mese.innerText));

 } else if (selezionato5){
    var numero_intero = parseInt(numero.value)
    console.log(numero_intero);
    console.log(oggiDef);
    var somma = mese_scorsoDef + numero_intero;
    console.log(somma);
mese_scorso.innerHTML = somma;
localStorage.setItem ('mese_scorso', parseInt(mese_scorso.innerText));
 } else if (selezionato6){
    var numero_intero = parseInt(numero.value)
    console.log(numero_intero);
    console.log(oggiDef);
    var somma = tre_mesiDef + numero_intero;
    console.log(somma);
tre_mesi.innerHTML = somma;
localStorage.setItem ('tre_mesi', parseInt(tre_mesi.innerText));
 } else if (selezionato7){
    var numero_intero = parseInt(numero.value)
    console.log(numero_intero);
    console.log(oggiDef);
    var somma = sei_mesiDef + numero_intero;
    console.log(somma);
sei_mesi.innerHTML = somma;
localStorage.setItem ('sei_mesi', parseInt(sei_mesi.innerText));
 } else if (selezionato8){
    var numero_intero = parseInt(numero.value)
    var somma = annoDef + numero_intero;
    console.log(somma);
anno.innerHTML = somma;
localStorage.setItem ('anno', parseInt(anno.innerText));
 } else {
     alert('lol');
 }

};
/* Proviamo a salvare gli elementi nel localstorage*/
let a = localStorage.getItem('oggi');
oggi.innerHTML = a;
let b = localStorage.getItem('ieri');
ieri.innerHTML = b;
let c = localStorage.getItem('settimana');
settimana.innerHTML = c;
let d = localStorage.getItem('mese');
mese.innerHTML = d;
let e = localStorage.getItem('mese_scorso');
mese_scorso.innerHTML = e;
let f = localStorage.getItem('tre_mesi');
tre_mesi.innerHTML = f;
let g = localStorage.getItem('sei_mesi');
sei_mesi.innerHTML = g;
let h = localStorage.getItem('anno');
anno.innerHTML = h;


