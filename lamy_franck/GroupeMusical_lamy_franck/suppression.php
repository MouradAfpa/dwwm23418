<?php
//suppression.php

try {
    $host = "localhost";
    $db = "groupe";
    $connexion = new PDO("mysql:host=$host;dbname=$db", "root", "");
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie !";
    echo "<br><br>";
    
    $idMusi = isset($_GET['id']) ? $_GET['id'] : null;
    
        $query = "DELETE FROM musicien WHERE idMusi = :idMusi";
        $statement = $connexion->prepare($query);

        $statement->execute(array(':idMusi' => $idMusi));

        header("Location: recupMusicien.php");
        exit();

} catch (PDOException $e) {
    echo "Erreur :" . $e->getMessage();
}
?>
