const h2 = document.getElementsByTagName('h2')[0];
const start = document.getElementById('startA');
const stop = document.getElementById('stopA');
const reset = document.getElementById('resetA');
let sec = 0;
let min = 0;
let hrs = 0;
let timeA;
let active = false;

function tick() {
  sec++;
  if (sec >= 60) {
    sec = 0;
    min++;
    if (min >= 60) {
      min = 0;
      hrs++;
    }
  }
}
function add() {
  tick();
  h2.textContent = (hrs > 9 ? hrs : '0' + hrs) + ':' +
      (min > 9 ? min : '0' + min) + ':' + (sec > 9 ? sec : '0' + sec);
  timer();
}

function timer() {
  add()
  if (active == false) {
  timeA = setInterval(tick, 1000);
  }   
}

// timer();
start.onclick = timer;


stop.onclick = function() {
  clearTimeout(timeA);
} 

reset.onclick = function() {

sec = 0;
min = 0;
hrs = 0;

h2.textContent = '00:00:00';
}