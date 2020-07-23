// create a counter component that increments on click on a button
// DIY : add the decrement feature

import React, { Component } from "react";

export default class FullCounter extends Component {
  state = {
    count: 0,
  };

  handleClick = (mode) => {
    var newValue;

    if (mode === "minus") {
      newValue = this.state.count - 1;
    } else {
      newValue = this.state.count + 1;
    }

    this.setState({ count: newValue });
    // setState est l'unique façon de modifier (faire mutate) le state
    // setState est une opération asynchonre (elle prend un callback en param)
    // setState modifie tout ou partie du state du component en cours
  };

  render() {
    return (
      <div>
        <h1 className="title">Good Ol' Counter</h1>
        <p>
          <b>{this.state.count}</b>
          <button onClick={(evt) => this.handleClick("minus")}>-</button>
          <button onClick={(evt) => this.handleClick("plus")}>+</button>
        </p>
      </div>
    );
  }
}
