<?php
include("FonctionV.php");

class Voiture implements FonctionnalitesVoiture
{
    private string $marque;
    private string $modele;
    private string $couleur;
    private int $nbrPorte;


    public function __construct($marque, $modele, $couleur, $nbrPorte)
    {
        $this->marque = $marque;
        $this->modele = $modele;
        $this->couleur = $couleur;
        $this->nbrPorte = $nbrPorte;
    }

    public function demarrer()
    {
        return "demarrage";
    }
    public function freiner()
    {
        return "freinage";
    }
    public function accelerer()
    {
        return "accélérage";
    }

    public function allumerPhares()
    {
        return "Les phares sont allumés ";
    }

    public function changerVitesse(int $vitesse)
    {
        return "La voiture change de vitesse à " . $vitesse . "Km/H";
    }

    public function klaxonner()
    {
        return "La voiture klaxonne";
    }

    public function __toString()
    {
        return "Marque : " . $this->marque . ",<br> Modele : " . $this->modele . ",<br> Couleur : " . $this->couleur . ",<br> Nombre de portes : " . $this->nbrPorte;
    }

    public function getMarque(): string
    {
        return $this->marque;
    }
    public function getModel(): string
    {
        return $this->modele;
    }
    public function getCouleur(): string
    {
        return $this->couleur;
    }
    public function getNbrPorte(): int
    {
        return $this->nbrPorte;
    }



    public function setMarque(string $marque): void
    {
        $this->marque = $marque;
    }
    public function setModel(string $modele): void
    {
        $this->modele = $modele;
    }
    public function setCouleur(string $couleur): void
    {
        $this->couleur = $couleur;
    }
    public function setNbrPorte(int $nbrPorte): void
    {
        $this->$nbrPorte = $nbrPorte;
    }
}


$voiture1 = new Voiture("renault", "Megane", "Bleu", 5);
$voiture2 = new Voiture("peugeot", "208", "Rouge", 5);
$voiture3 = new Voiture("Mini", "Cooper S", "Vert", 3);


echo "<br>" . $voiture2->getMarque();
echo "<br>" .  $voiture2->getModel();
echo "<br>" . $voiture2->getCouleur();
echo "<br>" .  $voiture2->getNbrPorte() . "<br><br>";



$voiture2->setMarque("Renault");
$voiture2->setModel("Nouvelle R5");
$voiture2->setCouleur("jaune");
$voiture2->setNbrPorte(3);

echo  $voiture2 . "<br><br>";

echo $voiture2->allumerPhares() . ". " . $voiture2->changerVitesse(50) . ". " . $voiture2->klaxonner() . "<br>";

// try {
//     $host = "localhost";
//     $dbname = "garage";


    // $connexion = new PDO("mysql:host=$host;dbname=$dbname","root","");
    // $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connexion reussie !";
    // $query ="INSERT INTO voiture (marque, modele, couleur) VALUES ('Mini','Cooper','Vert');";
    // $connexion->exec($query);
    // }catch(PDOException $e){
    //     echo "Erreur : " . $e->getMessage();
    // }


    // $connexion = new PDO("mysql:host=$host;dbname=$dbname","root","");
    // $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connexion reussie !";
    // $query ="INSERT INTO voiture (marque, modele, couleur) VALUES (:marque, :modele, :couleur)";
    // $statement = $connexion->prepare($query);
    // $marque = $voiture2->getMarque();
    // $modele = $voiture2->getModel();
    // $couleur = $voiture2->getCouleur();
    // $statement->bindParam(":marque", $marque);
    // $statement->bindParam(":modele", $modele);
    // $statement->bindParam(":couleur", $couleur);
    // $statement->execute();
    // echo "Insertion reussie !";
    // }catch(PDOException $e){
    //     echo "Erreur : " . $e->getMessage();
    // }




//     $connexion = new PDO("mysql:host=$host;dbname=$dbname", "root", "");
//     $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
//     echo "Connexion reussie ! <br><br>";
//     $query = "SELECT * FROM voiture";
//     $statement = $connexion->prepare($query);
//     $statement->execute();
//     $vehicules = $statement->fetchAll(PDO::FETCH_ASSOC);
//     foreach ($vehicules as $vehicule) {
//         echo "ID : " . $vehicule['id'] . "<br>";
//         echo "Marque : " . $vehicule['marque'] . "<br>";
//         echo "Modele : " . $vehicule['modele'] . "<br>";
//         echo "Couleur : " . $vehicule['couleur'] . "<hr>";
//     }
// } catch (PDOException $e) {
//     echo "Erreur : " . $e->getMessage();
// }


$host = "localhost";
$dbname = "garage";
$connexion = new PDO("mysql:host=$host;dbname=$dbname", "root", "");
$connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
echo "Connexion reussie ! <br><br>";
$connexion->beginTransaction();
try{
    $connexion->exec("INSERT INTO voiture (marque, modele, couleur) VALUES ('Renault', 'Megane', 'Bleu')");
    $connexion->exec("UPDATE voiture SET modele = 'Megane' WHERE couleur = 'Bleu'");
    $connexion->commit();
    echo "Transaction successfull !";
}catch(PDOException $e){
    $connexion->rollBack();
    echo "Erreur de transaction : " . $e->getMessage();
}