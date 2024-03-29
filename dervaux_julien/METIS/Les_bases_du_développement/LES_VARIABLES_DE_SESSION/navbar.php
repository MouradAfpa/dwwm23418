<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Navbar</title>
    <link rel="stylesheet" href="style/bootstrap.css">
</head>
<body>
<header class="nav m-2 p-3">
    <?php
        session_start();
        
        if(isset($_SESSION["userStock"])) {
            $userStock = $_SESSION["userStock"];
            
            if(isset($userStock["connect"]) && $userStock["connect"] === true) {
                echo "<nav>
                    <li><a class='pe-3' href='welcome.php'>Home</a></li>
                    <li><a class='pe-3' href='traitement/logout.php'>Log out</a></li>
                </nav>";
            } else {
                echo "<nav>
                    <li><a class='pe-3' href='welcome.php'>Home</a></li>
                    <li><a class='pe-3' href='connection.php'>Connexion</a></li>
                    <li><a class='pe-3' href='inscription.php'>Inscription</a></li>
                </nav>";
            }
        } else {
            echo "<nav>
                <li><a class='pe-3' href='connection.php'>Connexion</a></li>
                <li><a class='pe-3' href='inscription.php'>Inscription</a></li>
            </nav>";
        }
    ?>
</header>
    
</body>
</html>
