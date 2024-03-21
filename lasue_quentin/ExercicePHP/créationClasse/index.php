<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exercice création de classe</title>
</head>

<body>
    <?php
    include 'IFonctionnalitesVoiture.php';
    include 'Voiture.php';
    include 'Bolide.php';

    //Création d'objet.
    $voiture1 = new Voiture("Ford", "Fiesta", "Bleu", 5);
    $voiture2 = new Voiture("Renault", "3008", "Rose", 5);
    $voiture3 = new Voiture("Audi", "A5", "Orange", 3);

    //Affichage.
    echo "Voiture 1 : " . $voiture1 . "<br>";
    echo "Voiture 2 : " . $voiture2 . "<br>";
    echo "Voiture 3 : " . $voiture3 . "<br>";
    echo"<br>";

    //Affichage des caractéristique individuellement.
    echo "Marque de la voiture 2 : " . $voiture2->getMarque() . "<br>";
    echo "Modele de la voiture 2 : " . $voiture2->getModele() . "<br>";
    echo "Couleur de la voiture 2 : " . $voiture2->getCouleur() . "<br>";
    echo "Nombre de porte de la voiture 2 : " . $voiture2->getNbrPorte() . "<br>";
    echo"<br>";

    //Mise à jour des caractéristiques.
    echo $voiture2->setMarque("Renault");
    echo $voiture2->setModele("Nouvelle R5");
    echo $voiture2->setCouleur("Jaune");
    echo $voiture2->setNbrPorte(3);
    echo"<br>";

    //Affichage avec les changements.
    echo "Voiture 2 : " . $voiture2 . "<br>";
    echo"<br>";

    // Même chose qu'avec les voiture avc un bolide (sans les changements).
    $bolide1 = new Bolide("Deadpool", "69", "Rouge", 2, false, 260);
    echo "Bolide 1 :" . $bolide1 . "<br>";
    echo "Homologation route du Bolide 1 : " . $bolide1->getRoute() . "<br>";
    echo "Vitesse max du Bolide 1 : " . $bolide1->getVitesseMax() . "<br>";
    echo"<br>";

    //Utilisation des methodes implementer de l'interface.
    echo "Voiture 3 : " . $voiture3->allumerPhares();
    echo "Voiture 3 : " . $voiture3->changerVitesse(130);
    //Classe qui hérite de l class implementer accéde aux implementations.
    echo "Bolide 1 : " . $bolide1->allumerPhares();

    ?>

</body>

</html>