<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <h1>Depuis php</h1>

    <?php
    echo  '<h1>HelloWorld</h1>';
    include("testInclude.php");
    ?>

    <hr>
    <h2>les variables : </h2>

    <?php

    $myVariable = 'Salut';
    $str = "$myVariable tout le monde";
    echo $str;

    var_dump($str);
    var_dump((gettype($str)));

    define("MY_CONST", "déclaration d'une constante");

    echo "<br>" . MY_CONST;

    $nbr = 1;

    // on affiche $nbr et après on rajoute 1 (postIncrementation)
    echo "<br>" . $nbr++;
    // on rajoute 1 et après on affiche $nbr (préIncrementation)
    echo "<br>" . ++$nbr;
    echo "<br>" . $nbr;

    echo "<hr> les tableaux <br>";

    $tab = ['Pomme', 'Fraise', 'Orange'];
    echo $tab[1];

    $personne = [
        'nom' => 'John',
        'prenom' => 'Doe',
        'age' => 99,
        5 => "cinq"
    ];

    var_dump($personne);

    echo '<br>' . $personne['nom'];

    $animals = [
        "chat" => [
            "nom" => "Lechat",
            "age" => 50,
            "couleur" => "chartreuse"
        ],
        "chien" => [
            "nom" => "Lechien",
            "age" => 9,
            "couleur" => "blanc"
        ]
    ];

    echo "<br>" . $animals["chat"]["nom"];

    $heure = date("H");

    if ($heure > 12) {
        echo "c'est l'apès-midi";
    } else {
        echo "c'est le matin";
    }

    $resultat;
    $heure > 12 ? $resultat = "c'est l'après-midi" : $resultat = "c'est le matin";

    echo $resultat;

    foreach ($tab as $element) {

        echo "<br>" . $element;

    }

    foreach ($personne as $key => $value) {
        
        echo "<br>" . $key . " : " .$value ;
    };

    foreach ($animals as $element){
        foreach ($element as $key => $value) {
            echo "<br>" . $key . " : " . $value;
        }
    };


    function division(int $nb1 , int $nb2)
    {
        if($nb2 === 0){

            return "erreur";
        }
        return $nb1 / $nb2;
    };
    
    echo '<br' . division(3,6);

    for($i = 0; $i < count($tab) ; $i++){
        echo "<br> $tab[$i]";
    }

    session_start();
    
    $_SESSION["fruit"] = $tab;

    ?>
</body>

</html>