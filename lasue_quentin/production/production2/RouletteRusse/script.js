let nbrBalle = parseInt(prompt("Entrez le nombre de Balle a inserer (Maximum 8):"));
while(nbrBalle>8 ||nbrBalle<=0){
    nbrBalle = parseInt(prompt("Entrez le nombre de Balle a inserer (Maximum 8):"));
}
    
let win =(numeroJoueur)=>{
        alert(`Le joueur ${numeroJoueur} c'est suicidé...`)
}

function rouletteRusse(){

    // let balle = nbrBalle;
    let joueurMort = false;
    let numeroJoueur = 1;
    let tour = 1;
    
    while(!joueurMort){
        numeroJoueur = (tour-1)%2 +1; // pair ou impair(donne 1 ou 2)
        prompt(`Tour du joueur ${numeroJoueur}...Appuyer sur entrer pour tirer...`);
        let balleMortel = parseInt(Math.random()*9);
        if(balleMortel<= nbrBalle){
            joueurMort = true;
            win(numeroJoueur);
        }else{
            tour++;
            prompt(`Joueur ${numeroJoueur} a survécu...Au suivant...`)
        }
        if(joueurMort){
            break;
        }
    }
}
rouletteRusse()