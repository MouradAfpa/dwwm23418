// _______   ___      ___ ________  ___                  ___  ________    _______
// |\  ___ \ |\  \    /  /|\   __  \|\  \                |\  \|\   ____\  /  ___  \
// \ \   __/|\ \  \  /  / | \  \|\  \ \  \               \ \  \ \  \___|_/__/|_/  /|
//  \ \  \_|/_\ \  \/  / / \ \   __  \ \  \            __ \ \  \ \_____  \__|//  / /
//   \ \  \_|\ \ \    / /   \ \  \ \  \ \  \____      |\  \\_\  \|____|\  \  /  /_/__
//    \ \_______\ \__/ /     \ \__\ \__\ \_______\    \ \________\____\_\  \|\________\
//     \|_______|\|__|/       \|__|\|__|\|_______|     \|________|\_________\\|_______|
//                                                               \|_________|
// GHALEM KARIM
//

// EXO1---------------------------------------------------------
//
// function fizzBuzz() {
//   let val = parseInt(prompt("entrez une valeur"));
//   for (let i = 0; i <= val; i++) {
//     i % 5 == 0 && i % 3 == 0
//       ? console.log("FIZZBUZZ")
//       : i % 5 == 0
//       ? console.log("BUZZ")
//       : i % 3 == 0
//       ? console.log("FIZZ")
//       : console.log(i);
//   }
// }

// fizzBuzz();
//
// EXO2---------------------------------------------------------
//
// function jPrix() {
//   let essai = parseInt(prompt("entrez un nombre max de tentative"));
//   let nbrMax = parseInt(prompt("entrez un nombre"));
//   let val = parseInt(Math.random() * nbrMax);
//   alert("val: " + val);
//   while (essai != 0 || rep != val) {
//     let rep = parseInt(prompt("reponse ? "));
//     rep > val
//       ? alert(`c'est c'est moins`)
//       : rep < val
//       ? alert(`c'est plus`)
//       : alert(`BRAVO!!`);
//     essai--;
//   }
// }
// jPrix();
//
// EXO3---------------------------------------------------------
//
// (places = 5, tours = 3, file = [2, 3, 5, 4])

// Tour 1 : groupe 1 rentre, groupe 2 rentre (état de la file : [5, 4, 2, 3])
// Tour 2 : groupe 1 rentre (état de la file : [4, 2, 3, 5])
// Tour 3 : groupe 1 rentre (état de la file : [2, 3, 5, 4])

// Profits  14€

// function rollerCoaster() {
//   let place = parseInt(prompt("combien de place dans le manège ?"));
//   let tours = parseInt(prompt("nombre de tours ?"));

//   let file = [2, 3, 5, 4];
//   let placeP = 0;
//   let cumul = 0;
//   let retour = "";
//   for (let i = 0; i < tours; i++) {
//     console.log("TOUR" + i);
//     console.log("part tour : " + JSON.stringify(file));
//     for (let j = 0; j < file.length; j++) {
//       //   console.log("la");
//       console.log("placeP : " + placeP + " file[j] : " + file[j]);
//       if (placeP + file[0] <= place) {
//         console.log("OUI -> " + file[0]);
//         retour += `groupe ${j + 1} rentre,`;
//         cumul += file[0];
//         placeP += file[0];
//         file[file.length] = file[0];
//         file.splice(0, 1);
//         console.log(
//           "lorsque validé : " + JSON.stringify(file) + "cumul : " + cumul
//         );
//       }
//     }
//     console.log(`tour${i} : ${retour} etat de la file ${JSON.stringify(file)}`);
//     retour = "";
//     placeP = 0;
//   }
//   console.log("cumul : " + cumul);
// }

// rollerCoaster();

// EXO4---------------------------------------------------------
//
function devoil(v, t, r) {
  alert("je lance devoil");
  let retour = "";
  for (let j = 0; j < t.length; j++) {
    if (v == t[j]) {
      alert("r[j] :" + r[j]);

      r.splice(j, 1, v);
    }
  }
  alert(r);
  return r;
}

function pendu() {
  let myst = prompt("entrez un mot").split("");
  let life = parseInt(prompt("nombre de vie?"));
  let aff = [];
  for (let i = 0; i < myst.length; i++) {
    aff[i] = " _ ";
  }
  alert("le mot : " + aff);
  while (life > 0) {
    let rep = prompt("entrez une lettre");
    myst.includes(rep) ? (aff = devoil(rep, myst, aff)) : life--;
    alert(aff);
  }
}

pendu();

// EXO1---------------------------------------------------------
