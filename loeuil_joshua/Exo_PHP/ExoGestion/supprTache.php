<?php
session_start();

$idTach = $_GET["id"];

$tabU = $_SESSION["Utilisateur"];

if($tabU["Tache"][$idTach]){
    unset($tabU["Tache"][$idTach]);
    $_SESSION["Utilisateur"] = $tabU;
}

header("Location: taches.php")

?>