
function calcul(){

let fab = parseInt(prompt("Saisir le prix de fabrication"))
let vente = parseInt(prompt("prix de vente"))
let result = fab - vente

if (result < 0) {
    result = Math.abs(result);
    document.getElementById('root').textContent = `Perte de ${result}`;

} else if (result > 0) {
    document.getElementById('root').textContent = `Profit de ${result}`;

} else {
    document.getElementById('root').textContent = `Aucune perte et aucun profit`;
}
}

calcul()

