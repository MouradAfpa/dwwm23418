
class Familiale extends Voiture {
    // #nombreDePlace;
    // #couleur;
    #volumeCoffre

    constructor(nombreDePlace, couleur, volumeCoffre){
        super(nombreDePlace, couleur)
        this.#volumeCoffre = volumeCoffre;
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

    //VOLUME DU COFFRE
    get volumeCoffre() {
        return this.#volumeCoffre;
    }
    set volumeCoffre(newVolumeCoffre){
        this.#volumeCoffre = newVolumeCoffre;
    }

    //METHODES
    toStrFamiliale() {
        let z = ""
        return z = super.toStr() +  `, volume du coffre: ${this.#volumeCoffre}`;
    }

    revisionFamiliale(){
        let z = ""
        return z = `Ce vehicule de type Familiale effectue sa révision tous les 400km`;
    }
}