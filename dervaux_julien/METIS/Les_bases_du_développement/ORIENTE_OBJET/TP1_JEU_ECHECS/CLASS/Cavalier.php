<?php

include "../PieceEchecs.php";

class Cavalier extends PieceEchecs
{
    private $xArrivee;
    private $yArrivee;

    public function __construct(int $x, int $y, int $couleur)
    {
        parent::__construct($x, $y, $couleur);
    }

    public function peutAller($xArrivee, $yArrivee)
    {
        $jeSuisIci = parent::getCoordonnees();
        if ((abs($xArrivee - $jeSuisIci["coordonnée X"]) == 2 && abs($yArrivee - $jeSuisIci["coordonnée Y"]) == 1) || 
            (abs($xArrivee - $jeSuisIci["coordonnée X"]) == 1 && abs($yArrivee - $jeSuisIci["coordonnée Y"]) == 2)) 
        {
            parent::setCoordonnees($xArrivee, $yArrivee);
            echo "Je me déplace";
        }
        else{
            echo "Impossible";
            var_dump($jeSuisIci);
        }
    }

    public function __toString()
    {
        $stocks =  parent::getCoordonnees();
        $result = "";
        foreach ($stocks as $stock => $value) {
            $result .= $stock . ' ' . $value . "\n";
        }
        return $result;
    }   

    public function getCase(){
        parent::getCouleurCase();
    }
}

$cavalier = new Cavalier(7,1,1);

echo $cavalier->peutAller(8,3) . "<br>";
echo $cavalier . "<br>";
echo $cavalier->peutAller(7,1) . "<br>";
echo $cavalier . "<br>";
echo $cavalier->peutAller(8,3) . "<br>";
echo $cavalier . "<br>";
echo $cavalier->getCase() . "<br>";
?>
