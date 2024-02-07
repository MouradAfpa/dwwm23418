//------- #1 ----------

console.log("Exercice 1");

let tab = [];
let tab1 = [[10,0],[3,5],[5,8]];
let tab2 = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]];
let tab3 = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]];

function number(param){
  return param.reduce((a,v)=>v[0]-v[1]+a,0);
  ///-- On peux mettre à la place let maVar = param.reduc((a,v>[0]-v[1]+a,0);
  // return maVar;
}
console.log(number([[10, 0], [3, 5], [5, 8]]));
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));
//--- Autre écriture avec déclaration de tab1 .... ------
console.log(number(tab1));
console.log(number(tab2));
console.log(number(tab3));




//------- #2 ----------
console.log("Exercice 2");
function calculMouton(param){
  return  param.filter((v)=>{if(v){return v}}).length;
//   reduce((a,v)=>v?a++:a,0);
// return param.filter(boolean).length;
}

let tabBool = [true, true, true, false,
    true, true, true, true ,
    true, false, true, false,
    true, false, false, true ,
    true, true, true, true ,
    false, false, true, true];

    console.log("nombre de moutons: ",calculMouton(tabBool));

 //------- #3 ----------
console.log("Exercice 3");

function removeChar(phrase) {
    return phrase.replace(/^./, '').replace(/.$/, '');
  }
  
  let phrase = "Ceci est une phrase";
  let result = removeChar(phrase);
  console.log(result);
  
//--- Autre façon ----
console.log("autre méthode:");
  function removChar(){
    let text =  "Ceci est une phrase";
    let newText = text.slice(1, -1);  
    
    return newText;
}
 
console.log("#3 - Nouveau texte en supprimant les chaînes : ", removChar());

 //------- #4 ----------

 console.log("Exercice 4");

 function stringClean(phrase) {
    return phrase.replace(/\d/g, '');
}

let phrase1 = '! !';
let phrase2 = '123456789';
let phrase3 = "(E3at m2e2!!)";
let phrase4 = "Wh7y can't we3 bu1y #cheapskates3";

let resultPhrase1 = stringClean(phrase1);
console.log(resultPhrase1);
let resultPhrase2 = stringClean(phrase2);
console.log(resultPhrase2);
let resultPhrase3 = stringClean(phrase3);
console.log(resultPhrase3);
let resultPhrase4 = stringClean(phrase4);
console.log(resultPhrase4);


 //------- #5 ----------

 console.log("Exercice 5");


function doubleChar(param){
    return param.replace(/(.)/g, '$1$1');
}

console.log(doubleChar("String"));
console.log(doubleChar("Hello World"));
console.log(doubleChar("1234!_ "));

 //------- #6 ----------

 console.log("Exercice 6");

let tabChiffre = [1,1,2,4,5,2,1,2,3,5,5,5];

let removeDuplicates = tabChiffre.reduce((a,v)=>a.includes(v) ? a : a.concat(v),[]).sort((a,b)=>a-b)

console.log(removeDuplicates);

 //------- #7 ----------

 console.log("Exercice 7");


function whoseMove(joueur, gagne) {
    console.log(gagne);
    return gagne ? joueur : (joueur === "black" ? "white" : "black");
}

console.log(whoseMove("black", false));
console.log(whoseMove("white", true));
console.log(whoseMove("white", false));

