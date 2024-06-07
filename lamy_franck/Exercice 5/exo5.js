
var images = ['noelDark', 'noelDark2', 'noelDark3', 'noelDark4', 'noelDark5', 'noelMievre'];

// var images = ['images/NoelDark.jpg', 'images/noelMievre.jpg','images/noelDark2.jpg', 'images/noelDark3.jpg','images/noelDark4.jpg', 'images/noelDark5.jpg' ];

// var imagesDiaporama = ['images/NoelDark.jpg', 'images/noelMievre.jpg','images/noelDark2.jpg', 'images/noelDark3.jpg','images/noelDark4.jpg', 'images/noelDark5.jpg' ];

    // var indexImage = 0; 
    // var intervalID;

    // function changerImage() {
    //     document.getElementById('monImage').src = ('images/' + images[indexImage] + '.jpg');
    //     indexImage = (indexImage + 1) % images.length;
    // }

    // function arreterDefilement() {
    //     clearInterval(intervalID);
    // }

    // function reprendreDefilement() {
    //     intervalID = setInterval(changerImage, 2000);
    // }

    // reprendreDefilement();
// --- Avec boutons de défilement -----

var indexImage = 0;

    function afficherImage() {
        document.getElementById('monImage').src = ('images/' + images[indexImage] + '.jpg');
    }

    function imagePrecedente() {
        if (indexImage = 0) {
            indexImage = (indexImage - 1) % images.length-1;
        } else {
            indexImage = (indexImage - 1) % images.length;
        }
        
        afficherImage();
    }
    function imageSuivante() {
        indexImage = (indexImage + 1) % images.length;
        afficherImage();
    }