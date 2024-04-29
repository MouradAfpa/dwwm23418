<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Musicien</title>
</head>
<body>
    <form action="traitement.php" method="post">

    <h1>Formulaire Musiciens</h1>

        <label for="name">Nom : </label>
        <input type="text" name="name" required>
        <br>
        <label for="firstName">Prénom : </label>
        <input type="text" name="firstName" required>
        <br>
        <label for="age">Age : </label>
        <input type="number" name="age" required>
        <br>
        <label for="">Instrument : </label>
        <select name="instrument" id="instrument" required>
            <option value="" >Choix...</option>
            <option value="Guitariste">Guitariste</option>
            <option value="Trompettiste">Trompettiste</option>
            <option value="Batteur">Batteur</option>
            <option value="Chanteur">Chanteur</option>
            <option value="Percussionniste">Percussionniste</option>
        </select>
        <br><br>
        <input type="submit" value="Envoyer">










    </form>



</body>
</html>