<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire d'inscription</title>
</head>

<body>
    <h2>Inscription</h2>
    <form action="traitementInscription.php" method="post">
        <label for="username">Nom d'utilisateur:</label>
        <input type="text" name="username"><br><br>

        <label for="email">Adresse e-mail:</label>
        <input type="email" name="email"><br><br>

        <label for="password">Mot de passe:</label>
        <input type="password" name="password"><br><br>

        <label for="confirmPassword">Confirmer le mot de passe:</label>
        <input type="password" name="confirmPassword"><br><br>

        <input type="submit" value="S'inscrire">
    </form>
</body>

</html>