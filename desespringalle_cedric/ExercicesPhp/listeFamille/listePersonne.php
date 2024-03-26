<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tableau familles</title>
</head>

<body>

    <?php

    session_start();
    $people = $_SESSION["famille"];

    ?>

    <h1>Liste des familles</h1>

    <table border="1">
        <thead>
            <tr>
                <th>Famille</th>
                <th>Père</th>
                <th>Mère</th>
                <th>Enfant</th>
            </tr>
        </thead>
        <tbody>

            <?php

            foreach ($people as $famille => $info) {
                echo "<tr>";
                echo "<td>$famille</td>";
                echo "<td>$info[Father]</td>";
                echo "<td>$info[Mother]</td>";
                echo "<td>$info[Son]</td>";
                echo "</tr>";
            }

            ?>

        </tbody>
    </table>

</body>

</html>