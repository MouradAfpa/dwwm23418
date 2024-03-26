<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Document</title>
</head>

<body>

    <form action="traitement.php" method="post">
        <label for="id_membre">Identifiant du membre : </label>
        <input type="text" name="id_membre"><br><br>

        <label for="nom">Nom du musicien : </label>
        <input type="text" name="nom"><br><br>

        <label for="age">Âge du musicien : </label>
        <input type="text" name="age"><br><br>

        <label for="type_musicien">Type de musicien : </label>
        <select name="type_musicien">
            <option value="guitariste">Guitariste</option>
            <option value="trompettiste">Trompettiste</option>
            <option value="batteur">Batteur</option>
            <option value="chanteur">Chanteur</option>
            <option value="percussionniste">Percussionniste</option>
        </select><br><br>

        <button type="submit" name="action" value="add">Ajouter</button>
        <button type="submit" name="action" value="update">Mettre à jour</button>
    </form>

    <?php

    require_once './class/DataBase.php';
    include_once './class/Musicien.php';
    include_once './interface/InstrumentCorde.php';
    include_once './interface/InstrumentVent.php';
    include_once './interface/Voix.php';
    include_once './class/Batteur.php';
    include_once './class/Chanteur.php';
    include_once './class/Guitariste.php';
    include_once './class/Percussionniste.php';
    include_once './class/Trompettiste.php';

    try {
        // Connexion à la base de données
        $db = new Database('localhost', 'orchestre');
        $db->seConnecter();

        // Récupérer tous les membres de la troupe
        $members = $db->getAllMembers();

        // Afficher les membres de la troupe dans des cartes
        echo "<h1 class='text-center mb-5'>Liste des membres de l'orchestre</h1>";
        echo "<div class='d-flex justify-content-evenly flex-wrap'>";
        foreach ($members as $member) {
            echo "<div class='card' style='width: 18rem;'>";
            echo "<div class='card-header'>ID musicien: " . $member['id'] . "</div>";
            echo "<ul class='list-group list-group-flush'>";
            echo "<li class='list-group-item'>Type musicien: " . $member['type_musicien'] . "</li>";
            echo "<li class='list-group-item'>Nom: " . $member['nom'] . "</li>";
            echo "<li class='list-group-item'>Age: " . $member['age'] . "</li>";

            // Vérifier le type de musicien
            switch ($member['type_musicien']) {
                case 'guitariste':
                    $guitariste = new Guitariste($member['nom'], $member['age']);
                    echo "<li class='list-group-item'>" . $guitariste->jouerUnInstrument() . "</li>";
                    break;
                case 'trompettiste':
                    $trompettiste = new Trompettiste($member['nom'], $member['age']);
                    echo "<li class='list-group-item'>" . $trompettiste->jouerUnInstrument() . "</li>";
                    break;
                case 'batteur':
                    $batteur = new Batteur($member['nom'], $member['age']);
                    echo "<li class='list-group-item'>" . $batteur->jouerUnInstrument() . "</li>";
                    break;
                case 'percussionniste':
                    $percussionniste = new Percussionniste($member['nom'], $member['age']);
                    echo "<li class='list-group-item'>" . $percussionniste->jouerUnInstrument() . "</li>";
                    break;
                case 'chanteur':
                    $chanteur = new Chanteur($member['nom'], $member['age']);
                    echo "<li class='list-group-item'>Type de voix: " . $chanteur->typeVoix() . "</li>";
                    break;
                default:
                    echo "<li class='list-group-item'>Joue un instrument non spécifié.</li>";
                    break;
            }
            echo "<li class='list-group-item text-center'>" .
                "<form action='traitement.php' method='post'>" .
                "<input type='hidden' name='id_membre' value='" . $member['id'] . "'>" .
                "<button type='submit' name='action' value='delete' class='btn btn-danger'>Supprimer</button>" .
                "</form>" .
                "</li>";
            echo "</div>";
            echo "</ul>";
        }
        echo "</ul>";
        echo "</div>";
    } catch (PDOException $e) {
        echo "Erreur : " . $e->getMessage();
    }
    ?>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>

</body>

</html>