<?php
include_once "troupe.php";


class Chanteur extends Musicien implements IChanteur {
    private $typeVoix;

    public function __construct(string $nom, int $age, string $typeVoix){
        parent::__construct($nom, $age);
        $this->typeVoix = $typeVoix; 
    }

    public function getTypeVoix(): string {
        return $this->typeVoix;
    }

    public function setTypeVoix(string $typeVoix): void {
        $this->typeVoix = $typeVoix;
    }

    public function __toString(): string {
        return "Nom : " . $this->nom . ", Age : " . $this->age . ", Type de voix : " . $this->typeVoix;
    }

    public function improviser(): string {
        return "Improvisation du chanteur";
    }
}

interface IChanteur {
    public function getTypeVoix(): string;
    public function setTypeVoix(string $typeVoix): void;
    public function improviser(): string;
}

?>
