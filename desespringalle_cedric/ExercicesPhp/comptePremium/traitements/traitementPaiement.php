<?php
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $cardNumber = htmlspecialchars($_POST['num_bancaire']);
    $masterCardRegExp = "/^5[1-5][0-9]{14}$/";

    if (empty($cardNumber)) {
        echo 'Veuillez remplir le champ "Numéro de carte".';
    } else {
        if (preg_match($masterCardRegExp, $cardNumber)) {
            header("Location: ../pages/premium.php");
            exit();
        } else {
            echo 'Veuillez saisir un numéro de valide (format MasterCard).';
        }
    }
} else {
    header("Location: ../pages/paiement.php");
    exit();
}
