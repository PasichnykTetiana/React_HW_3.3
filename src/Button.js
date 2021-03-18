import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  onButtonPlus = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  onButtonMinus = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonPlus}>Plus</button>
        <button onClick={this.onButtonMinus}>Minus</button>
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default Button;
