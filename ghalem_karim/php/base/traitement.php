<?php  header("Location: resultat.php");?>

<?php

$nom =$_POST['user_name'];
// echo($nom);
$age=$_POST['user_age'];
$permis=$_POST['user_permis'];
$accident=$_POST['user_accident'];
$fid=$_POST['user_fid'];

 
    $malus = $accident;
    $tarif = "";
    $gif="";
  
    if ($age < 25) {
      $malus++;
    }
    if ($permis < 2) {
      $malus++;
    }
    if ($fid > 5) {
      $malus--;
    }
    switch ($malus) {
      case -1:
        $tarif = "Bleu";
        $gif="bleu";
        break;
        case 0:
            $tarif = "vert";
            $gif="vert";
            break;
            case 1:
                $tarif = "Orange";
                $gif="orange";
                break;
                case 2:
                    $tarif = "Rouge";
                    $gif="rouge";
                    break;
                    default:
                    $tarif = "Refuser";
                    $gif="refuser";
    }
    session_start();
    $_SESSION['tarif']=$tarif;
    $_SESSION['gif']=$gif;


?>
