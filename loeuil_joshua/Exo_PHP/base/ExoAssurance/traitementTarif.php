<?php

header('location:affichageForm.php');

$responseForm =[
$nbraccident = $_POST["accident"],
$age = $_POST["age"],
$permis = $_POST["permis"],
$fidel = $_POST["fidel"],
];

$compte = $nbraccident;

if($nbraccident>2){
    $compte = 'recallé';
};
if($age < 25){
    ++$compte;
};
if($permis<2){
    ++$compte;
};
if($fidel < 5){
    ++$compte;
};

session_start();
$_SESSION['Compteur'] = $compte;


?>