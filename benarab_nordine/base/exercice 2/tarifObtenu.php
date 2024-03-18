<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>



    <?php include('navbar.php');
    
    session_start();
   

if (isset($_SESSION['Tarif'])) {
   
    $couleurTarif = $_SESSION['Tarif'];

  
    echo "<p>Couleur du tarif : $couleurTarif</p>";
} else {
   
    echo "<p>Couleur du tarif non définie</p>";
}
?>

    ?>
</body>

</html>