function calculatrice() {
    let resultat = document.getElementById("resultat");

    let nbr1 = parseInt(prompt("Saisir un premier opérande"));
    let nbr2 = parseInt(prompt("Saisir un second opérande"));
    let operateur = prompt('Saisir un opérateur ("+", "-", "x", ou "/").');

    if (operateur == "+") {
        let addition = nbr1 + nbr2;
        return resultat.textContent = `${nbr1} + ${nbr2} = ${addition}`;
    } else if (operateur == "-") {
        let soustraction = nbr1 - nbr2;
        return resultat.textContent = `${nbr1} - ${nbr2} = ${soustraction}`;
    } else if (operateur == "x") {
        let multiplication = nbr1 * nbr2;
        return resultat.textContent = `${nbr1} x ${nbr2} = ${multiplication}`;
    } else if (operateur == "/") {
        let division = nbr1 / nbr2;
        return resultat.textContent = `${nbr1} / ${nbr2} = ${division}`;
    }
}

calculatrice();