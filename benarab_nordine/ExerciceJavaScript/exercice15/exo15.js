function counterEffect(str) {
    return str.split('').map(char => {
        const count = parseInt(char);
        return Array.from({ length: count + 1 }, (_, i) => i);
    });
}

console.log(counterEffect("1250"));
console.log(counterEffect("0050")); 
console.log(counterEffect("0000")); 
