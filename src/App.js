import React from 'react';
import './App.css';
import Field from './Components/Field/Field.js';
import Game from './util/game.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     col: 5,
     row: 3,
     field: []
    };

    this.randomizeField = this.randomizeField.bind(this);
    this.createRows = this.createRows.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.moveBrick = this.moveBrick.bind(this);
  }

  createRows(col, field) {
    let newField = [];
    while(field.length) {
      newField.push(field.splice(0,col))
    };
    
    return newField;
  }

  randomizeField(field) {
    // shuffle field
    for (let i = field.length - 2; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = field[i];
      field[i] = field[j];
      field[j] = temp;
    }

    // convert into 2d array
    const rows = this.createRows(this.state.col, field);
    this.setState({ field: rows });
  }

  handleClick() {
    // fill initial field with numbers
    const numberOfBricks = this.state.row * this.state.col;
    let newField = [];
    for (let i = 1; i < numberOfBricks + 1; i++) {
      newField.push(i);
    }
    this.randomizeField(newField);
  }

  moveBrick(field) {
    this.setState({ field: field });
  }

  render() {
    return (
      <div className="App">
        <div id="header">
          <h1>{this.state.col*this.state.row}-puzzle</h1>
        </div>

        <div className="main">
          <Field values={this.state.field} col={this.state.col} move={this.moveBrick} />
          
          <div className="container">
            <button onClick={this.handleClick}>randomize</button>
          </div>

          {Game.gameWon(this.state.field) ? <h2>You won the game!</h2> : <p>Solve the puzzle!</p>}
        </div>
  
        <footer>
           &copy; 2020 Franziska Nelson
        </footer>
      </div>
    );
  }
  
}

export default App;
