

function imposable(){
    let age = parseInt(document.getElementById("age").value);
    let type = document.getElementById("type").value;
    let affichage = document.getElementById("reponse");

    let casHomme = (type=='H') && (age>20);
    let casFemme =(type=='F') && (age>=18 && age<=35);

    affichage.innerHTML = "non imposable";

    if(casHomme || casFemme){
        affichage.innerHTML = "imposable";
    } 

}