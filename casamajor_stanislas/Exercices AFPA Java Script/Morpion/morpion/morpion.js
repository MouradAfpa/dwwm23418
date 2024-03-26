function reset(){
    location.reload();
}

function valide(td){
    return td.innerHTML.length == 0;
}

function ImplanterSymbole(carre, symbole) {
    carre.innerHTML = symbole;
  }

var Afficheur = function(element){
    var affichage = element;

    function ImplanterText(message){
        affichage.innerHTML = message;
    }

    return { envoiMessage: ImplanterText};
}; 

function matchNul(cases) {
    for (var i = 0, len = cases.length; i < len; i++) {
      if (cases[i].innerHTML.length == 0) return false;
    }
  
    return true;
  }

function recherchevainqueur(cases, joueurs, tours){
    if (cases[0].innerHTML == joueurs[tours] &&
        cases[3].innerHTML == joueurs[tours] &&
        cases[6].innerHTML == joueurs[tours]
        ) {
            cases[0].style.backgroundColor = "#9ACD32";
            cases[3].style.backgroundColor = "#9ACD32";
            cases[6].style.backgroundColor = "#9ACD32";
    return true;
        }
    
    if (cases[1].innerHTML == joueurs[tours] &&
        cases[4].innerHTML == joueurs[tours] &&
        cases[7].innerHTML == joueurs[tours]
        ) {
            cases[1].style.backgroundColor = "#9ACD32";
            cases[4].style.backgroundColor = "#9ACD32";
            cases[7].style.backgroundColor = "#9ACD32";
    return true;
        }   
    
    if (cases[2].innerHTML == joueurs[tours] &&
        cases[5].innerHTML == joueurs[tours] &&
        cases[8].innerHTML == joueurs[tours]
        ) {
            cases[2].style.backgroundColor = "#9ACD32";
            cases[5].style.backgroundColor = "#9ACD32";
            cases[8].style.backgroundColor = "#9ACD32";
    return true;
        }
        
    if (cases[0].innerHTML == joueurs[tours] &&
        cases[1].innerHTML == joueurs[tours] &&
        cases[2].innerHTML == joueurs[tours]
        ) {
            cases[0].style.backgroundColor = "#9ACD32";
            cases[1].style.backgroundColor = "#9ACD32";
            cases[2].style.backgroundColor = "#9ACD32";
    return true;
        }

    if (cases[3].innerHTML == joueurs[tours] &&
        cases[4].innerHTML == joueurs[tours] &&
        cases[5].innerHTML == joueurs[tours]
        ) {
            cases[3].style.backgroundColor = "#9ACD32";
            cases[4].style.backgroundColor = "#9ACD32";
            cases[5].style.backgroundColor = "#9ACD32";
    return true;
        }

    if (cases[6].innerHTML == joueurs[tours] &&
        cases[7].innerHTML == joueurs[tours] &&
        cases[8].innerHTML == joueurs[tours]
        ) {
            cases[6].style.backgroundColor = "#9ACD32";
            cases[7].style.backgroundColor = "#9ACD32";
            cases[8].style.backgroundColor = "#9ACD32";
    return true;
        }
    
    if (cases[0].innerHTML == joueurs[tours] &&
        cases[4].innerHTML == joueurs[tours] &&
        cases[8].innerHTML == joueurs[tours]
        ) {
            cases[0].style.backgroundColor = "#9ACD32";
            cases[4].style.backgroundColor = "#9ACD32";
            cases[8].style.backgroundColor = "#9ACD32";
    return true;
        } 

    if (cases[2].innerHTML == joueurs[tours] &&
        cases[4].innerHTML == joueurs[tours] &&
        cases[6].innerHTML == joueurs[tours]
        ) {
            cases[2].style.backgroundColor = "#9ACD32";
            cases[4].style.backgroundColor = "#9ACD32";
            cases[6].style.backgroundColor = "#9ACD32";
    return true;
        }      
}


function morpion() {
    var cases = document.querySelectorAll("#Morpion button");
    var joueurs = ["X", "O"];
    var tours = 0;
    var jeuEstFini = false;
    var afficheur = new Afficheur(document.querySelector("#StatutMorpion"));
    afficheur.envoiMessage(
      "Le jeu peut commencer ! <br /> Joueur " +
        joueurs[tours] +
        " c'est votre tour."
    );
    for (var i = 0, len = cases.length; i < len; i++) {
      cases[i].addEventListener("click", function() {
        if (jeuEstFini) return;
  
        if (!valide(this)) {
          afficheur.envoiMessage(
            "Case occupée ! <br />Joueur " +
              joueurs[tours] +
              " c'est toujours à vous !"
          );
        } else {
          ImplanterSymbole(this, joueurs[tours]);
          jeuEstFini = recherchevainqueur(cases, joueurs, tours);
  
          if (jeuEstFini) {
            afficheur.envoiMessage(
              "Le joueur " +
                joueurs[tours] +
                ' a gagné !'               
            );
            return;
          }
  
          if (matchNul(cases)) {
            afficheur.envoiMessage(
              'Match Nul !'
            );
            return;
          }
  
          tours++;
          tours = tours % 2;
          afficheur.envoiMessage("Joueur " + joueurs[tours] + " c'est à vous !");
        }
      });
    }
  }

morpion(); 

