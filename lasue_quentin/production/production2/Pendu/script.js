function pendu(){
    let nbrVie = parseInt(prompt("Nombre de vie total :"));
    let mot = prompt("Entrez un mot a trouver :");
    let motMasque = "";
    let compteur = 0;
    let bonneRep = false;
    for(let i=0;i<mot.length;i++){
        motMasque += "_";
    }
   console.log(motMasque);
   console.log(nbrVie);


    while(compteur<nbrVie){
        let recherche = prompt("Donner une lettre :");
        bonneRep = false;
        
        for(let i=0;i<mot.length;i++){
            if(recherche === mot[i]){
                motMasque = motMasque.substring(0,i) + recherche + motMasque.substring(i+1);
                bonneRep = true
                console.log(motMasque);
                
            }
        }
        if(!bonneRep){
            compteur ++;
            console.log(compteur);
        }
        if (motMasque == mot){
            console.log(`Vous avez gagné, le mot caché était bien : ${mot}`);
            break;
        }
    }
    
    if(compteur === nbrVie){
    console.log(`Vous avez perdu, le mot caché était : ${mot}`);
    }
}
pendu()