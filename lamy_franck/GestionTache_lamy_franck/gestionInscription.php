<?php
session_start();

$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];
$passwordConfirm = $_POST['passwordConfirm'];
$premium = isset($_POST['premium']);

if (isset($name) && isset($email) && isset($password) && isset($passwordConfirm)) {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        if ($password === $passwordConfirm) {
            $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

            $_SESSION['utilisateur'] = [
                'name' => $name,
                'email' => $email,
                'password' => $hashedPassword,
                'premium' => $premium,
            ];

            $_SESSION['message'] = "Inscription réussie.";

            if ($premium) {
                header('Location: premium.php');
                exit;
            } else {
                header('Location: formConnexion.php');
                exit;
            }
        } else {
            $_SESSION['message'] = "Les mots de passe ne correspondent pas.";
        }
    } else {
        $_SESSION['message'] = "L'adresse e-mail n'est pas valide.";
    }
} else {
    $_SESSION['message'] = "Tous les champs doivent être remplis.";
}

header('Location: formInscription.php');
exit;
?>
