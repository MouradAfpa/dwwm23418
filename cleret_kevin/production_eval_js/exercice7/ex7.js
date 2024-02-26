
function sum1ToN() {
    let n = parseInt(prompt('Entrez un nombre.'));
    let tab = new Array(n);
    let res = 0;

    for (let i = 0; i<n; i++) {
        tab[i] = i+1;
    }

    for (let i = 0; i<n; i++) {
        res += tab[i];
    }

    document.getElementById('eval7').innerHTML = tab + " = " + res;
}