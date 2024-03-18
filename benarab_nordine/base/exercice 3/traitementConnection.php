<?php
session_start();

if(isset($_SESSION['utilisateur'])) {
    $utilisateur = $_SESSION['utilisateur'];
    
 
    if(isset($_POST['password'])) {
        $password_saisi = $_POST['password'];
        $password_hash = $utilisateur['password_hash'];
        
        if(password_verify($password_saisi, $password_hash)) {
            header("Location: taches/tache.php");
            exit(); 
        } else {       
            header("Location: formulaireConnection.php?erreur=password_incorrect");
            exit();
        }
    } else {
        header("Location: formulaireConnection.php?erreur=missing_password");
        exit();
    }
} 
?>
