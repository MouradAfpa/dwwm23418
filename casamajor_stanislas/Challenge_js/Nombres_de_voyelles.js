function ressortir (param){
    const tri = param.match(/[aeiou]/gi).length;
    return tri;
}

console.log(ressortir(`j'aime les chiens`));