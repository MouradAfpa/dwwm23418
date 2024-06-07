

function afterTime(){

    let heure=parseInt(document.getElementById("heure").value);
    let minutes=parseInt(document.getElementById("minute").value);
    let seconde=parseInt(document.getElementById("seconde").value);

    seconde++;
    if(seconde==60){
        seconde=0;
        minutes++;
    }

    if(minutes==60){
        minutes=0;
        heure++;
    }

    if(heure==24){
        heure=0;
    }


    let affichage = document.getElementById("affichage");
    affichage.innerHTML = `${heure}:${minutes}:${seconde}`;

}