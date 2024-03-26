<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paiement Premium</title>
</head>

<body>
    <h1>Paiement Premium</h1>
    <form method="post" action="../traitements/traitementPaiement.php">
        <label for="num_bancaire">Numéro de carte:</label>
        <input type="number" name="num_bancaire" required><br><br>

        <button type="submit">Valider le paiement</button>
    </form>
</body>

</html>