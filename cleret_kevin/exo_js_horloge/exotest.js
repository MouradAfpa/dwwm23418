let tab1 = [8,2,9,4,1];

 

function tpi(t){
    let n = t.length-1;  

    for (let i = 0; i<=n; i++) {
        // let x = t[i];
        let j = i;
        

        while ((j>=0) && (t[j-1] > t[j])) {
            z = t[j-1]
            t[j-1] = t[j]
            t[j] = z;
            j = j-1
        }

        // t[j] = x;
    }
}

console.log(tab1);
tpi(tab1);
console.log(tab1);