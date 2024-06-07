pFabrication = parseFloat(prompt("Saisir le prix de fabrication"));
pVente = parseFloat(prompt("Saisir le prix de vente"));

let resultat = pFabrication - pVente;
let profit = Math.abs(resultat);

if (pFabrication > pVente) {
    alert(`Perte de ${resultat}€`);
} else {
    alert(`Profit de ${profit}€`);
}