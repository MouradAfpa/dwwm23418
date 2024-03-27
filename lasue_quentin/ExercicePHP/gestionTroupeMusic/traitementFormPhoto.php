<?php
include "Database.php";
if ( //Si l'id existe et le fichier exixte et le fichier a était télécharger avec succés
    isset($_POST['id']) &&
    isset($_FILES['userfile']) &&
    $_FILES['userfile']['error'] === UPLOAD_ERR_OK &&
    in_array($_FILES['userfile']['type'], ['image/jpeg']) && // vérifie si le type de fichier est une image ou autre si on ajoute dans le tableau
    $_FILES['userfile']['size'] < 8388608
) {
    $id = $_POST['id'];
    $photo = $_FILES['userfile']['tmp_name']; // nom du fichier temporaire (pour pas laisser celui de l'utilisateur)
    $db = new Database();
    $db->addPhoto($id, $photo);
    echo"Photo récupéré.";
}

header("Location:index.php");