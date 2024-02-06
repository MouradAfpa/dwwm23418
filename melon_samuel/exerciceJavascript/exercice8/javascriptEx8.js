let prix = parseInt(prompt('chiffre'));
let appreciation = prompt('entrer appreciation').toLowerCase();

switch(appreciation){
    case 'terrible':
        console.log(prix*0);
        break;
    
    case 'poor':
        console.log(Math.ceil(prix*0.05));
        break;
    
    case 'good':
        console.log(Math.ceil(prix*0.1));
        break;
    
    case 'great':
        console.log(Math.ceil(prix*0.15));
        break;
    
    case 'excellent':
        console.log(Math.ceil(prix*0.2));
    
    default :
    console.log('service non reconnu')
}