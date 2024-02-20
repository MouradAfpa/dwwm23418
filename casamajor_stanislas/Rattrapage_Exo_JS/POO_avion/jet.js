class jet extends avion {
    constructor(qttCarburant,nombrePlace,envergure,vitessePointe){
        super(qttCarburant,nombrePlace,envergure);
        this._VitessePointe = vitessePointe
    }

    toStrJ(){
        return `${super.toStr()} la vitesse de pointe est : ${this._VitessePointe}`
    }



}