
const avionLigne1 = new AvionLigne('140L', 80, '12,5', '1,3t');
// console.log(avionLigne1.revision());
console.log(avionLigne1.toStr());

const furtif1 = new Furtif('110L', 4, '7,5', 25);
// console.log(furtif1.revision());
console.log(furtif1.toStr());

const jet1 = new Jet('120L', 2, '8,1', '1000km/h');
// console.log(jet1.revision());
console.log(jet1.toStr());

const helicoptère1 = new Helicopitere('100L', 8, '6,5', '5 heures');
// console.log(helicoptère1.revision());
console.log(helicoptère1.toStr());



//test
// try {
// const voiture1 = new Voiture(6, 'verte');
// }catch(e){
//     console.log('erreur')
// }

// console.log(voiture1.revision());
// console.log(voiture1.toStr());