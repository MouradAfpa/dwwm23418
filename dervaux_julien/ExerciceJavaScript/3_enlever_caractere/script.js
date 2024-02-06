

// #3 -  Enlever le premier et le dernier caractère d’une chaîne (8 kyu


var char = "Ceci est une phrase";

function removeChar(c){
let stockT= Array.from(char);
let newChar = stockT.slice(1,-1);

return newChar;
}

console.log(removeChar(char));



