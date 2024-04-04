<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>connexion</title>
    <link rel="stylesheet" href="../STYLE/bootstrap.css">
<</head>

<body>
    <header>
        <?php
        include_once("../navbar.php");
        var_dump($_SESSION);
        ?>
    </header>
    <div class="d-flex flex-wrap justify-content-center">
    <form class="card p-3" action="traitement/traitementCo.php" method="post">

        <div class="card-body">
            <label class="form-label" for="emailCo">Email :</label>
            <input class="form-control mb-2" type="email" name="emailCo" required>

            <label class="form-label" for="mdpCo">Mot de passe :</label>
            <input class="form-control mb-2" type="password" name="mdpCo" required>

            <button class="btn btn-primary" type="submit" name="submit">Submit</button>
        </div>
    </form>
</div>

</body>

</html>