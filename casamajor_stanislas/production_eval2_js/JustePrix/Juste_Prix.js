function justePrix(){
    let tenta = parseInt(prompt(`Entrez un nombre de tentative : `));
    console.log(tenta);
    let N = parseInt(prompt(`Choisissez une fourchette de prix : `));
    let prix = parseInt(Math.random()*N);
    console.log(prix);

    let essai = parseInt(prompt(`Trouvez le bon numéro !`));
        while((essai < prix || essai > prix) && (tenta > 0)){
            if (essai > prix){
            essai = parseInt(prompt(`Moins ! Essaye encore !`));
            tenta --;
            } else if (essai < prix){
            essai = parseInt(prompt(`Plus ! Essaye encore !`));
            tenta --;}
            }
            if(tenta == 0){
            console.log(`Nombres de tentaives utilisées vous avez perdu !`)}
            if(essai == prix) {
            console.log(`FELICITATION !! Vous avez trouver le juste prix !`);
    } ;
}

justePrix();