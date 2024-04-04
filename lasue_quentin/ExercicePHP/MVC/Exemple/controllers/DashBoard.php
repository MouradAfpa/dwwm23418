<?php
class Dashboard extends Controller
{
    public function index()
    {
        $this->loadModel("Dashboards");
        $this->render('index');
    }
}
