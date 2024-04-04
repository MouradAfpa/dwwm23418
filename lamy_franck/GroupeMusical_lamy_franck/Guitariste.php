<?php

//Guitariste.php 

class Guitariste extends Musicien {
    public string $instrument;

    public function __construct(string $name, string $firstName, int $age, string $instrument)
    {
        parent::__construct($name, $firstName, $age);
        $this->instrument = $instrument;
        
    }

    public function jouerCorde(){
        echo "Joue de la guitare";
    }

    public function __toString(){
        return "Guitariste: Nom: " . $this->getName() . " Prénom: " . $this->getFirstName() . " Âge: " . $this->getAge() . " " . $this->jouerCorde();
    }


interface InstrumentCorde {
    public function jouerCorde();
}


}

?>
