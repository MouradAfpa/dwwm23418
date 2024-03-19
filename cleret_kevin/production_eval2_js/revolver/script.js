
let bullet;

function findBullet() {
    bullet = Math.floor(Math.random() * 8);
    document.getElementById('baballe').innerHTML = bullet
}


function revolverGame() {
    let n = parseInt(prompt('Entrez un chiffre entre 1 et 8'));
    console.log(bullet);
    console.log(n);

    if (n == bullet) {
        alert('Il y avait une balle, VOUS ETES MORT');
    } else {
        alert('Le joueur suivant peut se tirer une balle.');
    }
}