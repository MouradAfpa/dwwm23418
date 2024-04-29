

function sum() {
    let chosenNumber1 = parseInt(prompt("Veuillez entrer un premier nombre à calculer."));
    let chosenNumber2 = parseInt(prompt("Veuillez entrer un deuxième nombre à calculer."));

    let res = chosenNumber1 + chosenNumber2;

    document.getElementById('eval2').innerHTML = chosenNumber1 + ' + ' + chosenNumber2 + ' = ' + res;
}