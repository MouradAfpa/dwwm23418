<?php

include "../PieceEchecs.php";
class Fou extends PieceEchecs
{
    private $xArrivee;
    private $yArrivee;

    public function __construct(int $x, int $y, int $couleur)
    {
        parent::__construct($x, $y, $couleur);
    }

    public function peutAller($xArrivee, $yArrivee)
    {
        $this->xArrivee = $xArrivee;
        $this->yArrivee = $yArrivee;
        $jeSuisIci = parent::getCoordonnees();
        $diffX = abs($this->xArrivee - $jeSuisIci["coordonnée X"]);
        $diffY = abs($this->yArrivee - $jeSuisIci["coordonnée Y"]);

        if($diffX == $diffY){
            parent::setCoordonnees($xArrivee, $yArrivee);
            echo "Je me déplace";
        }else{
            echo "Impossible";
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
    
}

$fouBlanc = new Fou(6, 1, 1);
echo $fouBlanc;
echo $fouBlanc->peutAller(7,2);
echo $fouBlanc;
echo $fouBlanc->peutAller(8,3);
echo $fouBlanc;
echo $fouBlanc->peutAller(7,2);
echo $fouBlanc;







