<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="music.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>index</title>
</head>
<body>
    <?php
    spl_autoload_register(function($classname){
     $file = $classname . ".php";
     if(file_exists($file))
          require_once $file;
});





?>

<nav>
    <a href="formulMus.php"><button>Formulaire Musicien</button></a>
</nav>

<div class="card">
<?php
require_once("DataBase.php");
$data = new DataBase();
$data->getAllMember();



?>
</div>
</body>
</html>




