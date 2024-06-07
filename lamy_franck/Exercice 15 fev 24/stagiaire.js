
class Stagiaire extends Personne {
    constructor(nom, prenom, adresse, dateNaissance, id, mail) {
        super(nom, prenom, adresse, dateNaissance);
        this.id = id;
        this.mail = mail;
    }

    toStrStagiaire() {
        return super.toStrg() + ` id: ${this.id}, mail: ${this.mail}`;
    }
}


