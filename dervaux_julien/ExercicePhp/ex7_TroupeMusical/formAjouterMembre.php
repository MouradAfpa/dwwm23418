<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <link rel="stylesheet" href="./STYLE/bootstrap.css">
</head>
<body>
    <header></header>
    <div class="d-flex flex-wrap justify-content-center mb-3">
        <form class="card d-flex flex-column" style="width: 18rem;" action="traitementForm.php" method="post">
            <div class="card-body">
                <label class="form-label" for="username">Nom :</label>
                <input class="form-control mb-2" type="text" name="username" required>
                <label class="form-label" for="age">Age :</label>
                <input class="form-control mb-2" type="number" name="age" required>
                <label for="instru">Choisissez votre instrument:</label>

                <select class="form-select mb-2" name="instru" id="instru" onchange="showGuitarType()">
                    <option value="">--Choisissez votre instrument--</option>
                    <option value="Corde">Corde</option>
                    <option value="Batteur">Batteur</option>
                    <option value="Chanteur">Chanteur</option>
                    <option value="Percussionniste">Percussionniste</option>
                </select>

                <div id="guitarTypeSelect" style="display: none;">
                    <label for="guitarType">Type de guitare:</label>

                    <select class="form-select mb-2" name="guitarType" id="guitarType" onchange="showGuitarType()">
                        <option value="">--Choisissez le style--</option>
                        <option value="Guitare">Guitare</option>
                        <option value="Bass">Bass</option>
                    </select>

                </div>

                <div id="guitarGenreSelect" style="display: none;">
                    <label for="guitarGenre">Genre de guitare:</label>

                    <select class="form-select mb-2" name="guitarGenre" id="guitarGenre" onchange="showGuitarType()">
                        <option value="Electrique">Electrique</option>
                        <option value="Accoustique">Accoustique</option>
                    </select>

                </div>

                <button class="btn btn-primary" type="submit" name="ID">Submit</button>
            </div>
        </form>
    </div>
    <script src="script.js"></script>
</body>
</html>
