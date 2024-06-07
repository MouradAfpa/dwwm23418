<?php
abstract class Musicien {
    private string $nom;
    private int $age;
    // 
    public function __construct(string $nom, int $age)
    {
        $this->nom = $nom;
        $this->age = $age;
    }
    // 
    public function getNom() {
        return $this->nom;
    }
    public function getAge() {
        return $this->age;
    }
    // 
    public function setNom(string $nom): void {
        $this->nom = $nom;
    }
    public function setAge(int $age): void {
        $this->age = $age;
    }
    // 
    public function __toString()
    {
        return "Nom: " . $this->nom . "<br> Age: " . $this->age;
    }
}
?>