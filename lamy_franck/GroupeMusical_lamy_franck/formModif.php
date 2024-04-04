<?php
// formModif.php
session_start();

if (isset($_SESSION['success_message'])) {
    echo "<div style='color: green;'>".$_SESSION['success_message']."</div>";
    unset($_SESSION['success_message']); 
}

if (isset($_SESSION['error_message'])) {
    echo "<div style='color: red;'>".$_SESSION['error_message']."</div>";
    unset($_SESSION['error_message']);
}

$idMusicien = $_GET['id'];

try {
    $host = "localhost";
    $db = "groupe";
    $connexion = new PDO("mysql:host=$host;dbname=$db", "root", "");
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = "SELECT * FROM musicien WHERE idMusi = :id";
    $statement = $connexion->prepare($query);
    $statement->bindParam(':id', $idMusicien);
    $statement->execute();
    $musicien = $statement->fetch(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "Erreur :" . $e->getMessage();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modification de la fiche</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
        }
        form {
            max-width: 400px;
            margin: 50px auto;
            background: #fff;
            padding: 20px;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
        }
        label {
            display: block;
            margin-bottom: 10px;
        }
        input[type="text"],
        input[type="number"],
        select {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }
        select {
            appearance: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            background: url('data:image/svg+xml;utf8,<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>') no-repeat right;
            background-size: 24px;
            padding-right: 30px;
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 15px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            width: 100%;
            font-size: 16px;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>

<form action="traiteModif.php" method="post">
    <h1>Modification de la fiche</h1>
    <label for="nom">Nom :</label>
    <input type="text" name="nom" value="<?php echo isset($musicien['Nom']) ? $musicien['Nom'] : ''; ?>" required>
    <label for="prenom">Prénom :</label>
    <input type="text" name="prenom" value="<?php echo isset($musicien['Prénom']) ? $musicien['Prénom'] : ''; ?>" required>
    <label for="age">Age :</label>
    <input type="number" name="age" value="<?php echo isset($musicien['Age']) ? $musicien['Age'] : ''; ?>" required>
    <label for="instrument">Instrument :</label>
    <select name="instrument" id="instrument" required>
        <option value="<?php echo isset($musicien['Instrument']) ? $musicien['Instrument'] : ''; ?>"><?php echo isset($musicien['Instrument']) ? $musicien['Instrument'] : ''; ?></option>
        <option value="Guitariste">Guitariste</option>
        <option value="Trompettiste">Trompettiste</option>
        <option value="Batteur">Batteur</option>
        <option value="Chanteur">Chanteur</option>
        <option value="Percussionniste">Percussionniste</option>
        <input type="hidden" name="id" value="<?php echo $idMusicien; ?>">

    </select>
    <input type="submit" value="Modifier">
</form>
    
</body>
</html>
