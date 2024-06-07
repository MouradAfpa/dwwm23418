<?php
abstract class Controller{
    public function loadModel(string $model){
        require_once(ROOT.'models/'.$model.'.php');
        $this->$model = new $model();
    }

    // on va gerer les afichage en appelant ici les bonnes "views" pour cela on creer la methode render (nom utiliser par convention)
    public function render(string $fichier, array $data =[]){
        extract($data);
        
        require_once(ROOT.'views/'.strtolower(get_class($this)).'/'.$fichier.'.php');
    }
}