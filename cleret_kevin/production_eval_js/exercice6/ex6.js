
function calcNumbers() {
    let n1 = parseInt(prompt('Entrez un premier nombre.'));
    let op = prompt('Entrez un opérateur (+, -, /, *)');
    let n2 = parseInt(prompt('Entrez un deuxième nombre.'));

    let res;

    if (op == '+') {
        res = n1 + n2
        document.getElementById('eval6').innerHTML = n1 + " + " + n2 + " = " + res;
    } else if (op == '-') {
        res = n1 - n2
        document.getElementById('eval6').innerHTML = n1 + " - " + n2 + " = " + res;
    } else if (op == '/') {
        res = n1 / n2
        document.getElementById('eval6').innerHTML = n1 + " / " + n2 + " = " + res;
    } else if (op == '*') {
        res = n1 * n2
        document.getElementById('eval6').innerHTML = n1 + " * " + n2 + " = " + res;
    }
}