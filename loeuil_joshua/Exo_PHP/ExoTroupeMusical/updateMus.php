    <?php

$idMu = $_GET["id"];

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="music.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire Mise a jour</title>
</head>
<body>

<a href="index.php"><button>←</button></a>

<div class="formul">
<h1>Modification du Musicien</h1>

<fieldset>



<form action="traitementUp.php" method="post">
    <input type="hidden" name="idMu" value="<?php echo $idMu ?>">
<legend>Nom: <br>
    <input type="text" name="nomM">
</legend><br>
<legend>Age: <br>
    <input type="number" name="ageM">
</legend><br>
<legend>Type: <br>
    <select name="typeM">
        <option value="guitariste">Guitariste</option>
        <option value="trompettiste">Trompettiste</option>
        <option value="batteur">Batteur</option>
        <option value="chanteur">Chanteur</option>
        <option value="percussionniste">Percussionniste</option>

    </select>
</legend><br><br>

<input type="submit" value="Modifier">


</form>
</fieldset>    

</div>
</body>
</html>

