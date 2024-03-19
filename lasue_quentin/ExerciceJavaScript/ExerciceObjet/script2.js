let stagiaire1 = new Stagiaire(
  "lasue",
  "quentin",
  "adresse",
  "13/04/95",
  1,
  "mail"
);
let stagiaire2 = new Stagiaire(
  "cleret",
  "kevin",
  "adresse",
  "23/07/99",
  2,
  "mail"
);
let stagiaire3 = new Stagiaire(
  "laporte",
  "matthieu",
  "adresse",
  "10/05/2000",
  3,
  "mail"
);
let stagiaire4 = new Stagiaire(
  "delagrande",
  "nicolas",
  "adresse",
  "13/04/93",
  4,
  "mail"
);
let stagiaires = [stagiaire1, stagiaire2, stagiaire3, stagiaire4];

let formateur = new Formateur(
  "arab",
  "mourad",
  "adresse",
  "13/11/95",
  5,
  "mail",
  "DWWM",
  stagiaires
);
let groupeDwwm = new Groupe("Dwwm", formateur, stagiaires);

console.log(stagiaire1.toStr());
console.log(groupeDwwm.formateurName());
console.log(groupeDwwm.stagiaireNames());
