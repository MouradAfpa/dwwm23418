function escalier() {
    let resultat = document.getElementById("resultat");

    let nbr = parseInt(prompt("Saisir un nombre"));
    let escalier = "";

    for (let i = 0; i < nbr; i++) {
        let ligne = "";
        for (let j = 0; j < nbr; j++) {
            if (j > nbr - i - 2) {
                ligne += '*';
            }
        }
        escalier += ligne + '<br>';
    }
    resultat.innerHTML = escalier;
}

escalier();