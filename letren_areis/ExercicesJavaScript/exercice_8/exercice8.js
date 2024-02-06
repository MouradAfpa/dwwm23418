function calculerPourboire(total, avis) {

    const avisEnMinuscules = avis.toLowerCase();
    
    let pourcentagePourboire;
    switch(avisEnMinuscules) {
        case "terrible":
            pourcentagePourboire = 0;
            break;
        case "médiocre":
            pourcentagePourboire = 0.05;
            break;
        case "bon":
            pourcentagePourboire = 0.1;
            break;
        case "excellent":
            pourcentagePourboire = 0.15;
            break;
        case "exceptionnel":
            pourcentagePourboire = 0.2;
            break;
        default:
            return "Avis non reconnu";
    }
    

    const montantPourboire = Math.ceil(total * pourcentagePourboire);
    
    return montantPourboire;
}
console.log(calculerPourboire(20, "Excellent")); 
console.log(calculerPourboire(26.95, "Bon"));
console.log(calculerPourboire(20, "hi"));
