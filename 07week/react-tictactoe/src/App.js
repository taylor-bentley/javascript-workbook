import React, { Component } from 'react';
import './App.css';
import Announcement from './Announcement';
import Tile from './Tile';
import ResetButton from './ResetButton';

class App extends Component {
  constructor() {
    super();
    this.state = {
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      turn: 'X',
      winner: null
    }
  }

  updateBoard(loc, player) {
    if(this.state.gameBoard[loc] === 'X' || this.state.gameBoard === 'O' || this.state.winner) {
      return;
    }

    const currentBoard = this.state.gameBoard;
    currentBoard.splice (loc, 1, this.state.turn);
    this.setState({gameBoard: currentBoard});

    const topRow = this.state.gameBoard[0] + this.state.gameBoard[1] + this.state.gameBoard[2];
      if (topRow.match (/XXX|OOO/)){
        this.setState({winner: this.state.turn});
        return;
      }

    const middleRow = this.state.gameBoard[3] + this.state.gameBoard[4] + this.state.gameBoard[5];
      if (middleRow.match(/XXX|OOO/)){
        this.setState({winner: this.state.turn});
      }

    const bottomRow = this.state.gameBoard[6] + this.state.gameBoard[7] + this.state.gameBoard[8];
      if (bottomRow.match(/XXX|OOO/)){
        this.setState({winner: this.state.turn});
      }

    const leftCol = this.state.gameBoard[0] + this.state.gameBoard[3] + this.state.gameBoard[6];
      if (leftCol.match(/XXX|OOO/)){
        this.setState({winner: this.state.turn});
      }

    const middleCol = this.state.gameBoard[1] + this.state.gameBoard[4] + this.state.gameBoard[7];
      if (middleCol.match(/XXX|OOO/)){
        this.setState({winner: this.state.turn});
      }

    const rightCol = this.state.gameBoard[2] + this.state.gameBoard[5] + this.state.gameBoard[8];
      if (rightCol.match(/XXX|OOO/)){
        this.setState({winner: this.state.turn});
      }

    const leftDiag = this.state.gameBoard[0] + this.state.gameBoard[4] + this.state.gameBoard[8];
      if (leftDiag.match(/XXX|OOO/)){
        this.setState({winner: this.state.turn});
      }

    const rightDiag = this.state.gameBoard[2] + this.state.gameBoard[4] + this.state.gameBoard[6];
      if (rightDiag.match(/XXX|OOO/)){
        this.setState({winner: this.state.turn});
        return;
      }

    const moves = this.state.gameBoard.join('').replace(/ /g, '');
      if (moves.length === 9){
        //this.setState({winner: 'd'});
        alert('No one wins: Reset the board')
      }
      this.setState({turn: (this.state.turn === 'X') ? 'O' : 'X'});
  }


  resetBoard(){
    this.setState({
      gameBoard: [
        ' ', ' ', ' ',
        ' ', ' ', ' ',
        ' ', ' ', ' '
      ],
      turn: 'X',
      winner:null
    })
  }

  render() {
    return (
      <div className="container">
        <div className="menu">
          <h1>Tic-Tac-Toe</h1>
          <Announcement winner={this.state.winner}/>
        </div>
          {this.state.gameBoard.map(function(value, i){
            return(
              <Tile
              key={i}
              loc={i}
              value={value}
              updateBoard={this.updateBoard.bind(this)}
              turn = {this.state.turn}/>
            );
          }.bind(this))}
          <ResetButton reset={this.resetBoard.bind(this)}/>
      </div>
    );
  }
}
      // <div>
      //   <div className="row">
      //     <div data-cell="0">X</div>
      //     <div data-cell="1">O</div>
      //     <div data-cell="2"></div>
      //   </div>
      //   <div className="row">
      //     <div data-cell="3"></div>
      //     <div data-cell="4"></div>
      //     <div data-cell="5"></div>
      //   </div>
      //   <div className="row">
      //     <div data-cell="6"></div>
      //     <div data-cell="7"></div>
      //     <div data-cell="8"></div>
      //   </div>
      // </div>




export default App;
