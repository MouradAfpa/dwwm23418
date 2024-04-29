function max(){
    let a = parseInt(prompt(`Renseignez un premier nombre : `));
    let b = parseInt(prompt(`Renseignez un deuxième nombre : `));
    let c = parseInt(prompt(`Renseignez un troisième nombre : `));

    let res = Math.max(a, b, c)

    document.write(`Le nombre le plus grand est : ` + res);
}

max();