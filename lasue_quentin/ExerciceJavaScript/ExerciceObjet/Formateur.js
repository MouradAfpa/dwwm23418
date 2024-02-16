class Formateur extends Personne {
  constructor(
    nom,
    prenom,
    adress,
    dateNaissance,
    id,
    mail,
    specialite,
    groupeStagiaire
  ) {
    super(nom, prenom, adress, dateNaissance, id, mail);
    this.specialite = specialite;
    this.groupeStagiaire = groupeStagiaire;
  }
  toStrFormateur() {
    return (
      super.toStr() +
      `specialite:${this.specialite},groupe: ${this.groupeStagiaire}`
    );
  }
}
