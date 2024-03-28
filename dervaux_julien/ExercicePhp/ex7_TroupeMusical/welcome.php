<?php   
if (isset($_SESSION["userStock"]["nom"])) {
    $userStockNom = $_SESSION["userStock"]["nom"];}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
</head>
<body>
<header>
        <?php
        include_once("navbar.php")
        ?>
    </header>
    <main>
    <div class="d-flex flex-wrap justify-content-center object-fit-contain ">
        <h1>Bienvenue <?php echo $userStockNom ?></h1>
    </div>

    <div class="d-flex flex-wrap justify-content-center object-fit-contain ">
    </div>
    <div id="formAddMember" style="display: block;">
        <?php
        include_once("formAjouterMembre.php");
        ?>
    </div>
    </main>
</body>

</html>