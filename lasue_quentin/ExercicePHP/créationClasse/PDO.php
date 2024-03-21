<?php
try {
    $host = "localhost";
    $db = "garage";
    $user = "root";
    $mdp = "";

    //Connexion à la base de données avec PDO
    $connexion = new PDO("mysql:host=$host;dbname=$db", $user, $mdp);
    //Configuration de PDO pour générer des exeptions en cas d'erreur.
    $connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //Message de succés si la connexion est établie.
    echo "Connexion réussie !<br>";
    function insertInto($connexion)
    { // dans un fonction pour éviter de tous mettre en commentaire pour ne pas que ça s'execute à chaque rechargement

        //Requête SQL d'insertion de données dans la table voiture
        $query = "INSERT INTO voiture(marque,modele,couleur,nbrPorte) VALUES ('Audi','A5','Orange',5)";
        $query2 = "INSERT INTO voiture(marque,modele,couleur,nbrPorte) VALUES ('Ford','Fiesta','Bleu',5)";

        //Exécution de la requête SQL d'insertion avec la methode exec()
        $connexion->exec($query);
        $connexion->exec($query2);

        //Préparation de la requéte SQL avec des marqueurs de paramétres
        $query3 = "INSERT INTO voiture (marque,modele,couleur,nbrPorte) VALUES(:marque, :modele, :couleur,:nbrPorte)";
        $statement = $connexion->prepare($query3);

        ////Liaison des valeurs des paramétres
        $marque = "Renault";
        $modele = "30008--";
        $couleur = "Rose";
        $nbrPorte = 5;
        $statement->bindParam(":marque", $marque);
        $statement->bindParam(":modele", $modele);
        $statement->bindParam(":couleur", $couleur);
        $statement->bindParam(":nbrPorte", $nbrPorte);

        //Exécution de la requéte préparée
        $statement->execute();
        echo "Insertion réussie!";
    }

    //Les transactions
    //Début d'une transaction
    $connexion->beginTransaction();
    
        //Opération de modification de base de données
        $query5 = "INSERT INTO voiture (marque,modele,couleur,nbrPorte) VALUES (:marque, :modele, :couleur,:nbrPorte)";
        $statement = $connexion->prepare($query5);

        $marque = "Dacia";
        $modele = "Sandero";
        $couleur = "Bleu Foncé";
        $nbrPorte = 3;

        $statement->bindParam(":marque", $marque);
        $statement->bindParam(":modele", $modele);
        $statement->bindParam(":couleur", $couleur);
        $statement->bindParam(":nbrPorte", $nbrPorte);

        $query6 = "UPDATE voiture SET nbrPorte=5 WHERE marque='Dacia'";

        $statement->execute();
        $connexion->exec($query6);

        //Validation de la transaction
        $connexion->commit();
        echo "Transaction effectuées avec succés !";
    
        
    // Requête de récupération 
    //Préparation de la requéte SQL SELECT 
    $query4 = "SELECT * FROM voiture";
    $statement = $connexion->prepare($query4);
    //Exécution de la requête
    $statement->execute();
    //Récupération des resultats de la requête
    $voiture = $statement->fetchAll(PDO::FETCH_ASSOC);
    // Affichage des résultats
    foreach ($voiture as $voit) {
        echo " ID : " . $voit['id'] . "<br>";
        echo " Marque : " . $voit['marque'] . "<br>";
        echo " Modele : " . $voit['modele'] . "<br>";
        echo " Couleur : " . $voit['couleur'] . "<br>";
        echo " NbrPorte : " . $voit['nbrPorte'] . "<hr>";
    }
} catch (PDOException $e) {
    // gestion des exeptions PDO : affichage du message d'erreur
    echo "Erreur : " . $e->getMessage();
    //En cas d'erreur, annulation de la transaction
    $connexion->rollBack();
    echo "Erreur de transaction: " . $e->getMessage();

}
