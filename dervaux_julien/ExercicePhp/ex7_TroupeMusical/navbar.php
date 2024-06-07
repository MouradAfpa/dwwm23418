<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar</title>
    <link rel="stylesheet" href="style/bootstrap.css">
    <style>
        /* Ajoutez ici vos styles personnalisés si nécessaire */
    </style>
</head>

<body>
    <header class="navbar navbar-expand-lg navbar-light bg-light m-2">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Ma Fiche tech'</a>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <?php
                    session_start();
                    if (isset($_SESSION["userStock"]["nom"])) {
                        $userStockNom = $_SESSION["userStock"]["nom"];
                        echo "<li class='nav-item'><span class='navbar-text'>Bienvenue <strong>$userStockNom</strong></span></li>";
                    }

                    if (isset($_SESSION["userStock"])) {
                        $userStock = $_SESSION["userStock"];
                        if (isset($userStock["connect"]) && $userStock["connect"] === true) {
                    ?>
                            <li class="nav-item">
                                <a class="nav-link" href="welcome.php">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="traitement/logout.php">Log out</a>
                            </li>
                    <?php
                        } else {
                    ?>
                            <li class="nav-item">
                                <a class="nav-link" href="welcome.php">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="connection.php">Connexion</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="inscription.php">Inscription</a>
                            </li>
                    <?php
                        }
                    } else {
                    ?>
                        <li class="nav-item">
                            <a class="nav-link" href="connection.php">Connexion</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="inscription.php">Inscription</a>
                        </li>
                    <?php
                    }
                    ?>
                </ul>
            </div>
        </div>
    </header>

    <!-- Ajoutez ici le reste de votre contenu -->

</body>

</html>
