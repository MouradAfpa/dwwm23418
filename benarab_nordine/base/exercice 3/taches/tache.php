<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nouvelle Tâche</title>
</head>
<body>

<form action="traitementTache.php" method="post">
    <h2>Nouvelle Tâche</h2>
    <label for="titre">Titre de la tâche:</label><br>
    <input type="text" id="titre" name="titre" required><br><br>
    <label for="description">Description:</label><br>
    <textarea id="description" name="description" rows="4" cols="50" required></textarea><br><br>
    <label for="date_butoire">Date butoire:</label><br>
    <input type="date" id="date_butoire" name="date_butoire" required><br><br>
    <input type="submit" value="Créer la tâche">
</form>



</body>
</html>
