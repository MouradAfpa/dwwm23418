<?php

class PieceEchecs

{
    private int $coordX;
    private int $coordY;
    private int $couleur;


    public function __construct($x, $y, $couleur)
    {
        $this->setCoordonnees($x, $y);
        $this->setCouleur($couleur);
    }

    // Méthode pour définir les coordonnées de la pièce

    public function setCoordonnees($x, $y)
    {
        if ($x >= 1 && $x <= 8 && $y >= 1 && $y <= 8) {
            $this->coordX = $x;
            $this->coordY = $y;
            
        } else {
            echo "Les coordonnées doivent être comprises entre 1 et 8.";
        }
    }

    public function setCouleur($couleur)
    {
        // Vérification de la couleur valide

        if ($couleur == 1 || $couleur == 2) {
            $this->couleur = $couleur;
        } else {
            echo "La couleur doit être 1 (blanche) ou 2 (noire).";
        }
    }

    // Méthode pour obtenir les coordonnées de la pièce

    public function getCoordonnees()
    {
        $coordonnées = ["coordonée X" => $this->coordX,
                        "coordonée Y" => $this->coordY      
    ];
        return $coordonnées;
    }

    // Méthode pour obtenir la couleur de la pièce

    public function getCouleur()
    {
        return $this->couleur;
    }

    // public function __toString()
    // {
    //     return (
    //         $this->coordX;
    //         $this->coordY;
        
    //     )
    // }
}
