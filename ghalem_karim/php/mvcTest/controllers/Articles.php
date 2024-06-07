<?php
class Articles extends Controller{
    public function index(){
        $this->loadModel("Article");
        $articles = $this->Article->getAll();
        var_dump($articles);
        // echo"Bienvenue sur l'acceuil";
        $this->render('index',['articles' -> $articles]);
    }
}