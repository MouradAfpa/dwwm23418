
function starsNumber3() {
    let n = parseInt(prompt('Entrez un nombre.'));
    let stars = '<br>';
    let stars2;

    for (let i=0; i<n; i++) {
        for (let j=0; j<=i; j++) {
            stars += "*"
            stars2 = " " + stars + " ";
        }
        stars2 += "<br>"
    }
    document.getElementById('eval10').innerHTML = stars2;
}