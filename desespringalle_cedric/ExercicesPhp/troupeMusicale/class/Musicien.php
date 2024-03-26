<?php

abstract class Musicien
{
    private string $nom;
    private int $age;

    public function __construct($nom, $age)
    {
        $this->nom = $nom;
        $this->age = $age;
    }

    public function __toString()
    {
        return "Nom du musicien : " . $this->nom . "<br>Âge du musicien : " . $this->age;
    }

    public function getNom(): string
    {
        return $this->nom;
    }

    public function setNom(string $nom): string
    {
        return $this->nom = $nom;
    }

    public function getAge(): string
    {
        return $this->age;
    }

    public function setAge(int $age): string
    {
        return $this->age = $age;
    }

    abstract public function jouerUnInstrument(): string;
}
