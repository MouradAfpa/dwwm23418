
function calculatrice() {

    let premierOp = parseInt(prompt("Entrer premier opérande"))
    let operateur = prompt("Saisir l'opérateur")
    let deuxiemeOp = parseInt(prompt("Entrer deuxieme opérande"))
    let result

    switch (operateur){
        case "+" : 
        result = premierOp + deuxiemeOp
        return console.log(`[${premierOp} + ${deuxiemeOp}] = ${result}`);
        case "*" : 
        result = premierOp * deuxiemeOp
        return console.log(`[${premierOp} * ${deuxiemeOp}] = ${result}`);
        case "/" : 
        result = premierOp / deuxiemeOp
        return console.log(`[${premierOp} / ${deuxiemeOp}] = ${result}`);
        case "-" : 
        result = premierOp - deuxiemeOp
        return console.log(`[${premierOp} - ${deuxiemeOp}] = ${result}`);
        default : console.log("Entrer un opérateur correct");
    }
}

calculatrice()
