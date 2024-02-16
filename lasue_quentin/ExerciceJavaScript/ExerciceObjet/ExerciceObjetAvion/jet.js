class Jet extends Avions {
  #vitesseMAx;
  constructor(qttCarburant, nbrPlace, envergure, vitesseMAx) {
    super(qttCarburant, nbrPlace, envergure);
    this.#vitesseMAx = vitesseMAx;
  }
  get vitesseMAx() {
    return this.#vitesseMAx;
  }
  set vitesseMAx(newVitesseMAx) {
    this.#vitesseMAx = newVitesseMAx;
  }

  toStrJet() {
    return ` ${super.toStr}, Charge transportable : ${this.#vitesseMAx}`;
  }
}
