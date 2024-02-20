setInterval(myTimer, 1000);
function myTimer() {
    const date = new Date();
    document.getElementById("montre").innerHTML = date.toLocaleTimeString();
}

let timer;
let seconds = 0, minutes = 0, hours = 0;
let isRunning = false; 

function start() {
    if (!isRunning) { 
        timer = setInterval(updateChrono, 1000);
        isRunning = true; 
    }
}

function updateChrono() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
        if (minutes >= 60) {
            minutes = 0;
            hours++;
        }
    }


    document.getElementById('chrono').innerHTML =
        (hours < 10 ? '0' + hours : hours) + ':' +
        (minutes < 10 ? '0' + minutes : minutes) + ':' +
        (seconds < 10 ? '0' + seconds : seconds);
}

function stop() {
    clearInterval(timer);
    isRunning = false; 
}

function reset() {
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById('chrono').innerHTML = '00:00:00';
    isRunning = false; 
}
       