<?php
class Voiture implements IFonctionnalitesVoiture
{
    private string $marque;
    private string $modele;
    private string $couleur;
    private  int $nbrPorte;

    public function __construct(string $marque, string $modele, string $couleur, int $nbrPorte)
    {
        $this->marque = $marque;
        $this->modele = $modele;
        $this->couleur = $couleur;
        $this->nbrPorte = $nbrPorte;
    }
    public function __toString()
    {
        return "Marque : " . $this->marque . ", Modele: " . $this->modele . ", Couleur : " . $this->couleur . ", Nombre de porte : " . $this->nbrPorte;
    }

    public function getMarque(): string
    {
        return $this->marque;
    }
    public function setMarque(string $marque)
    {
        $this->marque = $marque;
    }
    public function getModele(): string
    {
        return $this->modele;
    }
    public function setModele(string $modele)
    {
        $this->modele = $modele;
    }
    public function getCouleur(): string
    {
        return $this->couleur;
    }
    public function setCouleur(string $couleur)
    {
        $this->couleur = $couleur;
    }
    public function getNbrPorte(): int
    {
        return $this->nbrPorte;
    }
    public function setNbrPorte(int $nbrPorte)
    {
        $this->nbrPorte = $nbrPorte;
    }

    public function demarrer()
    {
        return "La voiture demarre.<br>";
    }

    public function freiner()
    {
        return "La voiture freine.<br>";
    }

    public function accelerer()
    {
        return "La voiture accélére.<br>";
    }

    public function allumerPhares(): string
    {
        return "Les phares sont allumés.<br>";
    }
    public function changerVitesse(int $vitesse): string
    {
        return "La voiture change de vitesse à $vitesse km/h.<br>";
    }
    public function klaxonner(): string
    {
        return "La voiture klaxxone.<br>";
    }
}