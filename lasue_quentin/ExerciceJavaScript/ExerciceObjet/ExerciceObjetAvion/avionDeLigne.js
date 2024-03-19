class AvionsDeLigne extends Avions {
  #chargeTransportable;
  constructor(qttCarburant, nbrPlace, envergure, chargeTransportable) {
    super(qttCarburant, nbrPlace, envergure);
    this.#chargeTransportable = chargeTransportable;
  }
  get chargeTransportable() {
    return this.#chargeTransportable;
  }
  set chargeTransportable(newChargeTransportable) {
    this.#chargeTransportable = newChargeTransportable;
  }

  toStrAvionsDeLigne() {
    return ` ${super.toStr}, Charge transportable : ${
      this.#chargeTransportable
    }`;
  }
}
