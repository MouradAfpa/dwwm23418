<?php

session_start();

$userStock = $_SESSION["userStock"];

$titre = $_POST["titre"];
$description = $_POST["description"];
$date = $_POST["date"];

  $userStock["tasks"][] = [
    "titre" => $titre,
    "description" => $description,
    "date" => $date,
];

$_SESSION["userStock"]=$userStock;

var_dump($_SESSION["userStock"]["tasks"]);

header("Location:../welcome.php");


exit;

?>
