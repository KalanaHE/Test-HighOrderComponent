import React, { Component } from "react";

const UpdatedComponent = (WrappedComponent) => {
  class WithCounter extends Component {
    state = {
      count: 0,
    };

    increaseCount = () => {
      this.setState((prevState) => ({ count: prevState.count + 1 }));
    };
    render() {
      return (
        <WrappedComponent
          count={this.state.count}
          increaseCount={this.increaseCount}
        />
      );
    }
  }
  return WithCounter;
};

export default UpdatedComponent;
