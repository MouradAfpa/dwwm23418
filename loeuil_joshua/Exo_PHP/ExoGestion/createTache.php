<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        include("navbar.php");
    ?>
<h1>Creation Tache</h1>

<fieldset>
<form action="traitementTach.php" method="post">

<legend>Titre de la tache
<input type="text" name="title"></legend><br>

<legend>Description de la tache
<input type="text" name="description"></legend><br>

<legend for="dateB">Date butoire de la tache
<input type="date" name="dateB" min="2024-03-18"></legend><br>

<input type="submit" value="Creer">



</form>

    </fieldset>

</body>
</html>