<?php
//Controller Principal 

abstract class Controller
{
    // Charge un Model
    public function loadModel(string $model)
    {
        require_once(ROOT . 'models/' . $model . '.php');
        //Insctanciation du nouveau model 
        $this->$model = new $model();
    }

    public function render(string $fichier)
    {
        require_once(ROOT . 'views/' . strtolower(get_class($this)) . '/' . $fichier . '.php'); // str lower pour mettre en minuscule get class pour aller chercher la classe de la ou on appelle 
    }
}
