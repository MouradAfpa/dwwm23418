// const vowels = ["a", "e", "i", "o", "u"]

// function getCount(t) {
//     const words = t.split('');
//     let vowelsNumber = 0;

//     for (let i=0; i<words.length ; i++) {
//         if (words.includes('a')) {
//             vowelsNumber++
//         }
//     }

//     console.log(vowelsNumber)
// }

// console.log(getCount('The quick brown fox jumps over the lazy dog'));


function getCount2(t) {
    const tri2 = t.match(/[aeiou]/gi)
    return tri2.length
}

console.log(getCount2('The quick brown fox jumps over the lazy dog'));

