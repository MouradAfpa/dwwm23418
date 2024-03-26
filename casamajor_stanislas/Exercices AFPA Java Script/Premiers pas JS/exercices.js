// Exemple fonction cours

/*/let x = 0;
let y = 0;
function carre(x, y) {
    let z = x*x + y*y;
    return z;
}

function pair(n){
    return(n%2==0)
}
x = parseInt(prompt("Entrer x"));
y = parseInt(prompt("Entrer y"));
document.write(carre(x,y));
document.write(pair(carre(x, y)));

b = pair(3)
z =5*SommeCarre(7,2)+1
document.write("SommeCarre(3,5)=", SommeCarre(3,5))
/*/

// function fact(n) {
//     if (n === 0 || n === 1) {
//         return 1;
//     } else {
//         return n * fact(n - 1);
//     }
// }

// // Exemple d'utilisation
// var resultat = fact(8);
// console.log(resultat); 

// function fib(n){
//     let res;
//     if (n=== 1 || n === 0) {
//         return 1;
//     } else {
//         return fib(n-1) + fib(n-2);
//     }

// }

// // Exemple d'utilisation
// var resultat = fib(10)
// console.log(resultat);

// function fib(n) {
//     let res;
//     if (n=== 1 || n === 0) {
//         res = 1;
//     } else {
//         res = fib(n-1) + fib(n-2);
//     }
//     return res
// }

// // Exemple d'utilisation
// var resultat = fib(8)
// console.log(resultat);

// function fibiter(n) {
//     let i;
//     let a;
//     let b;
//     let c;
//     if (n==1 || n==0) {
//         return (1)
//     }

//     a = 1
//     b = 1

//     for (i = 2; i <= n; i++)
//     {
//     c = a + b
//     a = b
//     b = c
// }
// return (c)
// }

// // Exemple d'utilisation
// var resultat = fibiter(4)
// console.log(res

// function binaire (n) {
//     if (n != 0) {
//         binaire (parseInt(n/2));
//         document.write (n%2);
        
//     }
// }

// //Exemple d'utilisation
// binaire(20)

// Tableaux

// let tab1 = []; //tableau vide
// let tab2 = [12.5, 15, 13, 17.5] // tableau de 4 cases
// let tab3 = new Array(10) ; // tableau vide de 10 cases

// // insertion

// tab3[0] = 14; // insère une valeur
// tab3.push(); // insèrer à la fin
// tab3.unshift(20); // Ajoute au début

// // supression

// let valeur = tab3.pop(); // supprime l dernière case
// valeur = tab3.shift(); // supprime le premier
// valeur = tab3.splice(); // supprime la case d'indice

// // tester les tableaux

// let tab = new Array(10);
// for(let i = 0; i < tab.length; i++){
//     tab[i] = prompt("Entrer la valeur " + i + ":");
// }

// // Afficher les éléments du tableau
// for(let i = 0; i < tab.length; i++){
//     document.write(tab[i] + "<br>");
// }

// let tab = new Array(10);

// let nbre = 0;

// for(let i = 0; i < tab.length; i++){
//      tab[i] = prompt("Entrer la valeur " + i + ":");
// }
// for(let i =0; i<tab.length; i++){
//     if(tab[i] > 10){
//         nbre++
//     }
// }

// document.write("Le nombre de notes supérieures à 10 est : " + nbre)



// function SaisieTab (n,t){
//     let i;
//     for(i = 0;i < n; i++){
//     document.write("Saisie de l'élément" + i++)}
//     SaisieTab = prompt(T[i])
// }

// function AfficheTab(n,t){
//     let i;
//     for(i = 0;i < n; i++){
//     document.write("T[",i,"] =" + t[i])
// }
// }

// TD01

// EXO1

// let n = parseInt(prompt("nombre de case du tableau"));
// let tab = new Array (n);

// function saisietab(tableauT){
//     let i = 0;
//     for(i = 0 ; i < tableauT.length ; i++){
//         tableauT[i] = parseInt(Math.random()*20);
//         document.write(tableauT[i]+"<br>");
//     }
// }

// function minimum(tableauT){

// let min = tableauT[0];
// indice = 0;

// for(let i = 1; i< tableauT.length; i++){
//     if (tableauT[i] <= min){
//         min = tableauT[i];
//         indice = i;
//     }
    
// }
// document.write("le minimum est: " + min + " son indice est :" + indice)
// }


// saisietab(tab, n);
// minimum(tab, n);

// EXO1.3

// let n = parseInt(prompt("Nombre de cases du tableau"))
// let tab = new Array (10)



// function saisietab(tableauT){
//     let i = 0;
//     for(i = 0 ; i < tableauT.length ; i++){
//         tableauT[i] = parseInt(Math.random()*20);
//         document.write(tableauT[i]+"<br>");
//     }
// }


// function minimum(tableauT){

//     let min = tableauT[0];
//     indice = 0;
//     tableauT[i] = 0+2
//     tableauT[j] = n-2

//     for(i = 0; i < tableauT.length ; i++){
//     if (tableauT[i] < tableauT[j] ){
//         indice = tableauT[i]
//     }
//     }
//     for(j=0; j<tableauT.length;j++){
//         if (tableauT[j] < tableau[i]){
//         indice = tableau[j]
//     }
//         else if (j > n){
//             j = n
//         }
    

//     }
// }

// correction EXO1.3

// let n = parseInt(prompt("Nombre de cases du tableau"))
// let tab = new Array (n)
// let valDepart = parseInt(prompt("Rentrer la balise inférieure"))
// let valArrivee = parseInt(prompt("rentrer la balise supérieure"))



// function saisietab(tableauT){
//     let i = 0;
//     for(i = 0 ; i < tableauT.length ; i++){
//         tableauT[i] = parseInt(Math.random()*20);
//         document.write(tableauT[i]+"<br>");
//     }
// }


// function minimum(tableauT, valDepart, valArrivee){

// if (valArrivee > tableauT.length){
//     valArrivee = tableauT.length;
// }
// let min = tableauT[valDepart];
// indice = valDepart;

// for(let i = (valDepart + 1) ; i< valArrivee; i++){
//     if (tableauT[i] <= min){
//         min = tableauT[i];
//         indice = i;
//     }
    
// }
// document.write("le minimum est: " + min + " son indice est :" + indice)
// }

// saisietab(tab);
// minimum(tab, valDepart, valArrivee);


// EXO2.1

// let n = parseInt(prompt("Entrée un nombre de ligne"));

// let tab = new Array (n);

// function saisietab(tableauT){
//     let i = 0;
//     for(i = 0 ; i < tableauT.length ; i++){
//         tableauT[i] = parseInt(Math.random()*20);
//         document.write(tableauT[i]+"<br>");
//     }
// }

// function sommetab(tableauT){
//     let somme = 0;
//     for (i = 0; i<tableauT.length; i++){
//         somme += tableauT[i];
//     }
//     return somme;

// }

// function moyennetab(tableauT){
//     let somme = 0;
//     let moyenne = 0;
//     for (i = 0; i<tableauT.length; i++){
//         somme += tableauT[i];
//         moyenne = somme/tableauT.length;
//     }
//     return moyenne;

// }



// saisietab(tab);
// sommetab(tab);

// document.write ("la somme des element du tableau est : " + sommetab(tab) + "et la moyenne est : " + moyennetab(tab));

//EXO2.3

// let tab1 = [20 ,4 ,6 ,9 ,-1, 3, 5, 8, 6, 7];
// let depart = parseInt(prompt("Donner un depart"));
// let indice = 0;

// function sommetab(tableauT){
//     let somme = 0;
//     let i = depart;
//     while (tableauT[i] != -1)
//         {
//         somme += tableauT[i];
//         i++;
//         indice = i;
//     }
//     document.write ("La somme est :" + somme)
//     return somme;

// }

// function moyennetab(tableauT){
//     let moyenne = 0;
//     let sum = sommetab(tableauT);
//     let indice2 = indice - depart;
    
//     moyenne = sum/indice2;
//     document.write ("la moyenne est : " + moyenne)
// }

// moyennetab(tab1)


// function condition(tableauT, valDepart){

// valArrivee = tableauT.length;

// for (let i = valDepart; i<tableauT.length ; i++){
//     if (tableauT[i]== -1){
//         valArrivee = i
//     }
// }

// let somme = 0;

// for(let i = valDepart ; i< valArrivee; i++){
//     somme += tableauT[i];

//     }
//     moyenne = somme/(valArrivee-valDepart)
//     document.write ("La valeur d'arrivée est : " + condition(tableauT, valDepart))


// let tab = ['a','b','c','d','e','f'];

// let chaineConcatenee = tab.join('');

// let chaineAvecEspace = chaineConcatenee.split('').join('');

// document.write()

// Entrainement exo


// let tab = [22, 18, 15, 4, 6, 8, 9, 14, 34, 78]


// function som (tableau){
// let somme = 0;
// for(let i = 0; i < tab.length; i++){   
//     somme += tab[i];



// }
// return somme;

// }
// som(tab);
// document.write ("La somme de tous les nombre est : " + som(tab));

//TD01 EXO3

// let tab = [22,18,15,4,6,8,9,14,34,78]

// function gap (t){
//     for (let i = 0; i < t.length; i++) {
//         if (i != 0){
//             document.write("_" + t[i]);
//         }else{
//                 document.write(t[i]);
//             }
//         }
        
// }
// gap(tab)

//TD01 EXO4

// let p = [];
// let n = [];
// let f = [];
// let e = [];
// function remplirTab(t){
//     let elt = prompt("Donner un caractère du tableau " + t + " : (-1 fin de saisie)");
//     while( elt != '-1'){
//         t.push(elt)
//         elt = prompt ("Donner un caractère du tableau " + t + " : (-1 fin de saisie)");
//     }
//     t.push('-1');
// }
// function afficheTab(t){
//     let i=0;
//     while(t[i] != '-1'){
//         if(t[i] != undefined){

        
//         document.write(t[i]);
//     }
//         i++;
//     } 
// }

// function genererEmail(p, n, f)
// {
//     if(((p[0] == '-1') && (n[0] == '-1')) || (f[0] == '-1')){
//         alert("Impossible de generer un Email")}
//         else{
//             if((p[0] != '-1') && (n[0] != '-1')){
//                 afficheTab(p);
//                 n.push(".");

//                 afficheTab(n);
//                 f.push("@");

//                 afficheTab(f);
//                 e.push(".");
//             }
//         }
// }

// remplirTab(p);
// afficheTab(p);

// n.push(".");
// remplirTab(n);
// afficheTab(n);

// f.push("@");
// remplirTab(f);
// afficheTab(f);

// e.push(".");
// remplirTab(e);
// afficheTab(e);

// genererEmail(p, n, f)


// Exercice 1 Question algo

// let dividende = prompt("Entrer le dividende :");
// let diviseur = prompt("Entrer le diviseur :");

// dividende = parseInt(dividende);
// diviseur = parseInt(diviseur);

// if (diviseur !== 0){

//     let quotient = parseInt(dividende/diviseur);
//     let reste = dividende % diviseur;

//     document.write("Le quotient de la division est :" + quotient + "<br>");
//     document.write("Le reste de la division est : " + reste + "<br>");
// }

// else {
//     document.write("Erreur devision par 0 impossible");
// }

// Exercice 2 Question algo

// let x = parseInt(prompt("Entrer la valeur de X :"));
// let y = parseInt(prompt("Entrer la valeur de Y :"));
// let z = parseInt(prompt("Entrer la valeur de Z :"));

// function rotation (x,y,z){
//     let w = x;
//     x = y;
//     y = z;
//     z = w;

//     document.write("Après permutation circulaire : X= " + x +" Y= " + y + " Z= " + z);

    
// }

// rotation(x,y,z)

// Exercice 3 Question algo 

// let x = 3;
// let y = 4;

// x = x + y
// y = x - y
// x = x - y

// Exemple en chiffre :

// 7 = 3 + 4
// 4 = 7 - 3
// 3 = 7 - 4

// Exercice 4 Question algo

// let x = parseInt(prompt("Choisissez un entier positif :"));
// let y = parseInt(prompt("Choisissez un entier negatif :"));



// function afficher (x, y){
//     while (x*y>0){
//     alert("Ecrivez bien un positif et un negatif !!");
//     let x = parseInt(prompt("Choisissez un entier positif :"));
//     let y = parseInt(prompt("Choisissez un entier negatif :"));
// }
//     if (x >= 0 && y < 0){
//         document.write("le chiffre positif est : " + x)
//     }
//     else if (y >= 0 && x < 0){
//     document.write("le chiffre positif est : " + y)}
// }

// afficher (x, y);

// Exercice 5 Question algo

// let x = parseInt(prompt("Entrer un entier :"))
// let y = parseInt(prompt("Entrer un entier :"))
// let z = parseInt(prompt("Entrer un entier :"))

// function tri (x, y, z){

//     let min = x;
//     let max = x;

//     if (y < min && y < z){
//         min = y;
        
//     }
//     else if (z < min && z < y){
//         min = z;
        
//     }
//     if (y > max && y > z){
//         max = y;
        
//     }
//     else if (z > max && z > y){
//         max = z;
        
//     }
//     document.write("Le minumum est : " + min + " le max est : " + max);

// }

// tri(x, y, z)

// Exercice 6 Question algo

// let x = parseInt(prompt("Entrer un entier :"))
// let y = parseInt(prompt("Entrer un entier :"))
// let z = parseInt(prompt("Entrer un entier :"))

// function tri (x, y, z){
//     let max = 0;
//     if (x > y && x > z){
//     max = x;}
//     else if (y > x && y > z){
//     max = y;}
//     else if (z > x && z > y){
//     max = z;}
//     return max;
// }

// function angle (x, y, z){
//     let max = tri (x, y, z);
//     if (x + y + z - max > max){
//         document.write("La forme est un triangle");
//     } else {
//         document.write("La forme n'est pas un triangle");
//     }
// }

// angle (x, y , z);

// Exercice 7 Question algo

// let x = parseInt(prompt("Entrer un entier :"))
// let y = parseInt(prompt("Entrer un entier :"))
// let z = parseInt(prompt("Entrer un entier :"))

// function trimax (x, y, z){
//     let max = x;
//     if (y > max && y > z){
//     max = y;}
//     else if (z > max && z > y){
//     max = z;}
//     return max;
// }

// function trimin (x, y, z){
//     let min = x;
//     if (y < min && y < z){
//     min = y;}
//     else if (z < min && z < y){
//     min = z;}
//     return min;
// }

// function milieu (x, y, z){
//     let min = trimin (x, y, z);
//     let max = trimax (x, y, z);
//     let mid = x + y + z - min - max;

    
//     return mid;

// }

// let min = trimin(x, y, z);
// let mid = milieu(x, y, z);
// let max = trimax(x, y, z);

// document.write("L'ordre croissant est : " + min + " " + mid + " " + max)

//  Exercice 8 Question algo

// let x = 2;
// let y = 4;
// let z = 6;

// let n = parseInt(prompt("Entrez un chiffre : "));

// function nul (x, y, z, n){
//     if (n < x){
//         document.write (n , x , y);
//     }
//     else if (n > x && n < y){
//         document.write (x , n , y);
//     }
//     else if (n > y && n < z){
//         document.write (y , n , z);
//     }
//     else if (n > z){
//         document.write (y , z , n);
//     }
// }

// nul (x, y, z, n)
