//Fizz Buzz


// let n = parseInt(prompt("Entrez un nombre"))
// function fizzBuzz(n) {
//     for (let i = 1; i <= n; i++) {
//         let affichage = "";
//         if (i % 3 === 0) {
//             affichage += "FIZZ";
//         }
//         if (i % 5 === 0) {
//             affichage += "BUZZ";
//         }
//         console.log(affichage || i);
//     }
// }


// fizzBuzz(n);




//Juste Prix

// function justePrix(tentatives) {
//     const resultatGener = Math.floor((Math.random() * 20));
//     for (let i = 0; i < tentatives; i++) {
        
//     const nombreSaisi = parseInt(prompt("Entrez un nombre"));

//     if (nombreSaisi < resultatGener) {
//         console.log("Plus");
//     }
//     if (nombreSaisi > resultatGener) {
//         console.log("Moins");
//     }
//     if(nombreSaisi === resultatGener){
//         console.log("Tu as gagné");
//     }
// };
// }
// justePrix(10)


//Roller Coaster

// function rollerProfits(places, tours, file) {
//     let profits = 0;

//     for (let i = 0; i < tours; i++) {
//         let placesRestantes = places;


//          for(let groupe of file) {
            
//             if (groupe <= placesRestantes) {
//                 profits += groupe;
//                 placesRestantes -= groupe;
//             } else {              
//                 break;
//             }
//         }
//     
//     return profits;
// }

// let places = 5;
// let tours = 3;
// let file = [2,3,5,4];
// let profits = rollerProfits(places,tours,file);
// console.log( profits + "€");


//Le jeu du pendu


//La roulette russe
let nbrBalle = parseInt(prompt("chosir un nombre de balle à inserer entre 1 et 8"))

function roulette(nbrBalle) {
 let joueur = 0;
    
}