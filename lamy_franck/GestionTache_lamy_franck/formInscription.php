<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inscription</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: grey;
            margin: 0;
            padding: 0;
        }
        .container {
            max-width: 400px;
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
        form {
            margin-top: 20px;
        }
        label {
            display: block;
            margin-bottom: 5px;
            color: #666;
        }
        input[type="text"],
        input[type="password"] {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
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
        .premium-container {
            display: flex;
            align-items: center;
        }
        .premium-label {
            margin-left: 10px;
            margin-top: 5px;

        }
        #premium {
            width: 20px;
            height: 20px;
            appearance: none;
            -webkit-appearance: none;
            border: 2px solid #007bff;
            border-radius: 3px;
            outline: none;
            cursor: pointer;
        }
        #premium:checked {
            background-color: #007bff;
        }
        #premium + label {
            color: #333;
            cursor: pointer;
        }

    </style>
</head>
<body>

<?php include_once('NavBarCoEtInsc.php')?>

<?php
session_start();

if (isset($_SESSION['message'])) {
    echo "<script>alert(\"{$_SESSION['message']}\")</script>";
    unset($_SESSION['message']);
}
?>

    <div class="container">
        <h1>Formulaire d'inscription</h1>
        <form action="gestionInscription.php" method="post">
            <label for="name">Nom d'utilisateur :</label>
            <input type="text" id="name" name="name" required>
            <br>
            <label for="email">Adresse Mail :</label>
            <input type="text" id="email" name="email" required>
            <br>
            <label for="password">Mot de passe :</label>
            <input type="password" id="password" name="password" required>
            <br>
            <label for="passwordConfirm">Confirmation du mot de passe :</label>
            <input type="password" id="passwordConfirm" name="passwordConfirm" required>
            <br><hr>
            <div class="premium-container">
                <input type="checkbox" name="premium" id="premium">
                <label class="premium-label" for="ckeck">Passer en premium</label>
            </div>
            <hr>
            <br>
            <input type="submit" value="S'inscrire">
        </form>
    </div>
</body>
</html>
