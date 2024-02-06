    //   exo1   //    

let tab = [[10,0],[3,5],[5,8]];
let tab2 = [[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]];
let tab3 = [[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]];


function number(param){

   return param.reduce((a, v) => v[0] - v[1] + a, 0);
}



console.log(number(tab));
console.log(number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]));
console.log(number([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]));

var persrest;
   
function rest(tab) {
   let pdb = 0;

   for (let i = 0; i < tab.length; i++) {
       pdb += tab[i][0]; 
       pdb -= tab[i][1];
   }
   return pdb;
}

persrest = rest(tab);
console.log(persrest);


   var number2 = function (tab2){
    var totaldbus = 0;
    for (var i = 0; i < tab2.length; i++){
        totaldbus += tab2[i][0];
        totaldbus = totaldbus - tab2[i][1];
    }
    return totaldbus;
   }

   var restpbus = number2(tab2);
   console.log(restpbus);


   var number3 = function (tab3){
    var totaldb = 0;
    for (var i = 0; i < tab3.length; i++){
        totaldb += tab3[i][0];
        totaldb = totaldb - tab3[i][1];
    }
    return totaldb;
   }

   var restpb = number3(tab3);
   console.log(restpb);


//      Exo 2         //

let tabl = [true, true, true, false,
    true, true, true, true ,
    true, false, true, false,
    true, false, false, true ,
    true, true, true, true ,
    false, false, true, true];

    function calcul(param1){

       return param1.filter((v)=>{if(v){return v}}).length

    //    return param.reduce((a, v) => {v?a++:a},0);
    }

console.log(calcul(tabl));

//      exo 3          //

function removeChar(chaine){

//    return chaine.slice(1, -1);
   return chaine.match(/^.(.*).$/);
}

console.log(removeChar("Ceci est une phrase"));
    

 //       exo 4        //

function stringClean(param2){
    return param2.replace(/\d/g,"");
};

console.log(stringClean ('! !'));
console.log(stringClean ('123456789') );
console.log(stringClean("(E3at m2e2!!)"));
console.log(stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3"));


//         exo 5         //

function doubleLettre(param3){

   return param3.split('').map(char => char + char).join('');
}

console.log(doubleLettre("String"));
console.log(doubleLettre("Hello World"));
console.log(doubleLettre("1234!_ "));




//           exo 6         //
 

function supprDouble(param4){
    let uniqueNumsSet = new Set(param4);
    let uniqueNumsArray = [...uniqueNumsSet];
     return uniqueNumsArray.sort((a, b) => a - b);
}
console.log(supprDouble([1,1,2,4,5,2,1,2,3,5,5,5])); 



//      exo 7      //


function whoseMove(param5, win){
   return ['black', 'white'].find(c => (c==param5)== win)
}

console.log(whoseMove("black",false));
console.log(whoseMove("white",true));
console.log(whoseMove("white",false) );
