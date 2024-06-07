//const read = require("readline-sync")

const fizzBuzz = (nombre) => {
    for(let index = 0; index <= nombre; index++) {
        console.log(index%15 === 0?"FIZZBUZZ":index%5 === 0?"BUZZ":index%3 === 0?"FIZZ":index)
    }
}

fizzBuzz(prompt("Entrez un nombre : "))