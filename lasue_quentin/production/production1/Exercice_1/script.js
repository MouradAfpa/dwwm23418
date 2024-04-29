function bienvenue(){
    let message = prompt("Indiquer votre prénom :");

    let affichage = document.getElementById("affichage");
    affichage.textContent= `Bienvenue ${message}`;
}

bienvenue()