<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Souscription assurance</title>
</head>
<body>
    <header>
        <?php
        include("navbar.php");
        
        ?>
    </header>


    <h1>Formulaire</h1>
    <form action="traitementTarif.php" method="post">
    <label for="age">Quelle est votre age ?</label><br>
    <input type="number" name="age" id="age"><br><br>
    <label for="permis">Depuis combien d'année etes vous titulaire du permis de conduire ?</label><br>
    <input type="number" name="permis" id="permis"><br><br>
    <label for="accident">Combien d'accident avez vous provoqué ? </label><br>
    <input type="number" name="accident" id="accident"><br><br>
    <label for="fidel">Depuis combien de temps(année) etes-vous client ?</label><br>
    <input type="number" name="fidel" id="fidel"><br><br>
    <input type="submit" value="Envoyez">


    </form>

    
</body>
</html>