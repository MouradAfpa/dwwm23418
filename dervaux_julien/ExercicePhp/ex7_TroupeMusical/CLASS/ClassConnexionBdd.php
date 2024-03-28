<?php

class Database
{
    private $host = "localhost";
    private $db = "troupe_musicale";
    private $connexion;
    private $conn;
    private static $_dbConfig=[];
    private static $_configFile="";

    public function __construct()
    {
        try {
            $this->connexion = new PDO("mysql:host=$this->host;dbname=$this->db", "root", "");
            $this->connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    }

    public function connect(){
        $this->conn == null;
        self::setConnection("../CONF/db.conf");
        self::setConnection();
        try {
            $this->connexion = new PDO("mysql:host=$this->host;dbname=$this->db", "root", "");
            $this->connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    }

    private static function setConnection(){
        $handle = fopen(self::$_configFile,'r');
        $conf = json_decode(fread($handle,filesize((self::$_configFile))));
        $_dbConfig["host"] = $conf->host;
        $_dbConfig["db_name"] = $conf->db_name;
        $_dbConfig["username"] = $conf->username;
        $_dbConfig["password"] = $conf->password;
    }

    public function getConnexion()
    {
        return $this->connexion;
    }

    public function addBdd($nom, $age, $instru)
    {
        try {
            $query = "INSERT INTO musicien (NOM , AGE , INSTRU) VALUES (:NOM, :AGE, :INSTRU)";
            $statement = $this->connexion->prepare($query);
            $statement->bindParam(":NOM", $nom);
            $statement->bindParam(":AGE", $age);
            $statement->bindParam(":INSTRU", $instru);
            $statement->execute();
            echo "Insertion Réussie ! <br>";
            header("Location: affichage.php");
            exit();
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    }

    public function addInscriptionBdd($nom, $email, $mdp)
    {
        try {

            $query = "INSERT INTO inscription (NOM , EMAIL , MDP) VALUES (:NOM, :EMAIL, :MDP)";
            $statement = $this->connexion->prepare($query);
            $statement->bindParam(":NOM", $nom);
            $statement->bindParam(":EMAIL", $email);
            $statement->bindParam(":MDP", $mdp);
            $statement->execute();
            header("Location:../connexion.php");
            exit();

        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    }

    public function selectBdd()
    {
        try {
            $query = "SELECT * FROM musicien";
            $stmt = $this->connexion->prepare($query);
            $stmt->execute();
            $musiciens = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $musiciens;
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    }

    public function selectInscriptionBdd($email)
    {
        try {
            $query = "SELECT EMAIL, MDP, NOM FROM inscription WHERE EMAIL = :email";
            $stmt = $this->connexion->prepare($query);
            $stmt->bindParam(":email", $email, PDO::PARAM_STR);
            $stmt->execute();
            $inscri = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $inscri;
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    }
    
    public function selectInscriptionMdpBdd()
    {
        try {
            $query = "SELECT MDP FROM inscription";
            $stmt = $this->connexion->prepare($query);
            $stmt->execute();
            $inscri = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $inscri;
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    }

    public function deleteBdd($id)

    {
        try {
            $query = "DELETE FROM musicien WHERE id =$id";
            $stmt = $this->connexion->prepare($query);
            $stmt->execute();
            $querys = "ALTER TABLE  musicien AUTO_INCREMENT = 0";
            $stmt = $this->connexion->prepare($querys);
            $stmt->execute();
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    }
    public function updateBdd($colonne, $valeur, $id)
    {
        try {
            $query = "UPDATE musicien SET $colonne = '$valeur' WHERE id = $id";
            $stmt = $this->connexion->prepare($query);
            $stmt->execute();
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    }

    public function set_configfile($_configFile){
        self::$_configFile = $_configFile;
    }


    // public function alterTable($value)
    // {

    //     $stmt = $this->connexion->prepare($query);
    //     $stmt->execute();
    //     $musiciens = $stmt->fetchAll(PDO::FETCH_ASSOC);
    // }
}
