<?php

class Controller
{
    public function rediriger(string $url)
    {
        switch ($url) {
            case 'Home': 
                // __DIR__ qui reprend le chemin jusqu'a ce fichier , /../ on sort du dossier app 
                include __DIR__ . "/../views/Home.php";
                break;
            case 'Login':
                include __DIR__ . "/../views/Login.php";
                break;
            case 'Register':
                include __DIR__ . "/../views/Register.php";
                break;
            case 'Dashboard':
                include __DIR__ . "/../views/Dashboard.php";
                break;

            default: 
            // à default sur la home si l'url ne correspond à rien 
                include __DIR__ . "/../views/Home.php";
                break;
        }
    }
}
