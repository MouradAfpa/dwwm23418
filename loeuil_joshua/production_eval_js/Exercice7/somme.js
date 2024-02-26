function somme() {
  let N = parseInt(prompt('Saisir un nombre"N"'));
  let Somme = 0;
  let str = "";

  for (let i = 1; i < N + 1; i++) {
    Somme = Somme + i;
    str = str + i;
  }

  document.write(
    str[0] +
      "+" +
      str[1] +
      "+" +
      str[2] +
      "+" +
      str[3] +
      "+" +
      str[4] +
      " = " +
      Somme
  );
}
