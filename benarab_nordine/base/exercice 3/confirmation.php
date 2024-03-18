<?php
session_start();

if (isset($_SESSION['utilisateur'])) {
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmation</title>
</head>
<body>
    <h1>Inscription réussie!</h1>
    <p>Merci <?php echo $_SESSION['utilisateur']['login']; ?>. Votre compte a été créé avec succès.</p>
    <p>Votre email: <?php echo $_SESSION['utilisateur']['email']; ?></p>
    <li><a href="taches/tache.php">Creer une tâches</a></li>
    <li><a href="taches/afficherTache.php">Liste des tâches</a></li>

</body>
</html>

<?php
} else {
    
    header("Location: inscription.php");
    exit();
}
?>
