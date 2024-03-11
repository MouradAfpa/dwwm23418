
function longestWord(t) {
    let longest = t.split(' ');
    let n = longest.length
    let max = 0;
    let maxMot;

    for (let i=0; i<n; i++) {
        console.log(longest[i].length)

        if (longest[i].length >= max) {
            max = longest[i].length
            maxMot = longest[i];
            console.log('la longueur max est ' + max)
        }

    }

    return 'le mot le plus long est ' + maxMot + ' et sa longueur est ' + max;
}

console.log(longestWord("bitcoin take over the world maybe who knows perhaps"))