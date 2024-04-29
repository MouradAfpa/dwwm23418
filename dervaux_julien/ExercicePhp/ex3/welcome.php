<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Home</title>
</head>

<body>
    <header>
        <?php
        include_once("navbar.php")
        ?>
    </header>
    <div class="d-flex flex-wrap justify-content-center object-fit-contain ">
        <?php
        // session_start();
        $userStock = $_SESSION["userStock"];
        var_dump($userStock);
        include_once("taskForm.php");
        foreach ($userStock["tasks"] as $task => $value) {
            
                echo '<div class="card d-flex justify-content-center" method="post" action="traitement/traitementTask.php">';
                echo '<div class="card-header">';
                echo "<h3>" . $value["titre"] . "</h3>";
                echo "</div>";
                echo "<div class='card-body'>";
                echo "<p><strong>Description :</strong> " . $value["description"] . "</p>";
                echo "<p><strong>Date :</strong> " . $value["date"] . "</p>";
                echo  "<a href='traitement/supp.php?task=$task'><input type='submit' name='delete' value='Supprimer'/><a/>";
                echo '</div>';
                echo '</div>';
            }
        ?>
    </div>
</body>

</html>