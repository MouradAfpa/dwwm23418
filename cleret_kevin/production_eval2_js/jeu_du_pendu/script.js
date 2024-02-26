
function pendu() {
    let choixLettre;
    let vies = parseInt(prompt('Entrez un nombre de vie.'))

    //mot à trouver:
    let motP = 'rubarbe';
    let mot = motP.split('');

    document.getElementById('jeupendu').innerHTML = mot;
    console.log(mot)


    //mot de actuel:
    let motTrouP = '_ _ _ _ _ _ _'
    let motTrou = motTrouP.split(' ');

    // document.getElementById('motpendu').innerHTML = motTrou;
    console.log(motTrou)

    let y = 'b';
    let z = 'a';

    while ((z != y) && (vies > 0)) {
        choixLettre = prompt('Entrez une lettre');

        for (let i=0; i<mot.length; i++) {
            if(choixLettre == mot[i]) {
                motTrou[i] = choixLettre;
                alert(motTrou);

                y = mot.join('');
                z = motTrou.join('');  
            }
        } 

        vies--
    }

    document.getElementById('victoire').innerHTML = `<h1>${z}</h1>`;
}