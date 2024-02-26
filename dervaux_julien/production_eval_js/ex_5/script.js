
function prof() {

    let note = [2, 6, 9, 10, 20]

    note.forEach((e) => {
        if (e < 4) {
            console.log(`Catastrophique, il faut tout revoir`)
        } else if (e < 11) {
            console.log(`Insuffisant`)
        } else if (e < 15) {
            console.log(`Peut mieux faire`)
        }
        else if (e < 18) {
            console.log(`Bien`)
}
        else {console.log(`Excellent, bon travail`)}
    })
}

prof()
