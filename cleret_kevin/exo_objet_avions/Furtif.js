
class Furtif extends Avion {
    #nbrArme;

    constructor(quantiteCarburant, nbrPlace, envergure, nbrArme){
        super(quantiteCarburant, nbrPlace, envergure)
        this.#nbrArme = nbrArme;
    }

    //nbrArme
    get nbrArme() {
        return this.#nbrArme;
    }
    set nbrArme(newnbrArme){
        this.#nbrArme = newnbrArme;
    }

    //METHODES
    toStr() {
        let z = ""
        return z = super.toStr() +  `, nbrArme: ${this.#nbrArme}`;
    }
}