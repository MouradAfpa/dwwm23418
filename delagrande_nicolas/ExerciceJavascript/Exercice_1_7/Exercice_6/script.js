// exo6
removeDuplicates = (nums) =>
nums.reduce((a,v)=>a.includes(v) ? a : a.concat(v),[]).sort((a,b)=>a-b)

console.log("#6 - La nouvelle chaine est :",removeDuplicates(([1,1,2,4,5,2,1,2,3,5,5,5])));
