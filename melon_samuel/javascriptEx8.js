let prix = parseInt(prompt('chiffre'));
let appreciation = prompt('entrer appreciation').toLowerCase();

function pourboire(prix, appreciation){
switch(appreciation){
    case 'terrible':
        return console.log(prix*0);
        
    
    case 'poor':
        return console.log(Math.ceil(prix*0.05));
      
    
    case 'good':
        return console.log(Math.ceil(prix*0.1));
        
    
    case 'great':
        return console.log(Math.ceil(prix*0.15));
       
    
    case 'excellent':
       return console.log(Math.ceil(prix*0.2));
    
    default :
        return console.log('service non reconnu')
}}