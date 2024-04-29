function countArara(n) {
    if (n === 1) {
        return "anane";
    } else {
        a = Math.floor(n/2);
        return Array(a).fill("adak").join(" ") + (n = 1 ? " anane" : "");
    }
}

// Utilisation de la fonction
console.log(countArara(1));  // Affiche : "anane"
console.log(countArara(3));  // Affiche : "adak anane"
console.log(countArara(8));  // Affiche : "adak adak adak adak"
