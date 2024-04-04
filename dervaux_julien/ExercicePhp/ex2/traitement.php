
<?php

$age =  $_POST["age"];
$annePermis = $_POST["permis"];
$accident = $_POST["accident"];
$anneeInscription = $_POST["anneeInscription"];

// Récupérer l'année d'inscription

// $justeAnnee = explode("-", $anneeInscription);
// $yearOfInscription = $justeAnnee[0];
// $currentYear = date("Y");
// $nbrAnneeInscri = $currentYear - $yearOfInscription;


$dateActuelle = new DateTime();
$dateObj = DateTime::createFromFormat('Y-m-d', $anneeInscription); 
$interval = $dateActuelle->diff($dateObj);
$nbrAnneeInscri = $interval->y;
var_dump($nbrAnneeInscri);

$malus = $accident;

// Calcul du malus
if($age<18){
    $malus = 6;
}
if ($age < 25) {
    $malus++;
}
if ($annePermis < 2) {
    $malus++;
}
if ($nbrAnneeInscri > 5) {
    $malus--;

var_dump($malus);

}

// calcul tarif en fonction malus

switch ($malus) {
    case 0:
        $tarif = "Bleu";
        break;
    case 1:
        $tarif = "vert";
        break;
    case 2:
        $tarif = "Orange";
        break;
    case 3:
        $tarif = "Rouge";
        break;
    default:
        $tarif = "Refuser";
}

echo $tarif;

session_start();
$_SESSION['malus'] = $malus;

header("Location:tarif.php");
