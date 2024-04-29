
let tentatives;
let res;


function justePrix1() {
    tentatives = parseInt(prompt('Entrez un nombre de tentatives.'));
    res = Math.floor(Math.random() * tentatives);

    document.getElementById('justeP').innerHTML = tentatives;
    console.log(res);
}

function justePrix2() {
        if (tentatives > 0) {
        let choix = parseInt(prompt('Entrez un prix.'));

        if (choix<res) { 
            alert("C'est plus !");
            tentatives--;
            console.log(tentatives);
            justePrix2();
        } else if (choix>res) { 
            alert("C'est moins!");
            tentatives--;
            console.log(tentatives);
            justePrix2();
        } else if (choix = res) {
            console.log(tentatives);
            document.getElementById('justeP2').innerHTML = "PRIX = " + res + " C'est gagné !!!";
        }
    } else {
        alert("C'est perdu!!");
    }
}
