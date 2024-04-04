<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <link rel="stylesheet" href="./style/bootstrap.css">
</head>

<body>
    <header>
        <?php
        include_once("navbar.php")
        ?>
    </header>
    <div class="d-flex flex-wrap justify-content-center mb-3">
    <form class="card d-flex flex-column" style="width: 18rem;" action="traitement/traitement.php" method="post">

        <div class="card-body">
            <label class="form-label" for="username">Username :</label>
            <input class="form-control mb-2" type="text" name="username" required>

            <label class="form-label" for="email">Email :</label>
            <input class="form-control mb-2" type="email" name="email" required>

            <label class="form-label" for="mdp">Password :</label>
            <input class="form-control mb-2" type="password" name="mdp" required pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$" title="Le mot de passe doit contenir au moins une lettre minuscule, une lettre majuscule, un chiffre, un caractère spécial et avoir une longueur minimale de 8 caractères.">
            
            <label class="form-label" for="confirmationMdp">Valider votre password :</label>
            <input class="form-control mb-2" type="password" name="confirmationMdp" required>

            <button class="btn btn-primary" type="submit" name="submit">Submit</button>
        </div>
    </form>
</div>
</body>

</html>