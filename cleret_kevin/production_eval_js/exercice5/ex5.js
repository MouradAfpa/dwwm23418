// 0-4 --> "Catastrophique, il faut tout revoir"
// 5-10 --> "Insuffisant"
// 11-14 --> "Peut mieux faire"
// 15-17 --> "Bien"
// 18-20 --> "Excellent, bon travail"


function commentaries() {
    let n = parseFloat(prompt("Veuillez entrez une note d'un élève pour indiquer son commentaire."));

    if (n >= 0 && n <= 4) {
        document.getElementById('eval5').innerHTML = "Catastrophique, il faut tout revoir";
    } else if (n >= 5 && n <= 10) {
        document.getElementById('eval5').innerHTML = "Insuffisant";
    } else if (n >= 11 && n <= 14) {
        document.getElementById('eval5').innerHTML = "Peut mieux faire";
    } else if (n >= 15 && n <= 17) {
        document.getElementById('eval5').innerHTML = "Bien";
    } else if (n >= 18 && n <= 20) {
        document.getElementById('eval5').innerHTML = "Excellent, bon travail";
    }
}
