<?php





function assurance(age, permis, acc, fidel){
    
    let malus = acc;
    let mess = "";
    
    if(age<25){
        malus++;
    }
    if(permis<2){
        malus++
    }
    if(fidel>5){
        malus--;
    }
    
    switch(malus){
    case -1:mess="BLEU";
    break;
    case 0:mess="VERT";
    break;
    case 1:mess="ORANGE";
    break;
    case 2:mess="ROUGE";
    break;
    default:mess="refuse";
}   
}

?>
