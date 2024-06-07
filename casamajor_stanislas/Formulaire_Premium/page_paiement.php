<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paiement</title>
</head>

<body>
    <h1>Formulaire de paiement Premium :</h1>
    <fieldset>
        <form action="connexion.php" method="post">
            <label for="">Nom du propriétaire : <br><input type="text" name="user" required></label><br><br>
            <label for="">Numéro de carte : <br><input type="text" name="ndc" minlength="16" maxlength="16" required></label><br><br>
            <label for="">Cryptogramme visuel : <br><input type="text" name="crypto" minlength="3" maxlength="3" required></label><br><br>
            <label for=""><input type="submit" name="soumettre"></label>


            
        </form>
    </fieldset>

</body>

</html>