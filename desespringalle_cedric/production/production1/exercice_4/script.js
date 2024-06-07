let nbr1 = parseInt(prompt("Saisir un nombre."));
let nbr2 = parseInt(prompt("Saisir un deuxième nombre."));
let nbr3 = parseInt(prompt("Saisir un troisième nombre."));

let tab = [nbr1, nbr2, nbr3];

let plusGrand = Math.max.apply(null, tab);

alert(`[${tab}] --> ${plusGrand}.`);