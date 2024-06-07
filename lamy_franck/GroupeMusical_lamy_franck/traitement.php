<?php
session_start();

$name = $_POST['name'];
$firstName = $_POST['firstName'];
$age = $_POST['age'];
$instrument = $_POST['instrument'];

try {
    $host = "localhost";
    $db = "groupe";
    $connexion = new PDO("mysql:host=$host;dbname=$db", "root", "");
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = "INSERT INTO musicien (Nom, Prénom, Age, Instrument) VALUES (:name, :firstName, :age, :instrument);";
    $statement = $connexion->prepare($query);

    if (!empty($name) && !empty($firstName) && !empty($age) && !empty($instrument)) {
        $statement->bindParam(":name", $name);
        $statement->bindParam(":firstName", $firstName);
        $statement->bindParam(":age", $age);
        $statement->bindParam(":instrument", $instrument);
    
        $statement->execute();
        $_SESSION['success_message'] = "Insertion réussie !";
    } else {
        $_SESSION['error_message'] = "Veuillez remplir tous les champs !"; 
    }
   
} catch (PDOException $e) {
    $_SESSION['error_message'] = "Erreur : " . $e->getMessage();
}

header('Location: formulaire.php');
?>
