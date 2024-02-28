
class Helicopitere extends Avion {
    #autonomie;

    constructor(quantiteCarburant, nbrPlace, envergure, autonomie){
        super(quantiteCarburant, nbrPlace, envergure)
        this.#autonomie = autonomie;
    }

    //autonomie
    get autonomie() {
        return this.#autonomie;
    }
    set autonomie(newautonomie){
        this.#autonomie = newautonomie;
    }

    //METHODES
    toStr() {
        let z = ""
        return z = super.toStr() +  `, autonomie: ${this.#autonomie}`;
    }
}