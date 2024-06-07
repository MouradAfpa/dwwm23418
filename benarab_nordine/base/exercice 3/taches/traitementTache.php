<?php
session_start();

if (
    isset($_POST['titre'], $_POST['description'], $_POST['date_butoire']) &&
    isset($_POST['titre'][0], $_POST['description'][0],$_POST['date_butoire'][0])
) {
    
    $tache = [
        'titre' => $_POST['titre'],
        'description' => $_POST['description'],
        'date_butoire' => $_POST['date_butoire']
    ];

   
    $_SESSION['tache'] = $tache;


    header("Location: afficherTache.php");
    exit();
} else {
   
    header("Location: inscription.php");
    exit();
}
?>
