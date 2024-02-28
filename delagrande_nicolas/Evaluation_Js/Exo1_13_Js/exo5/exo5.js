// --- Exercice 5 ---
let a = parseFloat(prompt("Saisir un nombre"));

let result;

if (a >= 0 && a <= 4) {
    result = "Catastrophique, il faut revoir";
} else if (a >= 5 && a <= 10) {
    result = "Insuffisant";
} else if (a >= 10 && a <= 14) {
    result = "Peut mieux faire";
} else if (a >= 15 && a <= 17) {
    result = "Bien";
} else {
    result = "Excellent, bon travail";
}

alert(result);