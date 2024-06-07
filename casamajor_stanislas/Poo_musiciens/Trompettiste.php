<?php

include_once("Musiciens.php");
include_once("Interfaces.php");

Class Trompettiste extends Musicien implements instrumentVent{

    public function __construct($nom, $age){
        parent:: __construct($nom, $age);
    }

    public function jouerVent(){
        echo "il joue d'un instrument à vent";
    }

    public function jouerTrompette(){
        echo "Joue de la trompette";
    }
    
}

?>