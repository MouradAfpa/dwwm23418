<?php

$email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
$username = htmlspecialchars($_POST["username"]);

$mdp = $_POST["mdp"];
$mdpC = $_POST["mdpC"];


$mdpHash = password_hash($mdp, PASSWORD_BCRYPT);



if($email != FALSE && ($mdp == $mmdpC)){
    session_start();

    $_SESSION["Utilisateur"] = [
        "email" => $email,
        "Password" => $mdpHash,
        "user" => $username,
        "Tache" => [],
    ];
    header("Location: connexion.php");
}else{
    header("Location: formulaireInscrip.php");
    echo "Mot de passe invalid";
};


?>