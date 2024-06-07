function calcule(){
    let nbrCopie = parseInt(document.getElementById("copie").value);

let res = 0;


if(nbrCopie<=10){
    res = nbrCopie * 0.1;
} else if(nbrCopie<=30){
    res = 1 + (nbrCopie-10)*0.09;
} else {
    res = 2.80 + (nbrCopie-30)*0.08;
}

document.getElementById("total").innerHTML = res;





}