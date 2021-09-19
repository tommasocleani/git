/*
  Conta il tempo
  Scrivi un programma che dato un numero di secondi, calcoli la quantità di ore, minuti e secondi corrispondenti e
  poi stampi il risultato. L'output avrà solo numeri interi.

  Esempio:
    Input: 12560
    Output: 3 ore, 29 minuti e 20 secondi.

  Consigli:
  In un'ora ci sono 60 minuti, in un minuto 60 secondi. Quindi quanti secondi ci sono in un'ora? ;)

  http://www.imparareaprogrammare.it
*/
function calcolo()
{
  var secondi = parseInt(document.getElementById("secondi").value);
  var ore = Math.floor(secondi / 3600);
  var minuti = Math.floor(secondi / 60);
  if (minuti >= 60)
  {
    minuti = minuti - ore*60;
  } 
  var secrim = secondi - (ore*3600 + minuti*60);
  var out = ore + " ore, " + minuti + " minuti e " + secrim + " secondi.";
  document.getElementById("risultato").innerHTML=out;
}