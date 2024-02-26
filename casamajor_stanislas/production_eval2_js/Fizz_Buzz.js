function somme(){
    let n = parseInt(prompt("Entrer un entier"));
    let cumul = 0;
    let str = '';
    let i;
    
        for(i=1; i <=n; i++){
            cumul += i ;
            str += i;
        } if (cumul %3 == 0){
            cumul = "FIZZ";
        } if(cumul %5 == 0){
            cumul == "BUZZ";
        } if(cumul %3 == 0 && cumul%5 == 0){
            cumul = "FIZZBUZZ";
        }
    
        document.write(str + "+" + cumul);
    }
    somme();