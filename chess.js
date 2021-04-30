let BOARD_WIDTH = 8;
let BOARD_HEIGHT = 8;
let WHITE = 0;
let BLACK = 1;

let pieceIndices = {
    PAWN: 0,
    KNIGHT: 1,
    ROOK: 2,
    BISHOP: 3, 
    QUEEN: 4,
    KING: 5
}

console.log(pieceIndices);

let pieceNames = {
    PAWN: "pawn",
    KNIGHT: "knight",
    ROOK: "rook",
    BISHOP: "bishop", 
    QUEEN: "queen",
    KING: "king"
}

class Game{
    constructor(){
        
        // create board array
        this.board = new Array(BOARD_WIDTH);
        for(let i = 0; i < BOARD_WIDTH; i++){
            this.board[i] = new Array(BOARD_HEIGHT);
            for(let j = 0; j < BOARD_HEIGHT; j++){
                this.board[i][j] = [0, 0];
            }
        }

        this.pieces = [new Array(16), new Array(16)];

        // init player names
        this.playerOne = "set";
        this.playerTwo = "this";

        // init moves list
        this.moves = [];

        // init turn
        this.turn = WHITE;

        // init turn number
        this.turnNumber = 1;


    }
}

class Piece{
    constructor(color){
        if(this.constructor == Piece) throw new Error("Cannot instantiate abstract class");
        this.notationString = "override in sub please";
        this.name = "override in sub please";
        this.color = color;
    }
    canMoveTo(board, currentX, currentY, moveToX, moveToY){
        throw new Error("Must implement this in subclasses");
    }
}

class Pawn extends Piece{
    constructor(color){
        super(color);
        this.notationString = "";
        this.name = "pawn";
    }
    canMoveTo(board, currentX, currentY, moveToX, moveToY){
        return true;
    }
}