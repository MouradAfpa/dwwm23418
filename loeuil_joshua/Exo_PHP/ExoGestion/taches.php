<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Document</title>
</head>

<body>
    <?php
    include("navbar.php");
    ?>
    <h1>Gestion Taches</h1>
    <div class="butto">
        <a href="createTache.php"><button>Creer une tache</button></a>
    </div>
    <div id="bod">

        <div class="tach">
            <?php
            session_start();

            $tab = $_SESSION["Utilisateur"];
            if (isset($tab["Tache"])) {
                $tache = $tab["Tache"];
            }


            if (empty($tache)) {
                echo "Aucune tache";
            } else {

                foreach ($tache as $key => $tach) {
                    echo "<div class='card' id='$key'>";
                    echo "<div>" . $tach["titre"] . "</div>";
                    echo "<br>";
                    echo "<div>" . $tach["desc"] . "</div>";
                    echo "<br>";
                    echo "<div>" . $tach["dateB"] . "</div><br>";
                    echo "<a href='supprTache.php?id=$key' ><button>Supprimer tache</button></a>";
                    echo "</div>";
                }
            }


            ?>
        </div>
    </div>
</body>

</html>