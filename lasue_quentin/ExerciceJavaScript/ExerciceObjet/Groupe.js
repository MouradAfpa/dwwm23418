class Groupe {
  constructor(specialite, formateur, groupeStagiaire) {
    this.specialite = specialite;
    this.formateur = formateur;
    this.groupeStagiaire = groupeStagiaire;
  }
  formateurName() {
    return `nom Formateur : ${this.formateur.nom}, prenom formateur : ${this.formateur.prenom}`;
  }
  stagiaireNames() {
    let mess = "";
    this.groupeStagiaire.forEach(
      (stagiaire) =>
        (mess += `nom : ${stagiaire.nom}, prenom : ${stagiaire.prenom}|`)
    );
    return mess;
  }
  methodeSpecialite() {
    return `specialite : ${this.formateur.specialite}`;
  }
}
