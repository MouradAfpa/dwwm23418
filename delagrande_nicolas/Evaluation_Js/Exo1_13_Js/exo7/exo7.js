// --- Exercice 7 ---
let a = parseInt(prompt("Saisir un nombre"));

let result;
let sum;

if (isNaN(a) && a < 0) {
    result = "Veuillez entrer un nombre positif";
} else {
        sum = 0;

    for (let i = 1; i <= a; i++) {
        sum += i;
    }
}

alert("La somme de 1 à " + a + " est : " + sum);