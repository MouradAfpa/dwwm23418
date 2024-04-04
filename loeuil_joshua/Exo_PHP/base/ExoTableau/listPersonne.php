<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des Personnes</title>
</head>

<body>

    <?php
    session_start();
    $people = $_SESSION["Famille"];

    echo "<br> <h1>Famille</h1> <br>";
    echo "<table border=1 style='border-collapse: collapse; text-align: center'>";
    echo "<tr>";
    foreach ($people as $famille => $nom) {
        echo "<th>  $famille </tr> ";
        
        foreach($nom as $key => $value ){
            echo "<tr><td>$value</td></tr>";
            
        };
        echo "</th>";
    };
    
    
    
    


?>

</body>

</html>