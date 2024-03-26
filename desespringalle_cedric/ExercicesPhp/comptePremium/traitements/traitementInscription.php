<?php
session_start();

// test si le formulaire utilise bien la méthode post
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = htmlspecialchars($_POST['nom']);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    $premium = isset($_POST['passer_premium']) ? true : false;

    if (empty($name) || empty($email)) {
        echo 'Veuillez remplir les champs "nom" et "email"';
    } else {
        if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
            $_SESSION['nom'] = $name;
            $_SESSION['email'] = $email;
            $_SESSION['passer_premium'] = $premium;

            if ($premium) {
                header('Location: ../pages/paiement.php');
                exit();
            } else {
                header('Location: ../pages/publique.php');
                exit();
            }
        } else {
            echo 'Veuillez saisir une adresse mail valide.';
        }
    }
} else {
    header("Location: ../pages/inscription.php");
    exit();
}
