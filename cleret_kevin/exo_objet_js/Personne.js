// Construire une class Personne qui défini un nom, un prenom, 
// une adresse, une date de naissance.

// toStr() => permet d'afficher sous forme de chaine de caracteres 
// les caracteristiques de l'objet personne.


class Personne {
    constructor(nom, prenom, adresse, dateNaissance){
        this.nom=nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.dateNaissance = dateNaissance
    }

    toStr() {
        let z = ""
        return z = `Nom: ${this.nom}, prenom: ${this.prenom}, adresse: ${this.adresse}, date de naissance: ${this.dateNaissance}`;
    }
}

const personne1 = new Personne('Bonbontoudur', 'Rudolf', '1 rue des abricots', '13/11/1994');
console.log(personne1.toStr());