
let place = 5;
let tour = 3;
let file = [2, 3, 5, 4];
let benef = 0


function profit() {

    while (tour > 0 && file.length > 0) {

        let sommeGrp = 0;
        let newTab = [];

        for (let i = 0; i < file.length; i++){

            if (sommeGrp + file[i] <= place) {
                sommeGrp += file[i];
                newTab.push(file[i]);
            }
        }

        benef += newTab.length
        file = file.filter(e => !newTab.includes(e));
        tour--;

        console.log("Groupe" + newTab);
        console.log("Benef" + newTab.length);
        console.log("ici place" + place);
        console.log("ici file" + file);
        console.log("ici groupe" + sommeGrp);
        console.log("ici tour" + tour);

    }
}
profit()






