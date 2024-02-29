function escalier(){
    let val = parseInt(prompt("Entrez un nombre :"));
    let escalier ="";
    for(let i=1;i<=val;i++){
        escalier += "*";
        console.log(escalier);
    }
}
escalier()