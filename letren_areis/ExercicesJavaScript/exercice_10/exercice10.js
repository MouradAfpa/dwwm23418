function countArara(n) {
    if (n % 2 === 0) {
        return "adak ".repeat(n / 2 - 1) + "adak";
    } else {
        return "adak ".repeat(Math.floor(n / 2)) + "anane";
    }
}


console.log(countArara(1)); 
console.log(countArara(3));  
console.log(countArara(8)); git 