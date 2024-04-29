function findShort(str) {
    let words = str.split(" ");
    let shortestLength = words[0].length;

    for (let i = 0; i < words.length; i++) {
        if (words[i].length < shortestLength) {
            shortestLength = words[i].length;
        }
    }

    return shortestLength;
}

let phrase = "bitcoin take over the world maybe who knows perhaps";
console.log(findShort(phrase)); 
