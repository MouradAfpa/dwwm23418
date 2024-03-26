<?php

class Percussionniste extends Musicien
{
    public function __construct(string $nom, int $age)
    {
        parent::__construct($nom, $age);
    }

    public function jouerUnInstrument(): string {
        return "Joue des percussions";
    }
}
