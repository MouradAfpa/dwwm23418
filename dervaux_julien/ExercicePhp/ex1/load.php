
<?php

session_start();

echo 'Page load';

$_SESSION['famille'] = $people = [
    
    "Smith" => [
        "Father" => "John Smith",
        "Mother" => "Alice Smith",
        "Son" => "David Smith",
    ],

    "Lesbg" => [
        "Father" => "John Lesbg",
        "Mother" => "Alice Lesbg",
        "Son" => "David Lesbg",
    ],
    "Lagalere" => [
        "Father" => "John Lagalere",
        "Mother" => "Alice Lagalere",
        "Son" => "David Lagalere",
    ],
    "Lopeze" => [
        "Father" => "John Lopeze",
        "Mother" => "Alice Lopeze",
        "Son" => "David Lopeze",
    ],
    "Lastreet" => [
        "Father" => "John Lastreet",
        "Mother" => "Alice Lastreet",
        "Son" => "David Lastreet",
    ],
    "Marsh" => [
        "Father" => "Randy Marsh",
        "Mother" => "Sharon Marsh",
        "Son" => "Stan Marsh",
    ],
];

header("Location:listPersonne.php");

?>






