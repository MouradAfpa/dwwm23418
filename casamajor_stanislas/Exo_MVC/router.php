<?php

// Récupère l'URL demandée
$request_uri = $_SERVER['REQUEST_URI'];

// Mappe les URL aux fichiers correspondants
$routes = [
    '/home' => 'views/home.php',
    '/login' => 'views/login.php',
    '/register' => 'views/register.php',
    '/dashboard' => 'views/dashboard.php'
];

// Vérifie si l'URL demandée existe dans les routes
if (isset($routes[$request_uri])) {
    // Inclut le fichier correspondant
    include $routes[$request_uri];
} else {
    // Si l'URL demandée n'existe pas, renvoie une erreur 404
    http_response_code(404);
    echo 'Page not found';
}
?>
