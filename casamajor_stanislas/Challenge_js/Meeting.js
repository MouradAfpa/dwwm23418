function compter(list){
    let count = {végétarien : 0, standard : 0, vegan : 0}
    for (let typeRepas of list){
        let menu = typeRepas.Repas
        if(menu === 'végétarien' || menu === 'standard' || menu === 'vegan'){
            count[menu]++;
        }
    } return count;
}
let list1 = [
    {FirstName: 'Noah', lastName: 'M.', pays: 'Suisse', continent: 'Europe', age: 19, langue: 'C',
    Repas: 'végétarien'},
    {FirstName: 'Anna', lastName: 'R.', pays: 'Liechtenstein', continent: 'Europe', age: 52, langue: 
   'JavaScript',
    Repas: 'standard'},
    {FirstName: 'Ramona', lastName: 'R.', pays: 'Paraguay', continent: 'Amériques', age: 29, langue: 'Ruby',
    Repas: 'vegan'},
    {FirstName: 'George', lastName: 'B.', pays: 'Angleterre', continent: 'Europe', age: 81, langue: 'C',
    Repas: 'végétarien'},
   ];
   
console.log(compter(list1));