function profpert(){
    const fabrication = parseInt(prompt("entrez un prix de fabrication"));
    const vente = parseInt(prompt("entrez un prix de vente"));

    let profit = vente - fabrication;
    let perte = fabrication - vente;

    if(vente > fabrication){
        document.write("Profit de " + profit)
    }else{
        document.write("Perte de " + perte)
    }
}