<?php

require_once 'Database.php';

$id = $_GET["id"];

$database = new Database();

$database->delete($id);

header("Location:index.php");

?>