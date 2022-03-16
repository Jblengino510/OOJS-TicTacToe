class TicTacToe {
    constructor(playerOne = 'X', playerTwo = 'O', board = [0,1,2,3,4,5,6,7,8]) {
        this.playerOne = playerOne
        this.playerTwo = playerTwo
        this.board = board
    }

    
}

let game1 = new TicTacToe()
console.log('GAME STARTED')
console.log(game1)