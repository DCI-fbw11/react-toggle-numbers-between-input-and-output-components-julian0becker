import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    movedNumbers: [],
    buttonStyle: {
      padding: "0.7rem 1rem",
      margin: "0.2rem",
      borderRadius: "50%",
      backgroundColor: "#87CEFA",
      border: "1px solid darkgrey"
    }
  };

  handleNumberMove = number => {
    const button = document.getElementById(number);
    button.disabled = true;
    const movedNumbers = [...this.state.movedNumbers];
    movedNumbers.push(number);
    this.setState({
      movedNumbers: movedNumbers
    });
  };

  handleUndo = movedNumber => {
    const button = document.getElementById(movedNumber);
    button.disabled = false;
    const movedNumbers = [...this.state.movedNumbers];
    let index = movedNumbers.indexOf(movedNumber);
    movedNumbers.splice(index, 1);
    console.log(movedNumbers);
    this.setState({
      movedNumbers: movedNumbers
    });
  };

  render() {
    return (
      <div className="App">
        <Numbers
          numbers={this.state.numbers}
          handleNumberMove={this.handleNumberMove}
          buttonStyle={this.state.buttonStyle}
        />
        <Moved
          buttonStyle={this.state.buttonStyle}
          moved={this.state.movedNumbers}
          handleUndo={this.handleUndo}
        />
      </div>
    );
  }
}

export default App;

const Numbers = props => (
  <div>
    {props.numbers.map(number => (
      <button
        style={props.buttonStyle}
        id={number}
        onClick={() => props.handleNumberMove(number)}
      >
        {number}
      </button>
    ))}
  </div>
);

const Moved = props => (
  <div>
    {props.moved.map(movedNumber => (
      <button
        style={props.buttonStyle}
        id={movedNumber}
        onClick={() => props.handleUndo(movedNumber)}
      >
        {movedNumber}
      </button>
    ))}
  </div>
);
