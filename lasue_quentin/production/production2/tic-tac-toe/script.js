const statut = document.querySelector("h2");
let jeuActif = false;
let joueurActif = 'X';
let etatJeu =["","","","","","","","",""];

const conditionsVictoire = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

const gagne =() => 'Le joueur '+joueurActif+' a gagné.'
const egalite =() => 'Egalité.'
const tourJoueur  =() => 'C\'est au tour du joueur '+joueurActif+'.'


function recommencer(){
    // on reprend les informations de base et on les réinitialise a leurs valeurs de départ 
    joueurActif = "X";
    etatJeu =["","","","","","","","",""];
    statut.innerHTML = "";
    document.querySelectorAll(".case").forEach(cell=>cell.innerHTML = "");
}

function deuxJoueurs(){
    recommencer();

    jeuActif = true;

    statut.innerHTML = tourJoueur();

    document.querySelectorAll(".case").forEach(cell=>cell.addEventListener("click", gestionClicCase));
    document.querySelector('#recommencer').addEventListener("click", recommencer);
}
function gestionClicCase(){
    // On récupére l'index de la case cliquée
    const indexCase = parseInt(this.dataset.index)
    //si  case déja rempli ou jeu inactif alors on fais rien
    if(etatJeu[indexCase] != "" || !jeuActif){
        return
    }
    //sinon on met le joueur actif (X) dans la case
    etatJeu[indexCase] = joueurActif;
    this.innerHTML = joueurActif; //et on l'affiche
    verifWin();
}

function verifWin(){
    let tourGagnant = false;
    //pour toutes les conditions de victoires dans la cosntance conditionsVictoires
    for(let conditionVictoire of conditionsVictoire){
        let val1 = etatJeu[conditionVictoire[0]]
        let val2 = etatJeu[conditionVictoire[1]]
        let val3 = etatJeu[conditionVictoire[2]]
        //si une case est vide alors on continue
        if(val1 =="" || val2 =="" ||val3 ==""){
            continue
        }
        // si une des condition est remplis alors  met le tour gagnant et on sort
        if(val1 == val2 && val2 == val3){
            tourGagnant = true;
            break
        }
    }
    //Si tour gagnant est true alors on affiche en H2 la fonction gagne()
    if(tourGagnant){
        statut.innerHTML=gagne();
        jeuActif = false;
        return
    }

    if(!etatJeu.includes("")){
        statut.innerHTML=egalite();
        jeuActif = false;
        return
    }
    //Si joueurActif est X alors on met joueurActif = O sinon on met X 
    joueurActif = joueurActif =="X" ? "O":"X"
    statut.innerHTML = tourJoueur()
}