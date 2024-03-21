<?php

class Guitariste extends Musicien
{
    public function __construct(string $nom, int $age)
    {
        parent::__construct($nom, $age);
    }
    public function gratte()
    {
        return "Le guitariste fais sont solo ! <br>";
    }
}
