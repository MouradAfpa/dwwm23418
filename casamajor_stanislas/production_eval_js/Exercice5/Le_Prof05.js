function comment(){
    let note = parseInt(Math.random()*20);

    if(note >= 0 && note <= 4){
        document.write(note + ` Catastrophique, il faut tout revoir`);
    } if(note > 4 && note <= 10){
        document.write(note + ` Inssufisant`);
    } if(note > 10 && note <= 14){
        document.write(note + ` Peut mieux faire`);
    } if(note > 14 && note <= 17){
        document.write(note + ` Bien`);
    }else if (note > 17){
        document.write(note + ` Excellent, bon travail`);
    }
}

comment();