function validatePIN(codePIN) {
    
    if (codePIN.length == 4 || codePIN.length ==6) {
        
        if (/^\d+$/.test(codePIN)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}

console.log(validatePIN("1234"));
console.log(validatePIN("12345"));  
console.log(validatePIN("a234")); 