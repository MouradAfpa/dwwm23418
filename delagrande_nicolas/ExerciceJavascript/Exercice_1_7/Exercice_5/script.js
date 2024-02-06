// exo5
doubleChar=(str)=>str.replace(/./g, '$&$&')
console.log("#5 - La nouvelle chaine est :",doubleChar("String"));
console.log("#5 - La nouvelle chaine est :",doubleChar("Hello World!"));
console.log("#5 - La nouvelle chaine est :",doubleChar("1234!_"));
