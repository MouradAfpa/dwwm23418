<?php

include_once("Musiciens.php");
include_once("Interfaces.php");

Class Guitariste extends Musicien implements instrumentCorde {

    public function __construct($nom, $age){
        parent:: __construct($nom, $age);
    }

    public function jouerCorde()
    {
        echo "Il joue de la guitare";
    }

    public function jouerGuitare(){
        echo "Joue un instrument à corde";
    }
} 

?>