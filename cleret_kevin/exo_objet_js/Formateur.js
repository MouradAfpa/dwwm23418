class Formateur extends Personne {
    #specialite;

    constructor(nom, prenom, adresse, dateNaissance, id, mail, specialite, groupeStagiaire){
        super(nom, prenom, adresse, dateNaissance)
        this.id = id;
        this.mail = mail
        this.#specialite = specialite
        this.groupeStagiaire = groupeStagiaire
    }

    get specialite(){
        return this.#specialite;
    }

    set specialite(newSpecialite){
        this.#specialite = newSpecialite;
    }

    toStrFormateur() {
        let z = ""
        z += super.toStr() + `id: ${this.id}, mail: ${this.mail}, specialite: ${this.#specialite}`
        let y = "";
        this.groupeStagiaire.forEach(stagiaire => {y +=(`nom: ${stagiaire.nom}, prénom: ${stagiaire.prenom}`)});
        return z+y;
    }
}

const formateur1 = new Formateur('Arab', 'Mourad', '3 rue des lilas', '11/10/1990', 211, 'arab.mourad.formateur.afpa@gmail.com', 'developpement web', groupeStagiaireAFPA);
console.log(formateur1.toStrFormateur());