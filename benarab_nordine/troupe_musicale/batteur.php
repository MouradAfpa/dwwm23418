<?php
include_once "troupe.php";

class Batteur extends Musicien {

    public function __construct(string $nom, int $age) {
        parent::__construct($nom, $age);
    }

    public function jouerPercussion() {
        echo "Je joue de la batterie!";
    }
}

interface IBatteur {
    public function jouerPercussion();
}

$musicien1 = new Batteur("Alain Dutronc", 35);
$musicien1->jouerPercussion();

echo $musicien1
?>
