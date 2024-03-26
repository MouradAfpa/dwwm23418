<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des Tâches</title>
</head>
<body>

<h2>Liste des Tâches</h2>

<?php
session_start();

if (!isset($_SESSION['taches'])) {
    $_SESSION['taches'] = array();
}


if (isset($_SESSION['nouvelle_tache'])) {

    $_SESSION['taches'][] = $_SESSION['nouvelle_tache'];
    unset($_SESSION['nouvelle_tache']); 
}


if (!empty($_SESSION['taches'])) {
   
    echo "<table border='1'>";
    echo "<tr><th>Titre</th><th>Description</th><th>Date butoire</th></tr>";
    foreach ($_SESSION['taches'] as $tache) {
        $titre = htmlspecialchars($tache['titre']);
        $description = htmlspecialchars($tache['description']);
        $date_butoire = htmlspecialchars($tache['date_butoire']);
        echo "<tr><td>$titre</td><td>$description</td><td>$date_butoire</td></tr>";
    }
    echo "</table>";
} else {
    
    echo "<p>Aucune tâche n'est présente.</p>";
}
?>

<a href="tache.php"><button>Ajouter une nouvelle tâche</button></a>

</body>
</html>
