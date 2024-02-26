
function convertirEnNiveauxDeGris(image) {
    
    for (let i = 0; i < image.length; i++) {
        
        for (let j = 0; j < image[i].length; j++) {
            
            let moyenne = Math.round((image[i][j][0] + image[i][j][1] + image[i][j][2]) / 3);
            
            image[i][j][0] = moyenne; //rouge
            image[i][j][1] = moyenne; //vert
            image[i][j][2] = moyenne; //bleu
        }
    }
    return image; 
}

let exempleImage = [
    [[123, 231, 12], [56, 43, 124]],
    [[78, 152, 76], [64, 132, 200]]
];

let imageEnNiveauxDeGris = convertirEnNiveauxDeGris(exempleImage);
console.log(imageEnNiveauxDeGris);
























