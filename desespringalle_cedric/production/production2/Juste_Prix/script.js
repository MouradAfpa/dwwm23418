function justePrix() {
    let tentative = parseInt(prompt("Combien de tentatives voulez-vous ?"));
    let justePrix = Math.floor(Math.random() * 250) + 1;
    let nbr;

    for (let i = 0; i < tentative; i++) {
        nbr = parseInt(prompt("Donnez un nombre"));

        if (nbr === justePrix) {
            alert(`Bien joué ! Le juste prix était bien ${justePrix}`);
            return;
        }
        if (nbr > justePrix) {
            alert("Moins");
        }
        if (nbr < justePrix) {
            alert("Plus");
        }
    }
    alert(`C'est terminé, le nombre qu'il fallait trouver était: ${justePrix}`);
}

justePrix();