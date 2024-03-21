<?php
abstract class Musicien
{
    private string $nom;
    private int $age;

    public function __construct(string $nom, int $age)
    {
        $this->nom = $nom;
        $this->age = $age;
    }
    public function __toString()
    {
        return "Nom : " . $this->nom . " Age : " . $this->age . " <br>";
    }
    public function getNom()
    {
        return $this->nom;
    }
    public function setNom($nom)
    {
        $this->nom = $nom;
    }
    public function getAge()
    {
        return $this->age;
    }
    public function setAge($age)
    {
        $this->age = $age;
    }
}
