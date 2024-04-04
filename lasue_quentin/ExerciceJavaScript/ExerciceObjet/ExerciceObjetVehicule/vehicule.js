class Vehicule {
  _nbrPlace;
  _couleur;

  constructor(nbrPlace, couleur) {
    this._nbrPlace = nbrPlace;
    this._couleur = couleur;
  }
  get nbrPlace() {
    return this._nbrPlace;
  }
  get couleur() {
    return this._couleur;
  }
  set nbrPlace(newNbrPlace) {
    this._nbrPlace = newNbrPlace;
  }
  set couleur(newCouleur) {
    this._couleur = newCouleur;
  }
  toStr() {
    return `Nombre de place : ${this.nbrPlace}, Couleur : ${this.couleur}`;
  }
}
