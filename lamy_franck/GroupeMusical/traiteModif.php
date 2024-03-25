<?php
//traiteModif.php

session_start();

$name = $_POST['nom'];
$firstName = $_POST['prenom'];
$age = $_POST['age'];
$instrument = $_POST['instrument'];

$idMusi = isset($_POST['id']) ? $_POST['id'] : null;

try {
    $host = "localhost";
    $db = "groupe";
    $connexion = new PDO("mysql:host=$host;dbname=$db", "root", "");
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    if (!empty($name) && !empty($firstName) && !empty($age) && !empty($instrument)) {
        $query = "UPDATE musicien SET Nom = :nom, Prénom = :prenom, Age = :age, Instrument = :instrument WHERE idMusi = :id";
        $statement = $connexion->prepare($query);

        $statement->bindParam(':nom', $name);
        $statement->bindParam(':prenom', $firstName);
        $statement->bindParam(':age', $age);
        $statement->bindParam(':instrument', $instrument);
        $statement->bindParam(':id', $idMusi);
    
        $statement->execute();
        $_SESSION['success_message'] = "Modification réussie !";
    } else {
        $_SESSION['error_message'] = "Veuillez remplir tous les champs !"; 
    }
   
    header("Location: recupMusicien.php");
    exit();

} catch (PDOException $e) {
    echo "Erreur :" . $e->getMessage();
}
?>
