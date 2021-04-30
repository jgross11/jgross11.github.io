let BOARD_WIDTH = 8;
let BOARD_HEIGHT = 8;

let PIECE_WHITE = 0;
let PIECE_BLACK = 1;

let PAWN_PIECE = 0;
let KNIGHT_PIECE = 1;
let ROOK_PIECE = 2;
let BISHOP_PIECE = 3;
let QUEEN_PIECE = 4;
let KING_PIECE = 5;

let notationStrings = ["", "N", "R", "B", "Q", "K"];

let pieceNames = ["pawn", "knight", "rook", "bishop", "queen", "king"];

class Game{
    constructor(){
        
        // create board array
        this.board = new Array(BOARD_WIDTH);
        for(let i = 0; i < BOARD_WIDTH; i++){
            this.board[i] = new Array(BOARD_HEIGHT);
            for(let j = 0; j < BOARD_HEIGHT; j++){
                this.board[i][j] = null;
            }
        }

        this.populateBoard();

        // init player names
        this.playerOne = "set";
        this.playerTwo = "this";

        // init moves list
        this.moves = [];

        // init turn
        this.turn = PIECE_WHITE;

        // init turn number
        this.turnNumber = 1;
    }

    populateBoard(){
        for(let i = 0; i < BOARD_WIDTH; i++){
            this.board[i][1] = {color: PIECE_WHITE, type: PAWN_PIECE};
            this.board[i][6] = {color: PIECE_BLACK, type: PAWN_PIECE};
        }
        this.board[0][0] = {color: PIECE_WHITE, type: ROOK_PIECE};
        this.board[7][0] = {color: PIECE_WHITE, type: ROOK_PIECE};
        this.board[0][7] = {color: PIECE_BLACK, type: ROOK_PIECE};
        this.board[7][7] = {color: PIECE_BLACK, type: ROOK_PIECE};

        this.board[1][0] = {color: PIECE_WHITE, type: KNIGHT_PIECE};
        this.board[6][0] = {color: PIECE_WHITE, type: KNIGHT_PIECE};
        this.board[1][7] = {color: PIECE_BLACK, type: KNIGHT_PIECE};
        this.board[6][7] = {color: PIECE_BLACK, type: KNIGHT_PIECE};

        this.board[2][0] = {color: PIECE_WHITE, type: BISHOP_PIECE};
        this.board[5][0] = {color: PIECE_WHITE, type: BISHOP_PIECE};
        this.board[2][7] = {color: PIECE_BLACK, type: BISHOP_PIECE};
        this.board[5][7] = {color: PIECE_BLACK, type: BISHOP_PIECE};

        this.board[3][0] = {color: PIECE_WHITE, type: QUEEN_PIECE};
        this.board[4][0] = {color: PIECE_WHITE, type: KING_PIECE};
        this.board[3][7] = {color: PIECE_BLACK, type: QUEEN_PIECE};
        this.board[4][7] = {color: PIECE_BLACK, type: KING_PIECE};
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
        this.movedOnce = false;
    }
    canMoveTo(xDif, yDif){
        if(xDif == 1 || xDif == -1)
        if(this.movedOnce){
            
        }
    }
}