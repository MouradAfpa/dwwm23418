//----- Exo 1 -----


// let n = parseInt(prompt("Saisir un nombre"));
// let i;

// for (i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FIZZBUZZ");
//     } else if (i % 3 === 0) {
//         console.log("FIZZ");
//     } else if (i % 5 === 0) {
//         console.log("BUZZ");
//     } else {
//         console.log(i);
//     }
// }

//---------- JUSTE PRIX --------

    

// let y = Math.floor(Math.random() * 50);
// console.log(y);
// let i = parseInt(prompt("Entrez un nombre de tentatives"));
// let x = parseInt(prompt("Devinez un nombre entre 1 et 50"));

// while (isNaN(x) || x <= 0) {
//     x = parseInt(prompt("Veuillez saisir un nombre entier positif"));
// }

// while ((x != y) && (i > 0)) {
//     if (x < y) {
//         x = parseInt(prompt("Plus grand ! Retentez votre chance, il reste " + i + " tentatives."));
//     } else if (x > y) {
//         x = parseInt(prompt("Plus petit ! Retentez votre chance, il reste " + i + " tentatives."));
//     }
//     i = i - 1;
//     if (i === 0) {
//         alert("Vous avez utilisé toutes vos tentatives. Le nombre était " + y + ". Le jeu est terminé.");
//         break;
//     }
//     document.write("Bravo, le nombre est " + y + ", vous avez trouvé en " + (i == 0 ? "la dernière tentative." : (i + 1) + " coups."));
// }

// ----------- Roller Coaster -------

// let place = 5;
// let groupe = ["2","3","5","4"];
// let i;

// for (i = 0 ; i<3; i++) {
//     console.log(groupe);
//     groupe.push(groupe[i]);
//     groupe.shift();
//     if (groupe[i]<=5) {
//         console.log(groupe[i]);
//         console.log(groupe);
//     } else {
        
//     }
// }




// ----- La roulette russe -----


let nombreBalle = parseInt(prompt("Nombre de balles dans le barillet, maximum 8"));
let partie = "";
let continued = "";

while (isNaN(nombreBalle) || nombreBalle > 9) {
    nombreBalle = parseInt(prompt("Le nombre de balle maximum est de 8"));
}

// let balle = new Array(8);
// for(let i = 0; i< balle.length; i++){
//     balle[i] = parseInt(Math.random()*nombreBalle);
// }

// for(let i = 0; i<balle.length; i++){
//     document.write(balle[i] + "<br>");
// }


let balle = Math.floor(Math.random() * nombreBalle)

while (balle == 0) {
    balle = Math.floor(Math.random() * nombreBalle)
}

console.log("balle" +balle);

    let tire = Math.floor(Math.random() * nombreBalle);
    
        if (tire == balle) {
            partie = "Perdu";
            console.log(tire);
            console.log(partie);
        document.getElementById("message").innerHTML="Perdu";
        } else {
            partie = "Continuons"
            console.log(tire);
            console.log(partie);
        document.getElementById("message").innerHTML="Ouf !!! Pas de balle";
        continued = prompt("Voulez-vous continuer? oui/non").toLocaleLowerCase;
        
        if (continued = "oui") {
            
        } else {
            
        }
    
    }   
        
    
    



