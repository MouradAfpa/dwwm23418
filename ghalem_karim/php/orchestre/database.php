<?php

// Classe pour la connexion à la base de données
class Database {
    private $host = "localhost";
    private $username = "root";
    private $password = "";
    private $dbname = "orchestre";
    private $conn;

   
    
    public function __construct() {
        try {
            $this->conn = new PDO("mysql:host={$this->host};dbname={$this->dbname}", $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch(PDOException $e) {
            echo "Erreur de connexion : " . $e->getMessage();
        }
    }
    
    public function executeQuery($query) {
        return $this->conn->query($query);
    }
    
    // public function insertMember($nom, $age, $type, $groupe,$bio,$imgType) {
    public function insertMember($nom, $age, $type, $groupe,$bio,$imgArtPost) {
        $stmt = $this->conn->prepare("INSERT INTO membres (nom, age, type, groupe, bio, img) VALUES (:nom, :age, :type, :groupe, :bio, :img)");
        $stmt->bindParam(':nom', $nom);
        $stmt->bindParam(':age', $age);
        $stmt->bindParam(':type', $type);
        $stmt->bindParam(':groupe', $groupe);
        $stmt->bindParam(':bio', $bio);
        $stmt->bindParam(':img', $imgArtPost);
        $stmt->execute();
    }
}

?>
