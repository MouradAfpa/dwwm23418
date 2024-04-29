<?php
require_once("Database.php");

$idMu = $_GET["id"];

$data = new DataBase();

$data->DeleteMember($idMu);

header("Location: index.php");




?>