
class Jet extends Avion {
    #vitesse;

    constructor(quantiteCarburant, nbrPlace, envergure, vitesse){
        super(quantiteCarburant, nbrPlace, envergure)
        this.#vitesse = vitesse;
    }

    //vitesse
    get vitesse() {
        return this.#vitesse;
    }
    set vitesse(newvitesse){
        this.#vitesse = newvitesse;
    }

    //METHODES
    toStr() {
        let z = ""
        return z = super.toStr() +  `, vitesse: ${this.#vitesse}`;
    }
}