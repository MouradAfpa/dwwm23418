// let nb = parseInt(prompt("Veuillez saisir un nombre : "));

// for (let i = 015
//     ; i <= nb; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log("FIZZBUZZ");
//     } 
//     else if (i % 5 == 0) {
//         console.log("BUZZ");
//     } 
//     else if (i % 3 == 0) {
//         console.log("FIZZ");
//     } 
//     else { 
//         console.log(i);
//     } 
// }
// ---------------------------------------------------------------------------

// let nbTentatives = parseInt(prompt("Veuillez saisir un nombre de tentatives: "));
// let nombreAleatoire = Math.floor(Math.random() * (nbTentatives));

// for (let i = 0; i < nbTentatives; i++) {
//     let nombreSaisi = parseInt(prompt("Saisissez un nombre : "));
    
//     if (nombreSaisi === nombreAleatoire) {
//         console.log("Bravo vous avez gagnez");
//     } 
//     else if (nombreSaisi < nombreAleatoire) {
//         console.log("Plus");
//     } 
//     else {
//         console.log("Moins");
//     }  
// }

// ---------------------------------------------------------------------------------
// function calculerProfits(places, tours, file) {
//     let profits = 0;
    
//     for (let tour = 1; tour <= tours; tour++) {
//         let placesRestantes = places;
        
//         while (placesRestantes > 0 && file.length > 0) {
//             let groupe = file.shift(); 
//             if (groupe <= placesRestantes) {
//                 placesRestantes = placesRestantes - groupe; 
//                 profits = profits + groupe; 
//             } else {
//                 file.push(groupe); 
//             }
//         }
//     }
    
//     return profits;
// }

// let places = 5;
// let tours = 3;
// let file = [2, 3, 5, 4];
// let profits = calculerProfits(places, tours, file);
// console.log("Profits : " + profits + "€");
// --------------------------------------------------------------------------------------

// let motATrouver = prompt("Entrez le mot à deviner : ")
// let nombreVies = parseInt(prompt("Entrez le nombre de vies : "));
// let motMasque = "_".repeat(motATrouver.length);

// while (nombreVies > 0 && motMasque !== motATrouver) {
//     console.log("Mot à deviner : " + motMasque);
//     let lettre = prompt("Entrez une lettre : ");

//     let lettreTrouvee = false;
    
//     for (let i = 0; i < motATrouver.length; i++) {
//         if (motATrouver[i] === lettre) {
//             motMasque = motMasque.substring(0, i) + lettre + motMasque.substring(i + 1); 
//             lettreTrouvee = true;
//         }
//     }

//     if (!lettreTrouvee) {
//         console.log("La lettre n'est pas dans le mot.");
//         nombreVies--;
//         console.log("Il vous reste " + nombreVies + " vies.");
//     }
// }

// if (motMasque === motATrouver) {
//     console.log("Félicitations ! Vous avez deviné le mot : " + motATrouver);
// } else {
//     console.log("Dommage ! Vous avez perdu. Le mot était : " + motATrouver);
// }

// ----------------------------------------------------------------------------------------
