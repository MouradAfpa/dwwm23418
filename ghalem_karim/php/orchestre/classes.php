<?php

// Classe abstraite Musicien
abstract class Musicien {
    protected $nom;
    protected $age;
    protected $groupe;
    
    public function __construct($nom, $age) {
        $this->nom = $nom;
        $this->age = $age;
    }
    
    public function getNom() {
        return $this->nom;
    }
    
    public function setNom($nom) {
        $this->nom = $nom;
    }
    
    public function getAge() {
        return $this->age;
    }
    
    public function setAge($age) {
        $this->age = $age;
    }
    
    public function getGroupe() {
        return $this->groupe;
    }
    
    public function setGroupe($groupe) {
        $this->groupe = $groupe;
    }
    
    abstract public function __toString();
}

// Classes pour les membres de la troupe
class Guitariste extends Musicien implements InstrumentCorde {
    public function jouerCorde() {
        return "Je joue de la guitare !";
    }
    
    public function __toString() {
        return "Guitariste: Nom - " . $this->nom . ", Âge - " . $this->age;
    }
}

class Trompettiste extends Musicien implements InstrumentVent {
    public function jouerVent() {
        return "Je joue de la trompette !";
    }
    
    public function __toString() {
        return "Trompettiste: Nom - " . $this->nom . ", Âge - " . $this->age;
    }
}

class Batteur extends Musicien {
    public function __toString() {
        return "Batteur: Nom - " . $this->nom . ", Âge - " . $this->age;
    }
}

class Chanteur extends Musicien implements Voix {
    public function typeVoix() {
        return "Je suis un chanteur !";
    }
    
    public function __toString() {
        return "Chanteur: Nom - " . $this->nom . ", Âge - " . $this->age;
    }
}

class Percussionniste extends Musicien {
    public function __toString() {
        return "Percussionniste: Nom - " . $this->nom . ", Âge - " . $this->age;
    }
}

// Interfaces pour les instruments
interface InstrumentCorde {
    public function jouerCorde();
}

interface InstrumentVent {
    public function jouerVent();
}

// Interface pour la voix
interface Voix {
    public function typeVoix();
}

?>
