function pourboire(facture,avis){
    
    return /terrible/i.test(avis)?0
    :(/poor/i.test(avis)?(Math.ceil(facture*0.05))
    :(/good/i.test(avis)?(Math.ceil(facture*0.1))
    :(/great/i.test(avis)?(Math.ceil(facture*0.15))
    :(/excellent/i.test(avis)?(Math.ceil(facture*0.2))
    :"Rating not recognised"))));
    //le i devant .test pour dire de ne pas tenir compte de la casse des lettres
    // Math.ceil() arrondi à l'entier supérieur 
}
console.log(pourboire(20,"Excellent"));
console.log(pourboire(26.95,"goOd"));
console.log(pourboire(20,"hi"));


function pourboireSwitch(facture, avis) {

    switch(avis.toLowerCase()){
        case"terrible":
        return 0;
        
        case "poor" :
        return Math.ceil(facture*0.05);

        case "good" :
        return Math.ceil(facture*0.1);

        case "great" :
        return Math.ceil(facture*0.15);

        case "excellent" :
        return Math.ceil(facture*0.2);

        default : return "Rating not recognised";
    }
}
console.log(pourboireSwitch(20,"Excellent"));
console.log(pourboireSwitch(26.95,"goOd"));
console.log(pourboireSwitch(20,"hi"));