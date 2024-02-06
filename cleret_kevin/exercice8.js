let prix = parseInt(prompt("Veuillez entrez un nombre"));
let avis = prompt("entrez un avis");

switch(avis) {
    case 'terrible': 
    alert(prix*0);
    break;

    case 'poor':
        alert(prix*0.05);
        break;
    
    case 'good':
        alert(prix*0.1);
        break;
    
    case 'great':
        alert(prix*0.15);
        break;
    
    case 'excellent':
        alert(prix*0.2);
}