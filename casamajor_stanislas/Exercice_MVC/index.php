<?php

include "Controller/controllers.php";

$control = new Controller();

$redirection = isset($_GET['dir']) ? $_GET['dir'] : 'home';

switch ($redirection){
    case 'login':
        $control->login();
        break;
    case 'home':
        $control->home();
        break;
    case 'register':
        $control->register();
        break;
    case 'dashboard':
        $control->dashboard();
        break;           
    default:
    echo "C'est pas bon chef";
}

?>