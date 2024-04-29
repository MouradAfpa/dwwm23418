let nombreDeTentatives = parseInt(prompt("Entrez le nombre de tentatives :"));
let viesRestantes = nombreDeTentatives;

const prixExact = Math.floor(Math.random() * 100) + 1;

function jouerLeJustePrix() {

    while (viesRestantes > 0) {
        let estimation = parseInt(prompt("Devinez le prix (entre 1 et 100) :"));

        if (isNaN(estimation) || estimation < 1 || estimation > 100) {
            alert("Veuillez entrer un nombre valide entre 1 et 100.");
            continue;
        }

        if (estimation === prixExact) {
            alert("Bravo ! Vous avez trouvé le juste prix !");
            return;
        } else if (estimation < prixExact) {
            alert("C'est plus !");
        } else {
            alert("C'est moins !");
        }

        viesRestantes--;
        alert("Il vous reste " + viesRestantes + " vies.");
    }

    alert("Désolé, vous avez utilisé toutes vos vies. Le juste prix était : " + prixExact);
}

jouerLeJustePrix();

