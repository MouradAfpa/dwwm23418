<?php

//Batteur.php

class Batteur extends Musicien {
    public string $instrument;

    public function __construct(string $name, string $firstName, int $age, string $instrument) {

        parent::__construct($name, $firstName, $age);
        $this->instrument = $instrument;
    }

    public function jouerBatterie(){
        echo "Joue de la batterie";
    }

    public function __toString(){
        return "Nom: " . $this->getName() . " Prénom: " . $this->getFirstName() . " Âge: " . $this->getAge() . " " . $this->jouerBatterie();
    }
}

?>
