class Avions {
  _qttCarburant;
  _nbrPlace;
  _envergure;
  constructor(qttCarburant, nbrPlace, envergure) {
    if (this.constructor === Avions) {
      throw new Error("Vous ne pouvez pas instancer un nouvelles Avions.");
    }
    this._qttCarburant = qttCarburant;
    this._nbrPlace = nbrPlace;
    this._envergure = envergure;
  }
  get nbrPlace() {
    return this._nbrPlace;
  }
  get qttCarburant() {
    return this._qttCarburant;
  }
  get envergure() {
    return this._envergure;
  }
  set nbrPlace(newNbrPlace) {
    this._nbrPlace = newNbrPlace;
  }
  set qttCarburant(newQttCarburant) {
    this._qttCarburant = newQttCarburant;
  }
  set envergure(newEnvergure) {
    this._envergure = newEnvergure;
  }
  toStr() {
    return `Nombre de place : ${this._nbrPlace}, Envergure: ${this._envergure}, Quantité de carburant : ${this._qttCarburant}`;
  }
}
