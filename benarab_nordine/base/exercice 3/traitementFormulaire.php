<?php
session_start();

if (
    isset($_POST['email'], $_POST['login'], $_POST['password'], $_POST['password2']) &&
    isset($_POST['email'][0], $_POST['login'][0], $_POST['password'][0], $_POST['password2'][0]) &&
    $_POST['password'] == $_POST['password2'] &&
    filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)
) {
    $utilisateur = [
        'login' => $_POST['login'],
        'email' => $_POST['email'],
        'password_hash' => password_hash($_POST['password'], PASSWORD_DEFAULT)
    ];
    $_SESSION['utilisateur'] = $utilisateur;
    header("Location: confirmation.php");
    exit();
} else {
    
    header("Location: inscription.php");
    exit();
}
?>
