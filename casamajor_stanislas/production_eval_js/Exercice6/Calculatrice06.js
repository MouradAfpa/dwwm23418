function calculatrice(){
    let a = parseInt(prompt(`Renseignez un nombre : `));
    let ope = (prompt(`Renseignez un opérateur entre '+', '*', '/' et '-' : `))
    let b = parseInt(prompt(`Renseignez un nombre : `));
    

    if (ope == '+'){
        let somme = a + b;
        document.write(`[` + a + `, ` + ope + `,` + b + `] = `+ somme);
    } if(ope == '-'){
        let somme = a - b;
        document.write(`[` + a + `,`+ ope +`,` + b + `] = `+ somme);
    } if(ope == '/'){
        let somme = a / b;
        document.write(`[` + a + `,`+ ope +`,` + b + `] = `+ somme);
    } else if(ope == '*'){
        let somme = a * b;
        document.write(`[` + a + `,`+ ope +`,` + b + `] = `+ somme);
    }
}

calculatrice();