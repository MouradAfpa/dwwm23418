// --- Exercice 6 ---
let operande1 = parseFloat(prompt("Entrez le premier opérande : "));
let operateur = prompt("Entrez l'opérateur (+, -, *, /) : ");
let operande2 = parseFloat(prompt("Entrez le second opérande : "));

let result;

switch (operateur) {
    case "+":
        result = operande1 + operande2;
        break;
    case "-":
        result = operande1 - operande2;
        break;
    case "*":
        result = operande1 * operande2;
        break;
    case "/":
        if (operande2 !== 0) {
            result = operande1 / operande2;
        } else {
            result = "Division par zéro impossible";
        }
        break;
    default:
        result = "Opérateur invalide";
}

alert("Le résultat de l'opération est : " + result);