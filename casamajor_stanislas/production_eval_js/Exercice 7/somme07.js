function somme(){
let n = parseInt(prompt("Entrer un entier"));
let cumul = 0;
let str = "";
let i;

    for(i=1; i <=n; i++){
        cumul += i 
        str = str + '+' + i;
    } 

    document.write(str + "=" + cumul)
}
somme();