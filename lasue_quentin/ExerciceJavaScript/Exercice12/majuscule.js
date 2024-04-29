String.prototype.toJadenCase = function(){
const mot =this.split(/\s+/);
const chaineMot = mot.map(mot =>{
    return mot.charAt(0).toUpperCase() + mot.slice(1);

});
return chaineMot.join(" ")
}
console.log("Ceci est une phrase".split(/\s+/));
console.log("Ceci est une phrase".split(/\s+/).map(mot =>{
    return mot.charAt(0).toUpperCase() + mot.slice(1);
}));
console.log("Ceci est une phrase".toJadenCase());