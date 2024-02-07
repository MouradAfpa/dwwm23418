function validatePIN(pin) {
    
    return /^(\d{4}|\d{6})$/.test(pin);
}

console.log(validatePIN("12346a"));   
console.log(validatePIN("123459"));  
console.log(validatePIN("a23éé"));   