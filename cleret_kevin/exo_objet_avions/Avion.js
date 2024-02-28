// - Avion de ligne(quantiteCarburant, nbrPlace, envergure), 
// - Jet (quantiteCarburant, nbrPlace, envergure), 
// - Helicopitere (quantiteCarburant, nbrPlace, envergure),
// - Furtif (quantiteCarburant, nbrPlace, envergure).

// l'avion de ligne peut transporter une certaine charge. Le jet atteint une certaine vitesse. L'helicoptère a une certaine autonomie.
// Le furtif a un nombre d'arme letale.

class Avion {
    _quantiteCarburant;
    _nbrPlace;
    _envergure

    constructor(quantiteCarburant, nbrPlace, envergure){
        // if (this.constructeur == Voiture) {
        //     throw new Error("non instanciable")
        //     }
        this._quantiteCarburant=quantiteCarburant;
        this._nbrPlace = nbrPlace;
        this._envergure = envergure;
    }

    //QUANTITE CARBURANT
    get quantiteCarburant() {
        return this._quantiteCarburant;
    }
    set quantiteCarburant(newQuantiteCarburant){
        this._quantiteCarburant = newQuantiteCarburant;
    }

    //NOMBRE DE PLACE
    get nbrPlace() {
        return this._nbrPlace;
    }
    set nbrPlace(newNbrPlace){
        this._nbrPlace = newNbrPlace;
    }

    //ENVERGURE
    getEnvergure() {
        return this._envergure;
    }
    setEnvergure(newEnvergure){
        this._envergure = newEnvergure;
    }


    //METHODES
    toStr() {
        let z = ""
        return z = `Quantité Carburant: ${this._quantiteCarburant}, nombre de Place: ${this._nbrPlace}, envergure: ${this._envergure}`;
    }

    // revision(){
    //     let z = ""
    //     return z = `Ce vehicule de type Utilitaire effectue sa révision tous les 1000km`;
    // }
}