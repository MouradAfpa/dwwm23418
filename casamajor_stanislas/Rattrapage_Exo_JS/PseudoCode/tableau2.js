let Tab = [8,2,9,4,1]


function Tri_insertion(t){

    let x;
    let j;
    let n = t.length;

    for(let i = 1; i<n; i++){
        
        x = t[i];
        j = i;

        while ((j>0) && (t[j-1] > x)){
            t[j] = t[j-1];
            j = j-1;

        }       t[j] = x;
       
        
}

return t;

}

console.log(Tab);
console.log(Tri_insertion(Tab))

