<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire</title>
    <link rel="stylesheet" href="bootstrap.css">
</head>
<body>
<header>
<?php
include_once("navbar.php");
?>
</header>
    <div class="container col-12 col-md-6 p-5 d-md-flex">
        <div class="card p-4">
            <div>
                <form action="traitement.php" method="post">
                <p class="card-header p-2 mb-5">Votre Devis</p>
                <div class="card-body m-5">
                    <label class="m-2" for="age">Entrer votre age :
                        <input id="age" type="number" name="age" placeholder="Votre age ?" required>
                    </label for="permis">
                    <p>Depuis combien d'annee avez-vous le permis ?</p>
                    <label class="m-2" for="permis">Moins de 2ans
                        <input id="inf" type="radio" name="permis" value="0" required>
                    </label>
                    <label class="m-2" for="permis">Plus de 2ans
                        <input id="sup" type="radio" name="permis" value="1" required>
                    </label>
                    </label>
                    </label>
                    <p>Combien d'accident avez-vous eu ?</p>
                    <label for="accident" class="m-2" for="permis">0
                        <input id="zero" type="radio" name="accident" value="0" required >
                    </label>
                    <label class="m-2" for="permis">1
                        <input id="un" type="radio" name="accident" value="1">
                    </label>
                    <label class="m-2" for="permis">2
                        <input id="deux" type="radio" name="accident" value="2">
                    </label>
                    <label class="m-2" for="permis">3+
                        <input id="trois" type="radio" name="accident" value="3">
                    </label>
                    <label class="m-2" for="permis">Depuis combien de temps êtes vous inscrit chez nous ?
                        <input id="date" type="date" name="anneeInscription" max="<?php echo date('Y-m-d'); ?>">
                    </label>
                    </label>
                </div>
                <button type="submit" id="btnResultat">Afficher Date</button>
                </form>
            </div>
        </div>
    </div>
</html>