let resultat = document.getElementById("resultat");

let nbr = parseFloat(prompt("Entrez la note de l'élève"));

switch (true) {
    case (nbr >= 0 && nbr <= 4):
        resultat.textContent = nbr + ", Catastrophique, il faut tout revoir"
        break;
    case (nbr >= 5 && nbr <= 10):
        resultat.textContent = nbr + ", Insuffisant"
        break;
    case (nbr >= 11 && nbr <= 14):
        resultat.textContent = nbr + ", Peut mieux faire"
        break;
    case (nbr >= 15 && nbr <= 17):
        resultat.textContent = nbr + ", Bien"
        break;
    case (nbr >= 18 && nbr <= 20):
        resultat.textContent = nbr + ",17 Exellent, bon travail"
        break;
    default:
        resultat.textContent = "La note n'est pas valide"
        break;
}
