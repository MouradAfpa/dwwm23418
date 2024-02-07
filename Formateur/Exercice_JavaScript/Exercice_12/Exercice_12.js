


String.prototype.toJadenCase = function(){

return this.split(' ').map((x)=>x.charAt(0).toUpperCase()+x.substring(1,x.length)).join(' ');
}


console.log("Ceci est une phrase".toJadenCase() );