let Tab = [8,2,9,4,1]

function Tri(T){
    n = T.length
    for(let i = n-1; i>0; i--){
        for(let j = 0; j<i; j++){
            if (T[j] > T[j+1]) {
                let z = 0;
                z = T[j];
                T[j] = T[j+1];
                T[j+1] = z;
            }            
        }
    }
}

Tri(Tab);
let afficher = document.getElementById("tableau");
afficher.innerHTML = Tab;