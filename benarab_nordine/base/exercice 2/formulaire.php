<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire en HTML</title>
</head>

<body>
    <?php include_once('navbar.php');?>




    <h2>Formulaire </h2>
    <form action="/traitementformulaire.php" method="post">
        <fieldset>
            <legend>Veuillez entrer vos informations</legend>
            
            <label>Votre Age</label><br>
            <input type="number" name="age"><br>
            <label>Nombre d'années de permis</label><br>
            <input type="number" name="permis"><br>
            <label>nombre de sinistre depuis les 24 derniers mois</label><br>
            <input type="number" name="sinistre"><br>

            <label>Une question?</label><br>
            <textarea name="question"></textarea><br>
            <input type="submit" value="Votre tarification">
        </fieldset>
    </form>
</body>

</html>