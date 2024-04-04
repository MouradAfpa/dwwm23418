<?php
session_start();

$numberCard = $_POST['numberCard'];
$nomCard = $_POST['namCard'];
$numberCrypto = $_POST['numberCrypto'];
$dateCard = $_POST['dateCard'];
$premium = $_SESSION['premium'];
$_SESSION['premium'] = false;



if (strlen($numberCard) !== 16 || !ctype_digit($numberCard)) {
    $_SESSION['message'] = "Le numéro de carte doit comporter 16 chiffres.";
    header('Location: premium.php');
    exit;
}

if (strlen($numberCrypto) !== 3 || !ctype_digit($numberCrypto)) {
    $_SESSION['message'] = "Le cryptogramme doit comporter 3 chiffres.";
    header('Location: premium.php');
    exit;
}

$currentDate = date('Y-m-d');
if ($dateCard <= $currentDate) {
    $_SESSION['message'] = "La date d'expiration doit être supérieure à la date du jour.";
    header('Location: premium.php');
    exit;
}

$_SESSION['premium'] = true;


if ($_SESSION['premium']) {
    $_SESSION['message'] = "Bienvenue dans le compte Premium";
} else {
    $_SESSION['message'] = "Bienvenue !";

}

header('Location: affichageTaches.php');
exit;
?>




