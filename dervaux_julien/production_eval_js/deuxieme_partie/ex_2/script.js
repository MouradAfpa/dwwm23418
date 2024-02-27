




function justePrix() {

    let result = parseInt(Math.random() * 101);
    console.log(result);

    let tenta = parseInt(prompt('Entrer votre nombre de tentative'));
    let N = parseInt(prompt('Entrer une nombre'));


    while (N !== result && tenta > 0) {

        if (N > result) {
            alert("C'est moins !");
            console.log(tenta);
        } else {
            alert("C'est plus !");
            console.log(tenta);
        }
        tenta--;
        N = parseInt(prompt('Entrer une nombre'));
    }
    if (N === result) {
        alert(`GJ tu as trouvé le resultat etait : ${result}`)
    } else {
        alert("perdu")
    }
}

justePrix()



