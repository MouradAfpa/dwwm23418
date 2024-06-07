<?php

include_once("interface.php");

class Voiture implements FonctionnalitesVoiture
{
    private string $marque;
    private string $modele;
    private string $couleur;
    private int $nombrePorte;

    public function __construct($marque, $modele, $couleur, $nombrePorte)
    {
        $this->marque = $marque;
        $this->modele = $modele;
        $this->couleur = $couleur;
        $this->nombrePorte = $nombrePorte;
    }

    public function allumerPhares()
    {
        echo "Les phares de la voiture s'allumes <br>";
    }

    public function changerVitesse($vitesse)
    {
        echo "La voiture change de vitesse à " . $vitesse . "km/h <br>";
    }

    public function klaxonner()
    {
        echo "la voiture klaxonne <br>";
    }

    public function demarrage()
    {
        return "démarre";
    }

    public function freinage()
    {
        return "freine";
    }

    public function acceleration()
    {
        return "accélére";
    }
    public function getMarque(): string
    {
        return $this->marque;
    }

    public function getModele(): string
    {
        return $this->modele;
    }
    public function getCouleur(): string
    {
        return $this->couleur;
    }
    public function getNbrPorte(): int
    {
        return $this->nombrePorte;
    }
    public function setMarque(string $marque): void 
    {
        $this->marque = $marque;
    }

    public function setModele(string $modele): void
    {
        $this->modele = $modele;
    }
    public function setCouleur(string $couleur): void
    {
        $this->couleur = $couleur;
    }
    public function setNbrPorte(int $nombrePorte): void
    {
        $this->nombrePorte = $nombrePorte;
    }

    public function __toString()
    {
        return "Marque : " . $this->marque . "<br> modèle : " . $this->modele . "<br> couleur : " . $this->couleur . "<br> nombre de portes : " . $this->nombrePorte;
    }
}
$voiture1 = new Voiture("Peugeot", "308", "Blanche", 5);
$voiture2 = new Voiture("Renaut", "captur", "Chartreuse", 5);
$voiture3 = new Voiture("Nissan", "Skyline", "Grise", 3);

$voiture1->allumerPhares();
$voiture1->changerVitesse(50);
$voiture1->klaxonner();

$voiture2->setMarque("Renaut");
$voiture2->setModele("Nouvelle R5");
$voiture2->setCouleur("jaune");
$voiture2->setNbrPorte(3);

// echo $voiture2->getMarque() . "<br> " . $voiture2->getModele() . " <br>" . $voiture2->getCouleur() . " <br> " . $voiture2->getNbrPorte() . "<br>";

echo $voiture1;

// echo $voiture2;

// try {
//     $host = "localhost";
//     $db = "garage";
//     $connexion = new PDO("mysql:host=$host;dbname=$db", "root", "");
//     $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     echo "connexion réussie !";
//     $query = "INSERT INTO voiture (modele, marque, couleur) VALUES ('Peugeot', '308', 'Blanche');";
//     $connexion->exec($query);
// } catch (PDOException $e) {
//     echo " Erreur : " . $e->getMessage();
// }

// try {
//     $host = "localhost";
//     $db = "garage";
//     $connexion = new PDO("mysql:host=$host;dbname=$db", "root", "");
//     $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     echo "connexion réussie !";
//     $query = "INSERT INTO voiture (modele, marque, couleur) VALUES (:modele, :marque, :couleur);";
//     $statement = $connexion->prepare($query);
//     $modele = "Renault";
//     $marque = "L'aguna";
//     $couleur = "Bleue";
//     $statement->bindParam(":modele", $modele);
//     $statement->bindParam(":marque", $marque);
//     $statement->bindParam(":couleur", $couleur);
//     $statement->execute();
//     echo "Insertion réussie";
// } catch (PDOException $e) {
//     echo " Erreur : " . $e->getMessage();
// }

try {
    $host = "localhost";
    $db = "garage";
    $connexion = new PDO("mysql:host=$host;dbname=$db", "root", "");
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo " <br> connexion réussie ! <hr/>";
    $query = "SELECT * FROM voiture";
    $statement = $connexion->prepare($query);
    $statement->execute();
    $voitures = $statement->fetchAll(PDO::FETCH_ASSOC);
    foreach($voitures as $voiture){
        echo "<br>" . $voiture["modele"] . "<br>" . $voiture["marque"] . "<br>" . $voiture["couleur"]."<hr/>";
    }
} catch (PDOException $e) {
    echo " Erreur : " . $e->getMessage();
}