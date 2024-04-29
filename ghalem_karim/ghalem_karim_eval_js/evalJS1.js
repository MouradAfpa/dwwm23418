// _______   ___      ___ ________  ___                  ___  ________
// |\  ___ \ |\  \    /  /|\   __  \|\  \                |\  \|\   ____\
// \ \   __/|\ \  \  /  / | \  \|\  \ \  \               \ \  \ \  \___|_
//  \ \  \_|/_\ \  \/  / / \ \   __  \ \  \            __ \ \  \ \_____  \
//   \ \  \_|\ \ \    / /   \ \  \ \  \ \  \____      |\  \\_\  \|____|\  \
//    \ \_______\ \__/ /     \ \__\ \__\ \_______\    \ \________\____\_\  \
//     \|_______|\|__|/       \|__|\|__|\|_______|     \|________|\_________\
//                                                               \|_________|
// GHALEM KARIM --
//
// EXO 1--------------------------------------------
//
// function hello() {
//   let name = prompt("what's your name ? ");
//   alert(`Bienvenue ${name}`);
// }
//
// hello();
//
// EXO 2--------------------------------------------
//
// function calcul() {
//   let val1 = parseInt(prompt("premiere valeur"));
//   let val2 = parseInt(prompt("premiere valeur"));
//   let res = val1 + val2;
//   alert(`${val1}+${val2}= ${res}`);
// }
//
// calcul();
//
// EXO 3--------------------------------------------
//
// function renta() {
//
//   let val1 = parseInt(prompt("prix achat ?"));
//   let val2 = parseInt(prompt("pris de vente ?"));
//   let res = Math.abs(val1 - val2);
//   val1 > val2 ? alert(`perte de ${res}`) : alert(`profit de ${res}`);
// }
//
// renta();
//
// EXO 4--------------------------------------------
//
// function plusG() {
//
//   let val1 = [];
//   for (let i = 0; i < 3; i++) {
//     val1[i] = parseInt(prompt("entrez un nombre"));
//   }
//   alert(JSON.stringify(val1) + "--->" + Math.max(...val1));
// }
//
// plusG();
//
// EXO 5--------------------------------------------
//
// function notation() {
//   let val1 = parseInt(prompt("entrez une note"));
//
//   val1 > 17
//     ? alert("Excellent, bon travail")
//     : val1 > 14
//     ? alert("Bien")
//     : val1 > 10
//     ? alert("Peut mieux faire")
//     : val1 > 4
//     ? alert("Insuffisant")
//     : alert("Catastrophique, il faut tout revoir");
// }
//
// notation();
//
// EXO 6--------------------------------------------
//
// function calcul() {
//   let val1 = parseInt(prompt("entrez une valeur"));
//   let operator = prompt("entrez un operateur");
//   let val2 = parseInt(prompt("entrez une valeur"));
//   switch (operator) {
//     case "+":
//       alert(`[${val1},"${operator}",${val2}] = ` + (val1 + val2));
//       break;
//     case "-":
//       alert(`[${val1},"${operator}",${val2}] = ` + (val1 - val2));
//       break;
//     case "*":
//       alert(`[${val1},"${operator}",${val2}] = ` + val1 * val2);
//       break;
//     case "/":
//       alert(`[${val1},"${operator}",${val2}] = ` + val1 / val2);
//       break;
//   }
// }
//
// calcul();
//
// EXO 7--------------------------------------------
//
// function somme(val1, res) {
//   if (val1 == 0) {
//     alert(res);
//   } else {
//     return somme(val1 - 1, (res += val1));
//   }
// }
//
// function appSomme() {
//   let val = parseInt(prompt("entrez une valeur"));
//   let res = 0;
//   somme(val, res);
// }
//
// appSomme();
//
// EXO 8--------------------------------------------
//
// function escalier() {
//   let val = parseInt(prompt("entrez une valeurs"));
//   let res = "";
//   for (let i = 1; i <= val; i++) {
//     for (let j = 0; j < i; j++) {
//       res += "*";
//     }
//     res += "\n";
//   }
//   console.log(res);
// }
//
// escalier();
//
// EXO 9--------------------------------------------
//
// function escalier2() {
//   let val = parseInt(prompt("entrez une valeurs"));
//   let res = "";
//   for (let i = 1; i <= val; i++) {
//     for (let j = 0; j < i; j++) {
//       res += "*";
//     }
//     res += "\n";
//   }
//   for (let i = val; i >= 1; i--) {
//     for (let j = i; j > 0; j--) {
//       res += "*";
//     }
//     res += "\n";
//   }
//   console.log(res);
// }
//
// escalier2();
//
// EXO 10--------------------------------------------
//
// function triangle() {
//   let val = parseInt(prompt("entrez une valeur "));
//   let res = "";
//   for (let i = 1; i <= val; i++) {
//     for (let j = 1; j <= val - i; j++) {
//       res += " ";
//     }
//     for (let k = 0; k < 2 * i - 1; k++) {
//       res += "*";
//     }
//     res += "\n";
//   }
//   console.log(res);
// }
//
// triangle();
// 
// EXO 11--------------------------------------------
// 

