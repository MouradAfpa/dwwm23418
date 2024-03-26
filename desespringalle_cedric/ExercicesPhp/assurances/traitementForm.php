<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Vérification de l'âge
    if (isset($_POST["age"]) && $_POST["age"] >= 17 && $_POST["age"] <= 99) {
        $age = $_POST["age"];

        // Récupération des autres données du formulaire
        $permis = $_POST["permis"];
        $accidents = $_POST["accidents"];
        $client = $_POST["client"];

        // Calcul du tarif en utilisant switch-case
        switch (true) {
            case ($age < 25 && $permis == "non" && $accidents == 0):
                $tarif = "Rouge";
                break;
            case (($age < 25 && $permis == "oui") || ($age >= 25 && $permis == "non")):
                if ($accidents == 0) {
                    $tarif = "Orange";
                } elseif ($accidents == 1) {
                    $tarif = "Rouge";
                } else {
                    $tarif = "Refusé";
                }
                break;
            case ($age >= 25 && $permis == "oui"):
                if ($accidents == 0) {
                    $tarif = "Vert";
                } elseif ($accidents == 1) {
                    $tarif = "Orange";
                } elseif ($accidents == 2) {
                    $tarif = "Rouge";
                } else {
                    $tarif = "Refusé";
                }
                break;
            default:
                $tarif = "Refusé";
        }

        // Vérification de la fidélité du client et ajustement du tarif si nécessaire
        if ($client == "oui") {
            switch ($tarif) {
                case "Vert":
                    $tarif = "Bleu";
                    break;
                case "Orange":
                    $tarif = "Vert";
                    break;
                case "Rouge":
                    $tarif = "Orange";
                    break;
            }
        }

        // Stockage du tarif dans la session
        $_SESSION['tarif'] = $tarif;

        // Redirection vers la page tarifObtenu.php
        header("Location: tarifObtenu.php");
        exit();
    } else {
        echo "<p>Erreur : Veuillez saisir un âge valide entre 17 et 99 ans.</p>";
    }
} else {
    echo "<p>Le formulaire n'a pas été soumis.</p>";
}