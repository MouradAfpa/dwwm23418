<?php
session_start();


if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_POST['index'])) {
        $index = $_POST['index'];

        if (isset($_SESSION['taches'][$index])) {
            unset($_SESSION['taches'][$index]);

            $_SESSION['message'] = "La tâche a été supprimée avec succès.";
            header('Location: affichageTaches.php');
            exit;
        }}}
?>
