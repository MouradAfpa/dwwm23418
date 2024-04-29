<?php
session_start();

$titre = $_POST['titre'];
$description = $_POST['description'];
$date = $_POST['date'];

$tache = [
    'titre' => $titre,
    'description' => $description,
    'date' => $date
];

if (empty($_SESSION['taches'])) {
    $_SESSION['taches'] = [];
}

$_SESSION['taches'][] = $tache;

header('Location: affichageTaches.php');
exit;
?>
