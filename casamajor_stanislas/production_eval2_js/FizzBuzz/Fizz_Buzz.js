function somme(){
    let n = parseInt(prompt("Entrer un entier"));
    let str;
    let i;
    
        for(i=0; i <n; i++){
         if (i %3 == 0){
            str = "FIZZ";
        } else if(i %5 == 0){
            str = "BUZZ";
        } else if((i %3 == 0) && (i%5 == 0)){
            str = "FIZZBUZZ";
        }else{
            str = i;
        };
    
        document.write(str + "</br>");
    }}
    somme();