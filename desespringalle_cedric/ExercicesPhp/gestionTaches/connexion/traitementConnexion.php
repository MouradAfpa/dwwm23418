<?php
session_start();

$email = $_POST["email"];
$password = $_POST["password"];

if (empty($email) || empty($password)) {
    echo "Veuillez remplir tous les champs.";
} else {
    $userDetails = isset($_SESSION["userDetails"]) ? $_SESSION["userDetails"] : [];

    if (!empty($userDetails)) {
        if ($userDetails["email"] === $email) {
            if (password_verify($password, $userDetails["password"])) {
                echo "Connexion réussie!";

                header("Location: ../taches/gestionTaches.php");
                exit();
            } else {
                echo "Mot de passe incorrect.";
            }
        } else {
            echo "Adresse e-mail incorrecte.";
        }
    } else {
        echo "Utilisateur non trouvé.";
    }
}
