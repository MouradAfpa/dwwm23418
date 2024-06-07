<!-- <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Script</title>
</head>

<body> -->
<!-- balise php ouvrante  -->
<!-- $host = "localhost";
$db = "troupe";
$connection = new PDO("mysql:host=$host; dbname=$db", "root", "");
$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$query = "SELECT * FROM musiciens";
$statement = $connection->prepare($query);
$statement->execute();
$troupe = $statement->fetchAll(PDO::FETCH_ASSOC); -->
<!-- balise php fermante -->

    <script>
        // let id;
        // for (let i = 1; i <= 
        // balise php ouvrante 
        // echo json_encode($troupe); 
        // ?>
        // .length; i++) {
        //     id = i;
        //     console.log(id);
     // balise php ouvrante 
        //     $id;
        //     foreach ($troupe as $musiciens) {
        //         $id = $musiciens["id"];
        //     }
        //     ?>
        // 
        function showForm(id) {
                let idCible='div'+id;
                let idform='form'+id;
                console.log(idCible);
                const modif = document.querySelector("button");
                const card = document.getElementById(idCible);
                const formModifDiv = document.createElement("div");
                const formActiv = document.getElementById(idform);
                console.log(formActiv); 
                // formModifDiv.setAttribute('id',idform)
                // 
                // if (formModifDiv.classList.contains("open")) {
                //     formModifDiv.innerHTML = "";
                //     formModifDiv.classList.remove("open");
                if(formActiv){
                    formActiv.parentNode.removeChild(formActiv)
                    // formActiv.classList.remove("open");
                } else {
                    formModifDiv.classList.add("open");
                    // 
                    let formModif = document.createElement("form");
                    formModif.setAttribute("method", "post");
                    formModif.setAttribute("id", idform);
                    // 
                    let formModifLabelName = document.createElement("label");
                    formModifLabelName.textContent = "Nom: ";
                    formModifLabelName.setAttribute("for", "nameM");
                    // 
                    let formModifInputName = document.createElement("input");
                    formModifInputName.setAttribute("type", "text");
                    formModifInputName.setAttribute("name", "nameM");
                    // 
                    let formModifLabelAge = document.createElement("label");
                    formModifLabelAge.textContent = "Age: ";
                    formModifLabelAge.setAttribute("for", "ageM");
                    // 
                    let formModifInputAge = document.createElement("input");
                    formModifInputAge.setAttribute("type", "text");
                    formModifInputAge.setAttribute("name", "ageM");
                    // 
                    let formModifLabelMusic = document.createElement("label");
                    formModifLabelMusic.textContent = "Type de musique: ";
                    formModifLabelMusic.setAttribute("for", "music-typeM");
                    //
                    let formModifSelectMusic = document.createElement("select");
                    formModifSelectMusic.setAttribute("name", "music-typeM");
                    //         
                    let formOptionMusic1 = document.createElement("option");
                    formOptionMusic1.textContent = "Chanteur";
                    formOptionMusic1.setAttribute("value", "chanteur");
                    let formOptionMusic2 = document.createElement("option");
                    formOptionMusic2.textContent = "Guitariste";
                    formOptionMusic2.setAttribute("value", "Guitariste");
                    let formOptionMusic3 = document.createElement("option");
                    formOptionMusic3.textContent = "Batteur";
                    formOptionMusic3.setAttribute("value", "Batteur");
                    let formOptionMusic4 = document.createElement("option");
                    formOptionMusic4.textContent = "Trompettiste";
                    formOptionMusic4.setAttribute("value", "Trompettiste");
                    // 
                    let formModifLabelVoice = document.createElement("label");
                    formModifLabelVoice.textContent = "Voix: ";
                    // 
                    let formModifSelectVoice = document.createElement("select");
                    formModifSelectVoice.setAttribute("name", "voiceM");
                    // 
                    let formModifOptionVoice1 = document.createElement("option");
                    formModifOptionVoice1.textContent = "Aucune";
                    formModifOptionVoice1.setAttribute("value", "aucune");
                    let formModifOptionVoice2 = document.createElement("option");
                    formModifOptionVoice2.textContent = "Sopano";
                    formModifOptionVoice2.setAttribute("value", "Sopano");
                    let formModifOptionVoice3 = document.createElement("option");
                    formModifOptionVoice3.textContent = "Mezzo-soprano";
                    formModifOptionVoice3.setAttribute("value", "Mezzo-soprano");
                    let formModifOptionVoice4 = document.createElement("option");
                    formModifOptionVoice4.textContent = "Contrealto";
                    formModifOptionVoice4.setAttribute("value", "Contrealto");
                    let formModifOptionVoice5 = document.createElement("option");
                    formModifOptionVoice5.textContent = "Contre-tenor";
                    formModifOptionVoice5.setAttribute("value", "Contre-tenor");
                    let formModifOptionVoice6 = document.createElement("option");
                    formModifOptionVoice6.textContent = "Tenor";
                    formModifOptionVoice6.setAttribute("value", "Tenor");
                    let formModifOptionVoice7 = document.createElement("option");
                    formModifOptionVoice7.textContent = "Baryton";
                    formModifOptionVoice7.setAttribute("value", "Baryton");
                    let formModifOptionVoice8 = document.createElement("option");
                    formModifOptionVoice8.textContent = "Basse";
                    formModifOptionVoice8.setAttribute("value", "Basse");
                    // 
                    card.appendChild(formModifDiv);
                    // 
                    formModifDiv.appendChild(formModif);
                    // 
                    formModif.appendChild(formModifLabelName);
                    formModif.appendChild(formModifInputName);
                    formModif.appendChild(formModifLabelAge);
                    formModif.appendChild(formModifInputAge);
                    formModif.appendChild(formModifLabelMusic);
                    formModif.appendChild(formModifSelectMusic);
                    formModif.appendChild(formModifLabelVoice);
                    formModif.appendChild(formModifSelectVoice);
                    // 
                    formModifSelectMusic.appendChild(formOptionMusic1);
                    formModifSelectMusic.appendChild(formOptionMusic2);
                    formModifSelectMusic.appendChild(formOptionMusic3);
                    formModifSelectMusic.appendChild(formOptionMusic4);
                    // 
                    formModifSelectVoice.appendChild(formModifOptionVoice1);
                    formModifSelectVoice.appendChild(formModifOptionVoice2);
                    formModifSelectVoice.appendChild(formModifOptionVoice3);
                    formModifSelectVoice.appendChild(formModifOptionVoice4);
                    formModifSelectVoice.appendChild(formModifOptionVoice5);
                    formModifSelectVoice.appendChild(formModifOptionVoice6);
                    formModifSelectVoice.appendChild(formModifOptionVoice7);
                    formModifSelectVoice.appendChild(formModifOptionVoice8);
                }
            }
        // }
    </script>
<!-- </body>

</html> -->