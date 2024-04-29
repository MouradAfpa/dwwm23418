

// #12 - Code PIN (7 kyu)


String.prototype.toJadenCase = function (){

return this.split(' ').map((x)=>x.charAt(0).toUpperCase()+x.substring(1,x.length)).join(' ');

}

console.log("ceci est une phrase".toJadenCase());
