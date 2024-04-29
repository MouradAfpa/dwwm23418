
// #4 - Nettoyage de chaînes (8 kyu)


var char = "E3at m2e2!!";

function stringClean(){

    let stockT = Array.from(char);
    console.log(stockT)
    let newStock = []

    stockT.forEach((v)=>{
        if (/[a-zA-Z]/.test(v) || (/[!-\/:-@ \[-`{-~]/.test(v))){
            newStock.push(v)
            console.log(newStock)
        }
    })
 return newStock.join('')
}

console.log(typeof(stringClean()));
console.log(stringClean());




