<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire de Musicien</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h2>Ajouter un Musicien</h2>
        <form action="traitementFormulaire.php" method="post">
            <div>
                <label for="nom">Nom :</label>
                <input type="text" id="nom" name="nom" required>
            </div>
            <div>
                <label for="age">Âge :</label>
                <input type="number" id="age" max=99 min=18 name="age" required>
            </div>
            <div>
                <label for="type">Type de Musicien :</label>
                <select id="type" name="type" required>
                    <option value="">Sélectionnez le type</option>
                    <option value="batteur">Batteur</option>
                    <option value="guitariste">Guitariste</option>
                    <option value="chanteur">Chanteur</option>
                    <option value="trompettiste">Trompettiste</option>
                    <option value="percussionniste">Percussionniste</option>
                </select>
            </div>
            <button type="submit">Ajouter</button>
        </form>
    </div>
</body>
</html>
