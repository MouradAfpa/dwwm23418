<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Groupe de Musicien</title>
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
    $db = new Database();
    $connexion = $db -> connect();
    ?>
    <div class="container">
        <div class="row mb-3 mt-3 pb-3 border-bottom border-primary">
            <form action="traitementForm.php" method="post" id="formulaireAjout" class="d-flex flex-column justify-content-center">
                <legend class="d-flex justify-content-center">Ajouter des membres à la troupe :</legend>
                <label for="nom" class="form-label">Nom du musicien :</label>
                <input class="form-control" id="nomInput" type="text" name="nom" placeholder="Mickaël" required>
                <span id='errorNom' class="text-danger"></span>

                <label for="age" class="form-label">Âge du musicien :</label>
                <input class="form-control" id="ageInput" type="number" name="age" placeholder="27" required>
                <span id='errorAge' class="text-danger"></span>

                <label for="type">Type du musicien :</label>
                <select name="type" id="type" id="typeInput" class="form-select" required>
                    <option value="">---Choisir le type du Musicien---</option>
                    <option value="guitariste">Guitariste</option>
                    <option value="trompettiste">Trompettiste</option>
                    <option value="chanteur">Chanteur</option>
                    <option value="batteur">Batteur</option>
                    <option value="percussionniste">Percussionniste</option>
                </select>
                <span id='errorType' class="text-danger"></span>

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
                    $resultats = $db->searchName($searchName);
                    $db->close();
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
            <img src="./musicien/" alt="">
        </div>

        <div class="row">
            <?php

            $reponse = $db->getAllMembers();
            $db -> close();
            if ($reponse) {
                $resultats = $reponse->fetchAll(PDO::FETCH_ASSOC);
                foreach ($resultats as $resultat) {
                    //si une photo a était envoyer a la base de donnée
                    if ($resultat["photo"]) {
                        // On  convertit les donné binaire en chaie de caractère encoder en base 64
                        $img = base64_encode($resultat['photo']);
                        //crée une URL de donnée pour l'afficher (type jpeg encodée en base64)
                        $image = "data:image/jpeg;base64,$img";
                    } else {
                        //Sinon on prend l'image de base
                        $image = $resultat['image'];
                    }
                    echo "
                        <div class='card m-2 border-primary text-center' style='width: 18rem;'>
                        <img class='card-img-top img-thumbnail' src='$image' alt='image $resultat[type]' style='max-height:200px' >
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
                                                <form enctype='multipart/form-data' action='traitementFormPhoto.php' method='post' class='d-flex flex-column justify-content-center'>
                                                    <input type='hidden' value='$resultat[id]' name='id'>
                                                    <input type='hidden' name='MAX_FILE_SIZE' value='30000' />
                                                    <label for='userfile' class='form-label'>Nouvelle photo :</label>
                                                    <input name='userfile' type='file' class='form-control'/>
                                                    <input type='submit' value='Changer la photo' class='btn btn-primary mt-3'/>
                                                </form>
                                                    <form action='traitementForm.php' method='post'class='d-flex flex-column justify-content-center'>
                                                        <input type='hidden' value='$resultat[id]' name='id'>

                                                        <label for='newNom'class='form-label'>Nom du musicien :</label>
                                                        <input type='text' name='newNom' value='$resultat[nom]' class='form-control'>
                                                
                                                        <label for='newAge' class='form-label'>Âge du musicien :</label>
                                                        <input type='number' name='newAge' value='$resultat[age]' class='form-control'>

                                                        <label for='attribut' class='form-label'>Quel champ voulez vous modifier ?</label>
                                                        <select name='attribut' id='attribut' class='form-select' required>
                                                            <option value='$resultat[type]'>$resultat[type]</option>
                                                            <option value='guitariste' >Guitariste</option>
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
    <!-- <script>
        src = "script.js"
    </script> -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous">
    </script>

</body>

</html>