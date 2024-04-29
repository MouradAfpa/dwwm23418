<?php

session_start();

$resultat = $_SESSION['Compteur'];

switch($resultat){
    case 3:
        echo "Tarif rouge";
        break;
    case 2:
        echo "Tarif orange";
        break;
    case 1:
        echo "Tarif vert";
        break;
    case 0:
        echo "Tarif bleu";
        break;
    default:
    echo "Vous n'etes pas elligible a l'assurance";
};



?>