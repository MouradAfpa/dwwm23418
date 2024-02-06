
let tab = [[10,0],[3,5],[5,8]];

function number(param){

let maVar = param.reduce((a,v)=>v[0]-v[1]+a,0);

return maVar;

}

let res = number(tab);

console.log(res);
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));


function calcul(param){

return param.filter(Boolean).length;



}
let tabBool = [true, true, true, false,
    true, true, true, true ,
    true, false, true, false,
    true, false, false, true ,
    true, true, true, true ,
    false, false, true, true]
    
console.log("nombre de moutons: ",calcul(tabBool));



function removeChar(chaine){

  return chaine.match(/^.(.*).$/)[1];

}

console.log(removeChar("Ceci est une phrase"));



function stringClean(param){

return param.replace(/\d/g,"");

}

console.log(stringClean ('! !'));
console.log(stringClean ('123456789') );
console.log(stringClean("(E3at m2e2!!)") );
console.log(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"));






const monTab = [];
monTab.push(1);
monTab.push(2);
console.log(monTab);


const mafonc = () => {}


mafonc();
console.log(stringClean);

let b = 4;
if(!(b==4)){
    console.log("Faux");
}




let monTableau=[1,2,3,4,5,6];
for(let i = 0 ;i<monTableau.length;i++){
 console.log("indice i = "+ i + " Valeur = "+monTableau[i]);
}

monTableau.forEach(element => {console.log(element)
    
});

let u = 0; 
while(u<10){
console.log("u : ",u);
u++;
}

u=10;

do{
    console.log("do while : ",u);
    u++;
}while(u<10)

console.log("do while : ",u);


const dict = {cl1:'arab', cle2:'mourad'};

console.log(dict.cl1);






function calculateTip(v, r) {
    const rating = /[A-Z]/i.test(r);
    //const rating = r.toLowerCase();
    console.log(rating);
    switch (rating) {
        case "terrible":
            return 0;
        case "poor":
            return Math.round(v * 5 / 100);
        case "good":
            return Math.round(v * 10 / 100);
        case "great":
            return Math.round(v * 15 / 100);
        case "excellent":
            return Math.round(v * 20 / 100);
        default:
            return "Rating not recognised";
    }
}
console.log(calculateTip(20, "ExcellEnt"));
console.log(calculateTip(26.95, "goOd"));
console.log(calculateTip(20, "hi"));



function doubleChar(s){
    return s.replace(/./g,"$&$&");
}
console.log(doubleChar("String"));


function removeDuplicates(tab){

    return tab.filter((v,i,t)=> t.indexOf(v)===i).sort((a,b)=>a-b);
}


console.log(removeDuplicates([1,1,2,4,5,2,1,2,3,5,5,5])
);


function whoseMove( c, b){
    //return b?c:(c==="black"?"white":"black")

    return ((b&&/black/.test(c)))?"black":"white";

}

console.log(whoseMove("black",false));




