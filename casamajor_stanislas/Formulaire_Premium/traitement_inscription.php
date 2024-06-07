<?php

session_start();


var_dump($_SESSION);

if (isset($_POST["valider"])) {
    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $mdp = $_POST["mdp"];
    $cmdp = $_POST["cmdp"];
    $premium = $_POST["premium"];
    var_dump($premium);

    if ($mdp != $cmdp) {
        $error = "Les mots de passe ne correspondent pas";
        echo $error;
    }
    if ($premium !== "on") {
        $mdpvalide = password_hash($mdp, PASSWORD_DEFAULT);

        $_SESSION["utilisateur"] = array(
            "nom" => $nom,
            "prenom" => $prenom,
            "password" => $mdpvalide,
            "role" => "classique"
        );

        header("Location:connexion.php");
        exit;
    
} else {
    $mdpvalide = password_hash($mdp, PASSWORD_DEFAULT);
    $_SESSION["utilisateurPremium"] = array(
        "nom" => $nom,
        "prenom" => $prenom,
        "password" => $mdpvalide,
        "role" => "premium"
    );

    header("Location:page_paiement.php");
    exit;
}
}
