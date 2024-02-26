
function rollerCosta() {
    let places = 5;
    let tours = 8;
    let benef = 0;
    let file = [2,3,5,4];
    let placesR = 0;

    for (i=0; i<tours; i++) {
        placesR = file[0];
        permute(file);

        while(placesR <= places) {
            if ((placesR + file[0]) <= places) {
                placesR += file[0];
                permute(file);   
            } else {
                placesR;
                break;
            }
        }

        benef = benef + placesR;
        console.log(file);
        console.log(`benefices : ${benef}`);
    }
}


function permute(t) {
    const x = t.shift();
    t.push(x);
}