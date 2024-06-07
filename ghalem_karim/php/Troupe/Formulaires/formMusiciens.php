<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire d'inscription</title>
</head>
<body>
    <fieldset>
        <form action="../Traitement/treatInscription.php" method="post">
            <label for="name">Nom: </label>
            <input type="text" name="name" required><br>
            
            <label for="ageF">Age: </label>
            <input type="number" name="ageF"  required><br>

            <label for="music_type">Type de musique;</label>
            <select list="music_type" name="music_type" required>
                <option value="Chanteur">Chanteur</option>
                <option value="Guitariste">Guitariste</option>
                <option value="Batteur">Batteur</option>
                <option value="Trompettiste">Trompettiste</option>
            </select><br>

            <label for="voice">Voix: </label>
            <select list="voice" name="voice" required><br>
                <option value="Aucune">Aucune</option>
                <option value="Soprano">Soprano</option>
                <option value="Mezzo-soprano">Mezzo-soprano</option>
                <option value="Contralto">Contralto</option>
                <option value="Contre-tenor">Contre-ténor</option>
                <option value="Tenor">Ténor</option>
                <option value="Baryton">Baryton</option>
                <option value="Basse">Basse</option>
            </select>

            <input type="submit" value="Valider">
        </form>
    </fieldset>
</body>
</html>