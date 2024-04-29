<?php

include_once("FonctionnalitesVoiture.php");


class Voiture1 implements FonctionnalitesVoiture
{
        private string $marque;
        private string $model;
        private string $couleur;
        private int $nbrPorte;
        private int $vitesse;
    
    public function __construct(string $marque,string $model,string $couleur,int $nbrPorte, int $vitesse)
    {
        $this->marque = $marque;
        $this->model = $model;
        $this->couleur = $couleur;
        $this->nbrPorte = $nbrPorte;
        $this->vitesse = $vitesse;
    }
    public function allumerPhares()
    {
        echo "Phares allumés";
    }
    public function changerVitesse($vitesse):void
    {
        echo "Vous êtes actuellement à : $vitesse km/h";
    }
    public function klaxonner()
    {
        echo "La voiture klaxonne";
    }
    public function __toString()
    {
        return "Marque : $this->marque :  Model : $this->model, Couleur : $this->couleur, NbrPorte : $this->nbrPorte, Vitesse : $this->vitesse";
    }
}
$laVoiture = new Voiture1("volkswagen","golf gti","noire",5,255);
$laVoiture->changerVitesse(300);
$laVoiture->allumerPhares();
$laVoiture->klaxonner();

?>