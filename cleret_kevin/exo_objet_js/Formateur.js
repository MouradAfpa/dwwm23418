class Formateur extends Personne {
    constructor(nom, prenom, adresse, dateNaissance, id, mail, specialite, groupeStagiaire){
        super(nom, prenom, adresse, dateNaissance)
        this.id = id;
        this.mail = mail
        this.specialite = specialite
        this.groupeStagiaire = groupeStagiaire
    }

    toStrFormateur() {
        let z = ""
        return z = super.toStr() + `id: ${this.id}, mail: ${this.mail}, specialite: ${this.specialite}, groupe stagiaire: ${this.groupeStagiaire}`;
    }
    
}

const formateur1 = new Formateur('Arab', 'Mourad', '3 rue des lilas', '11/10/1990', 211, 'arab.mourad.formateur.afpa@gmail.com', 'developpement web', 1440);
console.log(formateur1.toStrFormateur());