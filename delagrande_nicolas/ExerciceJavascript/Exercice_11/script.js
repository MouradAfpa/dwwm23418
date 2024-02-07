// exo11
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
   }
console.log("#11 - La nouvelle chaine est :",validatePIN("1234"));
console.log("#11 - La nouvelle chaine est :",validatePIN("12345"));
console.log("#11 - La nouvelle chaine est :",validatePIN("a234"));
