// --- Exercice 3 ---
let a = parseFloat(prompt("Saisir le prix de fabrication du produit"));
let b = parseFloat(prompt("Saisir le prix de vente du produit"));
let result;

if (a > b) {
    result = "Le produit est en perte de " + (a - b) + "€";
} else {
    result = "Le produit est en gain de " + (b - a) + "€";
}

alert(result);
