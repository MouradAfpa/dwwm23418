<?php

include_once 'navbar.php';

session_start();

if (isset($_SESSION["tarif"])) {
    $tarif = $_SESSION["tarif"];
    echo "<h1>Tarif Obtenu</h1>";
    echo "<p>Le tarif attribué est : $tarif</p>";
} else {
    echo "<p>Aucun tarif trouvé.</p>";
}

?>