// todo : un bouton qui, au click, toggle une classe CSS is-active
import React, { Component } from "react";
import "./ButtonToggle.css";

export default class ButtonToggle extends Component {
  state = {
    isActive: false,
  };

  toggleStatus = () => this.setState({ isActive: !this.state.isActive });

  render() {
    const css = this.state.isActive === true ? "btn is-active" : "btn";

    return (
      <button onClick={this.toggleStatus} className={css}>
        {this.props.text}
      </button>
    );
  }
}


