<?php session_start(); ?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion des tâches</title>
</head>

<body>

    <?php 
        $username = $_SESSION["userDetails"]["username"];
        echo "<h1>Bienvenue $username</h1>";
    ?>

    <h2>Se déconnecter</h2>

    <form action="../connexion/deconnexion.php" method="post">
        <input type="hidden" name="logout" value="1">
        <input type="submit" value="Déconnexion">
    </form>

    <h2>Ajouter une tâche</h2>

    <form action="traitementTaches.php" method="post">
        <label for="titre">Titre:</label>
        <input type="text" name="titre" required><br><br>

        <label for="description">Description:</label><br>
        <textarea name="description" rows="4" cols="50"></textarea><br><br>

        <label for="date_butoire">Date butoire:</label>
        <input type="date" name="date_butoire" required><br><br>

        <input type="submit" name="addTask" value="Ajouter">
    </form>

    <h2>Liste des tâches</h2>

    <ul>
        <?php
        if (isset($_SESSION["userDetails"]["tasks"]) && !empty($_SESSION["userDetails"]["tasks"])) {
            foreach ($_SESSION["userDetails"]["tasks"] as $index => $task) {
                echo "<li>";
                echo "<strong>" . $task["titre"] . "</strong><br>";
                echo $task["description"] . "<br>";
                echo "Date butoire: " . $task["date_butoire"];
                echo '<br></br><a href="../taches/traitementTaches.php?deleteTask=' . $index . '" onclick="return confirm(\'Êtes-vous sûr de vouloir supprimer cette tâche ?\')">Supprimer</a>';
                echo "</li><br></br>";
            }
        } else {
            echo "<li>Aucune tâche pour le moment.</li>";
        }
        ?>
    </ul>
</body>

</html>