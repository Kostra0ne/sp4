// create a component that displays a text only if the range value is greater than 5
import React, { Component } from "react";

export default class ToggleDisplay extends Component {
  state = {
    val: 0
  };

  updateState = evt => {
    this.setState({ val: evt.target.value });
  };

  render() {
    const { val } = this.state;
    return (
      <div>
        <input
          type="range"
          min="0"
          value={val}
          max="10"
          step="1"
          onChange={this.updateState}
        />
        {val > 5 && <p>Yata !!!</p>}
      </div>
    );
  }
}


// btn.onclick = (evt) => {}