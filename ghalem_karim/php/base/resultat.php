<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="color:#2a2a9b;background-color: powderblue;">
    
<?php

session_start();
$tarification = $_SESSION['tarif'];
$giff=$_SESSION['gif'];
// var_dump($tarification);

echo('<h1>Votre Tarif</h1><br>');
echo($tarification."<br>");

// echo(

//     '<img src="\img\img2\" alt="">'
// )
?>
<img src=<?php echo "/img/img2/".$giff.".gif" ?> alt="">

</body>
</html>













