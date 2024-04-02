<?php

class Articles extends Controller{
    public function index(){
    $this->loadModel("Article");
    echo "Bienvenue sur l'accueil";
}
}
