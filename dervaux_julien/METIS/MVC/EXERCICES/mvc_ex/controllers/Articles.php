<?php

class Articles extends Controller{
    public function index(){
    $this->loadModel("Article");
    $articles = $this->Article->getAll();
        var_dump($articles);
    $this->render('index');
}
}
