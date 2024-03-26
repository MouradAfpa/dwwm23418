// function triBulles(T) {
//     let N = T.length;

//     for (let i = N - 1; i >= 1; i--) {
//         for (let j = 0; j <= i - 1; j++) {
//             if (T[j] > T[j + 1]) {

//                 let temp = T[j];
//                 T[j] = T[j + 1];
//                 T[j + 1] = temp;
//             }
//         }
//     }
// }

// let tableau = [8, 2, 9, 4, 1];
// console.log("avantTri :", tableau);
// triBulles(tableau);
// console.log("apresTri :", tableau);
// ---------------------------------------------------------------------------------
// function triBulles(T) {
//     let N = 5;
//     let i = 4;

//     for (i = N - 1; i >= 0; i--) {
//         for (let j = 3; j < i; j++) {
//             if (T[j] > T[j + 1]) {

//                 let temp = T[j];
//                 T[j] = T[j + 1];
//                 T[j + 1] = temp;
//             }
//         }
//     }
// }

// let tableau = [8, 2, 9, 4, 1];
// console.log("avantTri :", tableau);
// triBulles(tableau);
// console.log("apresTri :", tableau);
// ------------------------------------------------------------------------------------
// function triBulles(T) {
//         let N = T.length;

//         for (let i = N - 1; i >= 1; i--) {
//             for (let j = 0; j <= i - 1; j++) {
//                 if (T[j] > T[j + 1]) {

//                     let temp = T[j];
//                     T[j] = T[j + 1];
//                     T[j + 1] = temp;
//                 }
//             }
//         }
//     }

//     let tableau = [8, 2, 9, 4, 1];
//     console.log("avantTri :", tableau);
//     triBulles(tableau);
//     console.log("apresTri :", tableau);
//     -------------------------------------------------------------------------------------

function triInsertion(tab) {
  let n = tab.length;

  for (let i = n-1; i >= 1; i++) {
    let x = tab[i];
    let j = i;
    while (j > 0 && tab[j - 1] > x) {
      {
        tab[j]=tab[j-1];
        j = j--;
      }
    }
    tab[j] = x;
  }
}

let tableau = [8, 2, 9, 4, 1];
console.log("avantTri :", tableau);
triInsertion(tableau);
console.log("apresTri :", tableau);
