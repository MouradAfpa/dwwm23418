<?php

header('location: listPersonne.php');

$people = [
        "Smith" => [
            "Father" => "John Smith",
            "Mother" => "Alice Smith",
            "Son" => "David Smith"
        ],
        "Truc" => [
            "Father" => "Oak Truc",
            "Mother" => "Alicia Truc",
            "Son" => "Oakson Truc"
        ],
        "Much" => [
            "Father" => "Johnny Much",
            "Mother" => "Megane Much",
            "Son" => "Johnson Much"
        ],
        "Machin" => [
            "Father" => "Odin Machin",
            "Mother" => "Alice Machin",
            "Son" => "Odinson Machin"
        ],
        "Chose" => [
            "Father" => "Ben Chose",
            "Mother" => "Alice Chose",
            "Son" => "Benson Chose"
        ],
        "Play" => [
            "Father" => "Robin Play",
            "Mother" => "Alice Play",
            "Son" => "Robinson Play"
        ],
        
    ];

    echo var_dump($people);

    session_start();
    $_SESSION["Famille"] = $people;

?>