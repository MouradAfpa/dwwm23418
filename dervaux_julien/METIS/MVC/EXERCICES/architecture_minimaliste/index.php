<?php

require_once('app/Controllers/Controller.php');

$uri = isset($_GET['dir']) ? $_GET['dir'] : 'home';


var_dump($uri);
$controller = new Controller();

switch ($uri) {
    case 'home':
        $controller->home();
        break;
    case 'login':
        $controller->login();
        break;
    case 'register':
        $controller->register();
        break;
    case 'dashboard':
        $controller->dashboard();
        break;
    default:
        echo "404 Not Found";
        break;
}
