function counterEffect(tab) {
    return [...tab].map(n => [...Array(+n + 1).keys()].map(Number));
}

console.log(counterEffect("1250"));
console.log(counterEffect("0050"));
console.log(counterEffect("0000"));