console.log(" as veikiu");
// apsilimui

var masyvas = [3,5,8,0,8,12,1];
var min = 10;
var max = 100;
// 0 UZDUOTIS - pasikartoti:
// skaicius, kurie yra lyginiai i pakeisti i zodi "lyginis"
for (var i = 0; i < masyvas.length; i++) {
  if (masyvas[i] % 2 ==0 && masyvas[i] !=0) {
    console.log(masyvas[i] + " lyginis");
  }else if (masyvas[i]==0 ) {
    console.log(masyvas[i] + " nei lyginis nei nelyginis");
  }else {
    console.log(masyvas[i] +" nelygnis");
    }
}
for (var i = 0; i < masyvas.length; i++) {
  if (masyvas[i] % 8 ==0 && masyvas[i] !=0) {
    console.log(masyvas[i] + " dalinasi is 8 ");
    document.querySelector("body").innerHTML += masyvas[i] + " dalijasi is 8 "
  }else {
      console.log(" nesidalina is 8 ");
  }
}

// 1 UZDUOTIS:
// kursime nauja masyva uzpildyta, atsitiktiniais skaiciais nuo 10 - 100.
// masyvo ilgis 60
//burtu keliu skaiciu generavimas
var burtuSKaicius = Math.random(); //sukuria sk. nuo 0 iki 0.999
console.log("burtu skaicius: ", burtuSKaicius);
console.log("burtu skaicius: ", Math.floor(burtuSKaicius*100)); //integer sveiki skaiciai
console.log("burtu skaicius: ", Math.ceil(99.49)); //ceil apvalina i didesne puse
//nuo 50 iki 200
//Math.random () * *(max-min);
console.log("burtu skaicius: ", Math.ceil(burtuSKaicius*150)+50);
// 2 UZDUOTIS:
// burtu keliu masyvo narius, su 10 % tikimybe paversti negiamais  ( padauginti is  -1)
// pvz:
// var a = Math.random(); // nuo 0 iki 1 (1- neiskaitant)
// if ( a <= 0.1) {
//     console.log( "laimejai" );
// }

// 3 UZDUOTIS:
// visus skaicius paversti teigiamas (is masyvo parts)
// 4 UZDUOTIS:
// surasti geriausia darbuotoja(didziausia skaiciu)
masyvas = [0,20,0,3,5,8,0,8,12,1];
let best = masyvas[0]; //laikinai issirenkas kad 0-tas geriausias
for (var i = 0; i < masyvas.length; i++) {
  if (best<masyvas[i]) {
    best = masyvas[i];x
  }
}
console.log(" geriausias darbuotojas " + best);

// 5 UZDUOTIS:
//surasti blogiausia darbuotoja
