function findShortest(mot){
    let arr = mot.split(" ")
   
    return arr.reduce((shortest, current) => {
        
        if (current.length < shortest.length || (current.length === shortest.length))
        return current;
    else {
        return shortest;
    }
    })
}

console.log(findShortest("bitcoin take over the world maybe who knows perhaps"));