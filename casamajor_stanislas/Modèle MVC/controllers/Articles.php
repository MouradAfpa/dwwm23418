<?php

class Articles extends Controller{

public function index(){
    $this->loadModel('Article');
    $articles = $this->Article->getAll();
    
    $this->render('index', compact('articles')); // Remplace l'écriture ['articles'=> $articles], on peut ajouter une variable avec une "," après la parenthèse.

    
}
}
    
