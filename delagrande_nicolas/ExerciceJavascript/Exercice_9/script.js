// exo9
function accum(s) {
    return [...s].map((c,k)=>c.toUpperCase()+c.toLowerCase().repeat(k)).join('-')
    }
console.log("#9 - La nouvelle accumulation est :" ,accum("abcd"));
console.log("#9 - La nouvelle accumulation est :" ,accum("RqaEzty"));
console.log("#9 - La nouvelle accumulation est :" ,accum("cwAt"));
