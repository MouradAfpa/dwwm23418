<?php

require_once("Database.php");
$nomForm = htmlspecialchars($_POST["nomM"]);
$ageForm = $_POST["ageM"];
$typeForm = $_POST["typeM"];


$database= new DataBase();

$database->insertTable($nomForm,$ageForm,$typeForm);
header("Location: index.php");

?>