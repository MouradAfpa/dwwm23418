//let read = require("readline-sync");

let num1 = prompt("Saisir opérateur : ")
let operande = prompt("Saisir opérande : ")
// Tant que je n'ai pas saisie "+" , "-", "*", "/"
// Alors je redemande à l'utilisateur de saisir
while(operande !== "+" && operande !== "-" && operande !== "*" && operande !== "/") {
    console.log("Attention, l'opérande n'est pas valide !")
    operande = prompt("Saisir opérande : ")
}

let num2 = prompt("Saisir opérateur : ")

let result;

// Ternaire
//result = (operande === "-") ? (num1 - num2) : (operande === "+") ? (num1 + num2) : (operande === "*") ? (num1 * num2) : (operande === "/") ? (num1 / num2) : "Calcul impossible"

switch(operande){
    case "-": result = (num1 - num2);
    break;
    case "+": result = (num1 + num2);
    break;
    case "*": result = (num1 * num2);
    break;
    case "/": result = (num1 / num2);
    break;
    default:
        "Calcul impossible";

}


console.log(result)