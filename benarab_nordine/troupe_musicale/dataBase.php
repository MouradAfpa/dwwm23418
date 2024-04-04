<?php
if (isset($_POST["nom"]) && isset($_POST["age"]) && isset($_POST["type"])) {
    try {
        $host = "localhost";
        $username = "root";
        $password = ""; 
        $db = "musiciens";

        $connexion = new PDO("mysql:host=$host;dbname=$db", $username, $password);
        $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

 
        if (isset($_POST["member_id"]) && isset($_POST["nom"]) && isset($_POST["age"]) && isset($_POST["type"])) {
            $id = $_POST["member_id"];
            $nom = $_POST["nom"];
            $age = $_POST["age"];
            $type = $_POST["type"];

           
            $query = "UPDATE musicien SET nom = :nom, age = :age, type = :type WHERE id = :id";
            $statement = $connexion->prepare($query);
            $statement->bindParam(':id', $id);
            $statement->bindParam(':nom', $nom);
            $statement->bindParam(':age', $age);
            $statement->bindParam(':type', $type);
            $statement->execute();

            echo "Membre mis à jour avec succès !";
        } else {
            echo "Tous les champs du formulaire doivent être renseignés.";
        }
    } catch (PDOException $e) {
        echo "Erreur : " . $e->getMessage();
    }
} else {
    echo "Méthode non autorisée.";

}











?>
