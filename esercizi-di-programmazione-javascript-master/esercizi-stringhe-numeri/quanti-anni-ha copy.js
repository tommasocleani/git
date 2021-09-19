/*
  Quanti anni ha?
  Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
    - l'età della persona,
    - quanti anni sono necessari per raggiungere i 100
  Restituisca in output entrambi i risultati.

  Esempio:
    Input: anno corrente = 2018, anno di nascita = 1991
    Ouput: età = 27, anni mancanti = 73

  http://www.imparareaprogrammare.it
*/

function calcolaAnno() {
  var anno = parseInt(document.getElementById("anno").value);
  var oggi = new Date().getFullYear();
  var sott = oggi - anno;
  return sott;
}

function sottrazione()
{
  var sott = calcolaAnno();
  document.getElementById("sott").innerHTML=sott;
}
function cariatide() {
  var sott = calcolaAnno();
  var car = 100 - sott;
  document.getElementById("cariatide").innerHTML=car;
}