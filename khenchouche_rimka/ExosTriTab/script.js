// // Tableau a trier:
// const tab = [8,2,9,4,1];

// // déclaration de variable:
// function triBulles(unTab){
//     let temp;
//     let n = unTab.length;
    

//     for(let i = n-1; i>=1; i--){
//         for (let j =0; j<=i-1; j++){
//             if(unTab[j]>unTab [j+1]){
//                 temp = unTab[j];
//                 unTab[j] = unTab[j+1];
//                 tab[j+1] = temp;
//             }
//         }
//     }
// }
// triBulles(tab);
// console.log(tab);


// tri par insertion:

const tab = [8,2,9,4,1];

function triInsertion(unTab){
   //nombre des éléments dans le tableau
    let n = unTab.length;
    let i, j, tmp;
   
    for(i = 1; i < unTab.length; i++) {
      //stocker la valeur actuelle 
      tmp = unTab[i]
      j = i 
      while (j > 0 && unTab[j -1] > tmp) {
        // déplacer le nombre
        unTab[j] = unTab[j-1]
        j-- ;
      }
      //Insère la valeur temporaire à la position 
      //correcte dans la partie triée.
      unTab[j] = tmp
    }
    return tab

    }
  
triInsertion(tab);
console.log(tab);



