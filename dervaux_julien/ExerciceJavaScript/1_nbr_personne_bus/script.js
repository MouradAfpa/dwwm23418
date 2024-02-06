

// #1 -  Nombre de personnes dans le bus (8 kyu)


let T = [[10, 0], [3, 5], [5, 8]];
let nbrPassager = 0;

T.forEach((v) => {
    nbrPassager += v[0] - v[1];
});
console.log(nbrPassager);


// Correction

function number(param){
    return param.reduce((a,v)=>v[0]-v[1]+a,0);
}
console.log(number(T));