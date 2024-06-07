<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    session_start();
    $people = $_SESSION['famille'];

    echo "<table border=5px width=50%>";

    foreach ($people as $famille => $membre) {
        echo "<tr><th colspan='2'>$famille</th></tr>"; 
        foreach ($membre as $role => $nom) {
            echo "<tr><td>$role</td><td>$nom</td></tr>";
        }
    }

    echo "</table>";
    ?>
</body>

</html>