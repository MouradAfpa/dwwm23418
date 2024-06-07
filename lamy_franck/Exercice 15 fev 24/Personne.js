class Personne {
    constructor(nom, prenom, adresse, dateNaissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.dateNaissance = dateNaissance;
    }

    toStrg() {
        return `Nom: ${this.nom}, Prénom: ${this.prenom}, Adresse: ${this.adresse}, Date de naissance: ${this.dateNaissance}`;
    }
}


