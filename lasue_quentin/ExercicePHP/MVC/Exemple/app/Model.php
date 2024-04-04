<?php
// Contient les infos de connexion a notre base de donnée utiliser par héritage par les autes models de notre app

abstract class Model
{
    //informations de base de donnée 
    private $host = "localhost";
    private $db = "exemple";
    private $user = "root";
    private $password = "";

    // Propriété contenant la connexion protected pour etre utilisable par les enfant et modifiable 
    protected $_connexion;

    // propriété avec les infos de requétes 
    public  $table;
    public  $id;

    // Fonction pour se connecter 

    public function getConnection()
    {
        $this->_connexion = null;
        try {
            $this->_connexion = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db, $this->user, $this->password);
            $this->_connexion->exec('set name utf-8'); // Pour que les transaction se fasse en utf 8, par sécurité
        } catch (PDOException $exception) {
            echo "Erreur :" . $exception->getMessage();
        }
    }
    //
    // Et les fonctions principal comme getAll ou getOne ...
    //
}
