function fizzbuzz(){
    let nombre = parseInt(prompt("Entrez un nombre entier :"));
    for(let i=1;i <= nombre; i++){
        if(i%3==0 && i%5==0){
            console.log("FIZZBUZZ");
        }else if(i%3==0){
            console.log("FIZZ");
        }else if(i%5==0){
            console.log("BUZZ");
        }else{
            console.log(i);
        }
    }
}
fizzbuzz()