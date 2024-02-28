// --- Tri à bulle ----------------------
// function triBulles(T) {
//     let n = T.length;

//     for (let i = n - 1; i >= 1; i--) {
//         for (let j = 0; j < i; j++) {
//             if (T[j] > T[j + 1]) {
//                 let inter = T[j];
//                 T[j] = T[j + 1];
//                 T[j + 1] = inter;
//             }
//         }
//     }
// }

// ---- Création d'un tableau aléatoire -----
let tab = new Array(5);
for(let i = 0; i< tab.length; i++){
    tab[i] = parseInt(Math.random()*51);
}
// ----------------------------------------


// let tab = [8, 7, 6, 5, 1];
console.log("Tableau non trié : ", tab);
// triBulles(tab);
// console.log("Tableau trié : ", tab);

// -------- tri par insertion ------------
function triInsertion(T){
    let n = T.length;
    for (let i = 1; i < n; i++) {
       x = T[i];
       j = i;
       while (j > 0 && T[j-1]>x) {
        T[j] = T[j-1];
        j = j-1;
       }
       T[j] = x;
        
    }
}

triInsertion(tab);
console.log(tab);

