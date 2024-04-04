<?php

include_once("CLASS/ClassConnexionBdd.php");

$id = $_POST['musicien']; 
var_dump($id); 

if(!empty($id)) {
    $database = new Database();
    
    try {
        $database->deleteBdd($id);
        echo "Suppression réussie !";
        header("Location: affichage.php");

    } catch (PDOException $e) {
        echo "Erreur : " . $e->getMessage();
    }
} else {
    echo "L'ID à supprimer est vide.";
    header("Location: affichage.php");

}

?>
