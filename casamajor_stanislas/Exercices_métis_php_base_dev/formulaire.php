<?php

$interet = '';
$marequete = 'inser into Matable values (';

$marequete = $marequete . "'" . $_GET['nom'] . "'," . $_GET['age'] . ",";

$marequete = $marequete . "'" . $_GET['maritale'] . "',";


if (isset($_GET["internet"])) {
    $marequete = $marequete . "1,";
    $interet = "Internet,";
} else {
    $marequete = $marequete . "0,";
}

if (isset($_GET["micro"])) {
    $marequete = $marequete . "1,";
    $interet = $interet . " la micro-informatique,";
} else {
    $marequete = $marequete . "0,";
}
if (isset($_GET["jeux"])) {
    $marequete = $marequete . "1)";
    $interet = $interet . " les jeux vidéos,";
} else {
    $marequete = $marequete . "0)";
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Une petite réponse</title>
</head>

<body>
    <h2>Merci à vous ,<?php echo $_GET['nom']; ?></h2>
    <p>Vous avez donc le bel âge de <b><?php echo $_GET['age']; ?></b> ans, vous êtes <b><?php echo $_GET['maritale']; ?></b> et vous vous intéressez à <b><?php echo $interet ?></b></p><br><br>
    <p>Je m'empresse d'envoyer la requête : <br>
        <b><?php echo $marequete; ?></b> à notre base de données.
    </p>

</body>

</html>