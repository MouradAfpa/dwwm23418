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

echo '<h1>Hello World</h1>';
// echo phpinfo();
include("testInclude.php");

?>
    <hr>
    <h2>les variables :</h2>

    <?php
//Declaration des variables

$maVariable = "Salut";
$str = "$maVariable tout le monde";
echo $str;
echo "<br>";
echo gettype($str) . "<br>";

define("MA_CONST", "declaration d'une constante");
echo '<br>' . MA_CONST;

$nbr = 1;

//affichage puis incrementation
echo "<br>" . $nbr++;

//incrementation puis affichage
echo "<br>" . ++$nbr;

//affichage
echo "<br>" . $nbr . "<hr>";

echo "<h2>Les tableaux</h2>";

//Tableau

$tab = ["Pomme","Fraise","Orange"];

$tableauPers = [
    "nom" => "Loeuil",
    "prenom" => "Joshua",
    "age" => 26,
    ];


echo $tab[1]. "<br>";
var_dump($tableauPers) . "<br>" ;
echo "<br>" . $tableauPers["age"];


$animals = [
    "Chat" =>[
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

$heure = date("H");

// if($heure>12){
//     echo "c'est l'apres-midi <br>";
// }else{
//     echo "c'est le matin <br>";
// };

$resultat;

$heure>12?$resultat = "c'est l'apres-midi <br>": $resultat = "c'est le matin <br>";

// echo $heure;
echo $resultat . "<br>";

echo "<h2>Les Boucles</h2> <br>";

//Les Boucles


foreach ($tab as $element) {
    echo "<br>" . $element;
};

echo "<br>";

foreach ($tableauPers as $key => $value) {
    echo "<br>" . $key . " : ". $value;
};


foreach ($animals as $Truc => $valeur) {
    echo "<br><hr>" . $Truc . " : ";
    foreach ($valeur as $det => $valueur) {
        echo "<br>" . $det . " : " . $valueur;
    };
};

function division(int $nb1, int $nb2 = 2){
    if($nb2 === 0){
        return "erreur";
    }else{
    return $nb1/$nb2;
    };
};

echo "<br><hr>" . division(10);

for($i = 0 ; $i< count($tab); $i++){
    echo "<br> $tab[$i]";
};







?>

</body>

</html>