<?php

class DataBase
{

    public function insertTable($nomForm, $ageForm, $typeForm)
    {

        $host = "localhost";
        $dbname = "troupemusic";
        $user = "root";
        $mdpdb = "";


        try {
            $connexion = new PDO("mysql:host=$host;dbname=$dbname", "$user", "$mdpdb");
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo "Connexion reussie ! <br><br>";
            $query = "INSERT INTO musicien(Nom, Age, Type) VALUES (:nom, :age, :type);";
            $statement = $connexion->prepare($query);
            $nom = $nomForm;
            $age = $ageForm;
            $type = $typeForm;
            $statement->bindParam(":nom", $nom);
            $statement->bindParam(":age", $age);
            $statement->bindParam(":type", $type);
            $statement->execute();
            echo "insertion";
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }

    }

    public function getAllMember()
    {

        $host = "localhost";
        $dbname = "troupemusic";
        $user = "root";
        $mdpdb = "";

        try {
            $connexion = new PDO("mysql:host=$host;dbname=$dbname", "$user", "$mdpdb");
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo "Connexion reussie ! <br><br>";
            $query = "SELECT * FROM musicien";
            $statement = $connexion->prepare($query);
            $statement->execute();
            $musiciens = $statement->fetchAll(PDO::FETCH_ASSOC);
            foreach ($musiciens as $musicien) {
                echo '<br><br><br>';
                echo '<div class="musi" id="' . $musicien['ID'] . '">';
                echo "Nom : " . $musicien['Nom'] . "<hr>";
                echo "Age : " . $musicien['Age'] . "<hr>";
                echo "Type : " . $musicien['Type'] . "<br><br>";
                echo "<div class='but'>";
                echo '<a href="updateMus.php?id=' . $musicien['ID'] . '"><button>Modifier</button></a>';
                echo '<a href="deleteMus.php?id=' . $musicien['ID'] . '"><button>Supprimer</button></a>';
                echo "</div>";
                echo "</div><br>";
            }
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    }


    public function UpdateMember(int $idMu, string $nomMu, int $ageMu, string $typeMu)
    {

        $host = "localhost";
        $dbname = "troupemusic";
        $user = "root";
        $mdpdb = "";

        try {
            $connexion = new PDO("mysql:host=$host;dbname=$dbname", "$user", "$mdpdb");
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "Connexion reussie ! <br><br>";
            $query = "UPDATE musicien SET Nom = :nom , Age = :age, Type = :type WHERE ID = :id";
            $statement = $connexion->prepare($query);
            $statement->bindParam(":nom", $nomMu);
            $statement->bindParam(":age", $ageMu);
            $statement->bindParam(":type", $typeMu);
            $statement->bindParam(":id", $idMu);
            $statement->execute();
            echo "Update effectué";
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    }

    public function DeleteMember($idMu)
    {

        $host = "localhost";
        $dbname = "troupemusic";
        $user = "root";
        $mdpdb = "";

        try {
            $connexion = new PDO("mysql:host=$host;dbname=$dbname", "$user", "$mdpdb");
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "Connexion reussie ! <br><br>";
            $query = "DELETE FROM musicien WHERE ID = :id;  ALTER TABLE musicien AUTO_INCREMENT=0";
            $statement = $connexion->prepare($query);
            $statement->bindParam(":id", $idMu);
            $statement->execute();
            echo "Delete effectué";
        } catch (PDOException $e) {
            echo "Erreur : " . $e->getMessage();
        }
    }
    public function zero(){
        $query="";

    }
}
