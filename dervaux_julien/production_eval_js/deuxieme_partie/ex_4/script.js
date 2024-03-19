



let resultat = "nice";
let motCaché = "-".repeat(resultat.length);
let data;
let test = 4;

while (test > 0 && motCaché !== resultat) {
    data = prompt("Entrer une lettre");
    let lettreTrouvée = false;
    for (let i = 0; i < resultat.length; i++) {
        if (data == resultat[i]) {
            motCaché = motCaché.substring(0, i) + data + motCaché.substring(i + 1);
            lettreTrouvée = true;
        }
    }

    if (!lettreTrouvée) {
        test--;
        console.log("encore " + test + " essais.");
    }

    console.log("Mot caché: " + motCaché);
}

if (motCaché === resultat) {
    console.log("GJ ! Vous avez trouvé le mot : " + resultat);
} else {
    console.log("Perdu. Le mot à trouver était : " + resultat);
}










