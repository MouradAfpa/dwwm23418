<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-image: url("https://th.bing.com/th/id/OIP.SeO97KSE60134pHTQKfKzAHaEW?w=830&h=487&rs=1&pid=ImgDetMain");
            background-size: 120%; 
            background-position: cover; 
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
            color: #333;
        }
        label {
            display: block;
            margin-bottom: 5px;
            color: #666;
        }
        input[type="text"],
        input[type="date"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
            font-size: 20px;
        }
        input[type="submit"] {
            width: 100%;
            padding: 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }
        input[type="submit"]:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>

<?php include_once('NavBar.php'); ?>

    <div class="container">
        <h1>Je créer une tâche :</h1>
        <form action="gestionTaches.php" method="post">
            <label for="titre">Titre :</label>
            <input type="text" id="titre" name="titre">
            <br>
            <label for="description">Description :</label>
            <input type="text" id="description" name="description">
            <br>
            <label for="date">Date butoire :</label>
            <input type="date" id="date" name="date">
            <br>
            <input type="submit" value="Ajouter">
        </form>
    </div>
</body>
</html>
