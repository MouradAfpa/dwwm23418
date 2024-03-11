

function findBest() {
    let tab = [];
    let number1 = parseInt(prompt("Entrez un premier nombre."));
    let number2 = parseInt(prompt("Entrez un deuxième nombre."));
    let number3 = parseInt(prompt("Entrez un troisième nombre."));

    tab.push(number1, number2, number3);

    let best = 0;

    for(let i =0; i<tab.length; i++) {
        tab[i] > best ? best=tab[i] : best;
    }

    document.getElementById('eval4').innerHTML = 'le nombre le plus grand est ' + best;
}
