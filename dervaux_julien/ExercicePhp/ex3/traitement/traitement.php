<?php

session_start();

$username = htmlspecialchars($_POST["username"]);
$email = htmlspecialchars($_POST["email"]);
$mdp = $_POST["mdp"];
$validateMdp = $_POST["confirmationMdp"];

$verifEmail = filter_var($email, FILTER_VALIDATE_EMAIL);

$userStock = [
    "username" => $username,
    "email" => "",
    "mdp" => "",
    "inscrit" => false,
    "connect" => false,
    "premium" => false,
    "tasks" => [],
];

if ($verifEmail && $mdp === $validateMdp) {
    $userStock["email"] = $email;
    $userStock["mdp"] = password_hash($mdp, PASSWORD_BCRYPT);
    $userStock["inscrit"] = true;
    $_SESSION["userStock"] = $userStock;
    header("Location:../connection.php");
    exit;
} else {
    header("Location:../inscription.php");
    echo "Champs incorrect";
}
