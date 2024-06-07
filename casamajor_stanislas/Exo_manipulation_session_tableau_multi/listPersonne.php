<?php
session_start();

$people = $_SESSION["people"];

?>
<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Familles</title>
</head>

<body>
    <h2>Liste des familles</h2>
    <?php
        
    echo "<table border=1>";
        echo"<tr>
            <th>Famille</th>
            <th>Père</th>
            <th>Mère</th>
            <th>Fils</th>
        </tr>";

        foreach ($people as $famille=> $value) {
        echo "<tr>";
            echo "<td>$famille</td>";
            echo "<td>" . (isset($value["Father"]) ? $value["Father"] : "-") . "</td>";
            echo "<td>" . (isset($value["Mother"]) ? $value["Mother"] : "-") . "</td>";
            echo "<td>" . (isset($value["Son"]) ? $value["Son"] : "-") . " </td> </tr>";

            }
            ?>
    </table>
</body>

</html>