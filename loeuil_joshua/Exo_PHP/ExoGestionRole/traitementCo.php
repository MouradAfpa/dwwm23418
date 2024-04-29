<?php

session_start();

$mail = filter_var($_POST["mail"],FILTER_VALIDATE_EMAIL);
$mdpCo = $_POST["mdpCo"];

$tabUti = $_SESSION["Utilisateur"];

$verif = password_verify($mdpCo, $tabUti["Password"]);


if($verif == true){
    if($tabUti["role"] == "Premium"){
    header("Location: page_premium.php");
}else{
    header("Location: page_publique.php");
}
}else{
    header("Location: connexion.php");
}



?>