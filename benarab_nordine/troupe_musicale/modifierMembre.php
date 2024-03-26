<?php
// Connexion à la base de données
try {
    $host = "localhost";
    $username = "root";
    $password = ""; 
    $db = "musiciens";

    $connexion = new PDO("mysql:host=$host;dbname=$db", $username, $password);
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Erreur de connexion : " . $e->getMessage();
    exit(); // Arrêter l'exécution du script en cas d'erreur de connexion
}

// Définition de la classe database et de la méthode getAllMembers()
class database {
    private $connexion;

    public function __construct($connexion) {
        $this->connexion = $connexion;
    }

    public function getAllMembers() {
        $query = "SELECT * FROM musicien";
        $statement = $this->connexion->prepare($query);
        $statement->execute();
        return $statement->fetchAll(PDO::FETCH_ASSOC);
    }
}

$database = new database($connexion);


$members = $database->getAllMembers();
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifier un membre de la troupe</title>
    <style>

   body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            width: 50%;
            background-color:C6C4C4 ;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 2);
        }

        h1 {
            text-align: center;
            color: #333;
        }

        form {
            margin-top: 20px;
        }

        label {
            display: block;
            margin-bottom: 5px;
            color: #555;
        }

        input[type="text"],
        input[type="number"] {
            width: calc(100% - 10px);
            padding: 10px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }

        button[type="submit"] {
            background-color: #9f9f9f;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            display: block;
            margin: 0 auto;
        }

        button[type="submit"]:hover {
            background-color: #747474;
        }

        .error {
            color: red;
            margin-top: 10px;
        }

    </style>
</head>
<body>
<div class="container">
    <h2>Modifier un Musicien</h2>
    <form action="dataBase.php" method="post"> 
        <div>
            <label for="member_id">Sélectionnez un membre :</label>
            <select id="member_id" name="member_id" required>
                <?php
                
                foreach ($members as $member) {
                    echo '<option value="' . $member['id'] . '">' . $member['nom'] . '</option>';
                }
                ?>
            </select>
        </div>
        <div>
            <label for="nom">Nouveau Nom :</label>
            <input type="text" id="nom" name="nom" required>
        </div>
        <div>
            <label for="age">Nouvel Âge :</label>
            <input type="number" id="age" max="99" min="18" name="age" required>
        </div>
        <div>
            <label for="type">Nouveau Type de Musicien :</label>
            <select id="type" name="type" required>
                <option value="">Sélectionnez le type</option>
                <option value="batteur">Batteur</option>
                <option value="guitariste">Guitariste</option>
                <option value="chanteur">Chanteur</option>
                <option value="trompettiste">Trompettiste</option>
                <option value="percussionniste">Percussionniste</option>
            </select>
        </div>
        <button type="submit">Modifier</button>
    </form>
</div>
</body>
</html>














