<?php
class Bolide extends Voiture
{
    private bool $route;
    private int $vitesseMax;

    public function __construct(string $marque, string $modele, string $couleur, int $nbrPorte, bool $route, int $vitesseMax)
    {
        parent::__construct($marque,  $modele, $couleur, $nbrPorte);
        $this->route = $route;
        $this->vitesseMax = $vitesseMax;
    }
    public function __toString()
    {
        return parent::__toString() . ", Vitesse max : " . $this->vitesseMax . ", Homologation Route : " . ($this->route ? "True" : "False");
    }
    public function getRoute()
    {
        return $this->route ?  "True" : "False";
    }
    public function setRoute($route)
    {
        $this->route = $route;
    }
    public function getVitesseMax()
    {
        return $this->vitesseMax;
    }
    public function setVitesseMax($vitesseMax)
    {
        $this->vitesseMax = $vitesseMax;
    }
}
