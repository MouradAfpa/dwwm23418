<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Groupe de Musicien </title>
</head>

<body>
    <form action="traitementForm.php" method="post">
        <label for="nom">Nom du musicien :</label>
        <input type="text">

        <label for="age">Âge du musicien :</label>
        <input type="text">

        <label for="type">Type du musicien :</label>
        <select name="type" id="type">
            <option value="">---Choisir le type du Musicien---</option>
            <option value="guitariste">Guitariste</option>
            <option value="trompetiste">Trompettiste</option>
            <option value="chanteur">Chanteur</option>
            <option value="batteur">Batteur</option>
            <option value="percussionniste">Percussionniste</option>
        </select>
        <span style="color:red">
            <?php 
            session_start();
            if(isset($_SESSION['error'])){
                echo"$_SESSION[error]";
            }
            ?>
        </span>
        <input type="submit" value="Ajouter">
    </form>
</body>

</html>