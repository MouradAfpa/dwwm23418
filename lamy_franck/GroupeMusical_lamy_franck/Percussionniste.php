<?php

//Percussionniste.php

class Percussionniste extends Musicien {

    public function __construct(string $name, string $firstName, int $age, string $instrument){

        parent::__construct($name, $firstName, $age);
        $this->instrument = $instrument;

    }

public function jouerPercu(){
    echo "Je joue des percussions";
}

public function __toString(){
    return "Percussionniste: " . "Nom : " . $this->getName() . " Prénom : " . $this->getFirsName() . "Age : " . $this->getAge() . " " . $this->jouerPercu();
 
}

}








?>