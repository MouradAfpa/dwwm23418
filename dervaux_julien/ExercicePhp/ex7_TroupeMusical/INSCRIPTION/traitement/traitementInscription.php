<?php
session_start();

include_once("../../CLASS/ClassConnexionBdd.php");

$database = new Database;

$username = htmlspecialchars($_POST["username"]);
$email = htmlspecialchars($_POST["email"]);
$mdp = $_POST["mdp"];
$validateMdp = $_POST["confirmationMdp"];

$stockMdp = password_hash($mdp, PASSWORD_BCRYPT);

$verifEmail = filter_var($email, FILTER_VALIDATE_EMAIL);

$recupBdd = $database->selectInscriptionBdd($email);
$recupEmailBdd = $recupBdd[0]["EMAIL"];
$redirection = "Adresse mail existante";

var_dump($recupEmailBdd);

if (!$verifEmail || $mdp !== $validateMdp || $email === $recupEmailBdd) {
    $_SESSION["redirection"] = $redirection;
    header("Location:../inscription.php");
    exit;
} else {
    try {
        $database->addInscriptionBdd($username, $email, $stockMdp);
        session_destroy();
        header("Location:../connexion.php");
        exit;
    } catch (PDOException $e) {
        header("Location:../error.php");
        exit;
    }
}
