
// CLASS STAGIAIRE
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


// INSTANCES
const stagiaire1 = new Stagiaire('CASAMAJOR', 'Stanislas', '1 rue des abricots', '13/11/1994', 1, 'castafpa@gmail.com');
const stagiaire2 = new Stagiaire('LOEUIL', 'Joshua', '3 rue des cocottes', '02/05/1995', 1, 'lojoafpa@gmail.com');
const stagiaire3 = new Stagiaire('CLERET', 'Kévin', '1 place de la soupe', '20/10/1950', 1, 'clkeafpa@gmail.com');
const stagiaire4 = new Stagiaire('MELON', 'Samuel', '3 rue des cocottes', '05/01/1991', 1, 'mesaafpa@gmail.com');

const groupeStagiaireAFPA = [stagiaire1, stagiaire2, stagiaire3, stagiaire4];


// APPEL METHODES
console.log(stagiaire1.toStrStagiaire());
console.log(stagiaire2.toStrStagiaire());
console.log(stagiaire3.toStrStagiaire());
console.log(stagiaire4.toStrStagiaire());
