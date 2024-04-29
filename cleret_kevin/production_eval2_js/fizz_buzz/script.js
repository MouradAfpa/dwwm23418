
function fizzBouze() {
let n = parseInt(prompt('Entrez un nombre.'));
let fizz = '<br>';
let buzz;

for (let i=0; i<=n; i++) {
    if ((i%3===0) && (i%5===0)) { 
        buzz = 'FIZZBUZZ';
        fizz += buzz + "<br>";
    } else if (i%3==0) { 
        buzz = 'FIZZ';
        fizz += buzz + "<br>";
    } else if (i%5==0) { 
        buzz = 'BUZZ';
        fizz += buzz + "<br>";
    } else { 
        buzz = i;
        fizz += buzz + "<br>";
    }   
}

document.getElementById('fizzy').innerHTML = fizz;
}