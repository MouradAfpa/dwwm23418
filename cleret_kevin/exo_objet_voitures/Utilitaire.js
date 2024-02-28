// Construire plusieurs class : 
// - une class Citadine (nombreDePlace, couleur, longueur)
// - une class Utilitaire (nombreDePlace, couleur, ptac)
// - une class Familiale (nombreDePlace, couleur,  volumeCoffre)

// elles ont toutes une méthode "revision" qui renvoie une chaine de caractère qui indique 
// le nombre de kilomètre (utilitaire plus tot que familiale plus tot que citadine)

// une méthode toStr
// un constructeur
// des getter et des setter
// --------

class Utilitaire extends Voiture {
    // #nombreDePlace;
    // #couleur;
    #ptac

    constructor(nombreDePlace, couleur, ptac){
        super(nombreDePlace, couleur)
        this.#ptac = ptac;
    }

    //NOMBRE DE PLACE
    // get nombreDePlace() {
    //     return this.#nombreDePlace;
    // }
    // set nombreDePlace(newNombreDePlace){
    //     this.#nombreDePlace = newNombreDePlace;
    // }

    //COULEUR
    // get couleur() {
    //     return this.#couleur;
    // }
    // set couleur(newCouleur){
    //     this.#couleur = newCouleur;
    // }

    //PTAC
    get ptac() {
        return this.#ptac;
    }
    set ptac(newPtac){
        this.#ptac = newPtac;
    }

    //METHODES
    toStrUtilitaire() {
        let z = ""
        return z = super.toStr() +  `, PTAC: ${this.#ptac}`;
    }

    revisionUtilitaire(){
        let z = ""
        return z = `Ce vehicule de type Utilitaire effectue sa révision tous les 300km`;
    }
}