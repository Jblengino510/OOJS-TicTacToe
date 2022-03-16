class TicTacToe {
    constructor(playerOne = 'X', playerTwo = 'O', board = [0,1,2,3,4,5,6,7,8]) {
        this.playerOne = playerOne
        this.playerTwo = playerTwo
        this.board = board
    }

    get winningCombinations() {
        return [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 4, 8],
            [2, 4, 6],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5 ,8],
        ]
    }
}

let game1 = new TicTacToe()
console.log('GAME STARTED')
console.log(game1.board)
console.log(game1.winningCombinations)