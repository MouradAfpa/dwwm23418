<?php

$email = filter_var($_POST["email"], FILTER_VALIDATE_EMAIL);
$username = htmlspecialchars($_POST["username"]);
$premium = $_POST["Prem"];

$mdp = $_POST["mdp"];
$mdpC = $_POST["mdpC"];


$mdpHash = password_hash($mdp, PASSWORD_BCRYPT);



if($email != FALSE && ($mdp == $mdpC)){
    session_start();

    $_SESSION["Utilisateur"] = [
        "email" => $email,
        "Password" => $mdpHash,
        "user" => $username,
        "casePremium" => $premium,
        "role"
    ];
    if($premium == "on"){
    header("Location: premium.php");
}else{
header("Location: Connexion.php");
$_SESSION["Utilisateur"] = [
    "email" => $email,
    "Password" => $mdpHash,
    "user" => $username,
    "casePremium" => $premium,
    "role" => "Classique"
];
}
}else{
    header("Location: Inscription.php");
    echo "Mot de passe invalid";
};


?>