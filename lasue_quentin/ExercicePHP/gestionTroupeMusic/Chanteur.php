<?php

class Chanteur extends Musicien
{
    public function __construct(string $nom, int $age)
    {
        parent::__construct($nom, $age);
    }
    public function chante()
    {
        return "Le chanteur commence à chanter ! <br>";
    }
}
