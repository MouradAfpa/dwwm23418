<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <h1>Connexion</h1>

    <fieldset>

        <form action="traitementCo.php" method="post">

            <legend>Adresse Mail:
            <input type="email" name="mail" id="mailCo" required></legend><br>

            <legend>Mot de passe
            <input type="password" name="mdpCo" id="mdpCo"></legend><br>

            <div id="connect"></div>
            <input type="submit" value="Se connecter">


            <a href="Inscription.php">S'inscrire ?</a>



        </form>
    </fieldset>
</body>

</html>