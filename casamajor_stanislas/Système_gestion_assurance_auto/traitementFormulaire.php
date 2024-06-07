<?php


header("Location:Assurance.php");

function compteur()
{

    $age = $_POST["age"];
    $anneePermis = $_POST["permis"];
    $nbrAccident = $_POST["accident"];
    $ancientClient = $_POST["anciennete"];
    $count = $nbrAccident;

    if ($age >= 18) {
        if ($nbrAccident <= 3) {
            if ($age < 25) {
                $count++;
            }
            if ($anneePermis < 2) {
                $count++;
            }
            if ($ancientClient=="off") {
                $count++;
            }
        }
    }
    session_start();
    $_SESSION["compte"] = $count;
}

compteur();