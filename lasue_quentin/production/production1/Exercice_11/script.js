function monnaie(){
    let nbrDec =parseFloat(prompt("Saisir un nombre decimal :"));

    let argents = [500,200,100,50,20,10,5,2,1,0.5,0.2,0.1,0.05,0.02,0.01];

    console.log(`Pour ${nbrDec} :`);
    for(let argent of argents) {
        let nbrArgent = Math.floor(nbrDec/argent);
        if (nbrArgent!==0){
            if(argent >=5){
                console.log(`Billet de ${argent}€ : ${nbrArgent}`);
            }else{
                console.log(`Pièce de ${argent}€ : ${nbrArgent}`);
            }
        }
        nbrDec = nbrDec - (nbrArgent*argent)
    }
}
monnaie()