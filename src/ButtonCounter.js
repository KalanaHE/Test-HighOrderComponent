import React, { Component } from "react";
import WithCounter from "./WithCounter";

class ButtonCounter extends Component {
  render() {
    const { count, increaseCount } = this.props;

    return (
      <div>
        <button onClick={increaseCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default WithCounter(ButtonCounter);
