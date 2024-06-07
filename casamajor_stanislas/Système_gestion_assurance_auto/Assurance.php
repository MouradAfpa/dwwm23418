<?php

include("navbar.php");

session_start();
$count = $_SESSION["compte"];

switch ($count) {
    case 3:
        echo "Tarif rouge bolos";
        break;
    case 2:
        echo "Tarif Orange demi-bolos";
        break;
    case 1:
        echo "Tarif vert beau gosse";
        break;
    case 0:
        echo "Tarif bleu super beau gosse";
        break;
    default:
        echo "PTDR t'es qui?";
}
