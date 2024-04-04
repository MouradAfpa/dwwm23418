function temperature(){
  
    let tab = [12,25,5,7,6,-5];

    let proche = tab[0];
    let distanceZero = Math.abs(tab[0]);

    for(let i = 1; i < tab.length; i++){
        let distance = Math.abs(tab[i]); 
        if((distance < distanceZero) || ((distance === distanceZero) && (tab[i]<0))){
            proche = tab[i];
            distanceZero = distance;
        }
    }
    console.log(`La température la plus proche de 0°C est ${proche}.`)
}
temperature()
