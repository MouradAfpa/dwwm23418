function profFlemmard(){
    let note =parseInt(prompt("Entrez la note :"));
    let commentaire ="Excellent, bon travail.";

    if(note <0 || note >20){
        commentaire = "Note non conforme.";
    }else if(note<5){
        commentaire = "Catastrophique, il faut tout revoir.";
    }else if(note <11){
        commentaire = "Insuffisant.";
    }else if(note <15){
        commentaire = "Peut mieux faire.";
    }else if(note <18){
        commentaire = "Bien.";
    }
    console.log(`${commentaire}`)
}
profFlemmard()