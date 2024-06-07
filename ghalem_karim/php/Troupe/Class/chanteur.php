<?php
include_once "musicians.php";
include_once "Ivoix";
class Chanteur extends Musicien implements Ivoix {
    private string $chanteur;
    // 
    public function __construct(string $nom, int $age, string $chanteur)
    {
        parent::__construct($nom, $age);
        $this->chanteur = $chanteur;
    }
    // 
    public function getChanteur() {
        $this->chanteur;
    }
    // 
    public function setChanteur(string $chanteur): void {
        $this->chanteur = $chanteur;
    }
    // 
    public function typeVoix($voix)
    {
        echo "Chante: " . $voix;
    }
    // 
    public function __toString()
    {
        return $this->chanteur;
    }
}
?>