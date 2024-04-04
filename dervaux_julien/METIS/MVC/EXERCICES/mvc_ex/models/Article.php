<?php

class Article extends Model{
     public function __construct(){
        $this->getConnexion();
        $this->table = "articles";
    }
}