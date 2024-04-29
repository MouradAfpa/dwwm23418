class GroupeStagiaire {
    constructor(formateur, groupeDeStagiaire, specialite){
        this.formateur = formateur;
        this.groupeDeStagiaire = groupeDeStagiaire;
        this.specialite = specialite;
    }

    toStrGsFormateur() {
        let z = ""
        return z = `Nom Formateur: ${this.formateur.nom}, Prenom Formateur: ${this.formateur.prenom}`;
    }

    toStrGsGroupeDeStagiaire() {
        let z = "";
        this.groupeDeStagiaire.forEach(stagiaire => {z +=(`nom: ${stagiaire.nom}, prénom: ${stagiaire.nom}`)});
        return z;
    }

    toStrGsSpecialite() {
        let z = "";
        return z = `specialité: ${this.specialite}`
    }
}



const groupeStagiaire1 = new GroupeStagiaire(formateur1, groupeStagiaireAFPA, 'DWWM');
console.log(groupeStagiaire1.toStrGsFormateur());
console.log(groupeStagiaire1.toStrGsGroupeDeStagiaire());
console.log(groupeStagiaire1.toStrGsSpecialite());