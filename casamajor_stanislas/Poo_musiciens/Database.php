<?php

class Database
{

    public function insert(string $nomForm, int $ageForm, string $typeForm)
    {
        $host = "localhost";
        $dbname = "troupe";


        try {
            $connexion = new PDO("mysql:host=$host;dbname=$dbname", "root", "");
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo "<br> Connexion Pour insertion réussie ! ";
            $query = "INSERT INTO musiciens (Nom, Age, Type) VALUES (:nom, :age, :type);";
            $statement = $connexion->prepare($query);
            $nom = $nomForm;
            $age = $ageForm;
            $type = $typeForm;
            $statement->bindParam(":nom", $nom);
            $statement->bindParam(":age", $age);
            $statement->bindParam(":type", $type);

            $statement->execute();
            echo "Insertion reussie ! ";
            header("Location:index.php");
        } catch (PDOException $e) {
            echo " Erreur insertion " . $e->getMessage();
        }
    }

    public function request()
    {
        $host = "localhost";
        $dbname = "troupe";
        try {
            $connexion = new PDO("mysql:host=$host;dbname=$dbname", "root", "");
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $query = "SELECT * FROM musiciens";
            $statement = $connexion->prepare($query);
            $statement->execute();
            $musiciens = $statement->fetchAll(PDO::FETCH_ASSOC);
            $tab = [
                "Guitariste" => "./Images/Hendrix.jpg",
                "Batteur" => "./Images/Ulrich.jpg",
                "Chanteur" => "./Images/Sinatra.webp",
                "Trompettiste" => "./Images/Armstrong.jpg",
                "Percussionniste" => "./Images/Percu.png"
            ];

            foreach ($musiciens as $musicien) {
                
                echo "<div class='fullCarte'>";                
                echo '<div class="carte"id="' . $musicien['id'] . '"><br>';
                echo '<img src="' . $tab[$musicien["Type"]] . '" >';
                echo "Nom du musicien : " . $musicien["Nom"] . "<br>";
                echo "Age du musicien : " . $musicien["Age"] . "<br>";
                echo "Type du musicien : " . $musicien["Type"] . "<br>";
                echo "<div class='boutton'>";
                echo "<a href='updateForm.php?id=" . $musicien['id'] . "'><button>Modifier</button></a>";
                echo "<a href='deleteMus.php?id=" . $musicien['id'] . "'><button>Supprimer</button></a>";
                echo "</div>";
                echo "</div></div>";
            }
        } catch (PDOException $e) {
            echo " Erreur insertion " . $e->getMessage();
        }
    }

    public function delete($id)
    {
        $host = "localhost";
        $dbname = "troupe";
        try {
            $connexion = new PDO("mysql:host=$host;dbname=$dbname", "root", "");
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $query = "DELETE FROM musiciens WHERE id = :id";
            $statement = $connexion->prepare($query);
            $statement->bindParam(":id", $id);
            $statement->execute();
            echo "Musicien supprimé avec brio ! ";
        } catch (PDOException $e) {
            echo " Erreur suppression " . $e->getMessage();
        }
    }

    public function update(string $nomForm, int $ageForm, string $typeForm, int $idForm)
    {
        $host = "localhost";
        $dbname = "troupe";
        try {
            $connexion = new PDO("mysql:host=$host;dbname=$dbname", "root", "");
            $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $query = "UPDATE musiciens SET Nom = :nom, Age = :age, Type = :type WHERE id = :id";
            $statement = $connexion->prepare($query);
            $id = $idForm;
            $nom = $nomForm;
            $age = $ageForm;
            $type = $typeForm;
            $statement->bindParam(":nom", $nom);
            $statement->bindParam(":age", $age);
            $statement->bindParam(":type", $type);
            $statement->bindParam(":id", $id);

            $statement->execute();
        } catch (PDOException $e) {
            echo " Erreur Modification " . $e->getMessage();
        }
    }
}
