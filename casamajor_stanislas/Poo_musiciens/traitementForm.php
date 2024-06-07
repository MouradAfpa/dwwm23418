<?php

require_once("Database.php");

$nomForm = htmlspecialchars($_POST["nom"]);
$ageForm = $_POST["age"];
$typeForm = $_POST["type"];


$data = new Database();
$data->insert($nomForm,$ageForm,$typeForm);

var_dump($data);


?>