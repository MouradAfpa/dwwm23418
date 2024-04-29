// exo2
function countSheeps(arr) {
    return arr.filter(Boolean).length;
   }
   Boolean(false)
   false
   Boolean(true)
true


const tableauDeMoutons = 
[true, true, true, false,
    true, true, true, true ,
    true, false, true, false,
    true, false, false, true ,
    true, true, true, true ,
    false, false, true, true
];

const nombreDeMoutons = countSheeps(tableauDeMoutons);
console.log("#2 - Le nombre de moutons est :",nombreDeMoutons);