let message = prompt("Entrez votre message :");
console.log(`Ancien message ${message}`);
let cle = parseInt(prompt("Entrez la valeur de la clé de chiffrage"));

function chiffrage(message,cle){
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let nouveauMessage = "";

    for (let i=0;i<message.length;i++){
        let lettre = message[i];
        let placealphabet = alphabet.indexOf(lettre);
        if(placealphabet!== -1){
            let placeNouvelleLettre = (placealphabet + cle)%26;
            let nouvelleLettre = alphabet[placeNouvelleLettre];
            nouveauMessage += nouvelleLettre;
        }else{
            nouveauMessage += message[i];
        }
        
    }
    return nouveauMessage;
}
console.log(`Message chiffrer : ${chiffrage(message,cle)}`);