function calculerProfits(places, tours, file) {
    let profits = 0;

    for (let i = 0; i < tours; i++) {
        let placesRestantes = places; 

        for (let j = 0; j < file.length; j++) {
            if (file[j] <= placesRestantes) {
                console.log("Places restantes :", placesRestantes);
                profits += file[j] 
                placesRestantes -= file[j];
            } else {
                break;
            }
        }
    }
    return profits;
}

// let places = parseInt(prompt("Entrez le nombre de places assises :"));
// let tours = parseInt(prompt("Entrez le nombre de tours que le manège peut effectuer :"));
// let file = prompt("Entrez la file d'attente, séparée par des virgules :").split(',').map(Number);

const places = 5;
const tours = 3;
const file = [2, 3, 5, 4];

const profits = calculerProfits(places, tours, file);
console.log("Les profits d'aujourd'hui sont : ", profits + "€");

