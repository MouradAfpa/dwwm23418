<?php
include "Database.php";

if (
    isset($_POST['nom']) &&
    isset($_POST['age']) &&
    isset($_POST['type'])
) {
    echo "Formulaire Ajout valide.";
    $nom = htmlspecialchars($_POST['nom']);
    $age = htmlspecialchars($_POST['age']);
    $type = $_POST['type'];
    $db = new Database();
    $db->ajoutMusicien($type, $nom, $age);
}

if (
    isset($_POST['id']) &&
    isset($_POST['attribut']) &&
    isset($_POST['newNom']) &&
    isset($_POST['newAge'])
) {
    echo "Formulaire Modif valide.";
    $id = $_POST['id'];
    $attribut = $_POST['attribut'];
    $newNom = htmlspecialchars($_POST['newNom']);
    $newAge = htmlspecialchars($_POST['newAge']);

    $db = new Database();
    $db->updateMember($id, $attribut, $newNom, $newAge);
}

if (isset($_POST['idSup'])) {
    $idSup = $_POST['idSup'];
    echo "Suppression effectuer.";
    $db = new Database();
    $db->deleteMember($idSup);
}

header("Location:index.php");
