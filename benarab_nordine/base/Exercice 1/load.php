<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    ?>
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>

    <body>

        ?>
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>

        <body>

            <?php

$people = [
    "Smith" => [
        "Father" => "John Smith",
        "Mother" => "Alice Smith",
        "Son" => "David Smith",
    ],
    "Dervaux" => [
            "Father" => "Julien Dervaux",
            "Mother" => "Amelie Dervaux",
            "Son" => "Eustache Dervaux",
            ],
            
    "Dupont" => [
            "Father" => "Martin Dupont",
            "Mother" => "Martine Dupont",
            "Son" => "Antoine Dupont",
            ],
            
    "Marin" => [
            "Father" => "Franck Marin",
            "Mother" => "Julie Marin",
            "Son" => "jeremy Marin",
            ],

    "Dujardin" => [
            "Father" => "Johnny Dujardin",
            "Mother" => "Nathalie Dujardin",
            "Son" => "luc Dujardin",
            ],

    "Houx" => [
            "Father" => "Alain Houx ",
            "Mother" => "Pauline Houx",
            "Son" => "karen Houx",
            ],
            
];

session_start();

$_SESSION['famille'] = $people;

header('Location:listpersonne.php')
?>

        </body>

        </html>