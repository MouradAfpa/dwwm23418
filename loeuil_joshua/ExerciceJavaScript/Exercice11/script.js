function Validatepin(param){
    return /^(\d{4}|\d{6})$/.test(param)
}

console.log(Validatepin("1234"));
console.log(Validatepin("12345"));
console.log(Validatepin("a234"));