<?php
session_start();

if(isset($_GET['task'])){
    $task=$_GET['task'];
    if(isset($_SESSION['userStock']['tasks'][$task])){
        unset($_SESSION['userStock']['tasks'][$task]);
    }
    header('Location:../welcome.php');
}
?>