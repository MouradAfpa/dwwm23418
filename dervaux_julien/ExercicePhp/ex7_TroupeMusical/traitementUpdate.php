<?php
include_once("CLASS/ClassConnexionBdd.php");

$database = new Database();

$age = isset($_POST["age"]) ? htmlspecialchars($_POST["age"]) : null;
$instru = isset($_POST["instru"]) ? $_POST["instru"] : null;
$newName = isset($_POST["username"]) ? htmlspecialchars($_POST["username"]) : null;
$id = isset($_POST["musicien_id"]) ? $_POST["musicien_id"] : null;

try {
    if ($id !== null) {
        if ($newName !== null) {
            $database->updateBdd('NOM', $newName, $id);
        }
        if ($age !== null) {
            $database->updateBdd('AGE', $age, $id);
        }
        if ($instru !== null) {
            $database->updateBdd('INSTRU', $instru, $id);
        }
        header("Location:affichage.php");
    } 
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>
