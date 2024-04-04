<?php

abstract class Model{
    // info bdd
    private $host = "localhost";
    private $db_name = "stock_article";
    private $username = "root";
    private $password = "";
    // Propiété de connexion
    protected $_connexion;
    // Propriété de requêtes
    public $table;
    public $id;

    public function getConnexion() {
        $this->_connexion = null;
        try{
            $this->_connexion = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->_connexion->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Erreur de connexion : " . $exception->getMessage();
        }
    }

    public function getAll(){
        $sql = "SELECT * FROM " . $this->table;
        $query = $this->_connexion->prepare($sql);
        $query->execute();
        return $query->fetchAll();
    }

    public function getOne(){
        $sql = "SELECT * FROM " . $this->table . "WHERE id=" . $this->id;
        $query = $this->_connexion->prepare($sql);
        $query->execute();
        return $query->fetch();
    }
}