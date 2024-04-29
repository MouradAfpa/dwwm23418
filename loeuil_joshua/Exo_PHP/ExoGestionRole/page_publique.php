<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page_Publique</title>
</head>
<body>
    <a href="Connexion.php"><button>Se deconnecter</button></a>

    <a href="premium.php"><button>Passer au premium ?</button></a>
    <br><br><br><br>
<?php
session_start();
$tabU = $_SESSION["Utilisateur"];

echo "<h1>Bienvenue ". $tabU["user"] ."</h1>";
echo "<br>";
echo "<h3> Vous etes sur la page pour les membre ". $tabU["role"] . "</h3>";

    ?>


</body>
</html>