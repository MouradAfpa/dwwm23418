function accu(param){
    return [...param].map((c,k)=>c.toUpperCase()+c.toLowerCase().repeat(k)).join('-')
};


console.log(accu("abcd"));
console.log(accu("RqaEzty"));
console.log(accu("cwAt"));