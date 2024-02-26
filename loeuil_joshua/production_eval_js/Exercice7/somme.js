function somme() {
  let N = parseInt(prompt('Saisir un nombre"N"'));
  let Somme = 0;
  let str = "";

  for (let i = 1; i < N + 1; i++) {
    Somme = Somme + i;
    str = str + i;
  }

  document.write(str + "=" + Somme);
}
