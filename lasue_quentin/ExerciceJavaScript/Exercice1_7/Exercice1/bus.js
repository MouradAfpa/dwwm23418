function nbPassager(){
    let tab3 =[[10,0],[3,5],[5,8]]
    let tab2 = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]];
    let tab = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]];

    // let nbPassager = 0;
    // for(i=0 ;i<tab.length ;i++){
    //     console.log(tab[i])
    // nbPassager = nbPassager + tab[i].reduce((a,v)=>a-v);
    // }
    // console.log(nbPassager);

    let map = tab.map((sousTab)=> sousTab[0] - sousTab[1]); // Tri les sous tableau par nombre de personne entrante dans le bus
    console.log(map);                                       // ou sorti si negatif

    let nbPassager = map.reduce((a,v)=>a+v,0); //additionne le nombre de personne entrer ou sorti sur le trajet
    console.log(nbPassager);
};
 
    
// nbPassager()

//Correction : 

let tab = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]];
let tab3 =[[10,0],[3,5],[5,8]]
let tab2 = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]];

function correction(param){
    let rep =param.reduce((a,v)=>v[0]-v[1]+a,0);
    return rep;
}
console.log(correction(tab));
console.log(correction(tab2));
console.log(correction(tab3));