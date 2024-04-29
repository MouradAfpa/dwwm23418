var tab = [1,1,2,4,5,2,1,2,3,5,5,5];

function supprimerDoublons(tab) {
    var suppr = tab.reduce((a,v)=>a.includes(v) ? a : a.concat(v),[]).sort((a,b)=>a-b);
    console.log(suppr);
}

supprimerDoublons(tab);


