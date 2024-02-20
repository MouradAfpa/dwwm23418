
// CLASS PERSONNE
class Personne {
    _nom;

    constructor(nom, prenom, adresse, dateNaissance){
        this._nom=nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.dateNaissance = dateNaissance
    }

    get nom() {
        return this._nom;
    }

    set nom(newNom){
        this._nom = newNom;
    }

    toStr() {
        let z = ""
        return z = `Nom: ${this._nom}, prenom: ${this.prenom}, adresse: ${this.adresse}, date de naissance: ${this.dateNaissance}`;
    }
}

// INSTANCES
const personne1 = new Personne('bonbontoudur', 'Rudolf', '1 rue des abricots', '13/11/1994');

// APPEL METHODES
console.log(personne1.toStr());