


function calculateTip(montant, avis){

    let str = avis.toLowerCase();

    switch(str) {
        case 'terrible': 
        return 0;    
        case 'poor':
            return Math.ceil(montant*0.05);
        case 'good':
            return Math.ceil(montant*0.10);
        case 'great':
            return Math.ceil(montant*0.15);
        case 'excellent':
            return Math.ceil(montant*0.20);
        default: return "Rating not recognised";
    }
}

console.log(calculateTip(20, "ExcellEnt"));

console.log(calculateTip(26.95, "goOd") );

console.log(calculateTip(20, "hi"));
