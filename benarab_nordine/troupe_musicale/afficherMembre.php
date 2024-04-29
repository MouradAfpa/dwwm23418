<?php
try {
    // Connexion à la base de données avec PDO
    $pdo = new PDO("mysql:host=localhost;dbname=musiciens", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Requête pour récupérer tous les musiciens
    $query = $pdo->query("SELECT * FROM musicien");
    $members = $query->fetchAll(PDO::FETCH_ASSOC);
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des membres de la troupe</title>
</head>
<style>
.card {
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 1);
    background-color: #cdcdcd;
}

.card h2 {
    margin-top: 0;
    font-size: 20px;
    color: #2E2B2B;
}

.card p {
    margin: 5px 0;
    color: #2E2B2B;
}

.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

</style>
<body>
    <h1>Liste des membres de la troupe</h1>
    <div class="container">
        <?php foreach ($members as $member): ?>
            <div class="card">
                <h2><?php echo $member['nom']; ?></h2>
                <p>Âge : <?php echo $member['age']; ?></p>
                <p>Type : <?php echo $member['type']; ?></p>
                <form class="delete-form" action="supprimerMembre.php" method="post">
                    <input type="hidden" name="member_id" value="<?php echo $member['id']; ?>">
                    <input type="hidden" name="action" value="delete">
                    <button type="submit">Supprimer</button>
                </form>
                <form class="modify-form" action="modifierMembre.php" method="post">
                    <input type="hidden" name="member_id" value="<?php echo $member['id']; ?>">
                    <input type="hidden" name="action" value="delete">
                    <button type="submit">Modifier</button>
                </form>
            </div>
        <?php endforeach; ?>
    </div>
</body>
</html>




