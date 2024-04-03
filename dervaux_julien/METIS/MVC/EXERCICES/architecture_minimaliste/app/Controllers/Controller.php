<?php

class Controller{

    public function home(){
        include("Views/home.php");
    }
    public function dashboard(){
        include("Views/dashboard.php");
    }
    public function login(){
        include("Views/login.php");
    }
    public function register(){
        include("Views/register.php");
    }
}