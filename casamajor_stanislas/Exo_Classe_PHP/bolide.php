<?php

include_once("voiture.php");

class Bolide extends Voiture
{
    private bool $route;
    private int $vitesseMax;

    public function __construct(string $marque, string $modele, string $couleur, int $nombrePorte, bool $route, int $vitesseMax)
    {
        parent::__construct($marque, $modele, $couleur, $nombrePorte);
        $this->route = $route;
        $this->vitesseMax = $vitesseMax;
    }

    public function afficherRoute(): bool
    {
        return $this->route;
    }

    public function afficherVitesseMax(): int
    {
        return $this->vitesseMax;
    }

    public function getRoute(): bool
    {
        return  $this->route;
    }

    public function getVitMax(): int
    {
        return $this->vitesseMax;
    }

    public function setRoute(bool $route): void
    {
        $this->route = $route;
    }

    public function setVitMax(int $vitesseMax): void
    {
        $this->vitesseMax = $vitesseMax;
    }

    public function __toString()
    {
        return parent:: __toString() . "<br> Peut-elle rouler en ville : " . $this->route . "<br> Vitesse maximum : " . $this->vitesseMax;
    }
}

$bolide1 = new Bolide("Nissan","Skyline R34 GT-R", "Bleue", 5, true, 271);
$bolide2 = new Bolide("Ferrari","F430","Rouge",3,true, 315);

echo $bolide1;