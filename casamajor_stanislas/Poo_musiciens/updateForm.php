<?php

$idUpdate = $_GET['id'];

?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modification</title>
</head>
<body>
    <form action="traitementUpdate.php" method="post">
        <input type="hidden" value="<?php echo $idUpdate ?>" name="id">
        <label for="">Renseignez votre nom <br><input type="text" name="nom" required></label><br><br>
            <label for="">Renseignez votre âge<br><input type="number" name="age" required></label><br><br>
            <label for="">Renseignez votre type<br><select name="type" required>
                <option valeur="Guitariste">Guitariste</option>
                <option valeur="Trompettiste">Trompettiste</option>
                <option valeur="Batteur">Batteur</option>
                <option value="Chanteur">Chanteur</option>
                <option value="Percussionniste">Percussionniste</option> 
</select>
            </label><br><br>
            <input type="submit" value="Soumission du formulaire">
    </form>
    
</body>
</html>