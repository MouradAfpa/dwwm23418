

// #11 - Code PIN (7 kyu)

function validatePin(input){


let number = /^(\d{4}|\d{6})$/g.test(input)

return number

}

console.log(validatePin("1234"));



