<?php 

echo'page list personne <br>';
session_start();
// echo $_SESSION['family'];
$test = $_SESSION['family'];
// var_dump($test);
echo("<table border 1px>");
echo("<tr><th>Family</th><th>Pere</th><th>Mere</th><th>Enfant</th></tr>");
foreach ($test as $keys=>$valeur){
    echo("<tr><td>".$keys."</td>");
foreach ($valeur as $resulat ){
    echo("<td>".$resulat ."</td>");
}
echo("</tr>");
}
echo("</table>")
// print_r(array_keys($test));

// foreach($family as $key=>$value){
//     echo"<tr><td>".$key.'<td>';
//     foreach($value as $v){
//         echo"<td>".$v."<td>";
//     }
//     echo'</tr>';
// }


?>