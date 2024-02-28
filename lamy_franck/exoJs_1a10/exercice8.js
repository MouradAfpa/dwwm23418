function calculateTip(totalAmount, avis) {
    // Je convertis l'avis sur le service en minuscules pour rendre la comparaison insensible à la casse
   let notation = avis.toLowerCase();

    // Je déterminer le pourcentage de pourboire en fonction de l'avis sur le service
    let tipPercentage;
    switch (notation) {
        case "terrible":
            tipPercentage = 0;
            break;
        case "poor":
            tipPercentage = 5;
            break;
        case "good":
            tipPercentage = 10;
            break;
        case "great":
            tipPercentage = 15;
            break;
        case "excellent":
            tipPercentage = 20;
            break;
        default:
            return "Rating not recognised";
    }

    const tipAmount = Math.ceil((tipPercentage / 100) * totalAmount);

    return tipAmount;
}

// Dans l'exercice:
console.log(calculateTip(20, "ExcellEnt"));
console.log(calculateTip(26.95, "goOd"));
console.log(calculateTip(20, "hi"));
