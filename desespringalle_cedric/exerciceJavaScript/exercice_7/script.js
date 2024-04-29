function whoseMove(lastPlayer, win) {
    let whoseMove = win ? lastPlayer : lastPlayer == "white" ? "black" : "white";
    console.log(whoseMove);
}

whoseMove("black", false);
whoseMove("white", true);
whoseMove("white", false);
