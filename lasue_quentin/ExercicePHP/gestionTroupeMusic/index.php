<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Groupe de Musicien </title>
    <link rel="stylesheet" href="./bootstrap.min.css">
</head>

<body>
    <?php
    // Pour éviter une liste interminable d'include 
    spl_autoload_register(function ($classname) {
        $file = $classname . ".php";
        if (file_exists($file))
            require_once $file;
    });

    ?>
    <div class="container">
        <div class="row mb-3 mt-3 pb-3 border-bottom border-primary">
            <form action="traitementForm.php" method="post" class="d-flex flex-column justify-content-center">
                <legend class="d-flex justify-content-center">Ajouter des membres à la troupe :</legend>
                <label for="nom" class="form-label">Nom du musicien :</label>
                <input class="form-control" type="text" name="nom" placeholder="Mickaël">

                <label for="age" class="form-label">Âge du musicien :</label>
                <input class="form-control" type="" name="age" placeholder="27">

                <label for="type">Type du musicien :</label>
                <select name="type" id="type" class="form-select">
                    <option value="">---Choisir le type du Musicien---</option>
                    <option value="guitariste">Guitariste</option>
                    <option value="trompettiste">Trompettiste</option>
                    <option value="chanteur">Chanteur</option>
                    <option value="batteur">Batteur</option>
                    <option value="percussionniste">Percussionniste</option>
                </select>

                <input type="submit" value="Ajouter" class="btn btn-primary form-control mt-3">
            </form>
        </div>
        <div class="row my-3 pb-3 border-bottom border-primary">
            <form action="" method="get" class="d-flex justify-content-center mb-3">
                <input type="text" name="searchName" class="form-control" placeholder="Rechercher par nom ou par type...">
                <input type="submit" value="Rechercher" class="btn btn-primary">
            </form>
            <div class="d-flex justify-content-center">
                <?php
                if (
                    isset($_GET['searchName']) &&
                    !empty($_GET['searchName'])
                ) {
                    $searchName = htmlspecialchars($_GET['searchName']);
                    $db = new Database();
                    $resultats = $db->searchName($searchName);
                    if ($resultats) {
                        echo "<table class='table table-striped'>
                            <thead>
                            <tr class='table-primary'>
                            <th>Identifiant</th>
                            <th>Nom</th>
                            <th>Age</th>
                            <th>Type</th>
                            </tr>
                            </thead>
                            <tbody>
                        ";
                        foreach ($resultats as $resultat) {
                            echo "<tr>
                                <td>$resultat[id]</td>
                                <th>$resultat[nom]</th>
                                <td>$resultat[age]</td>
                                <td>$resultat[type]</td>
                                </tr>
                            ";
                        }
                        echo "</tbody>
                            </table>";
                    } else {
                        echo "<span>Aucun résultat trouvé.</span>";
                    }
                }

                ?>

            </div>
        </div>

        <div class="row">
            <?php
            $db = new Database();
            $reponse = $db->getAllMembers();
            if ($reponse) {
                $resultats = $reponse->fetchAll(PDO::FETCH_ASSOC);
                foreach ($resultats as $resultat) {
                    echo "
                        <div class='card m-2 border-primary' style='width: 18rem;'>
                                <div class=' my-3 d-flex justify-content-center'>
                                 <h5 class='card-title'>$resultat[nom]</h5>
                                </div>
                                <div class='card-body text-center'>
                                    
                                    <h6 class='card-subtitle mb-2 text-body-secondary'>$resultat[age]</h6>
                                    <p class='card-text'>$resultat[type]</p>
                                    <p class='card-text'> Identifiant : $resultat[id]</p>
                                </div>
                                <div class='my-3 d-flex justify-content-around'>
                                    <form action='traitementForm.php' method='post'>
                                        <input type='hidden' value='$resultat[id]' name='idSup'>
                                        <button class='btn btn-danger' type='submit'>Supprimer</button>
                                    </form>
                                    <!-- Button modal -->
                                    <button type='button' class='btn btn-primary' data-bs-toggle='modal' data-bs-target='#modif$resultat[id]'>
                                    Modifier
                                    </button>
                                </div>
                                <!-- Modal --> 
                                <div class='modal fade' id='modif$resultat[id]' tabindex='-1' aria-labelledby='modif$resultat[id]Label' aria-hidden='true'>
                                        <div class='modal-dialog'>
                                            <div class='modal-content'>
                                                <div class='modal-header'>
                                                    <h1 class='modal-title fs-5' id='modifModalLabel'>Modifier $resultat[nom]</h1>
                                                    <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                                </div>
                                                <div class='modal-body'>

                                                    <form action='traitementForm.php' method='post'class='d-flex flex-column justify-content-center'>
                                                        <input type='hidden' value='$resultat[id]' name='id'>

                                                        <label for='newNom'class='form-label'>Nom du musicien :</label>
                                                        <input type='text' name='newNom' value='$resultat[nom]' class='form-control'>
                                                
                                                        <label for='newAge' class='form-label'>Âge du musicien :</label>
                                                        <input type='number' name='newAge' value='$resultat[age]' class='form-control'>

                                                        <label for='attribut' class='form-label'>Quel champ voulez vous modifier ?</label>
                                                        <select name='attribut' id='attribut' class='form-select'>
                                                            <option value=''>---Choisir le type du Musicien---</option>
                                                            <option value='guitariste'>Guitariste</option>
                                                            <option value='trompettiste'>Trompettiste</option>
                                                            <option value='chanteur'>Chanteur</option>
                                                            <option value='batteur'>Batteur</option>
                                                            <option value='percussionniste'>Percussionniste</option>
                                                        </select>

                                                        <input type='submit' value='Modifier' class='btn btn-primary mt-3'>
                                                    </form>
                                                
                                                </div>
                                                <div class='modal-footer'>
                                                    <button type='button' class='btn btn-secondary' data-bs-dismiss='modal'>Close</button>
                                                </div>
                                            </div>
                                        </div>
                                </div>
                        </div>
                    ";
                }
            }
            ?>

        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>

</body>

</html>