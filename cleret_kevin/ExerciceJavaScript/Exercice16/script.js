
function findLongest(t) {
    let max = 0;
    let n = t.length;
    let maxT;
    
    for (let i=0; i<n ; i++) {
        let x = t[i].toString();
        console.log('x est ' + x);

        let y = x.split('');
        console.log('y est ' + y);

        let z = y.length;
        console.log('la longueur de y (z) est ' + z);

        if (z > max) {
            max = z;
            console.log('max est ' + z);
            maxT = y;
        }
    }

    return max = 'la longueur max est ' + max + ' et sa valeur est ' + maxT;
}

console.log(findLongest([1, 10, 100, 200, 100, 300, 50]))
console.log(findLongest([100000, 10, 100, 200, 100, 300, 50]))