<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Depuis le php</h1>
    <?php

echo'<h1>Hello</h1>';
// echo phpinfo();
include("testInclude.php");
?>
    <hr>
    <h2>les variables: </h2>

    <?php
// declaration des variables
$a = null;
$myVariable = "salut";
$str = "$myVariable tout le monde";
echo gettype($a);

define("MY_CONST", "declaration d'une constante");
echo '<br>' . MY_CONST ;

$nbr = 1;
// on ajoute $nbr et après on rajoute 1 post-incrementation
echo "<br>" . $nbr++;
// on rajoute un et après afficher $nbr pré-incrementation;
echo "<br>" . ++$nbr;
echo "<br>" . $nbr;

echo "<hr> les tableaux <br>";

$tab = ['Pomme', 'Fraise', 'Orange'];
echo $tab[1];

$Personne = [
    "nom" => "John",
    "prenom" => "Doe",
    "age" => 99,
    // 5 => "cinq"
];

var_dump($Personne);
echo '<br>' . $Personne['nom'];

$Animals = [
    "chat" => [
        "nom" => "Felix",
        "age" => 50,
        "couleur" => "chartreuse",
    ],

    "chien" => [
        "nom" => "Paf",
        "age" => 9,
        "couleur" => "blanc",
    ],
];

echo "<br> ". $Animals["chat"]["nom"] . "<br>";
echo "<br>". $Animals["chien"]["nom"];



$heure= date("H");

if($heure>12){
    echo " c'est l'apres midi ";
}else{
    echo "c'est le matin";
}


// echo $resultat;

foreach ($tab as $element){
    echo "<br>". $element;    
}

foreach( $Personne as $key => $value) {
    echo"<br>" .$key. ":".$value;
}


foreach( $Animals as $element) {
    foreach( $element as $key => $value) {
         echo"<br>" .$key. ":".$value;
}
}








?>
</body>

</html>