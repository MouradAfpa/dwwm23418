<?php

session_start();

if (isset($_POST["connexion"])) {
    $nomC = $_POST["nomC"];
    $prenomC = $_POST["prenomC"];
    $mdpC = $_POST["mdpC"];

    if (array_search($nomC,$_SESSION["utilisateurPremium"]) && array_search($prenom,$_SESSION["utilisateurPremium"])) {
        header("Location:page_premium.php");
    } else  {
        header("Location:page_publique.php");
    }
}
