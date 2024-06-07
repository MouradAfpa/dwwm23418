<?php
class DataBase
{
    public function connectDB()
    {
        try {
            $host = "localhost";
            $db = "troupe";
            $connection = new PDO("mysql:host=$host; dbname=$db", "root", "");
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $query = "";
            $connection->exec($query);
            echo "Connection réussie!";
        } catch (PDOException $e) {
            echo "Erreur: "  . $e->getMessage();
        }
    }
    // 
    // public function createTable()
    // {
    //     try {
    //         $host = "localhost";
    //         $db = "troupe";
    //         $connection = new PDO("mysql:host=$host; dbname=$db", "root", "");
    //         $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //         $query = "CREATE TABLE musiciens(
    //             id int PRIMARY KEY AUTO_INCREMENT,
    //             nom VARCHAR(20),
    //             age int,
    //             type_musique VARCHAR(20),
    //             voix VARCHAR(20)
    //             )";
    //         $connection->exec($query);
    //         echo "Creation réussie!";
    //     } catch (PDOException $e) {
    //         echo "Erreur: "  . $e->getMessage();
    //     }
    // }
    // 
    public function insertInto(string $n, int $a, $t, $v = null)
    {
        try {
            $host = "localhost";
            $db = "troupe";
            $connection = new PDO("mysql:host=$host; dbname=$db", "root", "");
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $query = "INSERT INTO musiciens (nom, age, type_musique, voix) VALUES (:nom, :age, :type_musique, :voix)";
            $statement = $connection->prepare($query);
            $nom = $n;
            $age = $a;
            $type_musique = $t;
            $voix = $v;
            $statement->bindParam(":nom", $nom);
            $statement->bindParam(":age", $age);
            $statement->bindParam(":type_musique", $type_musique);
            $statement->bindParam(":voix", $voix);
            $statement->execute();
            echo "Insertion réussie!";
        } catch (PDOException $e) {
            echo "Erreur: "  . $e->getMessage();
        }
    }
    // 
    public function getAllMembers()
    {
        try {
            $host = "localhost";
            $db = "troupe";
            $connection = new PDO("mysql:host=$host; dbname=$db", "root", "");
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $query = "SELECT * FROM musiciens";
            $statement = $connection->prepare($query);
            $statement->execute();
            $troupe = $statement->fetchAll(PDO::FETCH_ASSOC);
            foreach ($troupe as $musiciens) {
                $id = $musiciens["id"];
                echo "<div id='div" . $musiciens["id"] . "'>";
                echo "id : " . $musiciens["id"] . "<br>";
                echo "nom : " . $musiciens["nom"] . "<br>";
                echo "age : " . $musiciens["age"] . "<br>";
                echo "type de musique : " . $musiciens["type_musique"] . "<br>";
                if ($musiciens["voix"] != "aucune") {
                    echo "voix : " . $musiciens["voix"] . "<br>";
                }
                echo "<button id='" . $id . "' onClick='showForm(this.id)'>Modifier</button>";
                echo "<div id='" . $id . "'></div>";
                echo "</div>";
            }
        } catch (PDOException $e) {
            echo "Erreur: "  . $e->getMessage();
        }
    }
}
