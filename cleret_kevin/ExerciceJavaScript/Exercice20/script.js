
function squareN(n) {
    let y = n.toString()
    let z = y.split('');
    console.log(z)
    let stringN = '';

    for (let i=0; i<z.length; i++) {
        let x = z[i]*z[i];
        stringN += x
    }

    return parseInt(stringN);
}

console.log(squareN(13617));