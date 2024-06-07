<!DOCTYPE html>
<html>
<head>
    <title>Formulaire d'ajout de membres</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

</head>
<body>

<h2>Ajouter un nouveau membre à la troupe</h2>
<div class="d-flex">

    <form method="post" action="traitement.php" enctype="multipart/form-data">
        Nom: <input type="text" name="nom">
        Âge: <input type="text" name="age"> 
        Type de musicien:
        <select name="type">
            <option value="Guitariste">Guitariste</option>
            <option value="Trompettiste">Trompettiste</option>
            <option value="Batteur">Batteur</option>
            <option value="Chanteur">Chanteur</option>
            <option value="pianniste">Pianniste</option>
        </select><br><br>
        Groupe : <input type="text" name="groupe">
        Bio : <input type="text" name="bio">
        <label for="file">
        Photo : </label>
        <input type="file" name="file">
        <input type="submit" value="Ajouter">
    </form>
</div>

<h2>Liste des musiciens ajoutés</h2>
<div class="d-flex">

    <?php
include 'database.php';

// Récupérer les musiciens depuis la base de données
$db = new Database();
$query = $db->executeQuery("SELECT * FROM membres");
$musiciens = $query->fetchAll(PDO::FETCH_ASSOC);
$routeImg='/img/imgArtiste/';

// Afficher les musiciens
foreach ($musiciens as $musicien) {
    echo"<div class='card' style='width: 18rem;'>
    <img src=".$routeImg.$musicien['img'] ." class='card-img-top' alt=''>
    <div class='card-body'>
      <h5 class='card-title'>".$musicien['nom'] ."</h5>
      <p class='card-text'>".$musicien['type']."<br>".$musicien['bio'] ."</p>
      <a href='#' class='btn btn-primary'>Go somewhere</a>
      </div>
      </div>";
      
    //   echo "<p>" . $musicien['type'] . ": Nom - " . $musicien['nom'] . ", Âge - " . $musicien['age'] . ": Groupe - " . $musicien['groupe'] ."</p>";
}
?>
</div>
<!-- script bootstrap -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

</body>
</html>