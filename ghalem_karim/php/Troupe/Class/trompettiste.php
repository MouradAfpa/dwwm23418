<?php
include "musicians.php";
include "IinstrumentVent.php";
class Trompettiste extends Musicien implements IinstrumentVent {
    private string $trompettiste;
    // 
    public function __construct(string $nom, int $age, string $trompettiste)
    {
        parent::__construct($nom, $age);
        $this->trompettiste = $trompettiste;
    }
    // 
    public function getTrompettiste() {
        return $this->trompettiste;
    }
    // 
    public function setTrompettiste(string $trompettiste): void {
        $this->trompettiste = $trompettiste;
    }
    // 
    public function jouerVent($instruVent) {
        echo "Joue de: " . $instruVent;
    }
    // 
    public function __toString()
    {
        return $this->trompettiste;
    }
}
?>