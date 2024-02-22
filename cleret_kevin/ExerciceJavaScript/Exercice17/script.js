
function findShort(t) {
    let longest = t.split(' ');
    let n = longest.length
    let min = 99999999999999;
    let minMot;

    for (let i=0; i<n; i++) {
        console.log(longest[i].length)

        // longest[i] = new Array(longest[i]);
        // console.log(longest[i])
        // console.log(longest[i].length)

        if (longest[i].length < min) {
            min = longest[i].length
            minMot = longest[i];
            console.log('la longueur min est ' + min)
        }

    }

    return 'le mot le plus court est ' + minMot + ' et sa longueur est ' + min;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))