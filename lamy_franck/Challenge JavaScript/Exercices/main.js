//------- #1 ----------

// let tab =[0,1,2,3,4,5];
// number1.filter(()=>{});

// tab.map((val, i)=>{return i+ val});
// console.log(tab);


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


// let number1 = [[10,0],[3,5],[5,8]];
// let number2 = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]];
// let number3 = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]];


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

//  whoseMove("black",false)  "white"
//  whoseMove("white",true)  "white"
//  whoseMove("white",false)  "black"

function whoseMove(joueur, gagne) {
    console.log(gagne);
    return gagne ? joueur : (joueur === "black" ? "white" : "black");
}

console.log(whoseMove("black", false));
console.log(whoseMove("white", true));
console.log(whoseMove("white", false));


 //------- #8 ----------

 console.log("Exercice 8");

//  calculateTip(20, "ExcellEnt") => 4 // Excellent service, vous donnez 20% de 20 = 4
// calculateTip(26.95, "goOd") => 3 // Bon service, 10% de 26.95 arrondi à 3
// calculateTip(20, "hi") => rien "Rating not recognised"
// Terrible: 0%
// • Poor: 5%
// • Good: 10%
// • Great: 15%
// • Excellent: 20%

function calculateTip(totalAmount, avis) {
    // Je convertis l'avis sur le service en minuscules pour rendre la comparaison insensible à la casse
   let notation = avis.toLowerCase();

    // Je déterminer le pourcentage de pourboire en fonction de l'avis sur le service
    let tipPercentage;
    switch (notation) {
        case "terrible":
            tipPercentage = 0;
            break;
        case "poor":
            tipPercentage = 5;
            break;
        case "good":
            tipPercentage = 10;
            break;
        case "great":
            tipPercentage = 15;
            break;
        case "excellent":
            tipPercentage = 20;
            break;
        default:
            return "Rating not recognised";
    }

    const tipAmount = Math.ceil((tipPercentage / 100) * totalAmount);

    return tipAmount;
}

// Dans l'exercice:
console.log(calculateTip(20, "ExcellEnt"));
console.log(calculateTip(26.95, "goOd"));
console.log(calculateTip(20, "hi"));


 //------- #9 ----------

 console.log("Exercice 9");

//  Ecrire une fonction accum telle que :
// accum("abcd")  "A-Bb-Ccc-Dddd"
// accum("RqaEzty")  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt")  "C-Ww-Aaa-Tttt"


function accum(str) {
    // Convertir la chaîne en majuscules pour la première lettre de chaque bloc
    const uppercasedStr = str.toUpperCase();

    // Construire chaque bloc en utilisant la méthode map
    const result = uppercasedStr.split('').map((char, index) => {
        const repeatedChars = char.repeat(index + 1);
        return repeatedChars.charAt(0) + repeatedChars.slice(1).toLowerCase();
    });

    return result.join('-');
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

//------ #10 ---------
console.log("Exercice 10");

function countArara(n) {
    if (n === 1) {
        return "anane";
    } else {
        a = Math.floor(n/2);
        return Array(a).fill("adak").join(" ") + (n & 1 ? " anane" : "");
    }
}

// Utilisation de la fonction
console.log(countArara(1));  // Affiche : "anane"
console.log(countArara(3));  // Affiche : "adak anane"
console.log(countArara(8));  // Affiche : "adak adak adak adak"

//------ #11 ---------
console.log("Exercice 11");


function validatePin(input){
    let number = /^(\d{4}|\d{6})$/g.test(input)
    return number
    }
    console.log(validatePin("1234"));

//------ #12 ---------
console.log("Exercice 12");

String.prototype.toJadenCase = function(){
    return this.split(' ').map((x)=>x.charAt(0).toUpperCase()+x.substring(1,x.length)).join(' ');
}
console.log("Ceci est une phrase".toJadenCase());


//------ #13 ---------
console.log("Exercice 13");

function getCount(str) {
    return (str.match(/[aeiou]/g)).length;
   }
   
   console.log(getCount("Ceci est une phrase"));


//------ #14 ---------
      console.log("Exercice 14");

      Var list1 = [
        {FirstName: 'Noah', lastName: 'M.', pays: 'Suisse', continent: 'Europe', age: 19, langue: 'C'
        Repas: 'végétarien'},
        {FirstName: 'Anna', lastName: 'R.', pays: 'Liechtenstein', continent: 'Europe', age: 52, langue: 
       'JavaScript',
        Repas: 'standard'},
        {FirstName: 'Ramona', lastName: 'R.', pays: 'Paraguay', continent: 'Amériques', age: 29, langue: 'Ruby',
        Repas: 'vegan'},
        {FirstName: 'George', lastName: 'B.', pays: 'Angleterre', continent: 'Europe', age: 81, langue: 'C'
        Repas: 'végétarien'},
       ];

//        Votre fonction doit renvoyer l'objet suivant (l'ordre des propriétés n'a pas d'importance):
// {Végétarien: 2, standard: 1, vegan: 1}

function repas(Liste){
Liste.map(()=>)
}