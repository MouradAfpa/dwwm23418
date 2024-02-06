// exo7
function whoseMove(lastPlayer, win) {
    return win?lastPlayer:lastPlayer=="white"?"black":"white"
   }
console.log("#7 - La nouvelle chaine est :",whoseMove("black",false));
