// let doubleChar="String";
// let doubleChar="Hello World";
let doubleChar="1234!_ ";

let rep = doubleChar.split("").map(c => c+c).join(""); // split renvoi un tableau de chaque caractère de la chaine 
// map transforme ce tableau 
//join compile les element du tableau sans rien entre deux
let rep2 =doubleChar.replace(/./g,"$&$&");
console.log(rep);
console.log(rep2);