import './App.css';
import React, { Component } from 'react';
import Button from './Button';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Button />
      </div>
    );
  }
}

export default App;
