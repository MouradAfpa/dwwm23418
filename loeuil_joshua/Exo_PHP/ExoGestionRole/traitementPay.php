<?php
session_start();



$tabU = $_SESSION["Utilisateur"];

$mail = $tabU["email"];
$passW = $tabU["Password"];
$user = $tabU["user"];

$tab =[
"email" => $mail,
"Password" => $passW,
"user" => $user,
"role" => "Premium"
];


$_SESSION["Utilisateur"] =$tab;

var_dump($_SESSION["Utilisateur"]);

header("Location: page_premium.php");