function accu(param){
    return [...param].map((lettre,index)=>lettre.toUpperCase()+lettre.toLowerCase().repeat(index)).join('-')
};


console.log(accu("abcd"));
console.log(accu("RqaEzty"));
console.log(accu("cwAt"));