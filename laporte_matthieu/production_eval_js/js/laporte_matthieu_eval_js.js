// --> EXO1
// let nom = prompt("Donnez votre nom");

// document.write("Bienvenue " + nom);





// --> EXO2

// let nombreA = parseInt(prompt("Entrez un nombre"));
// let nombreB = parseInt(prompt("Entrez un second nombre"));

// let result = nombreA + nombreB;
// alert(nombreA + " + " + nombreB + " = " + result);





// --> EXO3

// let fabrication = parseInt(prompt("Entrez le prix de fabrication"));
// let vente = parseInt(prompt("Entrez le prix de vente"));

// if(fabrication > vente) {
//     alert("Perte");
// }
// else {
//     alert("Profit");
// }



// --> EXO4

// let premier = parseInt(prompt("Entrez le premier nombre"));
// let second = parseInt(prompt("Entrez le second nombre"));
// let troisième = parseInt(prompt("Entrez le troisième nombre"));

// if((premier > second) && (premier > troisième)) {
//     alert("Le plus grand nombre est " + premier);
// }
// else if((second > premier) && (second > troisième)) {
//     alert("Le plus grand nombre est " + second);
// }
// else {
//     alert("Le plus grand nombre est " + troisième);
// }



// --> EXO5

// let noteEleve = parseInt(prompt("Entrez la note"));

// if(noteEleve <= 4) {
//     alert("Catastrophique, il faut tout revoir");
// }
// else if((noteEleve >= 5) && (noteEleve <= 10)) {
//     alert("Insuffisant");
// }
// else if((noteEleve >= 11) && (noteEleve <= 14)) {
//     alert("Peut mieux faire");
// }
// else if((noteEleve >= 15) && (noteEleve <= 17)) {
//     alert("Bien");
// }
// else {
//     alert("Excellent, bon travail");
// }



// --> EXO6

// let calcul1 = parseInt(prompt("Entrez le premier nombre"));
// let operateur = prompt("Entrez un opérateur (+, *, / ou -)");
// let calcul2 = parseInt(prompt("Entrez le second nombre"));
// let result;

// switch (operateur) {
//     case "+":
//         result = calcul1 + calcul2;
//         alert(calcul1 + " + " + calcul2 + " = " + result);
//         break;
    
//     case "*":
//         result = calcul1 * calcul2;
//         alert(calcul1 + " x " + calcul2 + " = " + result);
//         break;

//     case "/":
//         result = calcul1 / calcul2;
//         alert(calcul1 + " / " + calcul2 + " = " + result);
//         break;

//     case "-":
//         result = calcul1 - calcul2;
//         alert(calcul1 + " - " + calcul2 + " = " + result);
//         break;

//     default:
//         alert("Erreur, mauvais opérateur, réessayez");

// }


// --> EXO7

// let n = parseInt(prompt("Entrez un nombre"));
// let i = 0;
// let result = 0;

// while(i < n) {
//     i++;
//     result = result + i;  
// }
// alert(result);



// --> EXO8

// let nombre = parseInt(prompt("Entrez un nombre"));
// const etoile = "*";
// let i = 0;
// let j = nombre;
// let result;
// let result2;

// function exoHuit(nombre){
//     while(i < nombre) {
//         i++;
//         result = i;
//         document.write(etoile.repeat(result) + "<br>");
//     }
//     exoNeuf(nombre);
// }



// // --> EXO9 (à utiliser en même temps que l'EXO8)
// function exoNeuf(nombre){
//     do  {
//         j--;
//         result2 = j;
//         document.write(etoile.repeat(result2) + "<br>");
//     }while(j > 0);
// }

// exoHuit(nombre);



// --> EXO10

// let nombre = parseInt(prompt("Entrez un nombre"));
// const etoile = "*";
// let i = 0;
// let result;

// function exoDix(nombre){
//     document.write("<style> body { text-align: center; } </style>");
//     while(i < nombre) {
//         i++;
//         result = i;
//         if(i % 2 != 0) {
//             document.write(etoile.repeat(result) +  "<br>");
//         }
//     }
// }

// exoDix(nombre * 2);



// --> EXO11 (pas terminé)
// let nombre = parseFloat(prompt("Entrez un nombre"));
// let result = parseFloat(0);

// function exoOnze(nombre) {
//     let billet500 = parseInt(nombre / 500);
//     let billet200 = parseInt(result / 200);
//     let billet20 = parseInt(result / 20);
//     let billet10 = parseInt(result / 10);
//     let piece2 = parseInt(result / 2);
//     let piece50Cents = parseInt(result / 0.50);
//     let piece2Cents = parseInt(result / 0.02);

//     result = nombre % 500;
    

//     if( result > 0) {
//         document.write("Billet 500€ : " + billet500 + "<br>");
//         result = nombre % 200;
//     }
//     // else {}
//     if(result > 0) {
//         document.write("Billet 200€ : " + billet200 + "<br>");
//         result = nombre % 20;
//     }
//     // else{}
//     if(result > 0) {
//         document.write("Billet 20€ : " + billet20 + "<br>");
//         result = nombre % 10;
//     }
//     // else{}
//     if(result > 0) {
//         document.write("Billet 10€ : " + billet10 + "<br>");
//         result = nombre % 2;
//     }
//     // else{}
//     if(result > 0) {
//         document.write("pièce 2€ : " + piece2 + "<br>");
//         result = nombre % 0.50;
//     }
//     // else{}
//     if(parseFloat(result) > 0) {
//         document.write("pièce 0,50€ : " + piece50Cents + "<br>");
//         result = nombre % 0.02;
//     }
//     // else {}
//     if(parseFloat(result) > 0) {
//         document.write("pièce 0,02€ : " + piece2Cents);
//     } 
// }
// exoOnze(nombre);