//const read = require("readline-sync")

let nbVie
let nbAleatoire
let nbSaisie

let initialisationPartie = () => {
    nbVie = prompt("Combien de vies souhaitez vous ?") -1 
    let nbMax = prompt("Le nombre aléatoire est compris entre 0 et ...")
    nbAleatoire = Math.round(Math.random() * nbMax)
}

demanderNombre = () => {
    nbSaisie = prompt("Quel est le prix ? ")
    let result = true;

    if(nbSaisie > nbAleatoire) {
        console.log("Plus petit, il vous reste " + nbVie + " vies restantes")
    } else if(nbSaisie < nbAleatoire) {
        console.log("Plus grand, il vous reste " + nbVie + " vies restantes")
    } else {
        console.log("Bravo, vous avez gagné avec " + nbVie + " vies restantes")
        result = false
    }
    return result
}

let justePrix = () => {
    initialisationPartie()
    while(demanderNombre() && nbVie) {
        nbVie--
    }
}

justePrix()



