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

    get displayBoard() {
        console.log(`${this.board[0]} | ${this.board[1]} | ${this.board[2]}`)
        console.log('----------')
        console.log(`${this.board[3]} | ${this.board[4]} | ${this.board[5]}`)
        console.log('----------')
        console.log(`${this.board[6]} | ${this.board[7]} | ${this.board[8]}`)
    }

    move(index, player) {
        return this.board[index] = player
    }

    
}

let game = new TicTacToe()
console.log('GAME STARTED')
console.log(game.displayBoard)
console.log(game.winningCombinations)
game.move(0, game.playerOne)
game.move(1, game.playerTwo)
console.log(game.displayBoard)