
class Voiture {
    _nombreDePlace;
    _couleur;

    constructor(nombreDePlace, couleur){
        if (this.constructeur == Voiture) {
            throw new Error("non instanciable")
            }
        this._nombreDePlace=nombreDePlace;
        this._couleur = couleur;
    }

    //NOMBRE DE PLACE
    get nombreDePlace() {
        return this._nombreDePlace;
    }
    set nombreDePlace(newNombreDePlace){
        this._nombreDePlace = newNombreDePlace;
    }

    //COULEUR
    get couleur() {
        return this._couleur;
    }
    set couleur(newCouleur){
        this._couleur = newCouleur;
    }


    //METHODES
    toStr() {
        let z = ""
        return z = `Nombre de Place: ${this._nombreDePlace}, couleur: ${this._couleur}`;
    }

    revision(){
        let z = ""
        return z = `Ce vehicule de type Utilitaire effectue sa révision tous les 1000km`;
    }
}