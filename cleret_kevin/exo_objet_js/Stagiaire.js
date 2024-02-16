
class Stagiaire extends Personne {
    constructor(nom, prenom, adresse, dateNaissance, id, mail){
        super(nom, prenom, adresse, dateNaissance)
        this.id = id;
        this.mail = mail
    }

    toStrStagiaire() {
        let z = ""
        return z = super.toStr() + `id: ${this.id}, mail: ${this.mail}`;
    }
    
}

const stagiaire1 = new Stagiaire('Bonbontoudur', 'Rudolf', '1 rue des abricots', '13/11/1994', 1, 'bbtdrd@gmail.com');
console.log(stagiaire1.toStrStagiaire());
