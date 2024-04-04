<?php
class Register extends Controller
{
    public function index()
    {
        $this->loadModel("Registers");
        $this->render('index');
    }
}
