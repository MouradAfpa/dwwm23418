<?php

class Guitariste extends Musicien implements IInstrumentCorde
{
    public function __construct(string $nom, int $age)
    {
        parent::__construct($nom, $age);
    }
    public function gratte()
    {
        return "Le guitariste fais sont solo ! <br>";
    }
    public function jouerCorde()
    {
        return "Joue un instrument a corde.";
    }
}
