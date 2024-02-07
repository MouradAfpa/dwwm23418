function arara(num){

    let pair = num%2 ===0;
    let adak = pair?num/2 :(num-1)/2;
    let res = ("adak ".repeat(adak)+(num%2!==0 ?"anane":"")).trim();
    //trim nettoie le debut et la fin si des espaces vides
    return res
}
console.log(arara(13));