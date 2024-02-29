function russianRoulette() {
    let balles = Math.floor(Math.random() * 6) + 1;
    let points = 0;

    let play = confirm("Voulez-vous jouer à la roulette russe ?");

    if (play) {
        while (true) {
            let choixTir = prompt("Choisissez un numéro entre 1 et 6 pour tirer le coup.");

            if (parseInt(choixTir) >= 1 && parseInt(choixTir) <= 6) {
                points++;

                if (parseInt(choixTir) === balles) {
                    alert("Bang ! Vous avez tiré sur la balle ! Vous avez perdu !");
                    break;
                } else {
                    alert("Clic ! Vous avez eu de la chance, il n'y avait pas de balle !");
                }
            } else {
                alert("Veuillez entrer un numéro entre 1 et 6.");
            }
        }
    } else {
        alert("D'accord, peut-être une autre fois !");
    }
    alert("Vous avez accumulé " + points + " points jusqu'à ce que la balle soit tirée.");
}

russianRoulette();


