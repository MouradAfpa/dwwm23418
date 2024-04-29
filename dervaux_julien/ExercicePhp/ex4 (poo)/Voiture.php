<?php

class Voiture

{
    private string $marque;
    private string $model;
    private string $couleur;
    private int $nbrPorte;

public function __construct(string $marque,string $model,string $couleur,int $nbrPorte)
{
    $this->marque = $marque;
    $this->model = $model;
    $this->couleur = $couleur;
    $this->nbrPorte = $nbrPorte;
}
public function getMarque() : string {
    return $this->marque;
}
public function setMarque(string $marque) : void {
    $this->marque = $marque;
}
public function __toString()
{
    return "Marque : $this->marque :  Model : $this->model, Couleur : $this->couleur, NbrPorte : $this->nbrPorte";
}
public function demarrer() : string {
    return  "Démarrage";
}
public function freiner() : string {
    return  "freinage";
}
public function accelerer() : string {
    return  "acceleration";
}
}

$citadine = new Voiture("renault","clio","bleue",5);
$utilitaire = new Voiture("peugeot","106","rouge",5);
$sport = new Voiture("ferrari","296","Jaune",3);

echo "$citadine;
<br/>";
echo "$utilitaire;
<br/>";
echo "$sport;
<br/>";

echo $citadine->getMarque();
$citadine->setMarque("fiat");
echo "$citadine;
<br/>";

