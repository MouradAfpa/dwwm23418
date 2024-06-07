<?php

Class Musicien {
    public string $nom;
    public int $age;

    public function __construct($nom, $age){
        $this->nom = $nom;
        $this->age = $age;
    }

    public function getNom(): string {
        return $this->nom;
    }

    public function getAge(): int {
        return $this->age;
    }

    public function setNom(string $nom): void {
        $this->nom = $nom;
    }

    public function setAge(int $age): void {
        $this->age = $age;
    }

    public function __toString()
    {
        echo "Nom du musicien  : " . $this->nom . "Age du musicien : " . $this->age;
    }

}

?>