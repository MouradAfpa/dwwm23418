function rollerCoaster(){
    let places = 5;
    let tours = 3;
    let file =[2,3,5,4];
    let profits = 0;
    for(let i=1;i<=tours;i++){
        let placesRestante = places;
        let groupeIn = [];
        while (placesRestante){
            let groupe = file[0];
            if(groupe<= placesRestante){
                groupeIn.push(groupe);
                file.splice(0,1);
                placesRestante-=groupe;
                profits += groupe;
            } else {
                break;
            }
            // Pour fusionner les deux tableaux, sinon ne fonctionne pas, équivalent à
            // file.push("grp1","grp2",)
            file.push(...groupeIn);
        }
    }
    console.log(profits);
}
rollerCoaster()