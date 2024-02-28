// --- Exercice 4 ---
let a = parseFloat(prompt("Saisir un nombre"));
let b = parseFloat(prompt("Saisir un autre nombre"));
let c = parseFloat(prompt("Saisir un dernier nombre"));

let result;

if (a > b && a > c) {
    result = a;
} else if (b > a && b > c) {
    result = b;
} else {
    result = c;
}

alert("Le plus grand nombre est : " + result);