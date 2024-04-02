<?php

define('ROOT', str_replace('index.php','',$_SERVER['SCRIPT_FILENAME']));
die(ROOT);
var_dump($_GET);

 // On sépare les paramètres et on les met dans le tableau $params
$params = explode('/', $_GET['p']);

// Si au moins 1 paramètre existe
if($params[0] != ""){
    var_dump($params);
    // On sauvegarde le 1er paramètre dans $controller en mettant sa 1ère lettre en majuscule
    $controller = ucfirst($params[0]);

    // On sauvegarde le 2ème paramètre dans $action si il existe, sinon index
    $action = isset($params[1]) ? $params[1] : 'MVC';

    require_once("ROOTcontrollers/$controller.php");

    $controller = new $controller();

    if(method_exists($controller, $action)){
        $controller->$action();
    }else{
        http_response_code(404);
        echo "La page demandé n'existe pas";
    }
}else{
    // Ici aucun paramètre n'est défini
}

?>