let tab = [1,1,2,4,5,2,1,2,3,5,5,5];

function removeDoublon(param){

    return  param.filter((v,i,arr)=> arr.indexOf(v)===i).sort((a,b)=>a-b);
   //.sort pour trier dans l'ordre croissant
}

console.log(removeDoublon(tab));