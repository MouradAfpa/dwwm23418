//let read = require("readline-sync");

let n = prompt("Entrez un nombre :");
let result=0;
let texte = "";

for(let index = 1; index <=n; index++) {
    result += index;
    if(index != n) {
        texte += index + "+";
    } else {
        texte += index + "=";
    }
}

console.log(texte + result)