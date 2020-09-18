import React, { Component } from "react";

class HoverCounter extends Component {
  state = {
    count: 0,
  };

  increaseCount = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  render() {
    return (
      <div>
        <h1 onMouseOver={this.increaseCount}>
          Clicked {this.state.count} times
        </h1>
      </div>
    );
  }
}

export default HoverCounter;
