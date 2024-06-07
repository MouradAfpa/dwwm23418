function masquerMot(mot, lettresTrouvees) {
    return mot.replace(new RegExp(`[^${lettresTrouvees.join('')}]`, 'g'), '_ ');
}

function Pendu() {
    let motCherche = prompt("Entrez le mot à chercher");
    let nbrVies = parseInt(prompt("Entrez le nombre de vies"));
    let lettresTrouvees = [];

    while (nbrVies > 0) {
        let motMasque = masquerMot(motCherche, lettresTrouvees);
        console.log(`Mot à deviner: ${motMasque}`);

        if (!motMasque.includes("_")) {
            console.log(`Bien joué ! Vous avez trouvé le mot masqué qui était: ${motCherche}`);
            return;
        }

        let lettre = prompt("Entrez une lettre");
        if (lettresTrouvees.includes(lettre)) {
                console.log("Vous avez déjà deviné cette lettre");
        } else if (motCherche.includes(lettre)) {
                console.log(`Bien joué ! La lettre "${lettre}" se trouve dans le mot`);
                lettresTrouvees.push(lettre);
        } else {
            nbrVies--;
            console.log(`Dommage, la letrre "${lettre}" ne se trouve pas dans le mot. Il vous reste ${nbrVies} vie(s)`);
        }
    }
    console.log(`Vous avez épuisé toutes vos vies. Le mot à chercher était: ${motCherche}`);
}

Pendu();