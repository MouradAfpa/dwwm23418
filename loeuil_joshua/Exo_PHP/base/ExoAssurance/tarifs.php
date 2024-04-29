<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="style.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <header>
  <?php  
    
include("navbar.php");
?>

</header>
<div>Voici les differents tarifs obtenable pour votre assurances et leur condition:</div>
<br><br><br>
<main>
<?php

echo "<br><br>";
echo "<div id='tarrou'><p>Tarif rouge: <br> Si un conducteur a moins de 25 ans et est titulaire du permis depuis moins de deux ans, 
il se voit attribuer le tarif rouge s'il n'a jamais été responsable d'accident. </p></div> <br><br>";
echo "<div id='tarora'><p>Tarif orange: <br> Si un conducteur a moins de 25 ans et est titulaire du permis depuis plus de deux ans, 
ou s'il a plus de 25 ans mais est titulaire du permis depuis moins de deux ans,
il a droit au tarif orange s'il n'a jamais provoqué d'accident.</p></div> <br><br>";
echo "<div id='tarver'><p>Tarif vert: <br> Si un conducteur a plus de 25 ans et est titulaire du permis depuis plus de deux ans, 
il bénéficie du tarif vert s'il n'est à l'origine d'aucun accident.</p></div> <br><br><div> ";
?>
<div id="ifle">
<span><img src="./img/imgfle.jpg" alt=""></span>
<span><img src="./img/imgfle.jpg" alt=""></span>
<span><img src="./img/imgfle.jpg" alt=""></span>
</div>

</main>
</body>
</html>





