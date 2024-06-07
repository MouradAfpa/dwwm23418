<?php
include "musicians.php";
// 
class Batteur extends Musicien implements IinstrumentPercussion {
    private string $batteur;
    // 
    public function __construct(string $nom, int $age, string $batteur)
    {
        parent::__construct($nom, $age);
        $this->batteur= $batteur;
    }
    // 
    public function getBatteur() {
        return $this->batteur;
    }
    // 
    public function setBatteur(string $batteur): void {
        $this->batteur= $batteur;
    }
    // 
    public function jouerPercussion($instruPercu)
    {
        echo "Joue de: " . $instruPercu;
    }
    // 
    public function __toString()
    {
        return $this->batteur;
    }
}
?>