<?php
require_once './class/Database.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $db = new Database('localhost', 'orchestre');
    $db->seConnecter();

    $action = $_POST['action'] ?? '';

    if ($action === 'add') {
        // Récupérer les données du formulaire pour l'ajout
        $nom = htmlspecialchars($_POST["nom"] ?? "");
        $age = filter_var($_POST["age"] ?? "", FILTER_VALIDATE_INT);
        $typeMusicien = htmlspecialchars($_POST["type_musicien"] ?? "");

        // Vérifier que les données sont valides
        if ($nom && $age !== false && $typeMusicien) {
            try {
                // Préparer la requête d'insertion
                $query = "INSERT INTO membres_troupe (nom, age, type_musicien) VALUES (:nom, :age, :typeMusicien)";
                $params = [':nom' => $nom, ':age' => $age, ':typeMusicien' => $typeMusicien];

                // Exécution de la requête
                $statement = $db->effectuerUneRequete($query, $params);

                echo "Nouveau membre ajouté avec succès!";
                header("Location: form.php");
                exit();
            } catch (PDOException $e) {
                echo "Erreur : " . $e->getMessage();
            }
        } else {
            echo "Veuillez remplir tous les champs du formulaire.";
        }
    } 
    
    if ($action === 'update') {
        // Récupérer les données du formulaire pour la mise à jour
        $id_membre = htmlspecialchars($_POST["id_membre"] ?? "");
        $nom = htmlspecialchars($_POST["nom"] ?? "");
        $age = filter_var($_POST["age"] ?? "", FILTER_VALIDATE_INT);
        $typeMusicien = htmlspecialchars($_POST["type_musicien"] ?? "");

        // Vérifier que les données sont valides
        if ($id_membre && $nom && $age !== false && $typeMusicien) {
            try {
                // Mettre à jour le membre dans la base de données
                $result = $db->updateMember($id_membre, $nom, $age, $typeMusicien);
                if ($result !== false) {
                    echo "Membre mis à jour avec succès!";
                } else {
                    echo "Erreur lors de la mise à jour du membre.";
                }
                header("Location: form.php");
                exit();
            } catch (PDOException $e) {
                echo "Erreur : " . $e->getMessage();
            }
        } else {
            echo "Veuillez remplir tous les champs du formulaire.";
        }
    } else {
        echo "Action non valide.";
    }

    if ($action === 'delete') {
        $id_membre = htmlspecialchars($_POST['id_membre'] ?? "");

        if ($id_membre) {
            try {
                $result = $db->deleteMember($id_membre);
                
                if (!$result) {
                    echo "Membre supprimé avec succès";
                } else {
                    echo "Erreur lors de la suppression du membre";
                }

                header("Location: form.php");
                exit();
            } catch (PDOException $e) {
                echo "Erreur : " . $e->getMessage();
            }
        } else {
            echo "ID du membre non spécifié";
        }
    } else {
        echo "Action supprimer non valide";
    }
} else {
    // Redirection en cas d'accès direct au script sans soumission de formulaire
    header("Location: form.php");
    exit();
}
