

// #5 - Doubler les lettres (8 kyu)

let char = "String"

function doubleChar(){

let tabChar = Array.from(char)
let newStock = [];

console.log(tabChar);

tabChar.forEach((e)=>{
    newStock.push(e+e)
    console.log(newStock);
})

return newStock.join('');
}
console.log(doubleChar(char));
console.log(typeof(doubleChar(char)));




