let lesCons = ["Karim", "Julien", "Cédric", "Quentin", "Thomas"];

function boucleWhile(tab) {
    let i = 0;

    while (i<=tab.length-1) {
        tab[i] = tab[i] + "s";
        i++;
    }

    return console.log(tab)
}

function boucleFor(tab) {
    for (let i=0; i<tab.length-1; i++) {
        tab[i] = tab[i] + "s";
    }

    return console.log(tab)
}

function boucleDo(tab) {
    let i = 0;

    do {
        tab[i] = tab[i] + "s";
        i++;
    } while (i<=tab.length-1)

    return console.log(tab)
}

function boucleForIn(tab) {
    for (const nom in tab) {
        tab[nom] = tab[nom] + "s"
      }

    return console.log(tab)  
}

function boucleForOf(tab) {
    let newTab = []

    for (let nom of tab) {
        newTab.push( nom + "s")
      }
      
    return console.log(newTab)  
}


console.log(lesCons);
boucleWhile(lesCons);
boucleFor(lesCons);
boucleDo(lesCons);
boucleForIn(lesCons);
boucleForOf(lesCons);