const formulaireAjout = document.getElementById("formulaireAjout");

formulaireAjout.addEventListener("submit", function (event) {
  event.preventDefault(); // intercaption du submit
  const nomInput = document.getElementById("nomInput");
  const nomValue = nomInput.value;
  const ageInput = document.getElementById("ageInput");
  const ageValue = ageInput.value;

  const typeInput = document.getElementById("typeInput");
  const typeValue = typeInput.value;

  let donneeValide = true;
  //nom uniquement des lettre minuscule ou majuscule de moins de 30 caractères
  if (!/^[a-zA-Z]+$/.test(nomValue) && nomValue.length > 30) {
    donneeValide = false;
    let erreurNom = document.getElementById("errorNom");
    erreurNom.textContent =
      "Nom Invalide, il ne doit contenir que des lettres. (max 30)";
  }
  //Age uniquement des chiffres
  if (!/^[0-9]+$/.test(ageValue) && ageValue >= 100) {
    donneeValide = false;
    let erreurAge = document.getElementById("errorAge");
    erreurAge.textContent =
      "L'âge ne doit contenir que des chiffes, valeur max : 100.";
  }
  //Si le type n'est pas envoyé
  if (typeValue === "") {
    donneeValide = false;
    let erreurType = document.getElementById("errorType");
    erreurType.textContent = "Veuillez selectionner un type.";
  }
  // si donneeValide reste true alors on envois le formulaire au traitement php avec le submit
  if (donneeValide) {
    formulaireAjout.onsubmit();
  }
});
