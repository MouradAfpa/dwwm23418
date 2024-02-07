var str = "Ceci est une phrase";
var toJadenCase = str.replace(/(^|\s)[a-z]/g, function (match) {
    return match.toUpperCase();
});

console.log(toJadenCase);