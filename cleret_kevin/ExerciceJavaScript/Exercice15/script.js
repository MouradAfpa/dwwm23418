
function counterEffect(txt) {
    let regex = txt.split('');
    let tab = [];
    let tabReponse = new Array();

    for (let i=0; i<regex.length ; i++) {
        tabReponse[i] = new Array();
    }
    
    for (let k=0; k<tabReponse.length; k++) {
        for (let j=0; j<=regex[k] ; j++) {
            tabReponse[k][j] = j;
        }
    }

    return tabReponse;
}


console.log(counterEffect('12458'))




