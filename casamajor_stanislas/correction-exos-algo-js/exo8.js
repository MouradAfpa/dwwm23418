//let read = require("readline-sync");

let nombre = prompt("Entrez un nombre : ")

let etoiles = "";

//Boucle allant de 0 à nombre
// A chaque tour de boucle rajouter une étoile à étoiles
for(let index = 0; index < nombre; index++) {
    etoiles += "*"
    console.log(etoiles)
}

