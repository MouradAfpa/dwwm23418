// text.split('').map()

function accum(t) {
    return t.split('').map((lettre,index) => 
    lettre.toUpperCase() +
    lettre.toLowerCase().repeat(index)).join('-');
}

console.log(accum('abcd'));
console.log(accum('RqaEzty'));
console.log(accum('cwAt'));