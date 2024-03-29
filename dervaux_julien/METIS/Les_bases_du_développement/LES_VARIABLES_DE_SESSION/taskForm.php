<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet=" href="../ex3/style/bootstrap.css">
</head>

<body>
    <header>
        <?php
        include_once("navbar.php")
        ?>
    </header>

</body>

</html>

<body>
    <div class="d-flex flex-wrap justify-content-center">
        <form class="card p-3" action="traitement/traitementTask.php" method="post">
            <div class="card-body">
                <label class="form-label" for="titre">Titre</label>
                <input class="form-control mb-2" type="text" name="titre">
                <label class="form-label" for="description">Description</label>
                <input class="form-control mb-2" type="text" name="description">
                <label class="form-label" for="date">Date</label>
                <input class="form-control mb-2" type="date" name="date" min="<?php echo date('Y-m-d');?>">
                <input class="form-control mb-2" type="time" name="Heure" min="<?php echo date('H-i-s');?>">
                <label for="submit"></label>
                <input type="submit" name="submit">
            </div>
        </form>
    </div>

</body>