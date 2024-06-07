<?php

//Chanteur.php

class Chanteur extends Musicien {
    public string $typeVoix;

    public function __construct(string $name, string $firstName, int $age, string $typeVoix){

        parent::__construct($name, $firstName, $age);
        $this->typeVoix = $typeVoix;
    }

    public function getTypeVoix() {
        return $this->typeVoix;
    }

    public function setTypeVoix($typeVoix) {
        $this->typeVoix = $typeVoix;
    }

    public function __toString() {
        return "Chanteur : Nom : " . $this->getName() . " Prénom: " . $this->getFirstName() . " Âge : " . $this->getAge() . " Type de voix : " . $this->typeVoix . ".";
    }


    
    interface Voix {
        public function typeVoix();
    }
    
    

}

?>
