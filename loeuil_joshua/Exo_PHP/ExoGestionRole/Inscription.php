<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="./style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Inscription</h1>

    <fieldset>
<form action="traitementIns.php" method="post">

<legend ">Nom d'utilisateur:
<input type="text" name="username" required></legend><br>

<legend>Votre adresse Mail:
<input type="email" name="email" ></legend><br>

<legend>Mot de passe:
<input type="password" name="mdp" required></legend><br>

<legend>Confirmation du mot de passe:
<input type="password" name="mdpC" required></legend><br>

<legend>Passer premium ?
    <input type="checkbox" name="Prem" >
</legend><br>

<input type="submit" value="S'inscrire">


</form>
</fieldset>
</body>
</html>