import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onButtonClick = (e) => {
    let val = e.target.getAttribute('id');
    console.log(val);
    if (val === 'plus') {
      this.setState({
        count: this.state.count + 1,
      });
    } else {
      this.setState({
        count: this.state.count - 1,
      });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick} id="minus">
          Минус
        </button>
        <button onClick={this.onButtonClick} id="plus">
          Плюс
        </button>
        <div>Результат: {this.state.count}</div>
      </div>
    );
  }
}

export default Button;
