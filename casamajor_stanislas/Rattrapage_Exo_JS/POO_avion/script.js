// Construire une class Personne qui défini un nom, un prenom, une adresse, une date de naissance.
// toStr() => permet d'afficher sous forme de chaine de caracteres les caracteristiques de l'objet personne.


class personne {
    constructor(nom, prenom, adresse, dateNaissance){
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
        this.date = dateNaissance;
    }
    
    toStr() {
    return `Les informations de cette personne sont : ${this.nom}, ${this.prenom}, ${this.adresse}, ${this.date}`
}
};



const personne1 = new personne ('Loeuil','Joshua', '20 rue de la pervertion','10/10/1991');
// const personne2 = new personne ('Casamajor','Stanislas', '20 rue de la paix','18/05/1995');
// const personne3 = new personne ('Melon','Samuel', '20 rue de la ferme','12/12/2010');
// const personne4 = new personne ('Cleret','Kevin', '20 rue de la nintendo','05/09/1958');



// console.log(personne1.toStr());
// console.log(personne2.toStr());
// console.log(personne3.toStr());
// console.log(personne4.toStr());

// Ecrire une class Stagiaire qui hérite de la class Personne.
// La class Stagiaire a pour attribut spécifique : id, mail.
// toStrStagiaire() qui retourne une chaine de caractères qui reprend tout les attributs.


