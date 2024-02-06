countArara = (n) => n > 2 ? "adak " + countArara(n - 2) : n == 2 ? "adak" : "anane";

console.log(countArara(1));
console.log(countArara(3));
console.log(countArara(8));


