<?php

require_once 'Database.php';

$nom = $_POST["nom"];
$age = $_POST["age"];
$type = $_POST["type"];
$id = $_POST["id"];
var_dump($_POST);
$database = new Database();

$database->update($nom,$age,$type,$id);

header("Location: updateForm.php");

?>