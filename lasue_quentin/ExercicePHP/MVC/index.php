<?php
// On génére une constante qui contien le chemin vers index.php
// str replace replace index.php par "" de $_server['SCRIPT_FILENAME'] qui est le chemin vers index.php stocker dans ROOT
define('ROOT', str_replace('index.php', '', $_SERVER['SCRIPT_FILENAME']));
// chargement des controller et model principaux
require_once(ROOT . 'app/Model.php');
require_once(ROOT . 'app/Controller.php');

// On sépare les paramètres 
$params = isset($_GET['p']) ? explode('/', $_GET['p']) : [];
// var_dump($params[1]);

// Est ce qu'un paramètre existe  ? 
if ($params[0] == "login" || $params[0] == "home" || $params[0] == "register" || $params[0] == "dashboard") {
    //
    // Manque le controle de ci le controller existe  !!!!!
    //
    $controller = ucfirst($params[0]); // ucfirst première lettre en majuscule

    $action = isset($params[1]) ? $params[1] : "index";

    // chemin vers le projet + entrez dans controller + nom du controller + .php pour prendre le bon fichier 
    require_once(ROOT . 'controllers/' . $controller . '.php');

    //instanciation exemple si controller === Article alors Article = new Article()
    $controller  = new $controller();
    // vérifie si la methode dans $action existe
    if (method_exists($controller, $action)) {
        $controller->$action();
    } else { // si elle n'existe pas
        http_response_code(404);
        echo "La page demandée n'existe pas.";
    }
} else {
    echo "La page demandée n'existe pas. <br> Tapez home, login, register ou dashboard.";
}
