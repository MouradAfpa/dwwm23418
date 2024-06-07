<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Membre du groupe</title>
    <link rel="stylesheet" href="../CSS/style.css"/>
</head>

<body>
    <div id="membre">
        <?php
        include_once "../DB/dataBase.php";
        // 
        $showMembers = new DataBase;
        $showMembers->getAllMembers();
        // 
        include_once "../JS/script.php";
        ?>
    </div>
</body>

</html>