function validatePIN(codePIN) {
        
    if (/^(\d{4}|\d{6})$/g.test(codePIN)) {
        return true;
    } else {
        return false;
    }

}

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));  
console.log(validatePIN("a234")); 