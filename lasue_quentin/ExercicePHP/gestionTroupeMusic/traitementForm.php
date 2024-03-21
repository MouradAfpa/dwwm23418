<?php
session_start();
$error = "";
if (
    isset($_POST['nom']) &&
    isset($_POST['age']) &&
    isset($_POST['type'])
) {
    $nom = htmlspecialchars($_POST['nom']);
    $age = htmlspecialchars($_POST['age']);
    $type = htmlspecialchars($_POST['type']);
} else {
    $error = "Veuillez remplir tous les champs.";
    header("Location:index.php");
}

$_SESSION['error'] = $error;
