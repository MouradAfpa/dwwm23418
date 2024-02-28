// ---------------------------------------- Fizz Buzz ----------------------------------------
// const N = parseInt(prompt(`Saisir un nombre`));
// //
// function fizzBuzz() {
//     let s = 0;
//     //
//     for (let i = 1; i <= N; i++) {
//         s += i
//         if (i % 3 == 0) {
//             console.log(`Fizz`)
//         } else if (i % 5 == 0) {
//             console.log(`Buzz`);
//         } else if (i % 15 == 0) {
//             console.log(`FizzBuzz`);
//         } else {
//             console.log(i);
//         }
//     }
// }
// fizzBuzz();
//
// ---------------------------------------- Juste prix ----------------------------------------
// const N = parseInt(Math.random()*1000);
// const t = parseInt(prompt(`Combien de tentative ?`));
// //
// function justePrix() {
//     for(let i = 1; i <= 10; i++) {
//         let nombre = parseInt(prompt(`Donnez un chiffre:`));
//         if(nombre === N) {
//             alert(`Bravo`);
//             break;
//         }
//         if(nombre > N) {
//             alert(`Plus petit`);
//         }
//         if(nombre < N) {
//             alert(`plus grand`);
//         }
//         if(i == t) {
//             break;
//         }
//     }
// }
// justePrix();
//
// ---------------------------------------- Roller coaster ----------------------------------------
// let place = 5;
// console.log(`Nombre de place: ${place}`);
// let tours = 3;
// console.log(`Nombre de tours: ${tours}`);
// let n = parseInt(Math.random()*6);
// console.log(`Nombre de personnes: ${n}`);
// let file = [];
// //
// function rollerCoaster() {
//     for (let i = 0; i < n; i++) {
//         file.push(place, tours, n);
//     }
//     console.log(`Nombre de place: ${place}, Nombre de tours: ${tours}, Nombre de personnes: ${n}`)
//     //
//     let cache = {};
//     let gain = 0;
//     let idx = 0;
//     //
//     for (let pass = 0; tours--; pass = 0) {
//         if (idx in cache) {
//             pass = cache[idx][0];
//             idx = cache[idx][1];
//         } else {
//             let depart = idx;
//             for (let i = 0; i < n && file[idx] + pass <= place; i++) {
//                 place += file[idx];
//                 idx = idx === n - 1 ? 0 : idx + 1;
//                 console.log(`Tour ${i}: ${file}`);
//             }
//             cache[depart] = [pass, idx];
//         }
//         gain += place
//     }
//     console.log(`${gain}€`);
// }
// rollerCoaster();
//
// ---------------------------------------- Pendu ----------------------------------------
// let word = prompt(`Choisir un mot à trouver`).split(``);
// // console.log(word);
// let nbrtry = parseInt(prompt(`Choisir un nombre d'essaie`));
// //
// function game(w) {
//     let words = w.map((elem) => elem = `_`);
//     console.log(words);
//     //
//     for(let i = 0; i <= words.length-1; i++) {
//         let letter = prompt(`Saisir une lettre`);
//         if(letter == word[i]) {
//             words[i] = ``;
//             words[i] += letter;
//             console.log(words);
//         }
//         if(i == nbrtry-1) {
//             break;
//         }
//     }
// }
// game(word);
//
// ---------------------------------------- Pendu ----------------------------------------
// let barillet = 8;
// let master = parseInt(prompt(`Nombre de balles dans le barillet`));
// let charge = 
// let player1 = 0;
// let player2 = 0;
// //
// function roulette() {
//     for(let i = 0; i < barillet; i++) {
        
//     }
// }