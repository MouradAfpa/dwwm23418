<?php

class Chanteur extends Musicien implements IVoix
{
    public function __construct(string $nom, int $age)
    {
        parent::__construct($nom, $age);
    }
    public function chante()
    {
        return "Le chanteur commence à chanter ! <br>";
    }
    public function typeVoix( string $typeVoix): string 
    {
        return "Le Chanteur a une voix de type : $typeVoix";
    }
}
