

// #6 - Supprimer les doublons (8 kyu)


function removeDuplicate() {
    return tab.filter((v,i,t) => t.indexOf(v) === i).sort((a, b)=> a - b);
};

