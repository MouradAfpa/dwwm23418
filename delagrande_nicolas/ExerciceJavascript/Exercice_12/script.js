// exo12
String.prototype.toJadenCase = function () {
    return chaine.replace(/(^| )(\w)/g, s=>s.toUpperCase())
   };
console.log("#12 - La nouvelle chaine est :",("Ceci est une phrase".toJadenCase()));
