<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Variable d'environnement</title>
    <link rel="stylesheet" href="STYLE/bootstrap.css">
</head>

<body>
    <?php
    session_start();
    $today = date("H:i");
    // echo $today;
    function dateDuJour()
    {
        $getDate = getDate();
        $day = $getDate["mday"];
        $month = $getDate["month"];
        $year = $getDate["year"];
        return "$day $month $year";
    }
    ?>
    <h3>En ce <?php echo dateDuJour();?> sur le serveur <?php echo $_SERVER["SERVER_NAME"];?>, il est <?php echo $today . " min" ?> </h3>
    <h3>Variable HTTP serveur (getenv())</h3>
    <table class="table">
    <tr>
        <td>Variable</td>
        <td>Valeur</td>
    </tr>
    <?php foreach ($_SERVER as $key => $value) {?>
        <tr>
            <td><?php echo $key;?></td>
            <td><?php echo $value;?></td>
        </tr>
    <?php } ?>
</table>

</body>

</html>