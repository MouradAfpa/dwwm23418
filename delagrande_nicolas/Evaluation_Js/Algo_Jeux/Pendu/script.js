let motADeviner = prompt("Veuillez saisir le mot à deviner : ").toLowerCase();
let viesRestantes = parseInt(prompt("Veuillez entrer le nombre de vies : ") || 5);
let motCache = "_".repeat(motADeviner.length);
let lettreUtilisees = [];

function afficherMotCache() {
    console.log(motCache.split("").join(" "));
}

while (motCache !== motADeviner && viesRestantes > 0) {
    let lettre = prompt("Devinez une lettre : ").toLowerCase();
    
    if (lettreUtilisees.includes(lettre)) {
        console.log("Vous avez déjà utilisé cette lettre.");
    } else {
        lettreUtilisees.push(lettre);
        
        if (motADeviner.includes(lettre)) {
            for (let i = 0; i < motADeviner.length; i++) {
                if (motADeviner[i] === lettre) {
                    motCache = motCache.substring(0, i) + lettre + motCache.substring(i + 1);
                }
            }
        } else {
            viesRestantes--;
            console.log("La lettre n'est pas dans le mot. Il vous reste " + viesRestantes + " vies.");
        }
    }
    
    if (motCache === motADeviner) {
        console.log("Bravo, vous avez deviné le mot ! Le mot était : " + motADeviner);
    } else if (viesRestantes === 0) {
        console.log("Dommage, vous avez perdu.. :( Le mot était : " + motADeviner);
    }
    afficherMotCache();
}