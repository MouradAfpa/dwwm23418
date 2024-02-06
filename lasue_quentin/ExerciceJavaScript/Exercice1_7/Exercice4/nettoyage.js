let stringClean2 ='! !';
let stringClean3 = '123456789';
let stringClean ="(E3at m2e2!!)";
let stringClean4="Wh7y can't we3 bu1y the goo0d software3? #cheapskates3";

function nettoyage(param){
   
    return   param.replace(/\d/g,"");
    
}
console.log(nettoyage(stringClean));
console.log(nettoyage(stringClean2));
console.log(nettoyage(stringClean3));
console.log(nettoyage(stringClean4));