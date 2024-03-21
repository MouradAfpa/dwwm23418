<?php

class Batteur extends Musicien
{
    public function __construct(string $nom, int $age)
    {
        parent::__construct($nom, $age);
    }
    public function Tape(){
        return "Le Batteur fais sont solo ! <br>";
    }
}
