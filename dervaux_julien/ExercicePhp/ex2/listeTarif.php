<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="bootstrap.css">
</head>

<body>

    <?php
    
    $tarifs = ["bleu", "vert", "orange", "rouge", "refus"];

    foreach ($tarifs as $tarif) {
        echo "<p> $tarif </p>";
    }

    ?>

</body>

</html>