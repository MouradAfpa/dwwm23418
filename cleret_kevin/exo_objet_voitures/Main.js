
const utiitaire1 = new Utilitaire(2, 'rouge', 'ptac truc');
console.log(utiitaire1.revisionUtilitaire());
console.log(utiitaire1.toStrUtilitaire());

const citadine1 = new Citadine(4, 'bleue', '3,5');
console.log(citadine1.revisionCitadine());
console.log(citadine1.toStrCitadine());

const familiale1 = new Familiale(6, 'verte', '4,1');
console.log(familiale1.revisionFamiliale());
console.log(familiale1.toStrFamiliale());

//test
try {
const voiture1 = new Voiture(6, 'verte');
}catch(e){
    console.log('erreur')
}

console.log(voiture1.revision());
console.log(voiture1.toStr());