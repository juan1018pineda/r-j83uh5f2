import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.count = this.count.bind(this);
    this.state = {
      text: "",
    };
  }

  count(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div className="container">
        <textarea rows="3" onChange={this.count}></textarea>
        <div className="counter">{this.state.text.length}</div>
      </div>
    );
  }
}

export default App;
