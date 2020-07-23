import React, { Component } from "react";

export default class UserAddWidget extends Component {
  state = {
    firstname: null,
    lastname: null,
  };

  updateNewUser = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div
        onChange={this.updateNewUser}
        style={{ background: "yellow", padding: "20px" }}
      >
        <input type="text" name="firstname" placeholder="first name" />
        <input type="text" name="lastname" placeholder="first name" />
        <button onClick={() => this.props.callback(this.state)}>+</button>
      </div>
    );
  }
}
