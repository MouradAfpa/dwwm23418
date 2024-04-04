<?php
session_start();

$postData = $_POST;

$emailCo = $_POST['email'];
$passwordCo = $_POST['password'];

if (!empty($emailCo) && !empty($passwordCo)) {
    if (filter_var($emailCo, FILTER_VALIDATE_EMAIL)) {
        if (isset($_SESSION['utilisateur'])) {
            $user = $_SESSION['utilisateur'];
            if ($emailCo === $user['email']) {
                if (password_verify($passwordCo, $user['password'])) {
                    $name = $user['name'];
                    $_SESSION['message'] = "Connexion réussie. Bienvenue, " . $name . "!";
                    header('Location: affichageTaches.php');
                    exit;
                } else {
                    $_SESSION['message'] = "Le mot de passe ne correspond pas.";
                }
            } else {
                $_SESSION['message'] = "Adresse e-mail incorrecte.";
            }
        } else {
            $_SESSION['message'] = "Aucun utilisateur trouvé.";
        }
    } else {
        $_SESSION['message'] = "L'adresse e-mail n'est pas valide.";
    }
} else {
    $_SESSION['message'] = "Tous les champs doivent être remplis.";
}

header('Location: formConnexion.php');
exit;
?>
