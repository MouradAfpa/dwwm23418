<?php
require_once("Database.php");

$idMu = $_POST["idMu"];
$nomMu = htmlspecialchars($_POST["nomM"]);
$ageMu = $_POST["ageM"];
$typeMu = $_POST["typeM"];

$dat = new DataBase();

$dat->UpdateMember($idMu, $nomMu, $ageMu, $typeMu);

header("Location: index.php");

?>