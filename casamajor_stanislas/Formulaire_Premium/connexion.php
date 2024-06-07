<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Connexion</title>
</head>
<body>
    <h1>Connexion :</h1>
    <fieldset>
    <form action="traitement_connexion.php" method="post">
    <label for="">Nom : <input type="text" name="nomC"></label>
    <label for="">Prénom : <input type="text" name="prenomC"></label>
    <label for="">Mot de passe : <input type="password" name="mdpC"></label>
    <label for=""><input type="submit" name="connexion" value="Connexion"></label>
    </form>
    </fieldset>

    <?php

    session_start();
    $hash=isset($_SESSION['utilisateurPremium']['password']);
  



    ?>
</body>
</html>