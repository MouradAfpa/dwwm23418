<?php

session_start();

$emailCo = $_POST["emailCo"];
$mdpCo = $_POST["mdpCo"];

$userStock = $_SESSION["userStock"];

$mdpHash = $userStock['mdp'];

if (password_verify($mdpCo, $mdpHash) && $emailCo === $userStock["email"]) {
    $_SESSION["userStock"]["connect"] = true;
    header("Location:../welcome.php");
    exit;
} else {
    echo "Non";
    header("Location:../connection.php");
}

?>

