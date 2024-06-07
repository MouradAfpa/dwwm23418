<?php
include_once "musicians.php";
include_once "../Interfaces/IinstrumentCorde.php";
// 
class Guitariste extends Musicien implements IinstrumentCorde {
    private string $guitariste;
    // 
    public function __construct(string $nom, int $age, string $guitariste)
    {
        parent::__construct($nom, $age);
        $this->guitariste = $guitariste;
    }
    // 
    public function getGuitariste() {
        return $this->guitariste;
    }
    // 
    public function setGuitariste(string $guitariste): void {
        $this->guitariste = $guitariste;
    }
    // 
    public function jouerCorde($instruCorde)
    {
        echo "Joue de: " . $instruCorde;
    }
    // 
    public function __toString()
    {
        return $this->guitariste;
    }
}
?>