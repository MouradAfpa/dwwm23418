<?php
session_start();

// Déconnexion de l'utilisateur
if (isset($_POST["logout"]) && $_POST["logout"] == 1) {
    // Supprimer toutes les données de la session
    session_unset();
    session_destroy();

    header("Location: ../inscription/inscription.php");
    exit();
}