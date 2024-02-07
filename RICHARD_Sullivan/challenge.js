//---------------------------------------- #1 ---------------------------------------->
var tab1 = [[10, 0], [3, 5], [5, 8]];
var tab2 = [[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]];
var tab3 = [[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]];
//
// Initialise la variable en number
var passengersTab1 = 0;
// Récupère la fonction .map dans la variable map1
var map1 = tab1.map((elem1) => { passengersTab1 += elem1[0] - elem1[1] }); // récupère chaque élément et incrémente l'indice 0 et soustrait l'indice 1
console.log(parseInt(passengersTab1));
//
var passengersTab2 = 0;
var map2 = tab2.map((elem2) => { passengersTab2 += elem2[0] - elem2[1] });
console.log(parseInt(passengersTab2));
//
var passengersTab3 = 0;
var map3 = tab3.map((elem3) => { passengersTab3 += elem3[0] - elem3[1] });
console.log(parseInt(passengersTab3));

//---------------------------------------- #2 ---------------------------------------->
var sheep = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];
//
var countSheep = 0;
var count = sheep.map((e) => { (e != null) || (e != undefined) ? countSheep += e : countSheep = 0 });
console.log(countSheep);
//
let mouton = sheep.filter(Boolean).length;
console.log(mouton);

//---------------------------------------- #3 ---------------------------------------->
var string = `Ceci est une phrase`;
//
console.log(string.slice(1, -1));
console.log(string.match(/^.(.*).$/)[1]);

//---------------------------------------- #4 ---------------------------------------->
var string1 = `'! !'`;
var string2 = `'123456789'`;
var string3 = `"(E3at m2e2!!)"`;
var string4 = `"Wh7y can't we3 buly the goo0d software3? #cheapskates3"`;
//
var clean = cleanString => {
    return cleanString.replace(/\d/g, ``);
}
//
console.log(clean(string1));
console.log(clean(string2));
console.log(clean(string3));
console.log(clean(string4));

//---------------------------------------- #5 ---------------------------------------->
var string5 = `SSttrriinngg`;
var helloWorld = `HHeelloo WWoorrlldd`;
var number = `11223344!!__`;
//
var deleteSame = deleteString => {
    return deleteString.replace(/(.)\1+/g, `$1`);
}
//
console.log(deleteSame(string5));
console.log(deleteSame(helloWorld));
console.log(deleteSame(number));

//---------------------------------------- #6 ---------------------------------------->
var array = [1, 1, 2, 4, 5, 2, 1, 2, 3, 5, 5, 5];
//
function removeDuplicates(arr) {
    return arr.filter((v, i, a) => a.indexOf(v) === i).sort((a, b) => a - b);
}
//
console.log(removeDuplicates(array));

//---------------------------------------- #7 ---------------------------------------->
function whoseMove(d, e) {
    return (e && /black/.test(d)) ? `black` : `white`;
}
//
console.log(whoseMove(`black`, false));

//---------------------------------------- #8 ---------------------------------------->
function calculateTip(v, c) {

    return ((/excellent/i.test(c)) ? Math.round(v * 20 / 100) :
        (/great/i.test(c)) ? Math.round(v * 15 / 100) :
            (/good/i.test(c)) ? Math.round(v * 10 / 100) :
                (/poor/i.test(c)) ? Math.round(v * 5 / 100) :
                    (/terrible/i.test(c)) ? 0 :
                        "Rating not reconised");
}
//
console.log(calculateTip(20, "ExcellEnt"));
console.log(calculateTip(26.95, "goOd"));
console.log(calculateTip(20, "hi"));

//---------------------------------------- #9 ---------------------------------------->
function accum(s) {
    return s.split('').map((char, i) => { return char.toUpperCase() + char.toLowerCase().repeat(i); }).join('-');
}
//
console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));

//---------------------------------------- #10 ---------------------------------------->
function countArara(n) {
    const arara = [`adak`, `anane`];
    //
    return (n % 2 !== 0) ? arara.reduce((a) => a === 0 ? arara[0] : a.concat(arara[1])) : arara[0];
}
//
console.log(countArara(1));
console.log(countArara(3));
console.log(countArara(8));

//---------------------------------------- #12 ---------------------------------------->
String.prototype.toJadenCase = function() {
    //
    return this.split(` `).map((c) => c.charAt(0).toUpperCase() + c.substring(1, c.length)).join(` `);
}
//
console.log("Ceci est une phrase".toJadenCase());

//---------------------------------------- #13 ---------------------------------------->
function getCount (c) {
    
}