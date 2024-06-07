<?php
include_once "troupe.php";

class Guitariste extends Musicien {

    public function __construct(string $nom, int $age){
        parent::__construct($nom, $age); 
    }

}

interface IGuitariste {
    public function jouerCorde();
    public function transposer();
}
?>
