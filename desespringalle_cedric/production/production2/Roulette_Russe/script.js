let joueur1 = {
    nom: "Joueur 1",
    survivant: true,
};

let joueur2 = {
    nom: "Joueur 2",
    survivant: true,
};

function jouerTour(joueur) {
    console.log(`C'est au tour de ${joueur.nom}`);
    let chance = Math.random();
    if (chance < 0.5) {
        joueur.survivant = false;
        console.log(`${joueur.nom} a perdu !`);
    } else {
        console.log(`${joueur.nom} a survécu !`);
    }
}

function jeuTermine() {
    return !joueur1.survivant || !joueur2.survivant;
}

let nbrBalles = parseInt(prompt("Entrez le nombre de balles"));

for (let i = 0; i < nbrBalles; i++) {
    jouerTour(joueur1);
    if (jeuTermine()) {
        break;
    } else {
        jouerTour(joueur2);
    }
}

if (joueur1.survivant) {
    console.log(`${joueur1.nom} remporte la partie !`);
} else {
    console.log(`${joueur2.nom} remporte la partie !`);
}
