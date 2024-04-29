<?php
include_once("../../CLASS/ClassConnexionBdd.php");

$database = new Database;

$emailCo = htmlspecialchars($_POST["emailCo"]);
$mdpCo = $_POST["mdpCo"];

$recupBdd = $database->selectInscriptionBdd($emailCo);
$recupEmailBdd = $recupBdd[0]["EMAIL"];
$recupMdpBdd = $recupBdd[0]["MDP"];
$recupNom = $recupBdd[0]["NOM"];

var_dump($recupMdpBdd);
var_dump($recupEmailBdd);
var_dump($recupNom);

if ($emailCo === $recupEmailBdd && password_verify($mdpCo,$recupMdpBdd)) {
        session_start(); 
        $_SESSION["userStock"]["connect"] = true; 
        $_SESSION["userStock"]["nom"] = $recupNom; 
        var_dump($_SESSION["userStock"]["nom"]);
        header("Location:../../welcome.php");
        exit;
    } else {
        echo "Information incorrect";
    }
?>
