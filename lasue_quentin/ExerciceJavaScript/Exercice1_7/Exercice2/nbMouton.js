function compteMouton(){
    let prairi = [true, true, true, false,
                true, true, true, true ,
                true, false, true, false,
                true, false, false, true ,
                true, true, true, true ,
                false, false, true, true];
    
    let mouton = prairi.filter(Boolean).length; // verifie si le booléen est vrais uniquement 
    console.log(mouton);
    
}
compteMouton()

