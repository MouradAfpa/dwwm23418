function calculateTip(totalAmount, serviceRating) {
        const ratingLowerCase = serviceRating.toLowerCase();
    
        let tipPercentage;
        switch (ratingLowerCase) {
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
    
    console.log(calculateTip(20, "ExcellEnt"));
    console.log(calculateTip(26.95, "goOd"));   
    console.log(calculateTip(20, "hi"));      