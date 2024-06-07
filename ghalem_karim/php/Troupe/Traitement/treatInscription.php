<?php
include "../DB/dataBase.php";
// 
if (isset($_POST["name"], $_POST["ageF"], $_POST["music_type"], $_POST["voice"])) {
    $name = $_POST["name"];
    $ageF = $_POST["ageF"];
    $music_type = $_POST["music_type"];
    $voice = $_POST["voice"];
}
// 
if (isset($name) && isset($ageF) && isset($music_type) && isset($voice)) {
    $insertInto = new DataBase;
    $insertInto->insertInto($name, $ageF, $music_type, $voice);
    header("Location:../Vue/membreGroupe.php");
}