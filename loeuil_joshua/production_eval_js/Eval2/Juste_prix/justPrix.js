function justePrix(){
    let viet = parseInt(prompt('Saisir le nbre de tentative'));
    let N = parseInt(prompt("Saisir un nombre"));
    
    const prix = parseInt(Math.random()* N);
  
let vie = viet;
    while((N < prix && N> prix) || vie >= 0){ 
        
        if(N < prix){
            alert("Plus");
            vie--;
            console.log("chiffre entrez : " + N + " vie restantes :" + vie, "prix: " +prix);
            N = parseInt(prompt("Réessaye !"));
        }else if(N > prix){
            alert("Moins");
            vie--;
            console.log("chiffre entrez : " + N + " vie restantes :" + vie, "prix: " +prix);
            if(vie == 0){
            alert("Perdu !!");
            console.log("chiffre entrez : " + N + " vie restantes :" + vie, "prix: " +prix);
            document.write("Vous avez perdu" + "</br>" + "il vous reste " + vie + " vie" +" sur " + viet + "</br>" +"Le juste prix etait : " + prix);
            break
        }else{
            N = parseInt(prompt("Réessaye !"));
        };
        }else{
            alert("Gagner");
            console.log("chiffre entrez : " + N + " vie restantes :" + vie, "prix: " +prix);
             document.write("Vous avez Gagner" + "</br>" + "il vous reste " + vie + " vie" +" sur " + viet + "</br>" +"Le juste prix etait : " + prix);
             break
        }
        
    }

}