// let prenom =prompt("Entrez votre prénom !");

// document.write("Bienvenue" +" "+ prenom );

// -----------------------------------------------------

// let nb1 = prompt("Entrez un nombre 1");
// let nb2 = prompt("Entrez un nombre 2");

// nb1 =parseInt(nb1);
// nb2 =parseInt(nb2);

// let resultat = nb1 + nb2;

// document.write("le resultat est" +" " +  resultat)
// ----------------------------------------------------------

    // let prixFabrication = prompt("Entrez le prix de fabrication en euros");
    // let prixVente = prompt("Entrez le prix de vente en euros");
    
    // prixFabrication = parseInt(prixFabrication);
    // prixVente = parseInt(prixVente);
    
    // let resultat = prixVente - prixFabrication;
    
    // if (resultat > 0) {
    //     document.write("Vous faites un bénéfice de " + resultat + " euros.");
    // } 
    // else {
    //     resultat *= -1; 
    //     document.write("Vous faites une perte de " + resultat + " euros.");
    // }
    // -------------------------------------------------------------------

// let nb1 = parseInt(prompt("Entrez un nombre 1"));
// let nb2 = parseInt(prompt("Entrez un nombre 2"));
// let nb3 = parseInt(prompt("Entrez un nombre 3"));

// if (nb1 > nb2 && nb1 > nb3) {
//     document.write("[" + nb1 + ", " + nb2 + ", " + nb3 + "]" + " --> " + nb1);
// }
// if (nb2 > nb1 && nb2 > nb3) {
//     document.write("[" + nb1 + ", " + nb2 + ", " + nb3 + "]" + " --> " + nb2);
// }
// else{
//     document.write("[" + nb1 + ", " + nb2 + ", " + nb3 + "]" + " --> " + nb3);
// }
// -----------------------------------------------------------------------------

// let nb1 = parseInt(prompt("Entrez la note"));

// if (nb1 >= 0 && nb1 <= 4) {
//     document.write("Catastrophique, il faut tout revoir");
// } 
// else if (nb1 >= 5 && nb1 <= 10) {
//     document.write("Insuffisant");
// } 
// else if (nb1 >= 11 && nb1 <= 14) {
//     document.write("Peut mieux faire");
// } 
// else if (nb1 >= 15 && nb1 <= 17) {
//     document.write("Bien");
// }
// else if (nb1 >= 18 && nb1 <= 20) {
//     document.write("Excellent, bon travail");
// } 
// else {
//     document.write("Entrez une note entre 0 et 20");
// }

// --------------------------------------------------------------------------------------

// let nb1 = parseInt(prompt("Entrez un nombre"));
// let operande = prompt("Entrez un opérateur");
// let nb2 = parseInt(prompt("Entrez un nombre"));

// if (operande === "+" ){

// let resultat = nb1+nb2;
// document.write("[" + nb1 + ", " + operande + ", " + nb2 + "]" + " = " + resultat);
// }

//  else if (operande === "*" ){
// let resultat = nb1*nb2;
// document.write("[" + nb1 + ", " + operande + ", " + nb2 + "]" + " = " + resultat);
// }

// else if (operande === "/" ){
// let resultat = nb1/nb2;
// document.write("[" + nb1 + ", " + operande + ", " + nb2 + "]" + " = " + resultat);
// }

// else if (operande === "-" ){
// let resultat = nb1-nb2;
// document.write("[" + nb1 + ", " + operande + ", " + nb2 + "]" + " = " + resultat);
// }

// else{
//     alert("veuillez entrer des valeurs correct")
// }

// -------------------------------------------------------------------------------
// n = parseInt(prompt("Veuillez saisir un nombre: "));
// let somme = 0;
// let equation = "";

// for (let i = 1; i <= n; i++) {
//     somme = somme + i;
//     equation = equation + i;
//     if (i < n) {
//         equation = equation + " + ";
//     }
// }

// document.write( equation, " = ", somme);
// ------------------------------------------------------------------------------------

// let nombre = parseInt(prompt("Veuillez saisir un nombre: "))


//     for (let i = 1; i <= nombre; i++) {
//         let ligne = ""; 
        
//         for (let j = 1; j <= i; j++) {
//             ligne += "*";
//         }
//         console.log(ligne); 
//     }

// ----------------------------------------------------------------------------------------