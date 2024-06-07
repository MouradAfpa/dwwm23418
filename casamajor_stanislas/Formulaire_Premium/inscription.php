<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Inscription</title>
</head>

<body>
    <h1>Formulaire d'inscription :</h1>
    <fieldset>
        <form action="traitement_inscription.php" method="post">
            <label for="nom">Nom : <br><input type="text" name="nom" required></label><br><br>
            <label for="prenom">Prénom : <br><input type="text" name="prenom" required></label><br><br>
            <label for="mdp">Mot de passe : <br><input type="password" name="mdp" required></label><br><br>
            <label for="cmdp">Confirmer le mot de passe : <br><input type="password" name="cmdp" required></label><br><br>
            <label for="premium">Premium : <br><input type="checkbox" name="premium" id="premium"></label><br><br>
            <label for="" id="submit"><input type="submit" name="valider"></label>
        </form>
    </fieldset>
        
   
    <?php

    session_start();

    

    ?>
    <script>
        const checkBoxPremium = document.getElementsByName("premium")[0];

        checkBoxPremium.addEventListener("change", (e) => {
            if (e.target.checked) {
                document.querySelector(".paiement").style.display = "block";
                
                // const submit = document.getElementById("submit");
                // submit.style.display = "none";
                // paiement.innerHTML ="<label>bonjour</label>"
                // const lPay = document.createElement("label");
                // paiement.append(lPay);
            } else {
                document.querySelector(".paiement").style.display = "none";
            }
        });
    </script>

</body>

</html>