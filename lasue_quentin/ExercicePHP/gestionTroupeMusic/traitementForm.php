<?php
include "Database.php";

if (
    isset($_POST['nom']) &&
    isset($_POST['age']) &&
    isset($_POST['type'])
) {
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
    $id = $_POST['id'];
    $attribut = $_POST['attribut'];
    $newNom = htmlspecialchars($_POST['newNom']);
    $newAge = htmlspecialchars($_POST['newAge']);

    $db = new Database();
    $db->updateMember($id, $attribut, $newNom, $newAge);
}

if (isset($_POST['idSup'])) {
    $idSup = $_POST['idSup'];

    $db = new Database();
    $db->deleteMember($idSup);
}

header("Location:index.php");
