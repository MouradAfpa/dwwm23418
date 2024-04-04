class Utilitaire extends Vehicule {
  #ptac;

  constructor(nbrPlace, couleur, ptac) {
    super(nbrPlace, couleur);
    this.#ptac = ptac;
  }
  revision() {
    return `La révision ce fait tous les 30 000Km`;
  }

  toStrUtilitaire() {
    return `${super.toStr()}, Ptac : ${this.#ptac}`;
  }

  get ptac() {
    return this.#ptac;
  }
  set ptac(newPtac) {
    this.#ptac = newPtac;
  }
}
