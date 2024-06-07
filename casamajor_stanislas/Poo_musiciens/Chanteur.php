<?php

include_once("Musiciens.php");
include_once("Interfaces.php");

Class Chanteur extends Musicien implements Voix{

    public function __construct($nom, $age){
        parent:: __construct($nom, $age);
    }

    public function typeVoix(){
        echo "Il utilise Le THU'UM";
    }

    public function Chante(){
        echo "Chante dans la troupe";
    }
}

?>