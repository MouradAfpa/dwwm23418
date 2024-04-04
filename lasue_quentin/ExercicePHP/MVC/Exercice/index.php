<?php
// Liaison avec le controler principal pour pouvoir new...
require_once "./app/Controller.php";
//Vérification si un paramètre est dans l'URL sinon on vien l'initialise a Home
$params = isset($_GET['p']) ? $_GET['p'] : "Home";
// On met la majuscule sur la première lettre 
$params = ucfirst($params);
$controller = new Controller();
// Utilisation de la methode qui redirige vers les page avec le paramètre 
$controller->rediriger($params);
