<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Paiement par carte bancaire</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: blanchedalmond;
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
        input[type="number"],
        input[type="date"],
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
    </style>
</head>
<body>

<?php
session_start();

if (isset($_SESSION['message'])) {
    echo "<script>alert(\"{$_SESSION['message']}\")</script>";
    unset($_SESSION['message']);
}
?>


<div class="container">
    <h1>Paiement par carte bancaire</h1>
    <form action="traitementPremium.php" method="post">
        <label for="number">Numéro de carte :</label>
        <input type="text" id="number" name="numberCard" required>
        <br>
        <label for="numberCrypto">Cryptogramme :</label>
        <input type="password" id="numberCrypto" name="numberCrypto" required>
        <br>
        <label for="nameCard">Nom du titulaire de la carte :</label>
        <input type="text" id="nameCard" name="nameCard" required>
        <br>
        <label for="dateCard">Date d'expiration :</label>
        <input type="date" id="dateCard" name="dateCard" required>
        <br>
        <input type="submit" value="Payer">
    </form>
</div>

</body>
</html>
