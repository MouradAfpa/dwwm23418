class Furtif extends Avions {
    #autonomie;
    constructor(qttCarburant, nbrPlace, envergure, autonomie) {
      super(qttCarburant, nbrPlace, envergure);
      this.#autonomie = autonomie;
    }
    get autonomie() {
      return this.#autonomie;
    }
    set autonomie(newAutonomie) {
      this.#autonomie = newAutonomie;
    }
  
    toStrHelicoptere() {
      return ` ${super.toStr}, Charge transportable : ${this.#autonomie}`;
    }
  }