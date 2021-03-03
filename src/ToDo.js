import React, { Component } from 'react';

class ToDo extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputText: '',
    };
  }

  // anytime they type, update inputText
  handleChange = (e) => {
    this.setState({ inputText: e.target.value });
  }
  // anytime they click, add inputText to todos
  handleClick = () => {
    // this.state.inputText
    const newTodos = [...this.state.todos];
    newTodos.push(this.state.inputText);
    this.setState({ todos: newTodos, inputText: '' });
  }
  
  render() {
    return (
      <div>
        <h1>My ToDo List!</h1>
        <input
          value={this.state.inputText}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Add To List</button>
        <ul>{this.state.todos.map(todo => <li>{todo}</li>)}</ul>
      </div>
    )
  }
}

export default ToDo;