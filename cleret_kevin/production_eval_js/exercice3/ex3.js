

function calcul() {
    let makePrice = parseInt(prompt("Veuillez entrer le prix de fabrication d'un produit."));
    let sellPrice = parseInt(prompt("Veuillez entrer le prix de vente d'un produit."));

    let calc = sellPrice - makePrice;

    document.getElementById('eval3').innerHTML =
    calc >= 0 ? 'le bénéfice est de ' + calc :'la perte est de ' + Math.abs(calc);
}
