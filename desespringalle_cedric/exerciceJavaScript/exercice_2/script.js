var tab = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true];


function compterMoutons(tab) {
    var resultat = tab.filter(Boolean).length;
    console.log(resultat);
}

compterMoutons(tab);


