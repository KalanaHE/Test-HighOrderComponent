import React, { Component } from "react";

const UpdatedComponent = (OriginalComponent) => {
  class NewComponent extends Component {
    state = {
      count: 0,
    };

    increaseCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };
    render() {
      return (
        <OriginalComponent
          count={this.state.count}
          increaseCount={this.increaseCount}
        />
      );
    }
  }
  return NewComponent;
};

export default UpdatedComponent;
