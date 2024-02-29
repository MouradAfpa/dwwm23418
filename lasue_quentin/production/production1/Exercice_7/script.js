function sommeNbr(){
    let val = parseInt(prompt("Entrez un nombre :"));
    let res = 0;
    for(let i = 1;i<=val;i++){
        res += i;
    }
    console.log(`${res}`);
}
sommeNbr()