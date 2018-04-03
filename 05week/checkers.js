'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class Checker {
  constructor(symbol, color) {
    if (color==='black') {
      this.symbol = 'B';
      this.color = 'black';
    } else {
      this.symbol = 'W'
      this.color = 'white';
    }
  }
}

//This board will have 64 total squares. It will be filled with 24 checkers, 12 for each player.
class Board {
  constructor() {
    this.grid = [];
    this.checkers = [];
    //This creates an 8x8 array, filled with null values.
    this.createGrid = () => {
      //This will loop to create the 8 rows.
      for (let row = 0; row < 8; row++) {
        this.grid[row] = [];
        //This will push in 8 columns of nulls--which is where we will put the pieces.
        for (let column = 0; column < 8; column++) {
          //not sure if I should leave the null or not
          this.grid[row].push(checker);
        }
      }
    }
    // This prints out the board.
    this.viewGrid = () => {
      // This adds our column numbers.
      let string = "  0 1 2 3 4 5 6 7\n";
      for (let row = 0; row < 8; row++) {
        //Here we start with our row number in our array.
        const rowOfCheckers = [row];
        // This checks for a loop within a loop.
        for (let column = 0; column < 8; column++) {
           //This will check to see if the location is "truthy" AKA it contains a checker piece.
          if (this.grid[row][column]) {
            //This will push the symbol of the check in that location into the array.
            rowOfCheckers.push(this.grid[row][column].symbol);
          } else {
              // This will push in a blank space.
              rowOfCheckers.push(' ');
          }
        }
        // This will join the rowOfCheckers array to a string, separated by a space.
        string += rowOfCheckers.join(' ');
        // add a 'new line'
        string += "\n";
      }
      console.log(string);
    }
    //Assign checkers to row/columns and prints them on the board, based upon color.
    this.createCheckers = () => {
      const blackCheckers = [
        [0, 1], [0, 3], [0, 5],[0, 7],
        [1, 0], [1, 2], [1, 4],[1, 6],
        [2, 1], [2, 3], [2, 5],[2, 7],
      ];
      //Black checkers.
      const bChecker = new Checker
      blackCheckers.forEach((piece) => {
       this.checkers.push(piece)
       this.grid[piece[0]][piece[1]] = bChecker
      })

      const whiteCheckers = [
        [5, 0], [5, 2], [5, 4],[5, 6],
        [6, 1], [6, 3], [6, 5],[6, 7],
        [7, 0], [7, 2], [7, 4],[7, 6],
      ];
      //White checkers.
      const wChecker = new Checker
      whiteCheckers.forEach((piece) => {
       this.checkers.push(piece)
       this.grid[piece[0]][piece[1]] = wChecker
      })
    //Need to print them out onto the grid.
    }
  }
}

//Starts gameplay.
class Game {
  constructor(board, turn) {
    //This populates the board.
    this.board = new Board;
    //This will start the black player's turn.
    this.turn = 'black';
    //This starts the game.
    this.start = () => {
      this.board.createGrid();
      this.board.createCheckers();
    }
    this.moveChecker = (start, end) => {
      const startRow = parseInt(start.charAt(0));
      const startColumn = parseInt(start.charAt(1));
      const endRow = parseInt(end.charAt(0));
      const endColumn = parseInt(end.charAt(1));

      if (isLegalInput() && isLegalMove() && this.board.grid[endRow][endColumn]=== null) {
        this.board.grid[endRow][endColumn] = this.board.grid[startRow][startColumn];
        this.board.grid[startRow][startColumn] = null;
        if (Math.abs(endRow - startRow) === 2) {
          let jumpedRow = endRow - startRow > 0 ? startRow + 1 : endRow + 1;
          let jumpedColumn = endColumn - startColumn > 0 ? startColumn + 1 : endColumn + 1;
          this.board.grid[jumpedRow][jumpedColumn] = null;
          this.board.checkers.pop();
        }
      }else{
        console.log('Illegal Move');
      }
    }
  }
}
//Write something that checks if it can jump anywhere on the board.
//Write something that checks if it can jump to a specific place on the board.
//Check to see if it is in bounds.
const isLegalInput = () => {
  const startIsGood = (startRow >= 0 && startRow < 8) && (startColumn >= 0 && startColumn < 8);
  const endIsGood = (endRow >= 0 && endRow < 8) && (endColumn >= 0 && endColumn < 8);
  return startIsGood && endIsGood;
}
//This checks for a legal move, then uses if statements. Only diagonal, forward, and into an open space(empty string/null) are allowed. I need to make sure that you cannot jump over your own piece, and that the piece is removed from the board once it has been jumped over.
const isLegalMove = () => {
  const goodRowValue = (Math.abs(endRow - startRow));
  const goodColumnValue = (Math.abs(endColumn - startColumn));

  if (goodRowValue === 1 && goodColumnValue === 1){
    return true;
  } else if  (goodRowValue === 2 && goodColumnValue === 2) {
    return true;
  } else{
    return false;
  }
}
function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();

// Tests

if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
      //we will start will 24 pieces, 12 for each player
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
