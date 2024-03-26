<?php
include_once "troupe.php";

class Trompettiste extends Musicien{

    public function __construct(string $nom, int $age){
        parent::__construct($nom, $age); 
}
}

interface ITrompettiste
{
    public function jouerVent();
}





?>