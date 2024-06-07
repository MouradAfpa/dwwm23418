// Application du cours

// let n = parseInt(prompt("Entrer la longueur du tableau : "))

// let table = new Array (n);
// let temp = 0;


// function saisietab(table){
//     let i = 0;
//     for(i = 0 ; i < table.length ; i++){
//         table[i] = parseInt(Math.random()*20);
//     }
// }

// function tri (table){
// for (i = 0; i < table.length-1; i++){
//     let indice_ppe = i;
//     for (let j = i+1; j < table.length; j++){
//         if (table[j] < table[indice_ppe]){
//             indice_ppe = j;
//         }
//     }

//     temp = table[indice_ppe];
//     table[indice_ppe] = table[i];
//     table[i] = temp;
// }
// }
// saisietab(table);
// tri(table);
// document.write("<br>Tableau trié : " + table.join("_"));
// 8====D
// Recherche dichotomique

// let n = parseInt(prompt("Entrez la longueur du tableau :"));

// let x = parseInt(prompt("Entrez la valeur de x :"));





// let table = new Array (n);

// function saisietab(table){
//     let i = 0;
//     for(i = 0 ; i < table.length ; i++){
//         table[i] = parseInt(Math.random()*20);
//     }
// }

// saisietab(table);

// function cherche (table, x){
//     let inf = 0;
//     let sup = table.length-1;
//     let trouve = false;

// while ((inf<=sup) && (!trouve)){
//     let milieu = Math.floor((inf+sup)/2);
//         if (x == table[milieu]){
//             trouve = true;
//         } else if (x>table[milieu]){
//             inf = milieu + 1;
//         }
//             else {sup = milieu-1;}
// }

// if (trouve == true){
//     document.write("x appartient au tableau");
// }
// else {
//     document.write("x n'appartient pas au tableau");
// }
// }

// document.write(" " + table);
// cherche (table, x);

// Cours matrices
    
let n = parseInt(prompt("Entrez le nombre de lignes"));
let m = parseInt(prompt("Entrez le nombre de colonnes"));

let A = [];
let B = [];
let C = [];

function remplissage (n, m, A){
    for (let i = 0 ; i < n ; i++){
        A[i] = [];
        for (let j = 0; j<m ; j++){
            A[i][j] = parseInt(Math.random()*20);
        }
    }
}


// function somme (A, B, C, n, m){
//     for (let i = 0 ; i < n ; i++){
//         C[i] = [];
//         for (let j = 0; j<m ; j++){
//             C[i][j] = A[i][j] + B[i][j];
//         }
//     }
    
// }


// remplissage (n, m, A);
// remplissage (n, m, B);
// somme (A, B, C, n, m);
// console.log(A, B, C);

// Cours Tri rapide

let T = [];
let p = 0;
let r = 0;
let q = 0;

function partition (T, p, r, q){
    let i = 0;
    let j = 0;
    let pivot;
    pivot = T[p], i = p+1, j = r;
    While (i<=j)
    {
        while (i<=r && T[i] <= pivot){
            i = i+1;
        }
        while (j>=p && T[j] > pivot){
            j = j-1;
        }
        if (i < j){
            let temp = T[i];
            T[i] = T[j];
            T[j] = temp;
            i = i + 1;
            j = j - 1;
        }
    }
    let temp = T[j];
    T[j] = T[p];
    T[p] = temp;
    q = j;
}

