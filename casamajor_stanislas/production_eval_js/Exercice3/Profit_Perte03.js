function calcul(){
    let prixFab = parseInt(prompt("Renseignez le prix de fabrication : "));
    let prixVente = parseInt(prompt("Renseignez le prix de vente : "))
    let pos = prixVente - prixFab;
    let neg = prixFab - prixVente;

    if(pos > 0){
        document.write("Profit de "+ pos + "€");
    } else if(pos < 0){
        document.write("Perte de " + neg + "€");
    } else{
        document.write("Il y a ni perte ni profit")
    }
}

calcul();