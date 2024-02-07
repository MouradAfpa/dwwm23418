// exo10
countArara = (n) => n > 2 ? "adak " + countArara(n - 2) : n == 2 ? "adak" : "anane"

console.log("#10 - La nouvelle chaine est :",countArara(3));
console.log("#10 - La nouvelle chaine est :",countArara(4));
console.log("#10 - La nouvelle chaine est :",countArara(5));
