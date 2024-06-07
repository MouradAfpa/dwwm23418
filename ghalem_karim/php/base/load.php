<?php 
$people = [
    "Smith" => [
        "Father" => "John Smith",
        "Mother" => "Alice Smith",
        "Son" => "David Smith"
    ],
    "Toto" => [
        "Father" => "Jimmy Toto",
        "Mother" => "Victoire Toto",
        "Son" => "Mathieu Toto"
    ],
    "Simpsons" => [
        "Father" => "Homer Simpsons",
        "Mother" => "Marge Simpsons",
        "Son" => "Barth Simpsons"
    ],
    "Marsh" => [
        "Randi" => "John Marsh",
        "Stan" => "Alice Marsh",
        "Sharon" => "David Marsh"
    ],
    "Griffin" => [
        "Father" => "Peter Griffin",
        "Mother" => "Lois Griffin",
        "Son" => "Stewie Griffin"
    ],

];

session_start();
$_SESSION['family']=$people;

?>