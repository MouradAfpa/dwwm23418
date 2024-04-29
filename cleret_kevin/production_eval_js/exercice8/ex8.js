
function starsNumber() {
    let n = parseInt(prompt('Entrez un nombre.'));
    let tab = new Array(n);
    let stars = '<br>';

    for (let i = 0; i<n; i++) {
        for (let j = 0; j<=i; j++) {
            stars += "*"
        }
        stars += "<br>"
    }

    document.getElementById('eval8').innerHTML = stars;
}