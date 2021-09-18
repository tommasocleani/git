/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/
var a = document.getElementById("a").value;
var b = document.getElementById("b").value;
var c = document.getElementById("c").value;
var d = document.getElementById("d").value;
var e = document.getElementById("e").value;
function somma()
  {
    var somma = a + b + c + d + e;
    document.getElementById("sommaOut").innerHTML = parseInt(somma);
  }
  function media()
  {
    var media = (a + b + c + d + e)/5;
    document.getElementById("mediaOut").innerHTML = media;
  }