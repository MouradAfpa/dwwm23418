class Citadine extends Vehicule {
  #longueur;

  constructor(nbrPlace, couleur, longueur) {
    super(nbrPlace, couleur);
    this.#longueur = longueur;
  }
  revision() {
    return `La révision ce fait tous les 15 000Km`;
  }
  toStrCitadine() {
    return +`${super.toStr()}, Longueur : ${this.#longueur}`;
  }
  get longueur() {
    return this.#longueur;
  }
  set longueur(newLongueur) {
    this.#longueur = newLongueur;
  }
}
