import React, { Component } from "react";

class ButtonCounter extends Component {
  state = {
    count: 0,
  };

  increaseCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.increaseCount}>
          Clicked {this.state.count} times
        </button>
      </div>
    );
  }
}

export default ButtonCounter;
