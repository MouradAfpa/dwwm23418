// Exercice 4.7 :
// <!-- <?php  header("Location: listPersonne.php");?> -->
function tarifAssurance() {
  let age = parseInt(document.getElementById("age").value);
  let permis = parseInt(document.getElementById("permis").value);
  let nbAccident = parseInt(document.getElementById("accident").value);
  let fidelite = parseInt(document.getElementById("assurance").value);

  let tarif = "Refuser";
  let critAge = age >= 25;
  let critPermis = permis >= 2;
  let critFidelite = fidelite > 5;

  if (!critAge & !critPermis) {
    if (nbAccident == 0) {
      tarif = "Rouge";
    }
  } else if (!critAge & critPermis || critAge & !critPermis) {
    if (nbAccident == 0) {
      tarif = "Orange";
    } else if (nbAccident == 1) {
      tarif = "Rouge";
    }
  } else if (critAge & critPermis) {
    if (nbAccident == 0) {
      tarif = "Vert";
    } else if (nbAccident == 1) {
      tarif = "Orange";
    } else if (nbAccident == 2) {
      tarif = "Rouge";
    }
  }

  if ((tarif == "Vert") & critFidelite) {
    tarif = "Bleu";
  } else if ((tarif == "Orange") & critFidelite) {
    tarif = "Vert";
  } else if ((tarif == "Rouge") & critFidelite) {
    tarif = "Orange";
  }

  document.getElementById("reponse").innerText = `Votre tarif est le ${tarif}`;
}

function tarifCorrection(age, permis, nbAccident, fidelite) {
  //   let age = parseInt(document.getElementById("age").value);
  //   let permis = parseInt(document.getElementById("permis").value);
  //   let nbAccident = parseInt(document.getElementById("accident").value);
  //   let fidelite = parseInt(document.getElementById("assurance").value);

  let malus = nbAccident;
  let tarif = "";

  if (age < 25) {
    malus++;
  }
  if (permis < 2) {
    malus++;
  }
  if (fidelite > 5) {
    malus--;
  }
  switch (malus) {
    case -1:
      tarif = "Bleu";
      break;
    case 0:
      tarif = "vert";
      break;
    case 1:
      tarif = "Orange";
      break;
    case 2:
      tarif = "Rouge";
      break;
    default:
      tarif = "Refuser";
  }
  document.getElementById("demo").innerText = `Votre tarif est le ${tarif}`;
}
