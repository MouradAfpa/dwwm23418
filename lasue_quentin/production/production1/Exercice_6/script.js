function calculatrice(){
    let val1=parseInt(prompt("Entrez une valeur :"));
    let operateur = prompt("Saisir un opérateur :")
    let val2=parseInt(prompt("Entrez une autre valeur :"));
    let resultat;
    switch (operateur) {
        case "+":
            resultat = val1 + val2;
            break;
        case "-":
            resultat = val1 - val2;
            break;
        case "/":
            resultat = val1 / val2;
            break;
        case "*":
            resultat = val1 * val2;
            break;
    
        default:
            console.log(`opérateur ${operateur}, non valide`);
    }
    console.log(`${resultat}`)
    
}
calculatrice()