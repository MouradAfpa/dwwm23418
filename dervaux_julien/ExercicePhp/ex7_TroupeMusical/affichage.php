<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <title>Affichage des Musiciens</title>
</head>

<body>
    <div class="container mt-5">
        <div class="row">
            <?php
            include("CLASS/ClassConnexionBdd.php");
            include("formAjouterMembre.php");

            $dataBase = new Database();
            $musiciens = $dataBase->selectBdd();

            foreach ($musiciens as $musicien) {
            ?>
                <div class='d-flex flex-wrap col-lg-4 col-md-6 mb-4'>
                    <div class='card'>
                        <div class='card-header'>
                            Musicien <?php echo $musicien['ID']; ?>
                        </div>
                        <div class='card-body'>
                            <form action='traitementUpdate.php' method='post'>
                                <input class='btnInit card-title' name='username' type='text' value='<?php echo $musicien['NOM']; ?>' disabled='disabled' />
                                <input type='hidden' name='musicien_id' value='<?php echo $musicien['ID']; ?>'>
                                <input class='btnAge card-text' name='age' type='text' value='<?php echo $musicien['AGE']; ?>' disabled='disabled' />
                                <p class='card-text'>Instrument : <?php echo $musicien['INSTRU']; ?></p>
                                <select class="btnSelect form-select" name="instru" id="instru" disabled='disabled'>
                                    <option class="form-control mb-2" value="">--Modifiez votre instrument--</option>
                                    <option class="form-control mb-2" value="Guitariste">Guitariste</option>
                                    <option class="form-control mb-2" value="Trompettiste">Instrument à vent</option>
                                    <option class="form-control mb-2" value="Batteur">Batteur</option>
                                    <option class="form-control mb-2" value="Chanteur">Chanteur</option>
                                    <option class="form-control mb-2" value="Percussionniste">Percussionniste</option>
                                </select>
                                <button type='button' name='modif' class='btnModif'>Modifier</button>
                                <button type='submit' name='valider' class='btnValider'>Valider</button>
                            </form>
                            <form action='traitementSupp.php' method='post'>
                                <button class='delete' type='submit' name='musicien' value='<?php echo $musicien['ID']; ?>'>Supprimer</button>
                            </form>
                        </div>
                    </div>
                </div>
            <?php
            }
            ?>
        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>