<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Index</title>
</head>
<body>
    <?php

    spl_autoload_register(function($classname){
        $file = $classname . ".php";
        if (file_exists($file)){
            require_once($file);
        }
    })

    ?>

    <nav>
        <a href="Formulaire.php"><button>Vers Formulaire</button></a>
    </nav>
    <div>
    <?php

    require_once("Database.php");
    $data = new Database;
    $data->request();

    ?>
    </div>
</body>
</html>