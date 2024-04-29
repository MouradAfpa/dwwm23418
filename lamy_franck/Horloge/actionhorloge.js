
function refresh(){
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout('showDate()',t)
}

function showDate() {
    var date = new Date()
    var h = date.getHours();
// var h = date.gethours.toString().padStart(2,"0");
    var m = date.getMinutes();
    var s = date.getSeconds();
    if( h < 10 ){ h = '0' + h; }
    if( m < 10 ){ m = '0' + m; }
    if( s < 10 ){ s = '0' + s; }
    // var time = h + ':' + m + ':' + s
    var time = `${h}:${m}:${s}`;
    document.getElementById('horloge').innerHTML = time;
    refresh();
 }


///------ Chronomètre-----

var affiche = document.getElementById('timer');
var sec = 0;
var min = 0;
var hrs = 0;
var t;

function depart() {
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
        if (min >= 60) {
            min = 0;
            hrs++;
        }
    }
    affiche.textContent = (hrs > 9 ? hrs : '0' + hrs) + ':' +
        (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec);
    timer();
}

function timer() {
    t = setTimeout(depart, 1000); // Correction ici
}

function reset() {
    clearTimeout(t);
    affiche.textContent = '00:00:00';
    sec = 0;
    min = 0;
    hrs = 0;
}

var isPaused = false;
var timerPaused = false; // Ajout d'une variable pour suivre l'état du chronomètre

function pauseReprise() {
    if (isPaused) {
        // Si en pause, reprendre le chronomètre
        isPaused = false;
        if (!timerPaused) { // Redémarrer le chronomètre uniquement s'il n'est pas déjà en pause
            timerPaused = false;
            timer();
        }
    } else {
        // Si en cours, mettre en pause le chronomètre
        clearTimeout(t);
        isPaused = true;
        timerPaused = true; // Mettre à jour l'état du chronomètre en pause
    }
}
