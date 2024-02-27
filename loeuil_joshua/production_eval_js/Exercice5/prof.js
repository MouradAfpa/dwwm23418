function prof(){
    let Notes = parseInt(Math.random()*20)

    if(Notes <=4){
        document.write(Notes + " Catastrophique, il faut tout revoir")
    }else if (Notes>4 && Notes<=10){
        document.write(Notes + " Insuffisant")
    }else if (Notes>10 && Notes<=14){
        document.write(Notes + " Peut mieux faire")
    }else if (Notes>14 && Notes<=17){
        document.write(Notes + " Bien")
    }else {
        document.write(Notes + " Excellent, bon travail")
    }
}