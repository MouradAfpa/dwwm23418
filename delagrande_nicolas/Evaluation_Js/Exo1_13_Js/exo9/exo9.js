// --- Exercice 9 ---
let a = parseInt(prompt("Saisir un nombre pour générer une pyramide d'étoiles : "));
let result;

if (isNaN(a) || a < 0) {
    result = "Veuillez entrer un nombre positif";
} else {
    for (let i = 1; i <= a; i++) {
        console.log("*".repeat(i));
    }

    for (let i = a - 1; i >= 1; i--) {
        console.log("*".repeat(i));
    }
}
