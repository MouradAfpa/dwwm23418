<?php

abstract class Musicien{
    private string $nom;
    private int $age;

    public function __construct(string $nom, int $age ){
        $this->nom = $nom;
        $this->age = $age;

    }
    
    public function getNom(): string {
        return $this-> nom;
    }
    public function setNom(string $Nom): void {
        $this->nom = $Nom;
    }
    public function getAge(): string {
        return $this-> age;
    }
    public function setMarque(string $age): void {
        $this->age = $age;
    
    }

    public function __toString() {
        return "Nom : " . $this->nom . ", Age : " . $this->age;
        }
}


?>