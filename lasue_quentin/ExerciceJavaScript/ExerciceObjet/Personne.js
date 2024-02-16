class Personne {
  constructor(nom, prenom, adress, dateNaissance, id, mail) {
    this.nom = nom;
    this.prenom = prenom;
    this.adress = adress;
    this.dateNaissance = dateNaissance;
    this.id = id;
    this.mail = mail;
  }
  toStr() {
    return `nom:${this.nom}, prenom:${this.prenom},adress:${this.adress}, dateNaissance:${this.dateNaissance},id:${this.id}, mail:${this.mail}`;
  }
}
