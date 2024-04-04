<?php
include_once "troupe.php";

class Percussionniste extends Musicien{

    public function __construct(string $nom, int $age){
        parent::__construct($nom, $age); 
}

}

interface IPercussionniste
{
    public function jouerPercussion();
    public function rythmer();
}

?>