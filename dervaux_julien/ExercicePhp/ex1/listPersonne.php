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

$stock = $_SESSION["famille"];

echo "<table border=1>";
echo "<tr><th>Famille</th><th>Père</th><th>Mere</th><th>Enfant</th>";

foreach ($stock as $key => $element) {

    echo "<tr>";
    echo "<td> $key </td>";
    echo "<td>" . $element["Father"] . "</td>";
    echo "<td>" . $element["Mother"] . "</td>";
    echo "<td>" . $element["Son"] . "</td></tr>";

}

echo "</thead>";
echo "</table>";

echo '<div style="border: 3px solid black; width: 40%;">';
echo '<h1 style="text-align: center; margin: 3% 0% 0% 3%; width: 80%;">Familles</h1>';
echo '<table style="border: 1px solid black; border-collapse: collapse; width: 80%; margin: 3%;">';

// foreach ($_SESSION['famille'] as $key => $value) {
//     echo "<td>" . $key . '</td>';
//     foreach ($value as $k => $v) {
//         echo "<td style='border: 1px solid black; padding: 1% 0% 1% 3%;'>" . $k . " : " . $v . "</td>";
//     };
//     echo '</tr>';
// };

echo '</table>';
echo '</div>';

?>

</body>
</html>



