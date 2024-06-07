// TD0 EXO 1
/*/let libelle = prompt("Donner le nom de l'article");
let pht = prompt("Le prix hors taxe");
let nbArticles = prompt("Le nombre d'article");
let tva = prompt("La tva");
// calcul
let prix = pht * nbArticles;
let montantTva = prix * (tva /100);
let pttc = prix + montantTva;
document.write("Le prix TTC : " + pttc + " € ");
/*/

//TD0 EXO 2
/*/let nb1 = parseInt(prompt("Premier entier"));
let nb2 = parseInt(prompt("Deuxième entier"));
if(((nb1>=0) && (nb2>=0)) || ((nb1<=0) && (nb2<=0)))
    {document.write ("Le produit est positif");
}

else{
    document.write ("Le produit est négatif");
}
/*/

//TD0 EXO 3

/*/let age = parseInt(prompt("Entrer l'âge"));
while(isNaN(age) || age <=0){
    age = parseInt(prompt("Desolél'âge doit être entier positif"));
} 
if(age < 6){
    document.write("BEBE");
}
else{ if(age <=7){
    document.write("POUSSIN")}
    
    else{ if(age <= 9){
        document.write("PUPILLE")}
   
        else{ if(age <=11){
            document.write("MINIME")}
        

            else{ if(age >=12){
                document.write("CADET")}
            }
        }
    }
}
/*/

//TD0 EXO 4

/*/let nbr = parseInt(prompt("Entrer un nombre"));

while(nbr <10 || nbr>20){

if(nbr <10){
    alert("Pus grand !")}
    


else{
    alert("Plus petit !")
}
nbr = parseInt(prompt("Entrer un nombre"))}

document.write ("Bien joué!");
/*/

//TD0 EXO 5

/*/var i=1
var som=0
while(i<=5){
    som=som+i
    i++
    document.write(som)
}
/*/

//Correction TD0 EXO 5

/*/let n = parseInt(prompt("Entrer un entier"));
let cumul = 0;
let i;
for(i=1; i <=n; i++){
    cumul += i //cumul = cumul + i
}
document.write("La somme jusqu'a " + n + " est : " + cumul)
/*/


//TD0 EXO 6
function factoriel(n){

let fact = 1;
let i;
for(i=1; i<=n; i++){
    fact = fact * i
}
return fact
}

function addition(n){
    let som = 0;
    let i;
    for(i=1; i<=n; i++)
    {
        som += factoriel(i)

    }
    return som
}

let n = parseInt(prompt("Donner un entier"))
let x = addition(n)
document.write("La somme des factorielles est :" + x)

//function fact(n){
//    return ()
//}


Tableaux

let tab1 = []; //tableau vide
let tab2 = [12.5, 15, 13, 17.5] // tableau de 4 cases
let tab3 = new Array(10) ; // tableau vide de 10 cases

// insertion

tab3[0] = 14; // insère une valeur
tab3.push(); // insèrer à la fin
tab3.unshift(20); // Ajoute au début

// supression

let valeur = tab3.pop(); // supprime l dernière case
valeur = tab3.shift(); // supprime le premier
valeur = tab3.splice(); // supprime la case d'indice