<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="tarifsForm.css">
    <title>Tarifs</title>
</head>

<body>

    <?php include_once 'navbar.php' ?>

    <form action="traitementForm.php" method="post">
        <label for="age">Âge :</label>
        <input type="number" name="age" required><br><br>

        <label for="permis">Possède le permis depuis plus de 2 ans :</label>
        <input type="radio" name="permis" value="oui" required>
        <label for="permisOui">Oui</label>
        <input type="radio" name="permis" value="non" required>
        <label for="permisNon">Non</label><br><br>

        <label for="accidents">Nombre d'accidents :</label>
        <select name="accidents" required>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3 ou plus</option>
        </select><br><br>

        <label for="client">Est client depuis plus de 5 ans :</label>
        <input type="radio" name="client" value="oui" required>
        <label for="clientOui">Oui</label>
        <input type="radio" name="client" value="non" required>
        <label for="clientNon">Non</label><br><br>

        <input type="submit" value="Envoyer">
    </form>

</body>

</html>