<?php

class Database
{
    private $host;
    private $dbname;
    private $connexion;

    public function __construct($host, $dbname)
    {
        $this->host = $host;
        $this->dbname = $dbname;
    }

    public function seConnecter()
    {
        try {
            $this->connexion = new PDO("mysql:host=$this->host;dbname=$this->dbname", "root");
            $this->connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo "<br>Connexion réussie";
        } catch (PDOException $e) {
            echo "Erreur de connexion : " . $e->getMessage();
        }
    }

    public function getAllMembers()
    {
        try {
            $query = "SELECT id, type_musicien, nom, age FROM membres_troupe";
            $result = $this->connexion->query($query);
            return $result->fetchAll(PDO::FETCH_ASSOC);
        } catch (PDOException $e) {
            echo "Erreur lors de la récupération des membres : " . $e->getMessage();
            return [];
        }
    }

    public function effectuerUneRequete($query, $params = [])
    {
        try {
            $statement = $this->connexion->prepare($query);
            $statement->execute($params);
            return $statement;
        } catch (PDOException $e) {
            echo "Erreur lors de l'exécution de la requête : " . $e->getMessage();
        }
    }

    public function updateMember($id, $nom, $age, $typeMusicien)
    {
        try {
            $query = "UPDATE membres_troupe SET nom = :nom, age = :age, type_musicien = :typeMusicien WHERE id = :id";
            $params = [':id' => $id, ':nom' => $nom, ':age' => $age, ':typeMusicien' => $typeMusicien];

            $statement = $this->connexion->prepare($query);
            $statement->execute($params);

            return $statement->rowCount(); // Nombre de lignes modifiées
        } catch (PDOException $e) {
            echo "Erreur lors de la mise à jour du membre : " . $e->getMessage();
            return false;
        }
    }

    public function deleteMember($id)
    {
        try {
            $query = "DELETE FROM membres_troupe WHERE id = :id";
            $statement = $this->connexion->prepare($query);
            $statement->execute([':id' => $id]);
            return $statement->rowCount();
        } catch (PDOException $e) {
            echo "Erreur lors de la suppression du membre : " . $e->getMessage();
            return false;
        }
    }
}
