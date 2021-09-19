/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/
var a;
a=1;
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;
var d = document.getElementById("d").value;
var e = document.getElementById("e").value;
var risultato = 0;

function somma()
  {
    alert(isNaN(a));
    risultato = a+b+c+d+e;
    document.getElementById("sommaOut").innerHTML = risultato;
  }
  function media()
  {
    risultato = (a + b + c + d + e)/5;
    document.getElementById("mediaOut").innerHTML = risultato;
  }