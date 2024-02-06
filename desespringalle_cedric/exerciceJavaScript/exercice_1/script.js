var tab = [[10, 0], [3, 5], [5, 8]];

function arretBus (tab) {
    var totalPersonnes = 0;
    for (var i = 0; i < tab.length; i++) {
        totalPersonnes += tab[i][0] - tab[i][1];
    }
    console.log(totalPersonnes);
}

arretBus(tab);


