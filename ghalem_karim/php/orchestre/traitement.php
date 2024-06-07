<?php

include 'database.php';

 $imgType = array(
    'Guitariste'=> 'guitare.jpg',
    'Trompettiste' => 'trumpet.jpg',
    'Batteur' => 'drum.jpg',
    'Chanteur' => 'singer.jpg',
    'pianniste' => 'piano.jpg',
);
// Traitement du formulaire
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST['nom'];
    $age = $_POST['age'];
    $type = $_POST['type'];
    $groupe = $_POST['groupe'];
    $bio = $_POST['bio'];
    // if(isset($_FILES['file'])){
    //     // print('essai');
    //     // var_dump($_FILES['file']);
    //     $tmpName = $_FILES['file']['tmp_name'];
    //     $name = $_FILES['file']['name'];
    //     $size=$_FILES['file'] ['size'];
    //     $error=$_FILES['file']['error'];   
    // }
    // if($name==""){
    //         $name=$imgType[$type];
    // }
    if(isset($_FILES['file']) && !empty($_FILES['file']["name"])){
        if ( is_uploaded_file( $_FILES["file"]["tmp_name"] ) && $_FILES["file"]["error"] === 0 ) {
        $tmpName = $_FILES['file']['tmp_name'];
        $name = $_FILES['file']['name'];
        $size=$_FILES['file'] ['size'];
        $error=$_FILES['file']['error'];
        var_dump($_FILES);   
    }}
    else{
        // var_dump($_FILES);
            $name=$imgType[$type];
    }


    
    // Validation et nettoyage des données
    $nom = htmlspecialchars($nom);
    $age = intval($age);
    $type = htmlspecialchars($type);
    $groupe = htmlspecialchars($groupe);
    $bio = htmlspecialchars($bio);
    
    // Insertion dans la base de données
    $db = new Database();
    // $db->insertMember($nom, $age, $type, $groupe,$bio,$imgArtPost);
    $db->insertMember($nom, $age, $type, $groupe,$bio,$name);

    
    
    // gestion des extension des images pour upload
    // on recuperere dans un tableau les different element avec pour delimiteur le '.' 
    // on a donc ici un tableau avec nom du fichier et ensuite l'extension
    $tabExtension = explode('.',$name);
    $extension=strtolower(end($tabExtension));
    // tableau des extension que l'on accepte
    $extensions = ['jpg', 'png', 'jpeg', 'gif'];
    // on gere egalement la taille du fichier 
    $maxSize=4000000000;
    // on a ensuite un controle sur cette extension 
    if(in_array($extension,$extensions)&&$size<=$maxSize){
        var_dump($_FILES);
        if ( is_uploaded_file( $_FILES["file"]["tmp_name"] ) && $_FILES["file"]["error"] === 0 ) {
        move_uploaded_file($tmpName,'../img/imgArtiste/'.$name);
    }}else{
        echo"mauvaise extension de fichier";
    }
    
    // Redirection vers la page d'accueil après l'ajout
    header("Location: index.php");
    exit();
}

?>
