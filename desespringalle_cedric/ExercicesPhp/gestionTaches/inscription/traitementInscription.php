<?php

session_start();

$username = $_POST["username"];
$email = $_POST["email"];
$password = $_POST["password"];
$confirmPassword = $_POST["confirmPassword"];

if (empty($username) || empty($email) || empty($password) || empty($confirmPassword)) {
    echo "Veuillez remplir tous les champs.";
} else {
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        if ($password !== $confirmPassword) {
            echo "Les mots de passe ne correspondent pas.";
        } else {
            $hashedPassword = password_hash($password, PASSWORD_BCRYPT);

            $userDetails = [
                "username" => $username,
                "email" => $email,
                "password" => $hashedPassword,
                "tasks" => []
            ];


            $_SESSION["userDetails"] = $userDetails;

            echo "Inscription réussie!";

            header("Location: ../connexion/connexion.php");
            exit();
        }
    } else {
        echo "Veuillez saisir une adresse e-mail valide.";
    }
}
