<?php

include_once "Voiture.php";
 
class Bolide extends Voiture
{
    private bool $homologueRoutes;
    private int $vitesseMax;

    public function __construct(string $marque,string $model,string $couleur,int $nbrPorte, bool $homologueRoutes, int $vitesseMax)
    {
        parent::__construct($marque, $model,$couleur,$nbrPorte);
        $this->homologueRoutes = $homologueRoutes;
        $this->vitesseMax = $vitesseMax;
    }
    public function getBool() : bool {
        return $this->homologueRoutes;
    }
    public function getVitesseMax() : bool {
        return $this->vitesseMax;
    }
    public function setBool(bool $homologueRoutes) : bool {
        return $this->homologueRoutes;
    }
    public function setVitesseMax(int $vitesseMax) : int {
        return $this->vitesseMax;
    }
    public function __toString()
    {
        return parent::__toString() . "Homologuée" . $this->homologueRoutes . " : VitesseMax :" . $this->vitesseMax;
}
}
 $bolide = new Bolide("volkswagen","golf mkII GTI","noire",5,true,211);
echo $bolide;