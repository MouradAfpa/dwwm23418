function countArara(n) {

    var adaks = new Array(Math.floor(n / 2)).fill("adak");
    
    if (n % 2 !== 0) {
        adaks.push("anane");
    }
    
    return adaks.join(" ");
}

console.log(countArara(1));  
console.log(countArara(3));  
console.log(countArara(8));  
