function validatePIN(pin) {
    var valider = /^(\d{4}|\d{6})$/.test(pin);
    console.log(valider);
}

validatePIN("1234");
validatePIN("12345");
validatePIN("a234");

