<?php

include_once("Musiciens.php");
include_once("Interfaces.php");
Class Batteur extends Musicien implements instrumentPercussion{

    public function __construct($nom, $age){
        parent:: __construct($nom, $age);
    }

    public function jouerPercu()
    {
        echo "Joue de la batterie";
    }

    public function jouerBatterie(){
        echo "Joue de la batterie";
    }
}

?>