<?php
if (isset($_POST["member_id"]) && isset($_POST["action"]) && $_POST["action"] === "delete") {
    try {
        $host = "localhost";
        $username = "root";
        $password = ""; 
        $db = "musiciens";

        $connexion = new PDO("mysql:host=$host;dbname=$db", $username, $password);
        $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $id = $_POST["member_id"];

        $query = "DELETE FROM musicien WHERE id = :id";
        $statement = $connexion->prepare($query);
        $statement->bindParam(':id', $id);
        $statement->execute();

        echo "Membre supprimé avec succès !";
    } catch (PDOException $e) {
        echo "Erreur : " . $e->getMessage();
    }
} else {
    echo "Suppression non autorisée.";
}
?>
