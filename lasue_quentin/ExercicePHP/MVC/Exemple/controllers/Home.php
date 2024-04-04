<?php
class Home extends Controller
{
    public function index()
    {
        $this->loadModel("Homes");
        $this->render('index');
    }
}
