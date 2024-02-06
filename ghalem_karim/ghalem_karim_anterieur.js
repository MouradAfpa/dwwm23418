// ```function removeChar(chaine){
//     return chaine.reduce((a,v)=>(v[0]||v[chaine.length-1])? a: a+v);
// }
// ```
// console.log(removeChar("Ceci est une phrase"));

// exo 4

// function stringClean(a) {
//   return a.replace(/\d/g,"");
// }

// console.log(stringClean("(E3at m2e2!!)"));

// exo 5

function doubleChar(t) {
  return t.replace(/./g, "$&$&");
}

console.log(doubleChar("String"));
console.log(doubleChar("1234!_ "));

// exo 6
function removeDuplicate(d) {
  return d.filter((v, i) => d.indexOf(v) == i).sort();
}
console.log(removeDuplicate([1, 1, 2, 4, 5, 2, 1, 2, 3, 5, 5, 5]));

// exo 7

function whoseMove(d, e) {
  return e && /black/.test(d) ? "black" : "white";
}

console.log(whoseMove("black", false));

// exo 8

// function calculateTip(d, e) {
// return(Math.round((e==/exellent/i)?((e==/great/i)?((e==/good/i)?((e==/poor/i)?((e==/terrible/i)?0:0):d*0.05):d*0.10):d*0.15):d*0.2));

// function calculateTip(d, e) {
//   return Math.round(
//     /exellent/.test(e.toLowerCase())
//       ? d * 0.2
//       : /great/.test(e.toLowerCase())
//       ? d * 0.15
//       : /good/.test(e.toLowerCase())
//       ? d * 0.1
//       : /poor/.test(e.toLowerCase())
//       ? d * 0.05
//       : /terrible/.test(e.toLowerCase())
//       ? 0
//       : 0
//   );
// }

function calculateTip(v, c) {

  return ((/excellent/i.test(c)) ? Math.round(v*20/100) :
          (/great/i.test(c)) ? Math.round(v*15/100) :
          (/good/i.test(c)) ? Math.round(v*10/100) :
          (/poor/i.test(c)) ? Math.round(v*5/100) :
          (/terrible/i.test(c)) ? 0 :
          "Rating not reconised");
}


console.log(calculateTip(26.95, "gOod"));


// exo 9 
// function accum(d){;
//   return (d.reduce(a,v)    d.filter((v, i) => d.toLowerCase().indexOf(v) != i).replace(/./g, "$&$&"))
// }