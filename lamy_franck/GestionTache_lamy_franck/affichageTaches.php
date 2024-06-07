<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mes taches à faire</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-image: url("https://th.bing.com/th/id/OIP.3peTYSj2OaByQ6_cpmNACQHaDt?w=1680&h=840&rs=1&pid=ImgDetMain");
            background-size: 120%; 
            background-position: cover; 
            width: 100%;
            min-height: 100%;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            padding: 20px;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .task {
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .task h2 {
            margin-top: 0;
            color: #007bff;
        }
        .task p {
            margin: 5px 0;
        }
        .no-tasks {
            text-align: center;
            color: #777;
        }

        .buttomPremium{
            background-color: #007bff;
            color: white
        }

    </style>
</head>
<body>
    
<?php include_once('NavBar.php'); ?>

    <div class="container">
        <h1>Mes tâches à faire:</h1>

        <form action="premium.php" method="post">
            <div class="premium-container">
            <input class="buttomPremium" type="submit" value="Passer en premium">
            </div>

        </form>
        <br>

        <?php
        session_start();

        if (isset($_SESSION['message'])) {
            echo $_SESSION['message'];
            echo"<br><br>";
        }
        if (isset($_SESSION['taches'])) {
            $taches = $_SESSION['taches'];

            foreach ($taches as $index => $tache) {
                echo '<div class="task">';
                echo '<h2>' . $tache['titre'] . '</h2>';
                echo '<p><strong>Description :</strong> ' . $tache['description'] . '</p>';
                echo '<p><strong>Date limite :</strong> ' . $tache['date'] . '</p>';
                echo "<form action='supprimerTache.php' method='post'>";
                echo "<input type='hidden' name='index' value='$index'>";
                echo "<input type='submit' value='Supprimer'>";
                echo "</form>";
                echo "<br>";                
                echo '</div>';
            }
        } else {
            echo '<p class="no-tasks">Aucune tâche enregistrée.</p>';
        }
        ?>

    </div>
</body>
</html>


<!-- <div class="container">
    <h1>Mes tâches à faire:</h1>

    <?php 
    session_start();
    $premium = isset($_SESSION['premium']) ? $_SESSION['premium'] : false; 
    if (!$premium): ?>
        <form action="premium.php" method="post">
            <div class="premium-container">
                <input class="buttomPremium" type="submit" value="Passer en premium">
            </div>
        </form>
        <br>
    <?php endif; ?> -->

