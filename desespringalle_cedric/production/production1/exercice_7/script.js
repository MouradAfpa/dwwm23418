function somme() {
    let resultat = document.getElementById("resultat");

    let nbr = parseInt(prompt("Saisir un nombre"));
    let somme = 0;

    for (let i = 0; i <= nbr; i++) {
        somme += i;
    }

    return resultat.textContent = `La somme des entiers de 1 à ${nbr} vaut ${somme}`;
}

somme();