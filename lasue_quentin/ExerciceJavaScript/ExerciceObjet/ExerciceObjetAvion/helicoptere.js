class Helicoptere extends Avions {
  #nbrArmeLetal;
  constructor(qttCarburant, nbrPlace, envergure, nbrArmeLetal) {
    super(qttCarburant, nbrPlace, envergure);
    this.#nbrArmeLetal = nbrArmeLetal;
  }
  get nbrArmeLetal() {
    return this.#nbrArmeLetal;
  }
  set nbrArmeLetal(newNbrArmeLetal) {
    this.#nbrArmeLetal = newNbrArmeLetal;
  }

  toStrHelicoptere() {
    return ` ${super.toStr}, Charge transportable : ${this.#nbrArmeLetal}`;
  }
}
