<?php

class Trompettiste extends Musicien
{
    public function __construct(string $nom, int $age)
    {
        parent::__construct($nom, $age);
    }
    public function souffle()
    {
        return "Le trompettiste fais sont solo ! <br>";
    }
}
