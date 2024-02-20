
class AvionLigne extends Avion {
    #charge;

    constructor(quantiteCarburant, nbrPlace, envergure, charge){
        super(quantiteCarburant, nbrPlace, envergure)
        this.#charge = charge;
    }

    //CHARGE
    get charge() {
        return this.#charge;
    }
    set charge(newCharge){
        this.#charge = newCharge;
    }

    //METHODES
    toStr() {
        let z = ""
        return z = super.toStr() +  `, charge: ${this.#charge}`;
    }
}