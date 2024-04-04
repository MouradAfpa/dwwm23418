<?php
include("Voiture.php");


class Bolide extends Voiture{
    private bool $route;
    private int $vitesseMax;

    public function __construct(string $marque, string $modele, string $couleur, int $nbrPorte, bool $route, int $vitesseMax)
    {
        parent::__construct($marque, $modele, $couleur, $nbrPorte);
        $this->route = $route;
        $this->vitesseMax = $vitesseMax;
    }

    public function getRoute() : bool{
        return $this->route;
    }
    public function getVitesseMax() : int{
        return $this->vitesseMax;
    }
    public function setRoute(bool $route):void{
        $this->route = $route;
    }
    public function setVitesseMax(int $vitesseMax):void{
        $this->vitesseMax = $vitesseMax;
    }
public function __toString()
{
    if($this->route){
        $route = "true";
    }else{
        $route = "false";
    }
    return parent::__toString() . "<br>Route : " . $route . ",<br> VitesseMax : " . $this->vitesseMax . " Km/H";
}

}

$Bolide1 = new Bolide("Ford","Shelby gt500","Bleu",3,true,300);


echo "<br><br>".$Bolide1;
// echo "<br>".$Bolide1->getRoute() . "<br>";
// echo $Bolide1->getVitesseMax();




?>