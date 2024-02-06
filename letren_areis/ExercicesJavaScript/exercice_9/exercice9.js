function accum(z) {
    return z.split('').map((act, i) => act.toUpperCase() + act.toLowerCase().repeat(i)).join('-');
}


console.log(accum("abcd"));  //A-Bb-Ccc-Dddd  
console.log(accum("RqaEzty")); 
console.log(accum("cwAt"));