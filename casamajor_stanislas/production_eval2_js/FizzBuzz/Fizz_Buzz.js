function somme(){
    let n = parseInt(prompt("Entrer un entier"));
    let i;
    
        for(i=0; i <n; i++){
            let str = i;
         if ((str %3 == 0) && (str%5 == 0)){
            str = "FIZZBUZZ";
        } else if(str %5 == 0){
            str = "BUZZ";
        } else if(str %3 == 0){
            str = "FIZZ";
        }else{
            str = i;
        };
    
        document.write(str + "</br>");
    }}
    somme();