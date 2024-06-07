<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Depuis le php</h1>
    <?php

echo '<h1>Hello world</h1>';
// echo phpinfo();
include("testInclude.php");
?>
    <hr>
    <h2>Les variables : </h2>

    <?php

// déclarztion des variables
$myVariable = "Salut ";
$str = "tu vas bien?";
echo $myVariable.$str;

define("MY_CONST", "déclaration d'une constante");
echo '<br>' . MY_CONST;

$nbr = 1;

echo "<br>" . ++$nbr; //rajoute 1 à nbr et l'affiche ensuite
echo "<br>" . $nbr++; // Affiche d'abord nbr puis incremente
echo "<br>" . $nbr;

echo "<hr> les tableaux <br>";

// $tab = ["Pomme","Fraise","Orange"];
// echo $tab[1];

$personne = [
    "nom" => "John",
    "prenom" => "Doe",
    "age" => 99
    // 5 => "cinq"
];

echo "<br>";
var_dump($personne);

echo "<br>" . $personne["nom"];

$animals = [
    "Chat" => [
        "nom" => "Felix",
        "age" => 50,
        "couleur" => "chartreuse"
    ],
    "Chien" => [
        "nom" => "Paf",
        "age" => 9,
        "couleur" => "blanc"
    ]
    ];

echo "<br>" . $animals['Chat']['nom'] . "<br>";

$heure = date("H:i:s");

if($heure>12){
    echo " c'est l'après-midi";
} else {
    echo " c'est le matin";
}

$resultat ;
$heure>12 ? $resultat = "c'est l'après midi" : $resultat = "c'est le matin";

echo $resultat;

foreach ($tab as $element) {
    
    echo "<br> " . $element;
}

foreach ($personne as $key => $value) {
    echo "<br>" . $key . " : " . $value ;
}

foreach ($animals as $animaux => $value) {
    echo "<br><br>" . $animaux . " : " ;
    foreach ($value as $key => $value){
    echo "<br>". $key . " : " . $value ;
}}

// session_start();
// $_SESSION["fruit"] = $tab;

?>
</body>

</html>