<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="formulaire.css">
    <title>Formulaire</title>
</head>

<body>
    <?php
    include("navbar.php");
    ?>
    <h2>Veuillez remplir le formulaire suivant :</h2>
    <div class="form">
        <form action="traitementFormulaire.php" method="post">
            <div class="firstForm">
                <h3>Nom :</h3>
                <label for="nom"><input type="text" placeholder="Entrez votre nom" name="nom" class="inputText"></label>
                <h3>Prénom :</h3>
                <label for="prenom"><input type="text" placeholder="Entrez votre prénom" name="prenom" class="inputText"></label>
                <h3>Age :</h3>
                <label for="age"><input type="text" placeholder="Entrez votre âge" name="age" class="inputText"></label>
            </div>
            <div class="secForm">
                <h3>Années de permis :</h3>
                <label for="permis"><input type="text" placeholder="Entrez votre nombre d'années de permis" name="permis" class="inputText"></label>
                <h3>Nombre d'accidents :</h3>
                <label for="accident"><input type="text" placeholder="Entrez Le nombre d'accidents que vous avez eu" name="accident" class="inputText"></label><br><br>
                <label for="anciennete"><input type="checkbox" name="anciennete">Avez-vous plus de cinq ans d'ancienneté chez nous?</label><br><br>
                <input type="submit" value="Envoyer">
            </div>
        </form>
    </div>
</body>

</html>