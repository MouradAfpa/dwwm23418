<?php
class Database
{
    public function connexion()
    {
        try {
            $host = "localhost";
            $db = "";
            $user = "root";
            $mdp = "";
            //Connexion à la base de données avec PDO
            $connexion = new PDO("mysql:host=$host;dbname=$db", $user, $mdp);
            //Configuration de PDO pour générer des exeptions en cas d'erreur.
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            //Message de succés si la connexion est établie.
            echo "Connexion réussie !<br>";
        } catch (PDOException $e) {
            // gestion des exeptions PDO : affichage du message d'erreur
            echo "Erreur : " . $e->getMessage();
        }
    }

    public function ajoutMusicien()
    {
    }
}
