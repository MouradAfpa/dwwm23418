<?php
session_start();

if (!isset($_SESSION["userDetails"])) {
    header("Location: ../connexion/connexion.php");
    exit();
}

// Tableau de tâches (initialisation vide si c'est la première fois)
$tasks = isset($_SESSION["userDetails"]["tasks"]) ? $_SESSION["userDetails"]["tasks"] : [];

// Ajouter une nouvelle tâche
if (isset($_POST["addTask"])) {
    $newTask = [
        "titre" => $_POST["titre"],
        "description" => $_POST["description"],
        "date_butoire" => $_POST["date_butoire"]
    ];

    // Ajouter la nouvelle tâche au tableau des tâches de l'utilisateur
    $tasks[] = $newTask;

    // Mettre à jour les détails de l'utilisateur dans la session
    $_SESSION["userDetails"]["tasks"] = $tasks;

    header("Location: ../taches/gestionTaches.php");
    exit();
}

// Supprimer une tâche
if (isset($_GET["deleteTask"])) {
    $taskIndex = $_GET["deleteTask"];
    if (isset($tasks[$taskIndex])) {
        unset($tasks[$taskIndex]); // Supprimer la tâche du tableau
        $_SESSION["userDetails"]["tasks"] = $tasks; // Mettre à jour le tableau des tâches dans la session
        header("Location: ../taches/gestionTaches.php");
        exit();
    }
}

header("Location: ../taches/gestionTaches.php");
exit();
