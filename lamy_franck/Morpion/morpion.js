const cells = document.querySelectorAll('[data-cell]');
const GameStatut = document.getElementById('gameStatut');
const endGameStatut = document.getElementById('endGameStatut');
const playerOne = 'X';
const playerTwo = 'O';
let playerTurn = playerOne;
const combiGagnante = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

cells.forEach(cell => {
    cell.addEventListener('click', playGame, { once: true });
});

function playGame(e) {
    if (e.target.innerHTML === '') { // Vérifier si la cellule est vide avant de jouer
        e.target.innerHTML = playerTurn;
        if (checkWin(playerTurn)) {
            textStatut("Gagnant " + playerTurn);
            endGame(); // Mettre fin au jeu si un joueur a gagné
            return;
        } else if (checkEgalite()) {
            textStatut("Égalité");
            endGame(); // Mettre fin au jeu en cas d'égalité
            return;
        }

        playerTurn = (playerTurn === playerOne) ? playerTwo : playerOne;

        if (playerTurn === playerTwo) {
            setTimeout(playComputerMove, 700);
        }
    }
}

function playComputerMove() {
    const randomIndex = Math.floor(Math.random() * 9);
    const computerCell = cells[randomIndex];

    if (computerCell.innerHTML === '') {
        computerCell.innerHTML = playerTwo;
    } else {
        playComputerMove();
    }

    playerTurn = playerOne;
}

function textStatut(playerTurn) {
    let statutText = "";
    switch (playerTurn) {
        case 'X':
            statutText = "À votre tour (X)";
            break;
        case 'O':
            statutText = "À mon tour (O)";
            break;
        case 'Gagnant X':
            statutText = "Bravo ! Vous avez gagné";
            break;
        case 'Gagnant O':
            statutText = "Perdu ! Dommage pour vous ! J'ai gagné";
            break;
        case 'Égalité':
            statutText = "Match nul";
            break;
    }

    GameStatut.innerHTML = statutText;
    endGameStatut.innerHTML = statutText;
}

function checkWin(playerTurn) {
    return combiGagnante.some(combination => {
        return combination.every(index => {
            return cells[index].innerHTML === playerTurn;
        });
    });
}

function checkEgalite() {
    return [...cells].every(cell => {
        return cell.innerHTML == playerOne || cell.innerHTML == playerTwo;
    });
}

function endGame() {
    document.getElementById('gameEnd').style.display = "flex";
}

function reloadGame() {
    window.location.reload();
}


