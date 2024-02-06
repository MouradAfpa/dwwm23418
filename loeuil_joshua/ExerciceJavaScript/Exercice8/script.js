let TIPS = {"terrible":0.0, "poor":0.05, "good":0.1, "great":0.15,"excellent":0.2};

function calculateTip (montant, service){
    service = service.toLowerCase();

    return service in TIPS ? Math.ceil(TIPS[service]*montant) : "Service non reconnue";

};

console.log(calculateTip(20, "ExcellEnt"));
console.log(calculateTip(26.95, "goOd") );
console.log(calculateTip(20, "hi") );