<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire de Connexion</title>
    <link rel="stylesheet" href="./taches/style.css">
</head>
<body>
<?php
session_start();

if(isset($_GET['erreur'])) {
    $erreur = $_GET['erreur'];
    
    if($erreur == "password_incorrect") {
        echo "Mot de passe incorrect.";
    } elseif($erreur == "missing_password") {
        echo "Veuillez saisir votre mot de passe.";
    }
}
?>

<div id="body">
<form id="formulaire2" action="traitementConnection.php" method="post">
    <h1 id="titre">Connexion</h1>
    <label for="username">Nom d'utilisateur:</label><br>
    <input type="text" id="username" name="username" required><br><br>
    <label for="password">Mot de passe:</label><br>
    <input type="password" id="password" name="password" required><br><br>
    <input id="submit" type="submit" value="Se connecter">
</form>
</div>
</body>
</html>
