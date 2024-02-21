class Personne {
    _firstName;
    _lastName;
    _pays;
    _continent;
    _age;
    _langue;
    _repas;

    constructor(firstName, lastName, pays, continent, age, langue, repas) {
        this._firstName=firstName;
        this._lastName = lastName;
        this._pays = pays;
        this._continent = continent;
        this._age = age;
        this._langue = langue;
        this._repas = repas;
    }

    //first name
    get firstName() {
        return this._firstName;
    }
    set firstName(newfirstName){
        this._firstName = newfirstName;
    }

    //last name
    get lastName() {
        return this._lastName;
    }
    set lastName(newlastName){
        this._lastName = newlastName;
    }

    //pays
    getpays() {
        return this._pays;
    }
    setpays(newpays){
        this._pays = newpays;
    }

    //continent
    getcontinent() {
        return this._continent;
    }
    setcontinent(newcontinent){
        this._continent = newcontinent;
    }

    //age
    getage() {
        return this._age;
    }
    setage(newage){
        this._age = newage;
    }

    //langue
    getlangue() {
        return this._langue;
    }
    setlangue(newlangue){
        this._langue = newlangue;
    }

    //repas
    getrepas() {
        return this._repas;
    }
    setrepas(newrepas){
        this._repas = newrepas;
    }

    //METHODES
    toStr() {
        let z = ""
        return z = `First Name: ${this._firstName}, Last Name: ${this._lastName}, Repas: ${this._repas}`;
    }
}

const personne1 = new Personne('Noah', 'M.', 'Suisse', 'Europe', 19, 'C', 'vegetarien');
const personne2 = new Personne('Anna', 'R.', 'Liechtenstein', 'Europe', 52, 'JavaScript', 'standard');
const personne3 = new Personne('Ramona', 'R.', 'Paraguay', 'Amériques', 29, 'Ruby', 'vegan');
const personne4 = new Personne('George', 'B.', 'Angleterre', 'Europe', 81, 'C', 'vegetarien');

const tabPersonnes = [personne1,personne2,personne3,personne4];


function lunchTypeCount(t) {
    let countVeget = 0;
    let countVega = 0;
    let countSta = 0;

    for (let i=0; i<t.length ; i++) {
        if (t[i]._repas === 'vegetarien') {
            countVeget++
        } else if (t[i]._repas === 'vegan') {
            countVega++
        } else if (t[i]._repas === 'standard') {
            countSta++
        }
    }

    let compteurs = [countVeget, countVega, countSta]
    return compteurs;
}


console.log(personne1.toStr());
console.log(lunchTypeCount(tabPersonnes));



