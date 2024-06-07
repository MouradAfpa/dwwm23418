// ---- Exercice 1 ---

// function changer_style() {
//     var paragraphe = document.getElementById("parag1");
//     paragraphe.style.color = "white";
//     paragraphe.style.backgroundColor = "black";
//     paragraphe.style.border = "1px dotted black";
//     paragraphe.style.textIndent = "5px";
//   }

//  ----- Classe active ----

// function changer_styleActive(){
//   var p = document.getElementById('parag1');
//   if(p.classList.contains('active')){
//     p.classList.remove('active')
//     else{
//       p.classList.add('active');
//     }
//   }
// }

// --- Variante avec ajout de fonctionnalité ----


  function changer_style() {
    var paragraphe = document.getElementById("parag1");
    var bouton = document.querySelector("button");
    var style = window.getComputedStyle(paragraphe);

    if (style.color === "rgb(255, 255, 255)") {
      paragraphe.style.color = "";
      paragraphe.style.backgroundColor = "";
      paragraphe.style.border = "";
      paragraphe.style.padding = "";
      paragraphe.style.margin = "";
      bouton.textContent = "Changer Style";
    } else {
      paragraphe.style.color = "white";
      paragraphe.style.backgroundColor = "black";
      paragraphe.style.border = "2px dotted white";
      paragraphe.style.marginLeft = "5px";
      bouton.textContent = "Réinitialiser le Style";
    }
  }

// ---- Exercice 2 ----

function factorielle(n) {
  if (n < 0) {
  alert("Saisir un nombre entier positif.");
    return;
  } else {
    let resultat = 1;
    while (n > 0) {
      resultat *= n;
      n--;
    }
    return resultat;
  }
}

function sommeFact(n) {
  let z = 0;
  for (let i = 1; i <= n; i++) {
    z += factorielle(i);
  }
  return z;
}

// document.getElementById("resultatInout").value = z;

function calculerFactorielle() {
  let inputNombre = document.getElementById("inputNombre").value;
  let nombre = parseInt(inputNombre);

  let resultatFact = factorielle(nombre);
  document.getElementById("resultatLabel").innerHTML = "Factorielle : " + resultatFact;

  let resultatSommeFact = sommeFact(nombre);
  document.getElementById("resultatLabel").innerHTML += " | Somme Factorielles : " + resultatSommeFact;
}

  /// ---- Exercice 3 ----



  function demanderUnEntier(n){
    while (isNaN(n) || (n<0)|| (n%1 !== 0)) {
    n = prompt("Saisir un entier naturel");
    }
    return n;
  } 

//   let nombreSaisi = demanderUnEntier();
//   document.write("Votre nombre : " + nombreSaisi);

// function afficherTableMultiplication() {
  
//   let nombre = document.getElementById("nombre").value;
//   // let nombre = prompt("Entrez un entier positif"); en utilisant la boite de dialogue
//   if (isNaN(nombre) || (nombre<=0)|| (nombre%1 !== 0)) {
//       alert("Veuillez saisir un nombre entier et positif.");
//       return nombre;
//   }

//   let tableHTML = "<h2>Table de multiplication de " + nombre + "</h2>";
//   tableHTML += "<table border='1px'><tr><th>Multiplier</th><th>Résultat</th></tr>";

//   for (let i = 1; i <= 10; i++) {
//       let resultat = nombre * i;
//       tableHTML += "<tr><td>" + nombre + " x " + i + "</td><td>" + resultat + "</td></tr>";
//   }
//   tableHTML += "</table>";
//   document.getElementById("tableMultiplication").innerHTML = tableHTML;
// }

function touteLesTableMultiplication(){
  let tableHTML = "";

for (let j = 1; j <=10; j++) {
  tableHTML += "<table border='1px'><tr><th>Multiplier</th><th>Résultat</th></tr>";
for (let i = 1; i <= 10; i++) {
    let resultat = j * i;
    tableHTML += "<tr><td>" + j + " x " + i + "</td><td>" + resultat + "</td></tr>";
}
tableHTML += "</table>";
document.getElementById("tableMultiplication").innerHTML = tableHTML;
fnStyle();
}
}

function fnStyle(){
  var fn = document.getElementsByTagName("table");
  var div = document.getElementById("tableMultiplication");
for (let i = 0; i < fn.length; i++) {
  fn[i].style.color = "red";
  fn[i].style.borderCollapse = "collapse";
  fn[i].style.border = "5px, black";
  fn[i].style.marginTop = "10px";
  fn[i].style.marginLeft = "20px";
  fn[i].style.backgroundColor = "blue";
  fn[i].style.textAlign = "center";
  fn[i].style.fontSize = "40px";

  div.style.display = "flex";
  div.style.flexWrap = "wrap";
}
}
