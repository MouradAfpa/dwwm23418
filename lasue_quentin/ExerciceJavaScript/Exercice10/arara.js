function arara(num){

    let pair = num%2 ===0;
    let adak = pair?num/2 :(num-1)/2;
    let res = "adak ".repeat(adak)+(num%2!==0 ?"anane":"");
    
    return res
}
console.log(arara(13));