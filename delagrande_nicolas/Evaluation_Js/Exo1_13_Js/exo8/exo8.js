// --- Exercice 8 ---
let a = parseInt(prompt("Saisir un nombre pour générer un escalier d'étoiles : "));

let result;
let sum = 0;

if (isNaN(a) && a < 0) {
    result = "Veuillez entrer un nombre positif";
} else {
    for (let i = 1; i <= a; i++) {
        sum += i;
        console.log("*".repeat(i));
    }
}