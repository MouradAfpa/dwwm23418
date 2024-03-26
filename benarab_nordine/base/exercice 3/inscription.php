<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <link rel="stylesheet" href="./taches/style.css">
</head>
<body>
    <div>
        <nav id="nav">
        <ul>
        <li id="lien"><a href="formulaireConnection.php">Déjà inscrit</a></li>

    </ul>

        </nav>
        <div id="body">
        <div class="container">
        <h1 id="titre">Formulaire d'inscription</h1>
            <p id="phrase">Rejoingnez-nous et accéder à vos tâches</p>
                <form class="formulaire" name="inscription" method="post" action="traitementFormulaire.php">
                    Email<br>
                    <input type="text" name="email" value=""><br>
                    Nom d'utilisateur<br>
                    <input type="text" name="login" value=""><br>
                    Mot de passe<br>
                    <input type="password" name="password" value=""><br>
                    Confirmation du mot de passe<br>
                    <input type="password" name="password2" value=""><br><br>
                    <p>Mot de passe oublié ? </p>
                    <input id="submit" type="submit" name="envoyer" value="S'inscrire">
                </form>
             </div>
        </div>
    </div>
</body>
</html>
