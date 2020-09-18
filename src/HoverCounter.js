import React, { Component } from "react";
import WithCounter from "./WithCounter";

class HoverCounter extends Component {
  render() {
    const { count, increaseCount } = this.props;
    return (
      <div>
        <h1 onMouseOver={increaseCount}>Hovered {count} times</h1>
      </div>
    );
  }
}

export default WithCounter(HoverCounter);
