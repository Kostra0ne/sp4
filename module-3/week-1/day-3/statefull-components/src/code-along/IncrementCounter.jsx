import React, { Component } from "react";

export default class IncrementCounter extends Component {
  state = { // state DOIT s'appeller state
    count: 0, // ici vous mettez ce dont vous avez besoin
  };

  increment = () => this.setState({ count: this.state.count + 1 });

  render() {
    const { count } = this.state;
    return (
      <div>
        <h3 className="title">Increment counter: {count}</h3>
        <button onClick={this.increment}>increment</button>
      </div>
    );
  }
}