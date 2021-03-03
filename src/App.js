import React, { Component } from 'react';
import ToDo from './ToDo';

class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    const newValue = this.state.counter + 1;
    this.setState({ counter: newValue });
  }

  decrease = () => {
    const decreased = this.state.counter - 1;
    this.setState({ counter: decreased });
  }

  render() {
    return (
      <div>
        <h1 className="title">Hello World!</h1>
        <h2>This is my first react site!</h2>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>Increase</button>
        <button onClick={this.decrease}>Decrease</button>
        <ToDo />
      </div>
    );
  }
}

export default App;