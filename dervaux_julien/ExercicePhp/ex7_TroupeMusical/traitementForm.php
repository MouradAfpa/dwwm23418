<?php

include_once("CLASS/ClassConnexionBdd.php");

$database = new Database;

if (isset($_POST["username"]) && isset($_POST["age"]) && isset($_POST["instru"])) {
    $nom = htmlspecialchars($_POST["username"]);
    $age = $_POST["age"];
    $instru = $_POST["instru"];
    $imgInstru = $_POST["instru"];
}

try {
    $database->addBdd($nom, $age, $instru);
    // header("Location: affichage.php");
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
var_dump($_POST);


