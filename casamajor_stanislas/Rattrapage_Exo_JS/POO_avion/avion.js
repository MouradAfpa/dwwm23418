class avion {
    constructor (qttCarburant,nombrePlace,Envergure){
        this.QttCarburant = qttCarburant;
        this.NombrePlace = nombrePlace;
        this.Envergure = Envergure;
    }

    toStr(){
        return `la quantité de carburant est : ${this.QttCarburant}, le nombre de place est : ${this.NombrePlace} l'envergure est : ${this.Envergure}`
    }

    get qttCarburant(){
        return this.QttCarburant = QuantiteCarburant
    }
}