function justePrix(){
    let nbrTentativeTotal = parseInt(prompt("Entrez le nombre de tentative max :"));
    let nombre = parseInt(prompt("Entrez la valeur max recherché :"));
    let nbrAléatoire = parseInt(Math.random()*(nombre+1));

    let recherche = parseInt(prompt("Essayer de trouver ce nombre "));

    while(nbrTentativeTotal>0){
        if(recherche<nbrAléatoire){
            recherche = parseInt(prompt(`Plus...`));
        }else if(recherche>nbrAléatoire){
            recherche = parseInt(prompt(`Moins...`));
        }else{
            alert(`Bravo le nombre à trouver était bien ${nbrAléatoire}`)
        }
        nbrTentativeTotal--;
    }
    
    if(nbrTentativeTotal ===0){
        alert(`Perdu le nombre a trouver était : ${nbrAléatoire}`)

    }
}
justePrix()