

function fizzBuzz() {

    let N = parseInt(prompt('Entrer une nombre'))
    let somme = [];
    for (let i = 1; i <= N; i++) {
        if (((i % 5) == 0 && (i % 3) == 0)){
            somme.push("FIZZBUZZ")
        }else if (i % 3 == 0) {
            somme.push("FIZZ");
        }else if (i % 5 == 0){
            somme.push("BUZZ")
        }else 
            somme.push(i)
        }
        console.log(`${somme}`)
    }

fizzBuzz()



