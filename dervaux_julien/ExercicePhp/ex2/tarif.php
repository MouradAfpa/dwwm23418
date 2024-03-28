<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="bootstrap.css">
</head>

<body>
    <header>
        <?php
        include_once("navbar.php");
        $result = $_GET["tarif"];
        ?>
    </header>
    <main class="d-flex justify-content-center ">
        <div class="card ">
        <h1> Vous avez actuellement le tarif :</h1>
            <?php
           
           session_start();
           $point = $_SESSION["point"];
           $tarifs = ["bleu", "vert", "orange", "rouge", "refus"];

           if($point>4){
            $point=4;
           }
           if($point<0){
            $point=0;
           }
           
            ?>    
        </div>
    </main>


</body>

</html>