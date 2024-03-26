<?php
class Database
{
    private  string $host = "localhost";
    private string $db = "troupe";
    private string $user = "root";
    private string $mdp = "";

    public function ajoutMusicien(string $type, string $nom, int $age)
    {
        $imgType = [
            "guitariste" => "./musicien/guitare.jpg",
            "trompettiste" => "./musicien/trompettiste.jpg",
            "chanteur" => "./musicien/chanteur.jpg",
            "batteur" => "./musicien/batteur.jpg",
            "percussionniste" => "./musicien/percussionniste.png"
        ];

        try {
            //Connexion à la base de données avec PDO
            $connexion = new PDO("mysql:host=$this->host;dbname=$this->db", $this->user, $this->mdp);
            //Configuration de PDO pour générer des exeptions en cas d'erreur.
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "Connexion réussie ! ";
            //Opération de modification de base de données
            $img= $imgType[$type];
            $query = "INSERT INTO musicien (nom,age,type,image) VALUES (:nom, :age, :typeM, :img )";
            $statement = $connexion->prepare($query);

            $statement->bindParam(":nom", $nom);
            $statement->bindParam(":age", $age);
            $statement->bindParam(":typeM", $type);
            $statement->bindParam(":img", $img);

            //Exécution de la requéte préparée
            $statement->execute();
        } catch (PDOException $e) {
            // gestion des exeptions PDO : affichage du message d'erreur
            echo "Erreur : " . $e->getMessage();
        }
    }

    public function getAllMembers()
    {
        try {
            //Connexion à la base de données avec PDO
            $connexion = new PDO("mysql:host=$this->host;dbname=$this->db", $this->user, $this->mdp);
            //Configuration de PDO pour générer des exeptions en cas d'erreur.
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $query = "SELECT *  FROM musicien";
            $resultats = $connexion->query($query);
            return $resultats;
        } catch (PDOException $e) {
            // gestion des exeptions PDO : affichage du message d'erreur
            echo "Erreur : " . $e->getMessage();
        }
    }
    public function updateMember(int $id, string $attribut, string $newNom, int $newAge)
    {
        try {
            //Connexion à la base de données avec PDO
            $connexion = new PDO("mysql:host=$this->host;dbname=$this->db", $this->user, $this->mdp);
            //Configuration de PDO pour générer des exeptions en cas d'erreur.
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $query = "UPDATE musicien SET nom =:nom, age =:age, type=:attribut WHERE id = :id ";

            $statement = $connexion->prepare($query);

            $statement->bindParam(":id", $id);
            $statement->bindParam(":nom", $newNom);
            $statement->bindParam(":age", $newAge);
            $statement->bindParam(":attribut", $attribut);

            //Exécution de la requéte préparée
            $statement->execute();
        } catch (PDOException $e) {
            // gestion des exeptions PDO : affichage du message d'erreur
            echo "Erreur : " . $e->getMessage();
        }
    }
    public function deleteMember(int $id)
    {
        try {
            //Connexion à la base de données avec PDO
            $connexion = new PDO("mysql:host=$this->host;dbname=$this->db", $this->user, $this->mdp);
            //Configuration de PDO pour générer des exeptions en cas d'erreur.
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $query = "DELETE FROM musicien where id = $id";
            $connexion->exec($query);
        } catch (PDOException $e) {
            // gestion des exeptions PDO : affichage du message d'erreur
            echo "Erreur : " . $e->getMessage();
        }
    }
    public function searchName(string $searchName)
    {
        try {
            //Connexion à la base de données avec PDO
            $connexion = new PDO("mysql:host=$this->host;dbname=$this->db", $this->user, $this->mdp);
            //Configuration de PDO pour générer des exeptions en cas d'erreur.
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            //Requête recherche sur le nom ou le type
            $query = "SELECT * FROM musicien WHERE nom LIKE :searchName OR type LIKE :searchName";

            $statement = $connexion->prepare($query);
            //Ajout des joker de recherche devant et derrière pour correspondre a des partie du nom
            $searchParam = "%$searchName%";
            $statement->bindParam(":searchName", $searchParam);

            $statement->execute();

            //Récupération des résultats de la recherche
            $resultats = $statement->fetchAll(PDO::FETCH_ASSOC);
            return $resultats;
        } catch (PDOException $e) {
            // gestion des exeptions PDO : affichage du message d'erreur
            echo "Erreur : " . $e->getMessage();
        }
    }
}
