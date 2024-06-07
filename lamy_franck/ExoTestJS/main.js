const age2 = 18
const pays = "US"
const peutConduireFrance = pays === "FR" && age2 >= 18
const peutConduireUS = pays === "US" && age2 >= 16

console.log(pays);

if(peutConduireFrance || peutConduireUS){
    console.log("vous avez le droit de conduire")
} else {
    console.log("vous n'avez pas le droit de consuire")
}