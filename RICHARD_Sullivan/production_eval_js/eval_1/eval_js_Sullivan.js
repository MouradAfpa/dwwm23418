// ---------------------------------------- Exercice n°1 ----------------------------------------
// const welcome = prompt(`Saisir un nom`);
//
// alert(`Bienvenu, ${welcome}`);
//
// ---------------------------------------- Exercice n°2 ----------------------------------------
// const x = parseInt(prompt(`Saisir un premier nombre`));
// const y = parseInt(prompt(`saisir un nombre à additionner`));
// //
// function addition(a, b) {
//     let z = a + b;
//     //
//     return z;
// }
// console.log(addition(x, y));
//
// ---------------------------------------- Exercice n°3 ----------------------------------------
// const fab = parseInt(prompt(`Saisir un prix de fabrication`));
// const vente = parseInt(prompt(`Saisir un prix de vente`));
// //
// function benef(f, v) {
//     let z = 0;
//     if(f < v) {
//         z = vente - fab
//         console.log(`Profit de ${z}€`);
//     } else {
//         z = fab - vente
//         console.log(`Perte de ${z}€`);
//     }
// }
// benef(fab, vente);
//
// ---------------------------------------- Exercice n°4 ----------------------------------------
// const nbr1 = parseInt(prompt(`Saisir un premier nombre`));
// const nbr2 = parseInt(prompt(`Saisir un deuxième nombre`));
// const nbr3 = parseInt(prompt(`Saisir un troisième nombre`));
// //
// function bigger(a, b, c) {
//     if((a > b) && (a > c)) {
//         return a;
//     } else {
//         if((b > a) && (b > c)) {
//             return b;
//         } else {
//             return c;
//         }
//     }
// }
// console.log(`[${nbr1}, ${nbr2}, ${nbr3}] --> ${bigger(nbr1, nbr2, nbr3)}`);
// console.log(`[${nbr1}, ${nbr2}, ${nbr3}] --> ${bigger(nbr1, nbr2, nbr3)}`);
//
// ---------------------------------------- Exercice n°5 ----------------------------------------
// var nbr = Math.floor(Math.random() * 21)
// console.log(nbr);
// //
// function note(n) {
//     const note1 = ((n >= 0) && (n < 5));
//     const note2 = ((n > 4) && (n < 11));
//     const note3 = ((n > 10) && (n < 15));
//     const note4 = ((n > 14) && (n < 18));
//     const note5 = ((n > 17) && (n <= 20));
//     //
//     switch(true) {
//         case note1:
//             console.log(`Catastrophique, il faut tout revoir`);
//             break;
//         case note2:
//             console.log(`Insufisant`);
//             break;
//         case note3:
//             console.log(`Peut mieux faire`);
//             break;
//         case note4:
//             console.log(`Bien`);
//             break;
//         case note5:
//             console.log(`Excellent, bon travail`);
//             break;
//         default:
//             console.log(`Erreur`)
//     }
// }
// note(nbr);
//
// ---------------------------------------- Exercice n°6 ----------------------------------------
// const ope1 = parseInt(prompt(`Premier opérande`));
// const operateur = prompt(`Choisir un opérateur [+, *, /, -]`);
// const ope2 = parseInt(prompt(`Deuxième opérande`));
// //
// function calculatrice(a, b, c) {
//     if(operateur == `+`) {
//         return (ope1 + ope2);
//     } else {
//         if(operateur == `*`) {
//             return (ope1 * ope2);
//         } else {
//             if(operateur == `/`) {
//                 return (ope1 / ope2);
//             } else {
//                 if(operateur == `-`) {
//                     return (ope1 - ope2);
//                 }
//             }
//         }
//     }
// }
// console.log(`[${ope1}, "${operateur}", ${ope2}] = ${calculatrice(ope1, operateur, ope2)}`);
//
// ---------------------------------------- Exercice n°7 ----------------------------------------
// const N = parseInt(prompt(`Saisir un nombre`));
// //
// function somme() {
//     let s = 0;
//     //
//     for (let i = 1; i <= N; i++) {
//         s += i;
//     }
//     console.log(s);
// }
// somme();
//
// ---------------------------------------- Exercice n°8 ----------------------------------------
// const nbr = parseInt(prompt(`Saisir un nombre`));
// //
// function star() {
//     let s = ``;
//     for(let i = 1; i < nbr; i++) {
//         s += `*`
//         console.log(s);
//     }
// }
// star();