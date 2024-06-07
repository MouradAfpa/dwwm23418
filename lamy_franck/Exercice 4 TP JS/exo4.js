window.onload = function() {
    alert("Bienvenue sur cette page qui va vous rendre dingue! \n La page est chargée !");
};

function afficherAlerteTouche(event) {
alert('Touche pressée : ' + event.key)
};

function changerStyle(){
        document.body.style.backgroundColor = 'darkslateblue';
        document.body.style.color = 'white'
        document.getElementById('boutonMagique').style.backgroundColor = 'lightblue';
        document.getElementById('boutonMagique').style.width = '200px';
        document.getElementById('boutonMagique').style.height = '100px';
        document.getElementById('boutonMagique').style.borderRadius = '25%';
        document.getElementById('boutonMagique').innerText = 'Qui est derrière vous ?';
}

    function revenirNormal() {
        document.body.style.backgroundColor = '';
        var bouton = document.getElementById('boutonMagique');
        bouton.style.backgroundColor = '';
        bouton.style.width = '';
        bouton.style.height = '';
        bouton.style.borderRadius = '';
        bouton.innerText = 'Changer le style';
    }


    function changerImage() {
        document.getElementById('monImage').src = 'explosion.jpg';
    }

    function revenirImageOrigine() {
        document.getElementById('monImage').src = 'dynamite.jpg';
    }