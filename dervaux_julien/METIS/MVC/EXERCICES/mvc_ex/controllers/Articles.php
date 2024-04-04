<?php

class Articles extends Controller{
    public function index(){
    $this->loadModel("Article");
    $articles = $this->Article->getAll();
        var_dump($articles);
    echo "Salut";

    // // $articles = $this->Article->getAll();
    // $this->render('index');
}
}
