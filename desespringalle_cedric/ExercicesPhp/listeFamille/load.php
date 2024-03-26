<?php
$people = [
    "Smith" => [
        "Father" => "John Smith",
        "Mother" => "Alice Smith",
        "Son" => "David Smith"
    ],
    "Wick" => [
        "Father" => "John Wickh",
        "Mother" => "Donia Wick",
        "Son" => "Mathieu Wick"
    ],
    "Escobar" => [
        "Father" => "Pablo Escobar",
        "Mother" => "Maria Escobar",
        "Son" => "Don Fabio Escobar"
    ],
    "Desespringalle" => [
        "Father" => "Christian Desespringalle",
        "Mother" => "Elisabeth Desespringalle",
        "Son" => "Cedric Desespringalle"
    ],
    "Jong" => [
        "Father" => "Kim Jong II",
        "Mother" => "Sung Jong",
        "Son" => "Kim Jong Un"
    ],
    "Kardashian" => [
        "Father" => "Robert Smith",
        "Mother" => "Kris Smith",
        "Son" => "Kim Smith"
    ]
];

session_start();
$_SESSION["famille"] = $people;

header("Location: http://localhost/DWWM/base/exercices/exo1/listePersonne.php");
exit();

?>