function fizzbuzz(){

   const N = parseInt(prompt("Saisir un nombre"));
   let mult;

   let fi = "FIZZ";
    let bu= "BUZZ";
    let fibu ="FIZZBUZZ";

   for(let i = 0; i < N; i++){
    if(i % 3 == 0){
        mult = fi
    }else if(i % 5 == 0){
        mult = bu
    }else if(i % 3 == 0 && i % 5 == 0){
        mult=fibu
    }else{
        mult = i;
    };
    document.write(mult + "<br/>")
   }
}