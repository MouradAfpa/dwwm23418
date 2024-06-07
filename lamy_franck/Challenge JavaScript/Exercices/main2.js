function removeChiffr(phrase) {
    return phrase.replace(/\d/g, '');
}

let phraseChiffres = "Ce1ci es2t u2ne phra5se";
let resultPhrase = removeChiffr(phraseChiffres);
console.log(resultPhrase);
