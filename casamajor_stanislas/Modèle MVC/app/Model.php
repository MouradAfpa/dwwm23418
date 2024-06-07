<?php

 abstract class Model {

    // Informations de base de données

    private $host = "localhost";
    private $db_name = "nom_database";
    private $username = "nom_utilisateur";
    private $password = "password";

    // Propriété contenant la connexion

    protected $_connexion;

    // Propriétés contenant les informations de requêtes

    public $table;
    public $id;

    public function getConnection(){
        $this->_connexion = null;

        try{
            $this->_connexion = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->_connexion->exec("set names utf8");
        } catch(PDOException $e){
            echo "Erreur de connexion : " . $e->getMessage();        }
    }

    public function getOne(){
        $sql = "SELECT * FROM " . $this->table. " WHERE id=" . $this->id;
        $query = $this->_connexion->prepare($sql);
        $query->execute();
        return $query->fetch();
        }

    public function getAll(){
        $sql = "SELECT * FROM " . $this->table;
        $query = $this->_connexion->prepare($sql);
        $query->execute();
        return $query->fetchAll();
    }    
 }