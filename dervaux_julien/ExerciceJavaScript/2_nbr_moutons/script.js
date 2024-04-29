

// #2 -  Nombre de moutons (8 kyu

let T = [true,  true,  true,  false, 
         true,  true,  true,  true , 
         true,  false, true,  false, 
         true,  false, false, true , 
         true,  true,  true,  true , 
         false, false, true,  true];
  
function compterMouton(T){
    nbrMouton = 0;
    T.forEach((v) => {
        if(v)
        {
            nbrMouton++;
        }
    });
    return nbrMouton
}      

console.log(compterMouton(T));

// Correction 

function calcul(param){
    return param.filter((v)=>{if(v){return v}}).length;
}

console.log(calcul(T));
