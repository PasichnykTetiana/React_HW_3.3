import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onButtonClick = () => {
    console.log(this.state.count);
    if (this.props.name === 'plus') {
      this.setState({
        count: this.state.count + this.props.inc,
      });
    } else {
      this.setState({
        count: this.state.count - this.props.inc,
      });
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.onButtonClick}>{this.props.name}</button>
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default Button;
