

// #8 - Pourboire (8 kyu)


function calculateTip(amount, avis) {

    const minuscule = avis.toLowerCase();

    let pourboire;
    
    switch (minuscule) {
        case "terrible":
            pourboire = 0;
            break;
        case "poor":
            pourboire = 5;
            break;
        case "good":
            pourboire = 10;
            break;
        case "great":
            pourboire = 15;
            break;
        case "excellent":
            pourboire = 20;
            break;
        default:
            return "Rating not recognised";
    }

    const valeurPourboire = Math.ceil(amount * (pourboire / 100));

    return valeurPourboire;
}

console.log(calculateTip(20, "ExcellEnt")); 
console.log(calculateTip(26.95, "goOd"));  
console.log(calculateTip(20, "hi"));      




