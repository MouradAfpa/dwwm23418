//----- Exo 1 -----
// let nom = prompt("Votre nom");
// document.getElementById("message").innerHTML = "Bienvenue : " + nom;

// ---- Exo 2-----
// let nb1 = parseInt(prompt("Un nombre:"));
// let nb2 = parseInt(prompt("Un autre nombre"));
// let somme = nb1+nb2;
// document.getElementById("message").innerHTML = "La somme est:" + somme;

// ----Exo 3 ----------

// let prixFab = parseInt(prompt("Prix de fabrication"));
// let prixVente = parseInt(prompt("Prix de vente"))
// let marge = 0;

// if (prixVente>prixFab) {
//     marge = prixVente-prixFab;
//     document.getElementById("message").innerHTML = "Profit de " + marge + "€";
// } else {
//     marge = prixFab-prixVente;
//     document.getElementById("message").innerHTML = "Perte de " + marge + "€";
// }

// ----- Exo 4 -----

// let nb1 = parseInt(prompt("Saisir un premier nombre"));
// let nb2 = parseInt(prompt("Saisir un deuxième nombre"));
// let nb3 = parseInt(prompt("Saisir un troisième nombre"));

// if (nb1>nb2 && nb1>nb3) {
//     document.getElementById("message").innerHTML = "[" +nb1 + ", " +nb2 + ", " +nb3 + "]" + "-->" + nb1;
// } else {
//     if (nb2>nb1 && nb2>nb3) {
//         document.getElementById("message").innerHTML = "[" +nb1 + ", " +nb2 + ", " +nb3 + "]" + "-->" + nb2;
//     } else {
//         document.getElementById("message").innerHTML = "[" +nb1 + ", " +nb2 + ", " +nb3 + "]" + "-->" + nb3;
//     }
// }

//------ Exo 5 ------

// let note = parseInt(prompt("Note de l'élève"));

// if (note>=0 && note<=4) {
//     document.getElementById("message").innerHTML = "Catastrophique, il faut tout revoir";
// } else {
//     if (note>=5 && note<=10) {
//         document.getElementById("message").innerHTML = "Insuffisant";
//     } else {
//         if (note>=11 && note<=14) {
//             document.getElementById("message").innerHTML = "Peut mieux fairer";
//         } else {
//             if (note>=15 && note<=17) {
//                 document.getElementById("message").innerHTML = "Bien";
//             } else {
//                 document.getElementById("message").innerHTML = "Excellent, bon travail";
//             }
//         }
//     }
// }

//----- Exo 6 -----

// let nb1 = parseInt(prompt("Saisir un nombre"));
// let op = prompt("Saisir un opérateur parmi +, -, *, /");
// let nb2 = parseInt(prompt("Saisir un autre nombre"));
// let cal = 0;

// if (op === "+") {
//     cal = nb1 + nb2;
//     document.getElementById("message").innerHTML = "[" + nb1 + ", " + "+ ,"+ nb2 + "] = " + cal;
// } else {
//     if (op === "-") {
//         cal = nb1 - nb2;
//         document.getElementById("message").innerHTML = "[" + nb1 + ", " + "- ,"+ nb2 + "] = " + cal;
//         } else {
//         if (op === "*") {
//             cal = nb1 * nb2;
//             document.getElementById("message").innerHTML = "[" + nb1 + ", " + "* ,"+ nb2 + "] = " + cal;
//         } else {
//             if (op === "/") {
//                 cal = nb1 / nb2;
//                 document.getElementById("message").innerHTML = "[" + nb1 + ", " + "/ ,"+ nb2 + "] = " + cal;
//             } else {
//                 document.getElementById("message").innerHTML = "Erreur";
//             }
//         }
//     }
// }

//------ Exo 7 ------


var x =parseInt(prompt("Saisir un nombre"));
var y=0;
let i;
for (i=1; i<=x; i++){
y = y + i;
}
document.getElementById("message").innerHTML = "La somme jusqu'à " + x + " est: " + y;


//--- Exo 8 ---------

// let nb = parseInt(prompt("Entrer un nombre"));
// let etoile = "*";
// let i;

// for (i = 0; i <= nb; i++) {

//     document.getElementById("message").innerHTML = etoile;
// }



