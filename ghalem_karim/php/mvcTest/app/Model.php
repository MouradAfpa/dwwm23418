<?php
abstract class Model{
    // information de base de donnée 
    private $host="localhost";
    private $dbName="mvc";
    private $username ="root";
    private $password="";

    // proprieté contenant la connexion 
    protected $_connexion;

    // proprieté contenant les informations de requetes 
    var $table;
    var $id;

    public function getConnexion(){
        $this->_connexion=null;
    

        try{
         $this->_connexion = new PDO('mysql:host='.$this->host.';dbname='.$this->dbName,$this->username,$this->password);
          $this->_connexion->exec('set names utf8');
      }catch(PDOException $exception){
         echo 'Erreur : '. $exception->getMessage();
      }
    }
    public function getAll(){
         $sql="SELECT * FROM ". $this->table;
         $query = $this->_connexion->prepare($sql);
         $query->execute();
         return $query->fetchAll();
    }
    public function getOne(){
        $sql="SELECT * FROM ". $this->table ."WHERE id=" .$this->id;
        $query = $this->_connexion->prepare($sql);
        $query->execute();
        return $query->fetch();

    }
}