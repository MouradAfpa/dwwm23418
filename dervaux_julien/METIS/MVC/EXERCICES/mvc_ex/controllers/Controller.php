<?php


abstract class Controller{

    public function homeView(){
        include("views/home.php");
    }
    public function loginView(){
        include("views/login.php");
    }
    public function registerView(){
        include("views/register.php");
    }
    public function dashboardView(){
        include("views/dashboard.php");
    }

}