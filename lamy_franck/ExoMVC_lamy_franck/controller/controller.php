<?php
//contoller.php

// $params = explode('/', $_GET['action']);

class controller {
    public function tohome(){
        include 'view/Home.php';
    }
    
    public function toLogin(){
       include 'view/Login.php';
    }

    public function toRegister(){
       include 'view/Register.php';
    }

    public function toDashboard(){
       include 'view/Dashboard.php';
    }


}    

?>