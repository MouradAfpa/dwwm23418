// exo8
// function calculateTip(amount, rating) {
//     switch(rating.toLowerCase()){
//     case "terrible":return 0;
//     case "poor":return Math.ceil(amount * 0.05);
//     case "good":return Math.ceil(amount * 0.1);
//     case "great":return Math.ceil(amount * 0.15);
//     case "excellent":return Math.ceil(amount * 0.2);
//     default:return "Rating not recognised";
//     }
//    }
// console.log("#8 - La nouvelle chaine est :",calculateTip(20,"excellent"));
// console.log("#8 - La nouvelle chaine est :",calculateTip(26.95,"good"));
// console.log("#8 - La nouvelle chaine est :",calculateTip(20,"hi"));

// solution deuxième option
let calculateTip = (a,r) => {
    const i = ['terrible', 'poor', 'good', 'great', 'excellent'].indexOf(r.toLowerCase());
    return i === -1 ? "Rating not recognised" : Math.ceil(i*a*.05);
   }
console.log("#8 - La nouvelle chaine est :",calculateTip(20,"excellent"));
console.log("#8 - La nouvelle chaine est :",calculateTip(26.95,"good"));
console.log("#8 - La nouvelle chaine est :",calculateTip(20,"hi"));
