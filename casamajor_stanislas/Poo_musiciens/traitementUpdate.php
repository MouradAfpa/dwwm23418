<?php

require_once("Database.php");

$id = $_POST["id"];
$nomForm = htmlspecialchars($_POST["nom"]);
$ageForm = $_POST["age"];
$typeForm = $_POST["type"];


$data = new Database();
$data->update($nomForm, $ageForm, $typeForm, $id);

header("Location: index.php");
