// --- Exercice 10 ---
let a = parseInt(prompt("Saisir un nombre"));
let result;

if (isNaN(a) || a < 0) {
    result = "Veuillez entrer un nombre positif";
} else {
    for (let i = 1; i <= a; i++) {
        console.log(" ".repeat(a - i) + "*".repeat(2 * i - 1));
    }
}
