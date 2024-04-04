<?php

try {
    $host = "localhost";
    $username = "root";
    $password = " "; 
    $db = "musiciens";
  
    $connexion = new PDO("mysql:host=$host;dbname=$db", "root", "");
    
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  
    if (isset($_POST["nom"]) && isset($_POST["age"]) && isset($_POST["type"])) {

        $nom = $_POST["nom"];
        $age = $_POST["age"];
        $type = $_POST["type"];

  
        $query = "INSERT INTO musicien (nom, age, type) VALUES (:nom, :age, :type)";
        
       
        $statement = $connexion->prepare($query);
        
     
        $statement->bindParam(':nom', $nom);
        $statement->bindParam(':age', $age);
        $statement->bindParam(':type', $type);
        
    
        $statement->execute();
        
        echo "Musicien ajouté avec succès dans le groupe $type !";
    } else {
        
        header("Location: formulaire.html");
        exit();
    }
} catch (PDOException $e) {
   
    echo "Erreur : " . $e->getMessage();
}
?>
