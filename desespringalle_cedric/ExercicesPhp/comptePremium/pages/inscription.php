<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
</head>

<body>
    <h1>Inscription</h1>
    <form method="post" action="../traitements/traitementInscription.php">
        <label for="nom">Nom:</label>
        <input type="text" name="nom" required><br><br>

        <label for="email">Email:</label>
        <input type="email" name="email" required><br><br>

        <label for="passer_premium">Passer Premium:</label>
        <input type="checkbox" name="passer_premium"><br><br>

        <button type="submit">S'inscrire</button>
    </form>
</body>

</html>