document.addEventListener("DOMContentLoaded", function() {
  // Sélectionne le canvas et obtient son contexte de rendu 2D
  const canvas = document.getElementById("paintCanvas");
  const ctx = canvas.getContext("2d");

  let painting = false; // Indique si l'utilisateur est en train de dessiner

  // Fonction appelée lorsque l'utilisateur commence à dessiner
  function startPosition(e) {
    painting = true; // Met à jour l'état du dessin en cours
    draw(e); // Appelle la fonction draw avec l'événement e (coordonnées de la souris)
  }

  // Fonction appelée lorsque l'utilisateur arrête de dessiner
  function endPosition() {
    painting = false; // Met à jour l'état du dessin en cours
    ctx.beginPath(); // Commence un nouveau chemin de dessin
  }

  // Fonction appelée lors du mouvement de la souris pendant le dessin
  function draw(e) {
    if (!painting) return; // Si l'utilisateur n'est pas en train de dessiner, arrêtez la fonction

    // Configuration des paramètres du dessin (épaisseur de ligne, style, couleur)
    ctx.lineWidth = 3;
    ctx.lineCap = "round";
    ctx.strokeStyle = "red";

    // Trace une ligne du dernier point à la position actuelle de la souris
    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke(); // Applique le dessin sur le canvas
    ctx.beginPath(); // Commence un nouveau chemin de dessin à partir de la position actuelle de la souris
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop); // Déplace le point de départ du chemin vers la position actuelle de la souris
  }

  // Ajoute des écouteurs d'événements pour détecter le début, la fin et le mouvement de la souris sur le canvas
  canvas.addEventListener("mousedown", startPosition); // Lorsque le bouton de la souris est enfoncé
  canvas.addEventListener("mouseup", endPosition); // Lorsque le bouton de la souris est relâché
  canvas.addEventListener("mousemove", draw); // Lorsque la souris est déplacée
});

function reload(){
window.location.reload()
};
