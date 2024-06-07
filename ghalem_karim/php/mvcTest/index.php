<?php
// on genere une constante qui contiendra le chemin vers inde.php
define('ROOT', str_replace('index.php','',$_SERVER['SCRIPT_FILENAME']));
// on charge les model et controlleur principaux 
require_once(ROOT.'app/Model.php');
require_once(ROOT.'app/Controller.php');
// 
// La fonction die([optional_string_message]) est une fonction très simple, voire simplissime. Elle a pour but de stopper l'exécution de votre script et d'afficher le message que vous aurez éventuellement spécifié.
// Son emploi est très courant pour gérer les erreurs de connexion aux bases de données ou les erreurs de chemin lors des inclusions
// die(ROOT);
// 
// l'idee principal de MVC est davoir la gestion de ses urls et de suivre une arcitecture particuliere 
//  on part d'une adresse du type :  
//  http://url_du_site/index.php?p= 
//  vers une adresse du genre :  
//  http://url_du_site/controllers/actions
// qui sera une adresse plus facile a retenir pour les utilisateur
var_dump($_GET);
// on commence par separer les parametres 
$params=explode('/',$_GET['p']);
echo'<br>';
var_dump($params);
// on verifie que lon a bien des choses dans les parametres pour la redirection vers le routeur
if($params[0]!=""){
$controller=ucfirst($params[0]);
$action=isset($params[1]) ? $params[1] :'index';
// on va donc ici utiliser la constante ROOT que l'on a decris plus haut , celle ci va nous permettre d'avoir toujours le bon chemin , et on lui concatene le controller .
require_once(ROOT.'controllers/'.$controller.'.php');
//on va egalement instancier un controller 
// plutot que de noter cela de la maniere : $article = new Article(), mais on ne sait pas quelle controller utiliser on va donc :
$controller = new $controller();  
if(method_exists($controller,$action)){
    $controller->$action();
}else{
    http_response_code(404);
    echo"la page n'existe pas";
}
}else{

}