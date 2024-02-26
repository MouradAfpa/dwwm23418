
function starsNumber2() {
    let n = parseInt(prompt('Entrez un nombre.'));
    let stars = '<br>';

    for (let i = 0; i<n; i++) {
        for (let j = 0; j<=i; j++) {
            stars += "*"
        }
        stars += "<br>"
    }
    for (let i = n; i>=0; i--) {
        for (let j = 0; j<=i; j++) {
            stars += "*"
        }
        stars += "<br>"
    }

    document.getElementById('eval9').innerHTML = stars;
}