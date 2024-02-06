function accum(chaine){

    //  return chaine.split("").map((c,i) => {return (c.toUpperCase()+c.toLowerCase().repeat(i));}).join("-");
    return chaine.replace(/./g,function(c,i){
        return c.toUpperCase()+c.toLowerCase().repeat(i) +"-";
    });
}

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwAt"));