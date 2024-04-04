<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Paiement premium</h1>

    <fieldset>
<form action="traitementPay.php" method="post">

<legend>NOM:<br>
<input type="text" name="NOM" required></legend><br>

<legend>PRENOM:
<input type="text" name="PRENOM" required></legend><br>

<legend>Numero de carte: 
<input type="text" name="NumCarte" required></legend><br>

<legend>Cryptogramme visuel :
<input type="text" name="Crypto" min="000" max="999" required></legend><br>



<input type="submit" value="S'inscrire">

<?php
session_start();


?>


</form>
</fieldset>
</body>
</html>