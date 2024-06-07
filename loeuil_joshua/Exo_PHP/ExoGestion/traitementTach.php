<?php

session_start();


if (!isset($_SESSION["Utilisateur"])) {
    $_SESSION["Utilisateur"] = [
        "Tache" => [],
    ];
};

$tabU = $_SESSION["Utilisateur"];


$newTache=[
"titre" => $_POST["title"],
"desc" => $_POST["description"],
"dateB" => $_POST["dateB"],
];

$tabU["Tache"][] = $newTache;

$_SESSION["Utilisateur"] = $tabU;

header("Location: taches.php")


?>