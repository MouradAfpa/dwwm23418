// function number(busStops) {
//     let totalPeople = 0;

//     busStops.map(stop => {
//       totalPeople += stop[0];
//       totalPeople -= stop[1];  
//     });

//     return totalPeople;
//   }


//   console.log(number([[10, 0], [3, 5], [5, 8]]));
//   console.log(number([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]));  
//   console.log(number([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]));
//   ------------------------------------------------------------------------------------------
// function countSheeps(arr) {
//     // Vérifie si l'entrée n'est pas un tableau
//     if (!Array.isArray(arr)) {
//       // Si l'entrée n'est pas un tableau, retourne un message d'erreur ou une valeur par défaut
//       return "Veuillez fournir un tableau en entrée.";
//     }

//     // Utilise la méthode map pour transformer chaque élément en 1 si c'est true, 0 sinon
//     const countArray = arr.map(element => element == true ? 1 : 0);

//     // Utilise la méthode reduce pour additionner toutes les valeurs obtenues
//     const count = countArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//     // Retourne le nombre total de moutons
//     return count;
//   }

//   // Exemple d'utilisation
//   const sheepArray = [true, true, true, false, true, true, true, true, true, false, true, false, true, false, false, true, true, true, true, false, false, true, true];
//   console.log(countSheeps(sheepArray)); // Résultat attendu : 17


// ------------------------------------------------------------------------------------------------

//  const removeChar = "Ceci est une phrase"
//  console.log(removeChar.slice (1,-1));
// ---------------------------------------------------------------------------------------
// function stringClean(phrase) {
//     const phraseNettoyee = phrase.replace(/\d/g, '');

//     return phraseNettoyee;
//   }

//   console.log(stringClean('! !')); 
//   console.log(stringClean('123456789')); 
//   console.log(stringClean("(E3at m2e2!!)"));
//   console.log(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3")); 
//  ----------------------------------------------------------------------------------------

// function doubleChar(string) {
//   return string.split('').map(char => char + char).join('');
// }
// console.log(doubleChar("String"));    
// console.log(doubleChar("Hello World"));  
// console.log(doubleChar("1234!_ "));      

// ------------------------------------------------------------------------------------
// const numberArray=[1,1,2,2,3,3,4,4,5,5];

// let newArray = [... new Set(numberArray)];

// console.log(newArray);
// -------------------------------------------------------------------------------------

// function whoseMove(currentPlayer, didWin) {
//     if (didWin) {
//         // Si le joueur a gagné, il commencera le prochain tour.
//         return currentPlayer;
//     } else {
//         // Si le joueur a perdu, déterminez le prochain joueur en fonction de la couleur actuelle.
//         if (currentPlayer === "black") {
//             return "white";
//         } else {
//             return "black";
//         }
//     }
// }

// console.log(whoseMove("black", false)); // Résultat attendu : "white"
// console.log(whoseMove("white", true));  // Résultat attendu : "white"
// console.log(whoseMove("white", false)); // Résultat attendu : "black"

// -----------------------------------------------------------------------------------------

// function calculateTip(totalAmount, serviceRating) {
//     // Convertir l'avis sur le service en minuscules pour rendre la comparaison insensible à la casse
//     const ratingLowerCase = serviceRating.toLowerCase();

//     let tipPercentage;
//     switch (ratingLowerCase) {
//         case "terrible":
//             tipPercentage = 0;
//             break;
//         case "poor":
//             tipPercentage = 5;
//             break;
//         case "good":
//             tipPercentage = 10;
//             break;
//         case "great":
//             tipPercentage = 15;
//             break;
//         case "excellent":
//             tipPercentage = 20;
//             break;
//         default:
//             return "Rating not recognised";
//     }

//     const tipAmount = Math.ceil((tipPercentage / 100) * totalAmount);

//     return tipAmount;
// }

// console.log(calculateTip(20, "ExcellEnt"));
// console.log(calculateTip(26.95, "goOd"));   
// console.log(calculateTip(20, "hi"));        
// ---------------------------------------------------------------------------------------

// function accum(s) {
//     return s.toUpperCase().split('').map((char, index) => char + char.toLowerCase().repeat(index)).join('-');
// }

// console.log(accum("abcd"));   
// console.log(accum("RqaEzty")); 
// console.log(accum("cwAt"));
// -------------------------------------------------------------------------------------------