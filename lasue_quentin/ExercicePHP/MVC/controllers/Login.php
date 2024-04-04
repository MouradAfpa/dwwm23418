<?php
class Login extends Controller
{
    public function index()
    {
        $this->loadModel("Logins");
        $this->render('index');
    }
}
