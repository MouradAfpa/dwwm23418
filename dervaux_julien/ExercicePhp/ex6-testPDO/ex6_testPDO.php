<?php



try{
    $host = "localhost";
    $db = "garage";
    $connexion = new PDO("mysql:host=$host;dbname=$db", "root", "");
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion Réussie !";
    $query = "INSERT INTO voiture (Marque, Modele, Couleur) VALUES (:marque,:modele,:couleur);";
    $statement = $connexion->prepare($query);
    $marque = "audi-";
    $modele = "R8";
    $couleur = "ROUGE";
    $statement->bindParam(":marque", $marque);
    $statement->bindParam(":modele", $modele);
    $statement->bindParam(":couleur", $couleur);
    $statement->execute();
    echo "Insertion Réussie !";
} 
catch (PDOException $e){
    echo "Erreur : " . $e->getMessage();
}


$query = "SELECT * FROM voiture";
$statement = $connexion->prepare($query);
$statement->execute();
$voitures = $statement->fetchAll(PDO::FETCH_ASSOC);
foreach ($voitures as $voiture) {
    echo "ID : $voiture[ID] : Marque : $voiture[Marque], Modele : $voiture[Modele], Couleur : $voiture[Couleur] </br>";
}




?>

