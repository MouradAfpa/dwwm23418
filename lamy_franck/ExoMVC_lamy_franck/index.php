<?php

include_once "controller/Controller.php";

$controller = new Controller();

        $action = isset($_GET['action']) ? $_GET['action'] : 'home';
        
        
switch($action){
    case'home':
    $controller->tohome();
    break;
    case'login':
    $controller->toLogin();
    break;
    case'register':
    $controller->toRegister();
    break;
    case'dashboard':
    $controller->toDashboard();
    break;


}
    


                
                
    ?>
