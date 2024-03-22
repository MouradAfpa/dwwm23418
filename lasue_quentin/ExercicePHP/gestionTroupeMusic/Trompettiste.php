<?php

class Trompettiste extends Musicien implements IInstrumentVent
{
    public function __construct(string $nom, int $age)
    {
        parent::__construct($nom, $age);
    }
    public function souffle()
    {
        return "Le trompettiste fais sont solo ! <br>";
    }
    public function jouerVent()
    {
        return " joue d'un instrument a vent.";
    }
}
