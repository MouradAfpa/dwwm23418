
    <?php

    $age = $_POST["age"];
    $permis = $_POST["permis"];
    $sinistre = $_POST["sinistre"];
    $question = $_POST["question"];
        
    $point = $sinistre;

    if ($age <25){
        $point++;
    }
    if ($permis <2){
        $point++;
    }
    if ($sinistre >5){
        $point--;
    }
     
    $_SESSION['point'] = $point;
    header('Location:tarifObtenu.php');

    ?>
