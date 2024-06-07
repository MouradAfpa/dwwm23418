<?php
session_start();

if (isset($_SESSION['success_message'])) {
    echo "<div style='color: green;'>".$_SESSION['success_message']."</div>";
    unset($_SESSION['success_message']); 
}

if (isset($_SESSION['error_message'])) {
    echo "<div style='color: red;'>".$_SESSION['error_message']."</div>";
    unset($_SESSION['error_message']);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recherche de musicien</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
        }
        h1 {
            color: #333;
            text-align: center;
            margin-top: 20px;
        }
        form {
            width: 60%;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        label {
            display: block;
            margin-bottom: 10px;
        }
        input[type="text"],
        input[type="number"],
        select {
            width: 100%;
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 4px;
            box-sizing: border-box;
        }
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

    <form action="recupMusicien.php" method="get">
    <h1>Recherche de musicien:</h1>
    <label for="type">Type de musicien dans le groupe :</label>
    <select name="type" id="type">
        <option value="">Tous</option>
        <option value="Guitariste">Guitariste</option>
        <option value="Trompettiste">Trompettiste</option>
        <option value="Batteur">Batteur</option>
        <option value="Chanteur">Chanteur</option>
        <option value="Percussionniste">Percussionniste</option>
    </select>
    <label for="nom">Nom :</label>
    <input type="text" name="nom" id="nom">
    <input type="submit" value="Rechercher">
</form>

<form action="traitement.php" method="post">
    <h1>Formulaire inscription de nouveaux musiciens</h1>
    <label for="name">Nom : </label>
    <input type="text" name="name" required>
    <br>
    <label for="firstName">Prénom : </label>
    <input type="text" name="firstName" required>
    <br>
    <label for="age">Age : </label>
    <input type="number" name="age" required>
    <br>
    <label for="instrument">Instrument : </label>
    <select name="instrument" id="instrument" required>
        <option value="">Choix...</option>
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
