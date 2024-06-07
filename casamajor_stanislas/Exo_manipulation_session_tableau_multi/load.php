<?php


$people = [
    "Smith" => [
        "Father" => "John Smith",
        "Mother" => "Alice Smith",
        "Son" => "David Smith"
    ],
    "Dupont" => [
        "Father" => "Jean Dupont",
        "Mother" => "Jeanne Dupont",
        "Son" => "Jules Dupont"
    ],
    "Dujardin" => [
        "Father" => "Jean Dujardin",
        "Mother" => "Alexandra Dujardin",
        "Son" => "Pierre Dujardin"
    ],
    "Palm" => [
        "Father" => "John Palm",
        "Mother" => "Pamela Palm",
        "Son" => "Bryan Palm"
    ],

    "Simpson" => [
        "Father" => "Homer Simpson",
        "Mother" => "Marge Simpson",
        "Son" => "Bart Simpson"
    ],
    "Holland" => [
        "Father" => "Mark Holland",
        "Mother" => "Jessica Holland",
        "Son" => "Dave Holland"
    ]
];

session_start();
$_SESSION["people"] = $people;

header("Location:listPersonne.php");
exit();