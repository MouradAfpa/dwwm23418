<?php

include_once("Musiciens.php");
include_once("Interfaces.php");

Class Percussionniste extends Musicien implements instrumentPercussion{

    public function __construct($nom, $age){
        parent:: __construct($nom, $age);
    }

    public function jouerPercu()
    {
      echo "il joue un instrument à percussion";
    }

    public function jouerPercussion(){
        echo "Joue un instrument à percussion";
    }
    
}

?>