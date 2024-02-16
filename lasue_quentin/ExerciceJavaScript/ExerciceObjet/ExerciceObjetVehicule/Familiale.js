class Familiale extends Vehicule {
  #volumeCoffre;

  constructor(nbrPlace, couleur, volumeCoffre) {
    super(nbrPlace, couleur);
    this.#volumeCoffre = volumeCoffre;
  }
  revision() {
    return `La révision ce fait tous les 20 000Km`;
  }
  toStrCitadine() {
    return `${super.toStr()}, Volume du coffre : ${this.#volumeCoffre}`;
  }
  get volumeCoffre() {
    return this.#volumeCoffre;
  }
  set volumeCoffre(newVolumeCoffre) {
    this.#volumeCoffre = newVolumeCoffre;
  }
}
