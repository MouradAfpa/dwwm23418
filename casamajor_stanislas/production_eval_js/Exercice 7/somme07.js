function somme(){
let n = parseInt(prompt("Entrer un entier"));
let cumul = 0;
let i;

    for(i=1; i <=n; i++){
        cumul += i 
    }

    document.write("La somme jusqu'a " + n + " est : " + cumul)
}
somme();