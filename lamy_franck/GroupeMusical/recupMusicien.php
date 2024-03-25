<?php
//recupMusicien.php

try {
    $host = "localhost";
    $db = "groupe";
    $connexion = new PDO("mysql:host=$host;dbname=$db", "root", "");
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "<h1 style='text-align: center;'>Membres du groupe</h1>";
    echo "<button style='background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 5px;'><a href='formulaire.php' style='text-decoration: none; color: white;'>Retour</a></button>";
  
    $name = isset($_GET['nom']) ? $_GET['nom'] : '';
    $type = isset($_GET['type']) ? $_GET['type'] : '';

    $query = "SELECT * FROM musicien WHERE 1";
    if (!empty($name)) {
       $query .= " AND Nom = :name";
    }

    if (!empty($type)) {
        $query .= " AND Instrument = :instrument ";
    }

    $statement = $connexion->prepare($query);

    if (!empty($name)) {
        $statement->bindParam(':name', $name);
    }

    if (!empty($type)) {
        $statement->bindParam(':instrument', $type);
    }

    $statement->execute();

    $musiciens = $statement->fetchAll(PDO::FETCH_ASSOC);
    echo "<div style='display: flex; flex-wrap: wrap; justify-content: center;'>";

    foreach ($musiciens as $musicien) {
        echo "<div style='margin: 20px; width: 300px; border: 2px solid #ddd; border-radius: 5px; padding: 10px;'>";
        echo "<img src = 'https://th.bing.com/th/id/R.aece1145f2d3480e38bc9443a4998c04?rik=ey6pjfxR5wHPvQ&riu=http%3a%2f%2finstitutcommotions.com%2fwp-content%2fuploads%2f2018%2f05%2fblank-profile-picture-973460_960_720-1.png&ehk=cWQNlcoT06KT7deWxMnwK034GVCHVSXupbX4E5i1Psw%3d&risl=&pid=ImgRaw&r=0' width='100' height='100'>";
        echo "<h2>{$musicien['Prénom']} {$musicien['Nom']}</h2>";
        echo "<p><strong>Age:</strong> {$musicien['Age']}</p>";
        echo "<p><strong>Instrument:</strong> {$musicien['Instrument']}</p>";
        echo "<button style='margin-right: 10px; display: inline-block;'><a href='formModif.php?id={$musicien['idMusi']}' style='text-decoration: none;'>Modifier</a></button>";
        echo "<button style='margin-right: 10px; display: inline-block;'><a href='suppression.php?id={$musicien['idMusi']}' onclick='return confirm(\"Voulez-vous vraiment supprimer ce musicien ?\")' style='text-decoration: none;'>Supprimer</a></button>";
        echo "</div>";
    }
} catch (PDOException $e) {
    echo "Erreur :" . $e->getMessage();
}
?>
