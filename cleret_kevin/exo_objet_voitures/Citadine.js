
class Citadine extends Voiture {
    // #nombreDePlace;
    // #couleur;
    #longueur

    constructor(nombreDePlace, couleur, longueur){
        super(nombreDePlace, couleur)
        this.#longueur = longueur;
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
    get longueur() {
        return this.#longueur;
    }
    set longueur(newLongueur){
        this.#longueur = newLongueur;
    }

    //METHODES
    toStrCitadine() {
        let z = ""
        return z = super.toStr() +  `, longueur: ${this.#longueur}`;
    }

    revisionCitadine(){
        let z = ""
        return z = `Ce vehicule de type Citadine effectue sa révision tous les 500km`;
    }
}