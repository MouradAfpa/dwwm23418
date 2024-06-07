//------Exercice 4.1 ------

// let Toto;
// let Tuto;

// if ((Tutu >Toto + 4 ) || (Tata = 'OK')) {
//     Tutu = Tutu +1
// } else {
//   Tutu = Tutu - 1  
// }


// ------ Exercice 4.2 ------

// function resultat(){
//     var heure = document.getElementById(`heure`).value;
//     var minute = document.getElementById('minute').value;
//     var seconde = document.getElementById('seconde').value;
//     seconde = parseInt(seconde);
//     minute = parseInt(minute);
//     heure = parseInt(heure);
//     minute++;

//     if(seconde = 60){
//       seconde = 0;
//       minute++;
//     }

//     if (minute=60) {
//       minute = 0;
//       heure++;
//     }

//     if(heure=24){
//       heure = 0;
//       minute = 0;
//       seconde = 0;
//     }
//     let affichage = document.getElementById('affichage')
//     affichage.innerHTML=(`Dans une minute il sera: ${heure} : ${minute} : ${seconde}`)
// }

// -------- Exercice 4.3 ------

// function resultat(){
//     var heure = document.getElementById(`heure`).value;
//     var minute = document.getElementById('minute').value;
//     var seconde = document.getElementById('seconde').value;
//     seconde++
    
//     document.getElementById('resultat').innerHTML=(`Dans une seconde il sera exactement: ${heure} heure(s) ${minute} minute(s) et ${seconde} seconde(s)`)
// }

//-------- Exercice 4.4 ------


function calculPrix(){
  var nombrecopie = parseInt(document.getElementById('nombreCopie').value);
  var prix = 0;

  if (nombrecopie<=10) {
    prix = nombrecopie*0.10;
  } else if (nombrecopie<=30) {
    prix = 1+ (nombrecopie-10)*0.09;
  } else {
    prix = 2.8 + (nombrecopie-30)*0.08;
  }

  document.getElementById('resultat').innerHTML = (`Votre prix est de: ${prix} €`);
  return(prix);
}


//------- Exercice 4.5 ---------


function imposable(){
  var age = parseInt(document.getElementById('age').value);
  // var genre;
  // if (document.getElementById('homme').Checked) {
  //   genre = 'h'
  // }else{
  //   genre = 'f'
  // }

 const radios =  document.getElementsByName('genre');
 for (let i = 0; i < radios.length; i++) {
  if (radios[i].checked) {
    console.log(radios[i].value);
    genre = radios[i].value;
    break;
  }
  
 }

  if (((genre == 'h') && (age>20)) || ((genre == 'f') && ((age >18)&&(age<35)))) {
    document.getElementById('imposable').innerHTML = ('Oui')
  } else {
    document.getElementById('imposable').innerHTML = ('Non')
  }
}


//-------- exercice 4.6 --------

function resultat(){
  let score1 = parseInt(document.getElementById('score1').value);
  let score2 = parseInt(document.getElementById('score2').value);
  let score3 = parseInt(document.getElementById('score3').value);
  let score4 = parseInt(document.getElementById('score4').value);
  let affichage = document.getElementById('resultatElection');

  
  if (score1 >= 50) {
    affichage.innerHTML = ("Premier candidat élu")
  } else {
    if (((score1>12.5)&&(score2>50)||(score3>50)||(score4>50))||(score1<12.5)) {
      affichage.innerHTML = ("premier candidat est illiminé pas de second tour");
    } else {
      if ((score1>12.5)&&(score1>score2)&&(score1>score3)&&(score1>score4)) {
        affichage.innerHTML = ('Premier candidat en ballottage au 2ème tour')
      } else {
        affichage.innerHTML = ('Premier candidat défavorable au second tour')
      }
    }
  }
}


//------- Exercice 4.7 ------


function tarifAssu(){
  let age1 = parseInt(document.getElementById('age1').value);
  let permis = parseInt(document.getElementById('permis').value);
  let accident = parseInt(document.getElementById('accident').value);
  let anciennete = parseInt(document.getElementById('anciennete').value);
  let affichage = document.getElementById('tarif');
  let tarifCouleur = "";
// console.log('age: '+age1);
// console.log('permis: '+permis);
// console.log('accident: ' +accident);
// console.log('ancienneté:' +anciennte);
  if ((age1 >= 25) && (permis > 2) && (accident == 0)) {
    affichage.innerHTML = 'Vert';
    tarifCouleur = "Vert";
  } else if (((age1 < 25) && (permis >= 2) && (accident == 0)) || ((age1 >= 25) && (permis >= 2) && (accident == 1)) || ((age1 > 25) && (permis < 2) && (accident == 0))) {
    affichage.innerHTML = 'Orange';
    tarifCouleur = "orange";
  } else if (((age1 < 25) && (permis <= 2) && (accident == 0)) || ((age1 >= 25) && (permis >= 2) && (accident == 2)) || ((age1 >= 25) && (permis < 2) && (accident == 1))) {
    affichage.innerHTML = 'Rouge';
    tarifCouleur = "Rouge";
  } else {
    affichage.innerHTML = 'Refusé';
  }
  console.log(tarifCouleur);
  console.log(anciennete);
  return tarifCouleur;
}

if (anciennete > 5) {
  if (tarifCouleur === "vert") {
    tarifCouleur = "bleu";
  } else if (tarifCouleur === "orange") {
    tarifCouleur = "vert";
  } else if (tarifCouleur === "rouge") {
    tarifCouleur = "orange";
  }
  affichage.innerHTML  = "Le tarif est: " +tarifCouleur
}

//-------- Exercice 4.8 -------

function verifierDate() {
  let jour = parseInt(document.getElementById('jour').value);
  let mois = parseInt(document.getElementById('mois').value);
  let annee = parseInt(document.getElementById('annee').value);
  let afficher = document.getElementById('verifDate');
  let valide = "";

  if (mois >= 1 && mois <= 12) {
      if ((mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12) && (jour >= 1 && jour <= 31)) {
          valide = "Valide";
      } else if ((mois == 4 || mois == 6 || mois == 9 || mois == 11) && (jour >= 1 && jour <= 30)) {
        valide = "Valide";
      } else if (mois == 2 && ((annee % 4 == 0 && annee % 100 !== 0) || annee % 400 == 0) && (jour >= 1 && jour <= 29)) {
        valide = "Valide";
      } else if (mois == 2 && (jour >= 1 && jour <= 28)) {
        valide = "Valide";
      } else {
        valide = "Invalide";
      }
  } else {
    valide = "Invalide";
  }
  afficher.innerHTML = "La date est:" +valide;
}

//---- correction partiel -----

let c1 = annee % 4 == 0 && annee % 100 !== 0;
let c2 = annee % 400 == 0
let mess = "Date non validé";

let k31 = jour<=31 && (mois == 1 || mois == 3 || mois == 5 || mois == 7 || mois == 8 || mois == 10 || mois == 12);
let 30 = jour<= 30 && ( mois == 4|| mois == 6 || mois == 9 || mois == 11);
let 29 = jour <=29 && (mois ==2) && (c1 || c2);
let 28 = jour <= 28 && (mois == 2);

if ((k31  || k30 || k28 || k29)&& jour >=1){
  mess = "Date Valide";
}




