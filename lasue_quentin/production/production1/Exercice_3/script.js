function profit(){
    let prixFab = parseFloat(prompt("Entrez le prix de fabrication :"));
    let prixVente = parseFloat(prompt("Entrez le prix de vente :"));

    if(prixFab>prixVente){
        let resultat = prixFab - prixVente;
        console.log(`Perte de ${resultat}.`);
    }else if(prixVente>prixFab){
        let resultat = prixVente - prixFab;
        console.log(`Profit de ${resultat}.`);
    }else{
        console.log(`Pas de profit pas de perte.`);
    }
}
profit()