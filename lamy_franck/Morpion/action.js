const board = document.getElementById('board');
let cells = [];
let currentPlayer = 'X';

// Créer le tableau
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.row = i;
        cell.dataset.col = j;
        cell.addEventListener('click', cellClick);
        board.appendChild(cell);
        cells.push(cell);
    }
}

function cellClick() {
    if (this.textContent === '') {
        this.textContent = currentPlayer;
        if (checkWinner()) {
            alert(`${currentPlayer} a gagné !`);
            resetGame();
        } else if (isBoardFull()) {
            alert("Match nul !");
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            if (currentPlayer === 'O') {
                computerMove();
            }
        }
    }
}

function computerMove() {
    const emptyCells = cells.filter(cell => cell.textContent === '');
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const randomCell = emptyCells[randomIndex];
    setTimeout(() => randomCell.click(), 500);
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // lignes
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colonnes
        [0, 4, 8], [2, 4, 6]             // diagonales
    ];

    return winningCombos.some(combo => {
        const [a, b, c] = combo;
        return cells[a].textContent !== '' &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent;
    });
}

function isBoardFull() {
    return cells.every(cell => cell.textContent !== '');
}

function resetGame() {
    cells.forEach(cell => {
        cell.textContent = '';
    });
    currentPlayer = 'X';
}
