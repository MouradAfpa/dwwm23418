<?php
class Database
{
    //masquage des informations de connection à la base de donnée
    private static $_dbConfig = []; // tableau qui va reprendre les élément de connexion
    private static $_configFile; // va reprendre le chemin vers le fichier qui à les info
    private $connexion;

    private static function setConnection()
    {
        $handle = fopen(self::$_configFile, 'r'); //ouvre le fichier en lecture seule self::$_configFile est le chemin ('r')
        $conf = json_decode(fread($handle, filesize((self::$_configFile)))); //decode le json (format du doc ou sont stocké les infos)
        self::$_dbConfig["host"] = $conf->host; //utilisation des clées du fichier caché pour les mettre dans le db config associé à la bonne clé
        self::$_dbConfig["db"] = $conf->db;
        self::$_dbConfig["user"] = $conf->user;
        self::$_dbConfig["mdp"] = $conf->mdp;
    }

    public function set_configfile($_configFile)
    //Mettre à jours le chemin vers le fichier de configuration
    { // Attribut static = param de la methode
        self::$_configFile = $_configFile; // self car l'attriut est défini comme static
    }
    public function connect()
    //Connexion à la BDD
    {
        $this->connexion = null; // si une connexion existe je la ferme

        //Initialisation de la route vers le fichier 
        self::set_configfile("./conf/db.conf");
        //préparation des donnée de connection
        self::setConnection();

        try {
            $this->connexion = new PDO(
                'mysql:host=' . self::$_dbConfig['host'] . ';dbname=' . self::$_dbConfig['db'],
                self::$_dbConfig['user'],
                self::$_dbConfig['mdp']
            );
            $this->connexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (PDOException $e) {
            echo 'Erreur de connexion : ' . $e->getMessage();
        }

        return $this->connexion;
    }

    public function close()
    { // fermeture de la connexion
        $this->connexion = null;
    }
    public function ajoutMusicien(string $type, string $nom, int $age)
    {
        $connexion = $this->connect();
        $imgType = [
            "guitariste" => "./musicien/guitare.jpg",
            "trompettiste" => "./musicien/trompettiste.jpg",
            "chanteur" => "./musicien/chanteur.jpg",
            "batteur" => "./musicien/batteur.jpg",
            "percussionniste" => "./musicien/percussionniste.png"
        ];


        try {

            //Opération de modification de base de données
            $img = $imgType[$type];
            $query = "INSERT INTO musicien (nom,age,type,image) VALUES (:nom, :age, :typeM, :img )";
            $statement = $connexion->prepare($query);

            $statement->bindParam(":nom", $nom);
            $statement->bindParam(":age", $age);
            $statement->bindParam(":typeM", $type);
            $statement->bindParam(":img", $img);

            //Exécution de la requéte préparée
            $statement->execute();
            echo "Ajout effectuer.";
        } catch (PDOException $e) {
            // gestion des exeptions PDO : affichage du message d'erreur
            echo "Erreur : " . $e->getMessage();
        }
        $this->close();
    }

    public function getAllMembers()
    {
        $connexion = $this->connect();

        try {
            $query = "SELECT *  FROM musicien";
            $resultats = $connexion->query($query);
            return $resultats;
            echo "Tous les membres ont était récupéré.";
        } catch (PDOException $e) {
            // gestion des exeptions PDO : affichage du message d'erreur
            echo "Erreur : " . $e->getMessage();
        }
    }
    public function addPhoto(int $id, $photoImporter)
    {
        $connexion = $this->connect();

        try {
            $photo = file_get_contents($photoImporter);
            $query = "UPDATE musicien SET photo = :photo WHERE id = :id ";
            $statement = $connexion->prepare($query);

            $statement->bindParam(":id", $id);
            $statement->bindParam(":photo", $photo);

            //Exécution de la requéte préparée
            $statement->execute();
            echo "Photo envoyer a la base de donnée.";
        } catch (PDOException $e) {
            // gestion des exeptions PDO : affichage du message d'erreur
            echo "Erreur : " . $e->getMessage();
        }
    }
    public function updateMember(int $id, string $attribut, string $newNom, int $newAge)
    {

        $connexion = $this->connect();
        $imgType = [
            "guitariste" => "./musicien/guitare.jpg",
            "trompettiste" => "./musicien/trompettiste.jpg",
            "chanteur" => "./musicien/chanteur.jpg",
            "batteur" => "./musicien/batteur.jpg",
            "percussionniste" => "./musicien/percussionniste.png"
        ];
        try {
            $img = $imgType[$attribut];
            $query = "UPDATE musicien SET nom =:nom, age =:age, type=:attribut, image=:img WHERE id = :id ";

            $statement = $connexion->prepare($query);

            $statement->bindParam(":id", $id);
            $statement->bindParam(":nom", $newNom);
            $statement->bindParam(":age", $newAge);
            $statement->bindParam(":attribut", $attribut);
            $statement->bindParam(":img", $img);

            //Exécution de la requéte préparée
            $statement->execute();
            echo "Modification effectué.";
        } catch (PDOException $e) {
            // gestion des exeptions PDO : affichage du message d'erreur
            echo "Erreur : " . $e->getMessage();
        }
    }
    public function deleteMember(int $id)
    {
        $connexion = $this->connect();
        try {
            $query = "DELETE FROM musicien where id = $id";
            $connexion->exec($query);
            echo "Suppression validé.";
        } catch (PDOException $e) {
            // gestion des exeptions PDO : affichage du message d'erreur
            echo "Erreur : " . $e->getMessage();
        }
    }
    public function searchName(string $searchName)
    {
        $connexion = $this->connect();
        try {
            //Requête recherche sur le nom ou le type
            $query = "SELECT * FROM musicien WHERE nom LIKE :searchName OR type LIKE :searchName";

            $statement = $connexion->prepare($query);
            //Ajout des joker de recherche devant et derrière pour correspondre a des partie du nom
            $searchParam = "%$searchName%";
            $statement->bindParam(":searchName", $searchParam);

            $statement->execute();

            //Récupération des résultats de la recherche
            $resultats = $statement->fetchAll(PDO::FETCH_ASSOC);
            return $resultats;
            echo "Resultat de la recherche trouvée.";
        } catch (PDOException $e) {
            // gestion des exeptions PDO : affichage du message d'erreur
            echo "Erreur : " . $e->getMessage();
        }
    }
}
