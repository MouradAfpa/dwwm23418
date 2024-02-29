function plsuGrandNbr(){
    let val1 = parseInt(prompt("Entrez une valeur :"));
    let val2 = parseInt(prompt("Entrez une autre valeur :"));
    let val3 = parseInt(prompt("Entrez une dernière valeur :"));

    let max = val1;
    if(val2>max && val2 > val3){
        max = val2
    }else if(val3>max && val3>val2){
        max = val3
    }
    console.log(`[${val1},${val2},${val3}]-->${max}`)
}
plsuGrandNbr()