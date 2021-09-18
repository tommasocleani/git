/*
  Somma e media
  Scrivi un programma che dati 5 numeri restituisca in output la somma e la media.

  Esempio:
    Input: a = 1, b = 2, c = 3, d = 4, e = 5
    Output: somma = 15, media = 3
  
  http://www.imparareaprogrammare.it
*/

function somma()
  {
    var a = parseInt(document.getElementById("a").value) ;
  var b = parseInt(document.getElementById("b").value) ;
  var c = parseInt(document.getElementById("c").value) ;
  var d = parseInt(document.getElementById("d").value) ;
  var e = parseInt(document.getElementById("e").value) ;
  var somma;
    somma = a+b+c+d+e;
    document.getElementById("sommaOut").innerHTML = somma;
  }
  function media()
  {
    var a = parseInt(document.getElementById("a").value) ;
    var b = parseInt(document.getElementById("b").value) ;
    var c = parseInt(document.getElementById("c").value) ;
    var d = parseInt(document.getElementById("d").value) ;
    var e = parseInt(document.getElementById("e").value) ;
    var media = (a + b + c + d + e)/5;
    document.getElementById("mediaOut").innerHTML = media;
  }