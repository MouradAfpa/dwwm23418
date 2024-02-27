function pendu(){
    let pend = prompt(`Écrivez un mot à deviner : `);
    // let vie = parseInt(prompt(`Définissez un nombre de vie`));

    mot = pend.replace(/a-z/g, "_");
    console.log(mot);
}

pendu();