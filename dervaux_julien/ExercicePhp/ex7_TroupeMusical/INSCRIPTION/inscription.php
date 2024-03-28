<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <link rel="stylesheet" href="../STYLE/bootstrap.css">
</head>

<body>
    <header>
        <?php include_once("../navbar.php");
        // var_dump($_SESSION); ?>
    </header>
    <div class="d-flex flex-wrap justify-content-center mb-3">
        <form class="card d-flex flex-column" style="width: 18rem;" action="traitement/traitementInscription.php" method="post">
            <label class="form-label d-flex justify-content-center" for="">
                <h1>Inscription</h1>
            </label>
            <div class="card-body">
                <label class="form-label" for="username"></label>
                <input class="form-control mb-2" type="text" id="username" name="username" placeholder="Nom d'utilisateur" required>

                <label class="form-label" for="email"></label>
                <input class="form-control mb-2" type="email" name="email" placeholder="Adresse e-mail" required>

                <label class="form-label" for="mdp"></label>
                <input class="form-control mb-2" type="password" name="mdp" placeholder="Mot de passe" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule, un chiffre, un caractère spécial et avoir une longueur minimale de 8 caractères.">

                <label class="form-label" for="confirmationMdp"></label>
                <input class="form-control mb-2" type="password" name="confirmationMdp" placeholder="Confirmer le mot de passe" required>

                <div class="d-flex justify-content-end">
                    <button class="btn btn-primary" type="submit" name="submit">Valider</button>
                </div>
                <div class="d-flex justify-content-end">
                <a href="connexion.php">Déja inscrit ?</a>
                </div>
            </div>
        </form>
    </div>
</body>

</html>