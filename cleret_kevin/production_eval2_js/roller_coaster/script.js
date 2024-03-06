
function rollerCosta() {
    let tours = 3;
    let benef = 0;

    // let file = [1,2,3,5,4,1,2];
    let file = [5,2,3,4];
    let placesR = 0;
    console.log(file);

    for (i=0; i<tours; i++) {
        placesR = file[0];
        permute(file);
        
        while(placesR <= 5) {
            if ((placesR + file[0]) <= 5) {
                placesR += file[0];
                permute(file);  
            } else {
                // placesR;
                break;
            }
        }

        benef += placesR;
        console.log(`benefices : ${benef}`);
        console.log(file);
    }
}


function permute(t) {
    const x = t.shift();
    t.push(x);
}