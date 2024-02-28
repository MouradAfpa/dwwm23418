var min = 0; 
var sec = 0;
var count = 0; 
var hourOutput = 0; 
var minOutput = 0; 
var secOutput = 0;

var timer;

function startCount(){
    sec = count;

    if (sec>59) { 
        min =  min + 1;  
        sec = 0; 
        count = 0;
    }

    if (sec<10)
        secOutput = "0" +sec;
    else
        secOutput = sec;

    if (min<10) 
        minOutput = "0" +min;
    else
        minOutput = min;

    if (min>59) { 
        hourOutput = hourOutput + 1; 
        min = 0;
        minOutput = "0" +min;
    }
    
 
    

    var chrono = hourOutput + ":" + minOutput + ":" + secOutput;
    document.getElementById('chrono').innerHTML = chrono;
    count++;
    timer = setTimeout("startCount()",1000);
    console.log(timer);
    console.log("le compteur ", count);
}


function stop() {
    clearTimeout(timer);
}

function reset() {
    hour = 0; 
    min = 0; 
    sec = 0;
    count = 0; 
    document.getElementById('chrono').innerHTML = "00:00:00";
}



