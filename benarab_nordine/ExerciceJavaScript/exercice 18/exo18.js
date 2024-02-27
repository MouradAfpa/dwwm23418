function longestWord(str) {
    let words = str.split(' '); 
    let longest = '';         

    for (let word of words) {
        if (word.length >= longest.length) { 
            longest = word;
        }
    }

    return longest;
}


console.log(longestWord('a b c d e fgh'));   
console.log(longestWord('one two three'));   
console.log(longestWord('red blue grey'));   
