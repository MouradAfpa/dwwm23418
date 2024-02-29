function pyramide(){
    let val = parseInt(prompt("Entrez un nombre :"));
    let pyramide ="";

    for(let i=1;i<=val;i++){
        pyramide += "*";
        console.log(pyramide);
    }

    for(let i=val;i=1;i--){
        pyramide = pyramide.slice(0,-1);
        console.log(pyramide);
    }
}
// pyramide() Boucle infinie ?
