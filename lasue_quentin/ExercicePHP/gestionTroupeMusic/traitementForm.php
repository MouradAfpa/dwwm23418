<?php
// Inclure le fichier contenant la classe Database
include "Database.php";
//Nouvelle instance et connexion
$db = new Database();
$connexion = $db->connect();
// Vérifier si les données pour l'ajout sont présentes dans $_POST
if (
    isset($_POST['nom']) &&
    isset($_POST['age']) &&
    isset($_POST['type'])
) {
    // Afficher un message de confirmation
    echo "Formulaire Ajout valide.";

    // Récupérer et nettoyer les données du formulaire
    $nom = htmlspecialchars($_POST['nom']);
    $age = htmlspecialchars($_POST['age']);
    $type = $_POST['type'];

    // Appeler la méthode d'ajout de musicien de la classe Database
    $db->ajoutMusicien($type, $nom, $age);
}

// Vérifier si les données pour la modification sont présentes dans $_POST
if (
    isset($_POST['id']) &&
    isset($_POST['attribut']) &&
    isset($_POST['newNom']) &&
    isset($_POST['newAge'])
) {
    // Afficher un message de confirmation
    echo "Formulaire Modif valide.";

    // Récupérer et nettoyer les données du formulaire
    $id = $_POST['id'];
    $attribut = $_POST['attribut'];
    $newNom = htmlspecialchars($_POST['newNom']);
    $newAge = htmlspecialchars($_POST['newAge']);

    // Appeler la méthode de mise à jour des membres de la classe Database
    $db->updateMember($id, $attribut, $newNom, $newAge);
}

// Vérifier si l'ID pour la suppression est présent dans $_POST
if (isset($_POST['idSup'])) {
    // Récupérer l'ID de la suppression
    $idSup = $_POST['idSup'];

    // Afficher un message de confirmation
    echo "Suppression effectuer.";

    // Appeler la méthode de suppression de membre de la classe Database
    $db->deleteMember($idSup);
    $db->close();
}

// Rediriger vers la page index.php après le traitement des formulaires
header("Location:index.php");
