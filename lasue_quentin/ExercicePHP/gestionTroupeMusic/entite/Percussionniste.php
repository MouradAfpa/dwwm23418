<?php

class Percussionniste extends Musicien
{
    public function __construct(string $nom, int $age)
    {
        parent::__construct($nom, $age);
    }
    public function percute()
    {
        return "Le percusionniste commence à percuter ! <br>";
    }
}
