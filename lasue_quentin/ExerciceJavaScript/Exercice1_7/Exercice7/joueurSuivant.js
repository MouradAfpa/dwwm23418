function joueurSuivant(joueur,win){
    return (win && /black/.test(joueur))?joueur:"white";

    // return win?joueur:(joueur =="black"?"white":"black");
}

console.log(joueurSuivant("black",true));
console.log(joueurSuivant("black",false));