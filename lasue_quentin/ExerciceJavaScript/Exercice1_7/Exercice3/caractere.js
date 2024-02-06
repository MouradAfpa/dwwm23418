let chaine = "Ceci est une phrase";

function removeChaine(param) {

  let petiteChaine = param.slice(1, -1);

 return petiteChaine;
}
console.log(removeChaine(chaine));

//Correction :

function correction (param){
    
    let rep = param.match(/^.(.*).$/)[1]; // .* pour dire tous quoi qu'il y a entre les deux 
    //^.pour la première .$ pour la dernière Match renvoi un tableau en selectionne la valeur 1 du tableau


    return rep;
}
console.log(correction(chaine));